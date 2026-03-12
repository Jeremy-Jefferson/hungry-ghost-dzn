import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Simple in-memory rate limiter (5 requests per IP per minute)
const rateLimitMap = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

const checkRateLimit = (ip) => {
    const now = Date.now();
    const record = rateLimitMap.get(ip);
    
    if (!record) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
        return true;
    }
    
    if (now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
        return true;
    }
    
    if (record.count >= RATE_LIMIT) {
        return false;
    }
    
    record.count++;
    return true;
};

// Cleanup old entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [ip, record] of rateLimitMap.entries()) {
        if (now > record.resetTime) {
            rateLimitMap.delete(ip);
        }
    }
}, RATE_WINDOW_MS);

// In a production environment, create a real transporter that sends emails.
const createProdTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
};

// In a development environment, use a mock transporter that can simulate success or failure.
// This allows for testing the frontend's response to server-side issues without a full email setup.
// To trigger a simulated error, the frontend can add `?simulate=error` to the request URL.
const createDevTransporter = (req) => {
    const shouldFail = req.query.simulate === "error";

    return {
        sendMail: (options) => {
            return new Promise((resolve, reject) => {
                if (shouldFail) {
                    reject(new Error("Simulated email sending failure."));
                } else {
                    resolve({ messageId: "dev-" + Date.now() });
                }
            });
        }
    };
};

// Validate email format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/* ---------------------------
   Contact Form Submission
---------------------------- */

router.post("/contact", async (req, res) => {
    // Rate limiting check
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
    if (!checkRateLimit(clientIp)) {
        return res.status(429).json({
            success: false,
            error: "Too many requests. Please try again later."
        });
    }

    // Use real transporter if SMTP credentials are configured, otherwise use mock
    const hasSmtpCredentials = process.env.SMTP_USER && process.env.SMTP_PASS;
    const transporter = hasSmtpCredentials
        ? createProdTransporter()
        : createDevTransporter(req);

    try {
        const { name, email, service, message } = req.body;

        // Validate required fields
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields: name, email, and message are required"
            });
        }

        // Validate field lengths to prevent abuse
        if (name.length > 100 || email.length > 254 || message.length > 5000) {
            return res.status(400).json({
                success: false,
                error: "Field length exceeds maximum allowed"
            });
        }

        // Validate service is one of allowed values
        const allowedServices = ["", "brand-system-identity", "ui-ux-design", "web-development", "brand-website", "not-sure"];
        if (service && !allowedServices.includes(service)) {
            return res.status(400).json({
                success: false,
                error: "Invalid service selection"
            });
        }

        // Validate email format
        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                error: "Invalid email address"
            });
        }

        // Format the service type for display
        const serviceLabels = {
            "brand-system-identity": "Brand System / Identity",
            "ui-ux-design": "UI/UX Design",
            "web-development": "Web Development",
            "brand-website": "Brand + Website",
            "not-sure": "Not sure yet"
        };
        const serviceDisplay = serviceLabels[service] || service || "Not specified";

        // Create formatted email content
        const emailSubject = `New Inquiry from Book/Contact Page`;

        const emailText = `
New Project Inquiry

==============================
CONTACT INFORMATION
==============================
Name: ${name}
Email: ${email}
Service Interest: ${serviceDisplay}

==============================
MESSAGE
==============================
${message}

==============================
SUBMITTED: ${new Date().toLocaleString()}
==============================
        `.trim();

        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .value { font-size: 16px; }
        .message-box { background: white; padding: 15px; border-radius: 4px; border-left: 3px solid #00a8a8; }
        .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">📬 New Project Inquiry</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
                <div class="label">Service Interest</div>
                <div class="value">${serviceDisplay}</div>
            </div>
            <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
        </div>
        <div class="footer">
            Submitted: ${new Date().toLocaleString()}
        </div>
    </div>
</body>
</html>
        `.trim();

        // Send email
        const recipientEmail = process.env.CONTACT_EMAIL || "therealhungryghost@gmail.com";

        const info = await transporter.sendMail({
            from: process.env.SMTP_FROM || `"Hungry Ghost DZN" <${process.env.SMTP_USER || 'noreply@hungryghost.design'}>`,
            to: recipientEmail,
            replyTo: email,
            subject: emailSubject,
            text: emailText,
            html: emailHtml,
        });

        res.setHeader("Content-Type", "application/json");
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
            messageId: info.messageId
        });

    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({
            success: false,
            error: "Failed to send message. Please try again later."
        });
    }
});
export default router;

