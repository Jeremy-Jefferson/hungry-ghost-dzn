import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "hungryghost_cookie_consent";
const CONSENT_EXPIRY_DAYS = 365;

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to not show immediately on page load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        accepted: true,
        timestamp: new Date().toISOString(),
        version: "1.0"
      })
    );
    setIsVisible(false);
    setHasInteracted(true);
  };

  const handleDecline = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({
        accepted: false,
        timestamp: new Date().toISOString(),
        version: "1.0"
      })
    );
    setIsVisible(false);
    setHasInteracted(true);
  };

  // Don't render if user has already interacted
  if (hasInteracted) return null;

  return (
    <>
      {isVisible && (
        <div
          className="cookie-consent"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "var(--bg-primary)",
            borderTop: "1px solid var(--border-color)",
            padding: "24px",
            zIndex: 9999,
            transform: "translateY(0)",
            animation: "slideUp 0.5s ease-out",
            boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)"
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap"
            }}
          >
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h3
                id="cookie-title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  marginBottom: "8px",
                  fontFamily: "Brandon Grotesque, sans-serif",
                  color: "var(--text-primary)"
                }}
              >
                🍪 We use cookies
              </h3>
              <p
                id="cookie-description"
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
                <Link
                  to="/privacy"
                  style={{
                    color: "var(--accent-primary)",
                    textDecoration: "underline"
                  }}
                >
                  Read our Privacy Policy
                </Link>
              </p>
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                alignItems: "center"
              }}
            >
              <button
                onClick={handleDecline}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "transparent",
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "Brandon Grotesque, sans-serif"
                }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = "var(--accent-primary)";
                  e.target.style.color = "var(--accent-primary)";
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = "var(--border-color)";
                  e.target.style.color = "var(--text-primary)";
                }}
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "var(--accent-primary)",
                  border: "none",
                  borderRadius: "4px",
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "Brandon Grotesque, sans-serif"
                }}
                onMouseOver={(e) => {
                  e.target.style.opacity = "0.9";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.opacity = "1";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @media (min-width: 768px) {
          .cookie-consent > div {
            flex-direction: row !important;
            align-items: center !important;
          }
        }
      `}</style>
    </>
  );
}

// Helper function to check if cookies are accepted
export function hasCookieConsent() {
  if (typeof window === "undefined") return false;
  
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!consent) return false;
  
  try {
    const parsed = JSON.parse(consent);
    return parsed.accepted === true;
  } catch {
    return false;
  }
}
