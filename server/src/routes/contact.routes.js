import express from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Create rate limiter for contact form
const contactRateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // 5 requests per minute per IP
  message: {
    success: false,
    error: "Too many requests. Please try again later."
  },
  standardHeaders: true,
  legacyHeaders: false,
  trustProxy: true,
});

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

// Send auto-response email to client
const sendAutoResponse = async (transporter, clientEmail, clientName) => {
    const fromEmail = process.env.SMTP_FROM || `"Hungry Ghost DEV" <noreply@hungryghost.design}>`;
    const websiteUrl = process.env.CLIENT_ORIGIN?.replace(/^https?:\/\//, '') || 'hungryghost.design';

    const autoResponseSubject = `We received your inquiry – Hungry Ghost DEV`;

    const autoResponseText = `Hi ${clientName},

Thank you for reaching out to Hungry Ghost DEV!

We've received your message and we're reviewing your project details. Here's what happens next:

1. We'll review your inquiry within 24-48 hours
2. If it's a good fit, we'll reach out to schedule a discovery call
3. From there, we'll discuss your project scope and timeline

In the meantime, feel free to learn more about our work:
${process.env.CLIENT_ORIGIN || 'https://hungryghost.design'}/work

Looking forward to potentially working together!

— The Hungry Ghost DEV Team

---
Hungry Ghost DEV
${websiteUrl}`
    .trim();

    const autoResponseHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for your inquiry</title>
    <style>
        body { 
            margin: 0; 
            padding: 0; 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background-color: #0a0a0a;
            line-height: 1.6;
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background-color: #0a0a0a;
        }
        .header { 
            background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); 
            padding: 40px 30px; 
            text-align: center;
            border-bottom: 2px solid #00a8a8;
        }
        .logo { 
            font-size: 28px; 
            font-weight: 700; 
            color: #ffffff;
            letter-spacing: 2px;
        }
        .logo-accent {
            color: #00a8a8;
        }
        .content { 
            padding: 40px 30px; 
            background-color: #111111;
        }
        .greeting {
            color: #ffffff;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .message {
            color: #b0b0b0;
            font-size: 16px;
            margin-bottom: 25px;
        }
        .steps {
            background: #1a1a1a;
            border-radius: 8px;
            padding: 25px;
            margin: 30px 0;
        }
        .steps-title {
            color: #00a8a8;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }
        .step {
            display: flex;
            align-items: flex-start;
            margin-bottom: 15px;
            color: #e0e0e0;
        }
        .step-number {
            background: #00a8a8;
            color: #0a0a0a;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: 700;
            margin-right: 12px;
            flex-shrink: 0;
        }
        .step-text {
            font-size: 14px;
        }
        .cta-button {
            display: inline-block;
            background-color: #00a8a8;
            color: #0a0a0a;
            padding: 14px 28px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            margin-top: 20px;
            transition: background-color 0.2s ease;
        }
        .cta-button:hover {
            background-color: #00c4c4;
        }
        .footer { 
            text-align: center; 
            padding: 30px;
            color: #666666;
            font-size: 12px;
            border-top: 1px solid #222222;
        }
        .footer-link {
            color: #00a8a8;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">HUNGRY <span class="logo-accent">GHOST</span> DEV</div>
        </div>
        <div class="content">
            <div class="greeting">Thanks for reaching out, ${clientName}!</div>
            <div class="message">
                We've received your message and we're excited to learn more about your project. Our team reviews every inquiry personally, so you'll hear back from us within 24-48 hours.
            </div>
            
            <div class="steps">
                <div class="steps-title">What happens next</div>
                <div class="step">
                    <span class="step-number">1</span>
                    <span class="step-text">We'll review your project details and determine if we're a good fit</span>
                </div>
                <div class="step">
                    <span class="step-number">2</span>
                    <span class="step-text">If it's a match, we'll reach out to schedule a discovery call</span>
                </div>
                <div class="step">
                    <span class="step-number">3</span>
                    <span class="step-text">We'll discuss your vision, scope, and timeline</span>
                </div>
            </div>

            <a href="${process.env.CLIENT_ORIGIN || 'https://hungryghost.design'}/work" class="cta-button">
                View Our Work
            </a>
        </div>
        <div class="footer">
            <p>— The Hungry Ghost DEV Team</p>
            <p>
                <a href="${process.env.CLIENT_ORIGIN || 'https://hungryghost.design'}" class="footer-link">hungryghost.design</a>
            </p>
        </div>
    </div>
</body>
</html>`.trim();

    await transporter.sendMail({
        from: fromEmail,
        to: clientEmail,
        subject: autoResponseSubject,
        text: autoResponseText,
        html: autoResponseHtml,
    });
};

/* ---------------------------
   Contact Form Submission
---------------------------- */

router.post("/contact", contactRateLimiter, async (req, res) => {
    // Rate limiting is now handled by express-rate-limit middleware
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';

    // Use real transporter if SMTP credentials are configured, otherwise use mock
    const hasSmtpCredentials = process.env.SMTP_USER && process.env.SMTP_PASS;
    const transporter = hasSmtpCredentials
        ? createProdTransporter()
        : createDevTransporter(req);

    try {
        const { name, email, company, website, service, budget, timeline, message } = req.body;

        // Validate required fields
        if (!name || !email || !company || !website || !service || !budget || !timeline || !message) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields: name, email, company, website, service, budget, timeline, and message are required"
            });
        }

        // Sanitize inputs to prevent XSS
        const sanitizeInput = (input) => {
            if (typeof input !== 'string') return '';
            return input
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#x27;')
                .replace(/\//g, '&#x2F;');
        };

        const sanitizedName = sanitizeInput(name);
        const sanitizedEmail = sanitizeInput(email);
        const sanitizedCompany = sanitizeInput(company || '');
        const sanitizedWebsite = sanitizeInput(website || '');
        const sanitizedMessage = sanitizeInput(message);

        // Validate field lengths to prevent abuse
        if (name.length > 100 || email.length > 254 || (company && company.length > 200) || (website && website.length > 300) || message.length > 5000) {
            return res.status(400).json({
                success: false,
                error: "Field length exceeds maximum allowed"
            });
        }

        // Validate service is one of allowed values
        const allowedServices = ["", "brand-system-identity", "ui-ux-design", "web-development", "brand-website", "ongoing-support", "not-sure"];
        if (service && !allowedServices.includes(service)) {
            return res.status(400).json({
                success: false,
                error: "Invalid service selection"
            });
        }

        // Validate budget is one of allowed values
        const allowedBudgets = ["", "under-1k", "1k-3k", "3k-7k", "7k-plus", "not-sure"];
        if (budget && !allowedBudgets.includes(budget)) {
            return res.status(400).json({
                success: false,
                error: "Invalid budget selection"
            });
        }

        // Validate timeline is one of allowed values
        const allowedTimelines = ["", "asap", "2-4-weeks", "1-2-months", "flexible"];
        if (timeline && !allowedTimelines.includes(timeline)) {
            return res.status(400).json({
                success: false,
                error: "Invalid timeline selection"
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
            "ongoing-support": "Ongoing Design / Dev Support",
            "not-sure": "Not sure yet"
        };
        const serviceDisplay = serviceLabels[service] || service || "Not specified";

        // Format budget for display
        const budgetLabels = {
            "under-1k": "Under $1,000",
            "1k-3k": "$1,000 – $3,000",
            "3k-7k": "$3,000 – $7,000",
            "7k-plus": "$7,000+",
            "not-sure": "Not sure yet"
        };
        const budgetDisplay = budgetLabels[budget] || budget || "Not specified";

        // Format timeline for display
        const timelineLabels = {
            "asap": "ASAP",
            "2-4-weeks": "2–4 weeks",
            "1-2-months": "1–2 months",
            "flexible": "Flexible"
        };
        const timelineDisplay = timelineLabels[timeline] || timeline || "Not specified";

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
                <div class="label">Company/Brand</div>
                <div class="value">${company}</div>
            </div>
            <div class="field">
                <div class="label">Website</div>
                <div class="value"><a href="${website}">${website}</a></div>
            </div>
            <div class="field">
                <div class="label">Service Interest</div>
                <div class="value">${serviceDisplay}</div>
            </div>
            <div class="field">
                <div class="label">Budget Range</div>
                <div class="value">${budgetDisplay}</div>
            </div>
            <div class="field">
                <div class="label">Timeline</div>
                <div class="value">${timelineDisplay}</div>
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

        // Send auto-response email to client
        try {
            await sendAutoResponse(transporter, sanitizedEmail, sanitizedName);
        } catch (autoResponseError) {
            // Log but don't fail the request if auto-response fails
            console.error("Auto-response email error:", autoResponseError);
        }

        res.setHeader("Content-Type", "application/json");
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
            messageId: info.messageId
        });

    } catch (error) {
        console.error("Contact form error:", error);
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({
            success: false,
            error: "Failed to send message. Please try again later."
        });
    }
});
export default router;

