import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Simple in-memory rate limiter
// Note: In serverless environments this is best-effort only.
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5;

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket?.remoteAddress || "unknown";
};

const checkRateLimit = (ip) => {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { timestamp: now, count: 1 });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count += 1;
  return true;
};

const isValidEmail = (email) => {
  if (typeof email !== "string") return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

const isValidWebsite = (url) => {
  if (typeof url !== "string" || !url.trim()) return false;

  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
};

const escapeHtml = (input) => {
  if (typeof input !== "string") return "";
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};

const normalizeString = (value) => {
  return typeof value === "string" ? value.trim() : "";
};

const readRequestBody = async (req) => {
  let body = "";
  for await (const chunk of req) {
    body += chunk;
  }
  return body;
};

export default async function handler(req, res) {
  const clientOrigin = process.env.CLIENT_ORIGIN || "https://hungryghost.dev";

  res.setHeader("Access-Control-Allow-Origin", clientOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      error: "Method not allowed",
    });
  }

  const clientIp = getClientIp(req);

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: "Too many requests. Please try again later.",
    });
  }

  try {
    const rawBody = await readRequestBody(req);

    let parsedBody;
    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      return res.status(400).json({
        success: false,
        error: "Invalid JSON payload",
      });
    }

    const name = normalizeString(parsedBody.name);
    const email = normalizeString(parsedBody.email);
    const company = normalizeString(parsedBody.company);
    const website = normalizeString(parsedBody.website);
    const service = normalizeString(parsedBody.service);
    const budget = normalizeString(parsedBody.budget);
    const timeline = normalizeString(parsedBody.timeline);
    const message = normalizeString(parsedBody.message);

    // Required: name, email, service, budget, timeline, message
    // Optional: company, website
    if (!name || !email || !service || !budget || !timeline || !message) {
      return res.status(400).json({
        success: false,
        error:
          "Missing required fields: name, email, service, budget, timeline, and message are required",
      });
    }

    if (
      name.length > 100 ||
      email.length > 254 ||
      company.length > 200 ||
      website.length > 300 ||
      message.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        error: "Field length exceeds maximum allowed",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email address",
      });
    }

    if (website && !isValidWebsite(website)) {
      return res.status(400).json({
        success: false,
        error: "Invalid website URL. Please include http:// or https://",
      });
    }

    const allowedServices = [
      "brand-system-identity",
      "ui-ux-design",
      "web-development",
      "brand-website",
      "ongoing-support",
      "not-sure",
    ];

    if (!allowedServices.includes(service)) {
      return res.status(400).json({
        success: false,
        error: "Invalid service selection",
      });
    }

    const allowedBudgets = [
      "under-1k",
      "1k-3k",
      "3k-7k",
      "7k-plus",
      "not-sure",
    ];

    if (!allowedBudgets.includes(budget)) {
      return res.status(400).json({
        success: false,
        error: "Invalid budget selection",
      });
    }

    const allowedTimelines = [
      "asap",
      "2-4-weeks",
      "1-2-months",
      "flexible",
    ];

    if (!allowedTimelines.includes(timeline)) {
      return res.status(400).json({
        success: false,
        error: "Invalid timeline selection",
      });
    }

    const sanitizedName = escapeHtml(name);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedCompany = escapeHtml(company || "Not provided");
    const sanitizedWebsite = escapeHtml(website || "Not provided");
    const sanitizedMessage = escapeHtml(message);

    const serviceLabels = {
      "brand-system-identity": "Brand System / Identity",
      "ui-ux-design": "UI/UX Design",
      "web-development": "Web Development",
      "brand-website": "Brand + Website",
      "ongoing-support": "Ongoing Design / Dev Support",
      "not-sure": "Not sure yet",
    };

    const budgetLabels = {
      "under-1k": "Under $1,000",
      "1k-3k": "$1,000 – $3,000",
      "3k-7k": "$3,000 – $7,000",
      "7k-plus": "$7,000+",
      "not-sure": "Not sure yet",
    };

    const timelineLabels = {
      asap: "ASAP",
      "2-4-weeks": "2–4 weeks",
      "1-2-months": "1–2 months",
      flexible: "Flexible",
    };

    const serviceDisplay = serviceLabels[service] || "Not specified";
    const budgetDisplay = budgetLabels[budget] || "Not specified";
    const timelineDisplay = timelineLabels[timeline] || "Not specified";

    const hasSmtpCredentials =
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS;

    if (!hasSmtpCredentials) {
      console.log("Mock email sent:", {
        name,
        email,
        company,
        website,
        service: serviceDisplay,
        budget: budgetDisplay,
        timeline: timelineDisplay,
      });

      return res.status(200).json({
        success: true,
        message: "Message sent successfully (mock)",
        messageId: `mock-${Date.now()}`,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const submittedAt = new Date().toLocaleString();

    const emailText = `
New Project Inquiry

==============================
CONTACT INFORMATION
==============================
Name: ${name}
Email: ${email}
Company/Brand: ${company || "Not provided"}
Website: ${website || "Not provided"}
Service Interest: ${serviceDisplay}
Budget Range: ${budgetDisplay}
Timeline: ${timelineDisplay}

==============================
MESSAGE
==============================
${message}

==============================
SUBMITTED: ${submittedAt}
==============================
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Project Inquiry</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f2f2f2;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 640px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
    .header {
      background: #111111;
      color: #ffffff;
      padding: 24px;
    }
    .header h2 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 24px;
    }
    .field {
      margin-bottom: 18px;
    }
    .label {
      font-weight: 700;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 4px;
    }
    .value {
      font-size: 16px;
      color: #222;
      word-break: break-word;
    }
    .message-box {
      background: #fafafa;
      border-left: 4px solid #00a8a8;
      padding: 16px;
      border-radius: 6px;
      white-space: normal;
    }
    .footer {
      padding: 20px 24px 24px;
      color: #777;
      font-size: 12px;
    }
    a {
      color: #0077cc;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📬 New Project Inquiry</h2>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${sanitizedName}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value">
          <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a>
        </div>
      </div>
      <div class="field">
        <div class="label">Company / Brand</div>
        <div class="value">${sanitizedCompany}</div>
      </div>
      <div class="field">
        <div class="label">Website</div>
        <div class="value">${
          website
            ? `<a href="${escapeHtml(website)}" target="_blank" rel="noopener noreferrer">${sanitizedWebsite}</a>`
            : sanitizedWebsite
        }</div>
      </div>
      <div class="field">
        <div class="label">Service Interest</div>
        <div class="value">${escapeHtml(serviceDisplay)}</div>
      </div>
      <div class="field">
        <div class="label">Budget Range</div>
        <div class="value">${escapeHtml(budgetDisplay)}</div>
      </div>
      <div class="field">
        <div class="label">Timeline</div>
        <div class="value">${escapeHtml(timelineDisplay)}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${sanitizedMessage.replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      Submitted: ${escapeHtml(submittedAt)}
    </div>
  </div>
</body>
</html>
    `.trim();

    const recipientEmail =
      process.env.CONTACT_EMAIL || "therealhungryghost@gmail.com";

    const info = await transporter.sendMail({
      from:
        process.env.SMTP_FROM ||
        `"Hungry Ghost DEV" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: "New Inquiry from Book/Contact Page",
      text: emailText,
      html: emailHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
}