import dotenv from "dotenv";
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import * as Sentry from "@sentry/node";
import contactRoutes from "./routes/contact.routes.js";

// Initialize Sentry if DSN is provided
if (process.env.SENTRY_DSN) {
    Sentry.init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV,
        integrations: [
            Sentry.httpIntegration(),
        ],
        // Performance monitoring
        tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
    });
}

const app = express();

/* ---------------------------
   Security Headers (Helmet)
---------------------------- */

// Configure helmet with custom settings
const helmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https:"],
      frameAncestors: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
};

app.use(helmet(helmetOptions));

/* ---------------------------
   Custom Security Headers
---------------------------- */

app.use((req, res, next) => {
    // X-Content-Type-Options
    res.setHeader("X-Content-Type-Options", "nosniff");
    
    // X-Frame-Options
    res.setHeader("X-Frame-Options", "DENY");
    
    // X-XSS-Protection (legacy but still useful)
    res.setHeader("X-XSS-Protection", "1; mode=block");
    
    // Referrer Policy
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    
    // Permissions Policy
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    
    next();
});

/* ---------------------------
   Compression
---------------------------- */

app.use(compression());

/* ---------------------------
   Request Logging (Morgan)
---------------------------- */

// Log requests in production, more detailed logs in development
if (process.env.NODE_ENV === "production") {
    app.use(morgan("combined"));
} else {
    app.use(morgan("dev"));
}

/* ---------------------------
   Core Middleware
---------------------------- */

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
        credentials: true
    })
);

app.use(express.json({ limit: "1mb" }));

/* ---------------------------
   Health Check
---------------------------- */

app.get("/api/health", (req, res) => {
    res.json({
        ok: true,
        service: "hungry-ghost-dzn-api",
        environment: process.env.NODE_ENV || "development",
        time: new Date().toISOString()
    });
});

/* ---------------------------
   API Routes
---------------------------- */

app.use("/api", contactRoutes);

/* ---------------------------
   404 Handler (API Only)
---------------------------- */

app.use("/api/*", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(404).json({
        success: false,
        error: "API route not found"
    });
});

/* ---------------------------
   Global Error Handler
---------------------------- */

app.use((err, req, res, next) => {
    // Log to Sentry if available
    if (process.env.SENTRY_DSN) {
        Sentry.captureException(err);
    }
    
    // Log the error for debugging
    console.error(`[ERROR] ${err.message}`, {
        method: req.method,
        path: req.path,
        stack: process.env.NODE_ENV !== "production" ? err.stack : undefined
    });
    
    res.setHeader("Content-Type", "application/json");
    res.status(err.status || 500).json({
        success: false,
        error: err.message || "Internal Server Error"
    });
});

/* ---------------------------
   Server Boot
---------------------------- */

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`
  🚀 Hungry Ghost DZN API
  ➜ Environment: ${process.env.NODE_ENV || "development"}
  ➜ Running on: http://localhost:${PORT}
  `);
});

/* ---------------------------
   Graceful Shutdown
---------------------------- */

const gracefulShutdown = (signal) => {
    console.log(`\n${signal} received. Starting graceful shutdown...`);
    
    server.close((err) => {
        if (err) {
            console.error("Error during shutdown:", err);
            process.exit(1);
        }
        
        console.log("HTTP server closed. Shutting down gracefully.");
        process.exit(0);
    });
    
    // Force shutdown after 30 seconds if graceful shutdown fails
    setTimeout(() => {
        console.error("Forced shutdown after timeout.");
        process.exit(1);
    }, 30000);
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));