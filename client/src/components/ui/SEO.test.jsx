import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SEO from "./SEO";

describe("SEO Component", () => {
  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  it("renders default title", () => {
    renderWithRouter(<SEO />);
    const title = document.title;
    expect(title).toContain("Hungry Ghost DEV");
  });

  it("renders custom title when provided", () => {
    renderWithRouter(<SEO title="Custom Title" />);
    const title = document.title;
    expect(title).toContain("Custom Title");
  });

  it("renders meta description", () => {
    renderWithRouter(<SEO description="Custom description" />);
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toBeInTheDocument();
    expect(metaDescription.getAttribute("content")).toBe("Custom description");
  });

  it("renders canonical URL", () => {
    renderWithRouter(<SEO />);
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical).toBeInTheDocument();
  });

  it("renders Open Graph meta tags", () => {
    renderWithRouter(<SEO />);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    
    expect(ogTitle).toBeInTheDocument();
    expect(ogDescription).toBeInTheDocument();
    expect(ogType).toBeInTheDocument();
  });

  it("renders Twitter card meta tags", () => {
    renderWithRouter(<SEO />);
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    
    expect(twitterCard).toBeInTheDocument();
    expect(twitterTitle).toBeInTheDocument();
  });

  it("includes JSON-LD structured data", () => {
    renderWithRouter(<SEO />);
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    expect(jsonLd).toBeInTheDocument();
    
    const structuredData = JSON.parse(jsonLd.textContent);
    expect(structuredData["@type"]).toBe("LocalBusiness");
    expect(structuredData.name).toBe("Hungry Ghost DEV");
  });
});
