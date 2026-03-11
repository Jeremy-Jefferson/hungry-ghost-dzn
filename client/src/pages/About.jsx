import { Link } from "react-router-dom";
import hero from "../assets/images/HERO.webp";
import { usePageTitle } from "../hooks/usePageTitle.js";

const principles = [
  {
    title: "Clarity over noise",
    body: "We remove the unnecessary to reveal what matters.",
  },
  {
    title: "Systems over one-offs",
    body: "Every element is built to scale across mediums.",
  },
  {
    title: "Performance over vanity",
    body: "Design should clarify, guide, and deliver impact.",
  },
];

const values = [
  {
    title: "Precision over decoration",
    body: "Clear structure, strong hierarchy, and intentional design always win over unnecessary decoration.",
  },
  {
    title: "Systems thinking",
    body: "Every project is built as part of a larger system — scalable, consistent, and designed to evolve.",
  },
  {
    title: "Performance-first",
    body: "Design must work in the real world — fast, usable, and measurable.",
  },
];

export default function About() {
  usePageTitle("About");

  return (
    <>
      <section className="page-section about-page">
        <div className="container stack">
          {/* Hero with image */}
          <div className="about-hero">
            <div className="about-hero__content">
              <span className="accent-label">About the Studio</span>
              <h1 className="h1">We are Hungry Ghost DEV.</h1>
              <p className="page-lead">
                Hungry Ghost DEV is an independent design and development studio focused on intentional brand systems,
                sharp visuals, and high-impact websites.
              </p>
            </div>
            <div className="about-hero__media">
              <img
                src={hero}
                alt="Hungry Ghost DEV studio graphic"
                loading="eager"
                decoding="async"
                width="400"
                height="400"
              />
            </div>
          </div>

          {/* Founder Context */}
          <div className="about__copy" style={{ maxWidth: '720px' }}>
            <p>
              Hungry Ghost DEV was founded by Jeremy E. Jefferson, a UI/UX designer and front-end developer focused on building brand systems and high-performance websites. By combining UI/UX design, frontend architecture, and visual identity systems, the studio connects design clarity with technical execution in a single workflow.
            </p>
            <p style={{ marginTop: 'var(--space-3)' }}>
              The studio creates brand identities, product interfaces, and custom front-end builds for startups, small businesses, and digital platforms.
            </p>
          </div>

          {/* Our Approach - restructured as intro + principles */}
          <span className="accent-label" style={{ marginTop: 'var(--space-5)', display: 'block' }}>Our Approach</span>

          <div className="about__copy" style={{ maxWidth: '720px' }}>
            <p style={{ marginBottom: 'var(--space-4)' }}>
              Strong design is not decoration. It is structure.
            </p>
          </div>

          <div className="about__principles">
            {principles.map((p) => (
              <div key={p.title} className="card about__principle-card">
                <h3 className="h2">{p.title}</h3>
                <p className="small">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="page-divider" />

          {/* Values */}
          <div className="stack">
            <span className="accent-label">What We Stand For</span>
            <div className="about__values">
              {values.map((v) => (
                <div key={v.title} className="card about__value-card">
                  <h3 className="h2">{v.title}</h3>
                  <p className="small">{v.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Teaser */}
          <div className="card about__process-teaser">
            <div className="about__process-content">
              <span className="accent-label">How We Work</span>
              <h2 className="h2" style={{ marginTop: '8px' }}>The Process</h2>
              <p className="small" style={{ marginTop: '12px', maxWidth: '400px' }}>
                Every project moves through four focused phases — Discovery, Strategy, Design, and Delivery — ensuring clear thinking, intentional decisions, and minimal guesswork.
              </p>
              <Link to="/process" className="btn btn--outline" style={{ marginTop: '20px' }}>
                Learn About Our Process
              </Link>
            </div>
            <div className="about__process-steps">
              <div className="about__process-step">
                <span>01</span> Discovery
              </div>
              <div className="about__process-step">
                <span>02</span> Strategy
              </div>
              <div className="about__process-step">
                <span>03</span> Design
              </div>
              <div className="about__process-step">
                <span>04</span> Deliver
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="card about__cta">
            <div>
              <p className="h2" style={{ margin: 0 }}>
                Let's build something with clarity and bite.
              </p>
              <p className="small" style={{ marginTop: "8px" }}>
                Work that looks sharp, communicates clearly, and performs in the real world.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn btn--primary">
                Start a Project
              </Link>
              <Link to="/work" className="btn">
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
