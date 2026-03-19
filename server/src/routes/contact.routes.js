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
  const siteUrl = process.env.CLIENT_ORIGIN || "https://hungryghost.dev";
  const websiteUrl = siteUrl.replace(/^https?:\/\//, "");
  const fromEmail =
    process.env.SMTP_FROM || `"Hungry Ghost DEV" <noreply@hungryghost.dev>`;

  const safeName = clientName?.trim() || "there";

  const autoResponseSubject = "We received your inquiry — Hungry Ghost DEV";

  const autoResponseText = `
Hi ${safeName},

Thanks for reaching out to Hungry Ghost DEV.

Your inquiry is in, and we’ll review the details within 24–48 hours.

What happens next:
1. We’ll review your project details
2. If it looks like a strong fit, we’ll reach out with next steps
3. From there, we’ll discuss scope, timeline, and the right direction for the project

You can view our work here:
${siteUrl}/work

— Hungry Ghost DEV
${websiteUrl}
`.trim();

  const autoResponseHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank you for your inquiry</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet">
</head>
<body style="margin:0; padding:0; background-color:#050505; font-family:'Outfit',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; word-break:break-word;">
  <div style="margin:0; padding:32px 16px; background-color:#050505;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px; margin:0 auto; border-collapse:collapse; background-color:#0B0B0B; border:1px solid #1A1A1A;">
      <tr>
        <td style="padding:40px 24px 36px; text-align:center; background:linear-gradient(180deg, #0D0D0D 0%, #080808 100%); border-bottom:2px solid #6FE7E0;">
          <div style="margin:0; font-size:24px; line-height:1.2; font-weight:800; letter-spacing:2px; color:#F5F5F5;">
            HUNGRY GHOST <span style="color:#6FE7E0;">DEV</span>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:40px 24px 20px; background-color:#0B0B0B;">
          <h1 style="margin:0 0 20px; font-size:20px; line-height:1.35; font-weight:750; color:#F5F5F5;">
            Thanks for reaching out, ${safeName}!
          </h1>

          <p style="margin:0 0 16px; font-size:16px; line-height:1.75; color:#CFCFCF;">
            Your inquiry is in, and we’re looking forward to learning more about your project.
          </p>

          <p style="margin:0; font-size:16px; line-height:1.75; color:#AFAFAF;">
            Every inquiry is reviewed personally. You can expect a follow-up within 24–48 hours.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding:12px 24px 8px; background-color:#0B0B0B;">
          <div style="background-color:#101114; border:1px solid #1A1C20; border-radius:16px; padding:28px 20px;">
            <div style="margin:0 0 18px; font-size:13px; line-height:1.2; font-weight:800; letter-spacing:1.6px; text-transform:uppercase; color:#6FE7E0;">
              What Happens Next
            </div>

            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
              <tr>
                <td valign="top" style="width:40px; padding:0 0 16px;">
                  <div style="width:28px; height:28px; border-radius:999px; background-color:#6FE7E0; color:#050505; font-size:13px; line-height:28px; text-align:center; font-weight:800;">
                    1
                  </div>
                </td>
                <td valign="top" style="padding:2px 0 16px; font-size:15px; line-height:1.65; color:#D8D8D8;">
                  We’ll review your project details and determine the best next step.
                </td>
              </tr>

              <tr>
                <td valign="top" style="width:40px; padding:0 0 16px;">
                  <div style="width:28px; height:28px; border-radius:999px; background-color:#6FE7E0; color:#050505; font-size:13px; line-height:28px; text-align:center; font-weight:800;">
                    2
                  </div>
                </td>
                <td valign="top" style="padding:2px 0 16px; font-size:15px; line-height:1.65; color:#D8D8D8;">
                  If it looks like a strong fit, we’ll reach out with next steps and scheduling.
                </td>
              </tr>

              <tr>
                <td valign="top" style="width:40px; padding:0;">
                  <div style="width:28px; height:28px; border-radius:999px; background-color:#6FE7E0; color:#050505; font-size:13px; line-height:28px; text-align:center; font-weight:800;">
                    3
                  </div>
                </td>
                <td valign="top" style="padding:2px 0 0; font-size:15px; line-height:1.65; color:#D8D8D8;">
                  From there, we’ll discuss scope, timeline, and the right direction for the project.
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding:28px 24px 40px; background-color:#0B0B0B;">
          <a
            href="${siteUrl}/work"
            target="_blank"
            rel="noopener noreferrer"
            style="display:inline-block; padding:14px 22px; border-radius:12px; background-color:#6FE7E0; border:1px solid #6FE7E0; color:#050505 !important; font-size:14px; font-weight:800; line-height:1; text-decoration:none;"
          >
            View Our Work
          </a>
        </td>
      </tr>

      <tr>
        <td style="padding:24px; text-align:center; border-top:1px solid #1A1A1A; background-color:#080808;">
          <p style="margin:0 0 12px; font-size:13px; line-height:1.6; color:#8C8C8C;">
            — Hungry Ghost DEV
          </p>
          <p style="margin:0; font-size:13px; line-height:1.6;">
            <a
              href="${siteUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="color:#6FE7E0; text-decoration:none;"
            >
              ${websiteUrl}
            </a>
          </p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
`.trim();

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
      from: process.env.SMTP_FROM || `"Hungry Ghost DEV" <${process.env.SMTP_USER || 'noreply@hungryghost.dev'}>`,
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

