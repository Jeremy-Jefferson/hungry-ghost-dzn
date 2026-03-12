import { useLocation } from "react-router-dom";

/**
 * JSON-LD Structured Data for SEO
 * Implements Organization, WebSite, and LocalBusiness schemas
 */
export default function StructuredData() {
  const location = useLocation();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Schema
      {
        "@type": "Organization",
        "@id": "https://hungryghost.dev/#organization",
        "name": "Hungry Ghost DZN",
        "alternateName": "Hungry Ghost DEV",
        "url": "https://hungryghost.dev",
        "logo": "https://hungryghost.dev/src/assets/images/LOGO.webp",
        "description": "Hungry Ghost DZN creates intentional brand systems, high-impact websites, and premium UI/UX experiences where clarity, usability, and performance matter.",
        "foundingDate": "2020",
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "minValue": 1,
          "maxValue": 5
        },
        "areaServed": "Worldwide",
        "serviceType": [
          "Brand Identity Design",
          "Web Development",
          "UI/UX Design",
          "Graphic Design",
          "Creative Consulting"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "therealhungryghost@gmail.com",
          "contactType": "Customer Service",
          "availableLanguage": ["English"]
        },
        "sameAs": [
          "https://twitter.com/hungryghostdzn",
          "https://instagram.com/hungryghostdzn",
          "https://linkedin.com/company/hungryghostdzn"
        ]
      },
      // WebSite Schema
      {
        "@type": "WebSite",
        "@id": "https://hungryghost.dev/#website",
        "url": "https://hungryghost.dev",
        "name": "Hungry Ghost DZN",
        "publisher": {
          "@id": "https://hungryghost.dev/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://hungryghost.dev/work?search={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-US"
      },
      // WebPage Schema (for current page)
      {
        "@type": "WebPage",
        "@id": `https://hungryghost.dev${location.pathname}#webpage`,
        "url": `https://hungryghost.dev${location.pathname}`,
        "name": getPageTitle(location.pathname),
        "isPartOf": {
          "@id": "https://hungryghost.dev/#website"
        },
        "about": {
          "@id": "https://hungryghost.dev/#organization"
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split("T")[0]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper function to get page-specific titles
function getPageTitle(pathname) {
  const titles = {
    "/": "Hungry Ghost DZN — UI/UX & Web Development Studio",
    "/work": "Our Work — Hungry Ghost DZN",
    "/services": "Services — Hungry Ghost DZN",
    "/about": "About — Hungry Ghost DZN",
    "/process": "Our Process — Hungry Ghost DZN",
    "/contact": "Contact — Hungry Ghost DZN",
    "/privacy": "Privacy Policy — Hungry Ghost DZN",
    "/terms": "Terms of Service — Hungry Ghost DZN"
  };

  // Check for work category pages
  if (pathname.startsWith("/work/brand-systems")) {
    return "Brand Systems & Identity Design — Hungry Ghost DZN";
  }
  if (pathname.startsWith("/work/ui-ux-web-dev")) {
    return "Web Development & UI/UX Design — Hungry Ghost DZN";
  }

  return titles[pathname] || "Hungry Ghost DZN — UI/UX & Web Development Studio";
}
