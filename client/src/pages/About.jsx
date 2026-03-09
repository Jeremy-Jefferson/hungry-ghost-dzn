import { Link } from "react-router-dom";
import hero from "../assets/images/HERO.webp";
import { usePageTitle } from "../hooks/usePageTitle.js";

const capabilities = [
    "Brand Identity Systems",
    "Visual Design",
    "Logo Design",
    "Web Design & Development",
    "UI/UX Design",
    "Print & Collateral",
    "Illustration",
    "Art Direction",
];

const values = [
  {
    title: "Precision over decoration",
    body: "We remove the noise and focus on what actually matters — clarity, hierarchy, and intentional design.",
  },
  {
    title: "Systems thinking",
    body: "Everything we design is part of a larger system. Nothing is one-off. Every element is built to scale.",
  },
  {
    title: "Performance-first",
    body: "Design should perform. We care about clarity, usability, and measurable impact as much as aesthetics.",
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
              <h1 className="h1">We are Hungry Ghost DZN.</h1>
              <p className="page-lead">
                Hungry Ghost DZN is a design and development studio focused on
                building intentional brand systems, striking visuals, and
                high-impact websites.
              </p>
            </div>
            <div className="about-hero__media">
              <img
                src={hero}
                alt="Hungry Ghost DZN studio graphic"
                loading="eager"
                decoding="async"
                width="400"
                height="400"
              />
            </div>
          </div>

          {/* Our Approach */}
          <span className="accent-label">Our Approach</span>

          {/* Body copy */}
          <div className="about__copy">
            <p>
              Hungry Ghost DZN approaches every project with the belief that
              strong design is not decoration — it is structure. Typography,
              layout, hierarchy, and visual language work together to create
              systems that communicate clearly and scale across mediums.
            </p>

            <p>
              Rather than chasing trends or surface aesthetics, the studio
              focuses on clarity, composition, and purposeful design decisions.
              Every project is built to be visually sharp, strategically
              grounded, and consistent wherever the brand appears.
            </p>

            <p>
              From identity systems and graphic design to modern web
              experiences, the goal is simple: create work that looks powerful,
              communicates effectively, and performs reliably.
            </p>

            <p>
              Hungry Ghost DZN combines design thinking, illustration, and
              frontend development to produce work that is both visually
              compelling and technically sound.
            </p>
          </div>

          {/* Capabilities */}
          <div className="stack">
            <span className="accent-label">What We Do</span>
            <div className="about__capabilities">
              {capabilities.map((cap) => (
                <span key={cap} className="about__capability">
                  {cap}
                </span>
              ))}
            </div>
            <Link to="/services" className="btn btn--outline" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
              View All Services
            </Link>
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
                Every project moves through four focused phases — Discovery, Strategy, Design, and Delivery.
                Clear thinking, intentional decisions, no guesswork.
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
                Ready to build something?
              </p>
              <p className="small" style={{ marginTop: "8px" }}>
                Let us create work that looks sharp, communicates clearly, and
                performs.
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
