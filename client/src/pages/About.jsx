import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

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
    <main style={{ flex: 1 }}>
      <section className="page-section about-page">
        <div className="container stack">
          {/* Hero */}
          <div className="page-hero">
            <span className="accent-label">About the Studio</span>
            <h1 className="h1">We’re Hungry Ghost DZN.</h1>
            <p className="page-lead">
              Hungry Ghost DZN is a design and development studio focused on
              building intentional brand systems, striking visuals, and
              high-impact websites.
            </p>
          </div>

          {/* Our Approach */}
          <span className="accent-label">Our Approach</span>

          {/* Body copy */}
          <div className="about__copy">
            <p>
              Hungry Ghost DZN approaches every project with the belief that
              strong design is not decoration — it’s structure. Typography,
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

          {/* CTA */}
          <div className="card about__cta">
            <div>
              <p className="h2" style={{ margin: 0 }}>
                Ready to build something?
              </p>
              <p className="small" style={{ marginTop: "8px" }}>
                Let’s create work that looks sharp, communicates clearly, and
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
    </main>
  );
}