import dotenv from "dotenv";
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

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

app.listen(PORT, () => {
    console.log(`
  🚀 Hungry Ghost DZN API
  ➜ Environment: ${process.env.NODE_ENV || "development"}
  ➜ Running on: http://localhost:${PORT}
  `);
});