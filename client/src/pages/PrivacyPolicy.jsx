import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: '900',
          marginBottom: '16px',
          fontFamily: 'Brandon Grotesque, sans-serif'
        }}>
          Privacy Policy
        </h1>
        
        <p style={{ 
          color: 'var(--text-muted)', 
          marginBottom: '48px',
          fontSize: '1.1rem'
        }}>
          Last updated: {currentYear}
        </p>

        <div style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              1. Introduction
            </h2>
            <p>
              Hungry Ghost DEV ("we," "our," or "us") operates the website hungryghost.dev. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Contact us through our contact form</li>
              <li>Request a quote for services</li>
              <li>Subscribe to our newsletter</li>
              <li>Interact with our website</li>
            </ul>
            <p>
              The personal information that we collect may include your name, email address, 
              phone number, and any other information you choose to provide.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              3. How We Use Your Information
            </h2>
            <p style={{ marginBottom: '12px' }}>
              We use the information we collect to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Respond to your inquiries and requests</li>
              <li>Provide and improve our services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              4. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website 
              and hold certain information. Cookies are files with a small amount of data that 
              may include an anonymous unique identifier.
            </p>
            <p style={{ marginTop: '12px' }}>
              You can instruct your browser to refuse all cookies or to indicate when a cookie 
              is being sent. However, if you do not accept cookies, you may not be able to use 
              some portions of our website.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              5. Third-Party Services
            </h2>
            <p>
              We may use third-party service providers to help us operate our business and the 
              website or to administer activities on our behalf, such as analytics and email 
              hosting. These third parties may have access to your personal information only 
              to perform these tasks on our behalf.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security measures to protect 
              your personal information. However, no method of transmission over the Internet or 
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              7. Your Rights
            </h2>
            <p style={{ marginBottom: '12px' }}>
              You have the right to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Request transfer of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:therealhungryghost@gmail.com" style={{ color: 'var(--accent-primary)' }}>
                therealhungryghost@gmail.com
              </a>
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              8. Children's Privacy
            </h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not 
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              9. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "last 
              updated" date at the top of this policy.
            </p>
          </section>

          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              10. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:therealhungryghost@gmail.com" style={{ color: 'var(--accent-primary)' }}>
                therealhungryghost@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div style={{ 
          marginTop: '48px', 
          paddingTop: '24px', 
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <Link 
            to="/"
            style={{ 
              color: 'var(--accent-primary)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            ← Back to Home
          </Link>
          <Link 
            to="/terms"
            style={{ 
              color: 'var(--accent-primary)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
