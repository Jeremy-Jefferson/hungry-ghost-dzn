import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_SEO = {
  title: "Hungry Ghost DZN | Brand, Web & Graphic Design Studio",
  description:
    "Hungry Ghost DZN creates intentional brand systems, striking visuals, and high-impact websites where clarity, usability, and performance matter.",
  image: "/images/og-default.png",
  url: "https://hungryghostdzn.com",
  siteName: "Hungry Ghost DZN",
  twitterHandle: "@hungryghostdzn",
};

export default function SEO({
  title,
  description,
  image,
  url,
  type = "website",
}) {
  const location = useLocation();

  const fullUrl = url
    ? `${DEFAULT_SEO.url}${url}`
    : `${DEFAULT_SEO.url}${location.pathname}`;

  const pageTitle = title
    ? `${title} | Hungry Ghost DZN`
    : DEFAULT_SEO.title;

  const ogImage = image
    ? `${DEFAULT_SEO.url}${image}`
    : DEFAULT_SEO.image;

  // JSON-LD structured data for local business
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Hungry Ghost DZN",
      description: DEFAULT_SEO.description,
      url: DEFAULT_SEO.url,
      image: `${DEFAULT_SEO.url}/images/logo.png`,
      telephone: "+1-281-946-9120",
      email: "therealhungryghost@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
      priceRange: "$",
      areaServed: {
        "@type": "State",
        name: "Texas",
      },
      serviceType: [
        "Brand Design",
        "Graphic Design",
        "Web Design",
        "Logo Design",
        "Web Development",
      ],
    }),
    []
  );

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description || DEFAULT_SEO.description} />
      <meta name="author" content="Hungry Ghost DZN" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || DEFAULT_SEO.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description || DEFAULT_SEO.description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content={DEFAULT_SEO.twitterHandle} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
