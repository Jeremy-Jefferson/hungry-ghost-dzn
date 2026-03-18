import nodemailer from "nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

// Create rate limiter (simple in-memory for serverless)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5;

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
  
  record.count++;
  return true;
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input to prevent XSS
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export default async function handler(req, res) {
  // Set CORS headers
  const clientOrigin = process.env.CLIENT_ORIGIN || 'https://hungryghost.dev';
  res.setHeader('Access-Control-Allow-Origin', clientOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  // Rate limiting
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.'
    });
  }

  try {
    // Parse body
    let body = '';
    for await (const chunk of req) {
      body += chunk;
    }
    
    const { name, email, company, website, service, budget, timeline, message } = JSON.parse(body);

    // Validate required fields
    if (!name || !email || !company || !website || !service || !budget || !timeline || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, company, website, service, budget, timeline, and message are required'
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedCompany = sanitizeInput(company || '');
    const sanitizedWebsite = sanitizeInput(website || '');
    const sanitizedMessage = sanitizeInput(message);

    // Validate field lengths
    if (name.length > 100 || email.length > 254 || (company && company.length > 200) || (website && website.length > 300) || message.length > 5000) {
      return res.status(400).json({
        success: false,
        error: 'Field length exceeds maximum allowed'
      });
    }

    // Validate service
    const allowedServices = ['', 'brand-system-identity', 'ui-ux-design', 'web-development', 'brand-website', 'ongoing-support', 'not-sure'];
    if (service && !allowedServices.includes(service)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid service selection'
      });
    }

    // Validate budget
    const allowedBudgets = ['', 'under-1k', '1k-3k', '3k-7k', '7k-plus', 'not-sure'];
    if (budget && !allowedBudgets.includes(budget)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid budget selection'
      });
    }

    // Validate timeline
    const allowedTimelines = ['', 'asap', '2-4-weeks', '1-2-months', 'flexible'];
    if (timeline && !allowedTimelines.includes(timeline)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid timeline selection'
      });
    }

    // Validate email
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address'
      });
    }

    // Format the service type for display
    const serviceLabels = {
      'brand-system-identity': 'Brand System / Identity',
      'ui-ux-design': 'UI/UX Design',
      'web-development': 'Web Development',
      'brand-website': 'Brand + Website',
      'ongoing-support': 'Ongoing Design / Dev Support',
      'not-sure': 'Not sure yet'
    };
    const serviceDisplay = serviceLabels[service] || service || 'Not specified';

    // Format budget for display
    const budgetLabels = {
      'under-1k': 'Under $1,000',
      '1k-3k': '$1,000 – $3,000',
      '3k-7k': '$3,000 – $7,000',
      '7k-plus': '$7,000+',
      'not-sure': 'Not sure yet'
    };
    const budgetDisplay = budgetLabels[budget] || budget || 'Not specified';

    // Format timeline for display
    const timelineLabels = {
      'asap': 'ASAP',
      '2-4-weeks': '2–4 weeks',
      '1-2-months': '1–2 months',
      'flexible': 'Flexible'
    };
    const timelineDisplay = timelineLabels[timeline] || timeline || 'Not specified';

    // Create transporter
    const hasSmtpCredentials = process.env.SMTP_USER && process.env.SMTP_PASS;
    
    if (!hasSmtpCredentials) {
      // Mock response for development without SMTP
      console.log('Mock email sent:', { name: sanitizedName, email: sanitizedEmail, service: serviceDisplay });
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully (mock)',
        messageId: 'mock-' + Date.now()
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Create email content
    const emailText = `
New Project Inquiry

==============================
CONTACT INFORMATION
==============================
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Company/Brand: ${sanitizedCompany}
Website: ${sanitizedWebsite}
Service Interest: ${serviceDisplay}
Budget Range: ${budgetDisplay}
Timeline: ${timelineDisplay}

==============================
MESSAGE
==============================
${sanitizedMessage}

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
                <div class="value">${sanitizedName}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
            </div>
            <div class="field">
                <div class="label">Company/Brand</div>
                <div class="value">${sanitizedCompany}</div>
            </div>
            <div class="field">
                <div class="label">Website</div>
                <div class="value"><a href="${sanitizedWebsite}">${sanitizedWebsite}</a></div>
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
                <div class="message-box">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
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
    const recipientEmail = process.env.CONTACT_EMAIL || 'therealhungryghost@gmail.com';
    
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Hungry Ghost DZN" <${process.env.SMTP_USER || 'noreply@hungryghost.design'}>`,
      to: recipientEmail,
      replyTo: sanitizedEmail,
      subject: 'New Inquiry from Book/Contact Page',
      text: emailText,
      html: emailHtml,
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
}
