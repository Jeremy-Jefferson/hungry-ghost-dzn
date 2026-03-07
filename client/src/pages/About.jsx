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
        body: "Design should perform. We care about clarity, usability, and measurable impact as much as the aesthetics.",
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
                        <span className="accent-label">Who We Are</span>
                        <h1 className="h1">We're Hungry Ghost DZN.</h1>
                        <p className="page-lead">
                            A design-first studio focused on clarity, precision, and brand systems that actually mean something.
                        </p>
                    </div>

                    {/* Our Approach */}
                    <span className="accent-label">Our Approach</span>

                    {/* Body copy */}
                    <div className="about__copy">
                        <p>
                            Hungry Ghost DZN is an independent creative studio specializing in brand
                            identity, graphic design, and web design. We work with startups, founders,
                            and growing businesses that need visual systems that perform — not just
                            look good.
                        </p>

                        <p>
                            Every project begins with strategy. Every pixel has a purpose. We're not here to decorate brands — we're here to build systems that work.
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
                            <p className="h2" style={{ margin: 0 }}>Ready to build something?</p>
                            <p className="small" style={{ marginTop: "8px" }}>
                                Let's talk about your project.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                            <Link to="/contact" className="btn btn--primary">Start a Project</Link>
                            <Link to="/work" className="btn">View Work</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
