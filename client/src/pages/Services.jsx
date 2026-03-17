import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

const services = [
    {
        title: "Brand Systems",
        accent: "teal",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
        description:
            "Identity systems designed for recognition, consistency, and long-term growth — from foundational logos to complete visual ecosystems.",
        includes: [
            "Logo systems & brand marks",
            "Typography & color systems",
            "Brand guidelines",
            "Collateral & supporting assets",
            "Environmental / retail branding",
        ],
        workLink: "/work/brand-systems",
        workLabel: "View Brand Work",
    },
    {
        title: "UI/UX Design",
        accent: "magenta",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="9" y2="9" />
            </svg>
        ),
        description:
            "Interfaces and digital experiences designed for clarity, usability, and strong visual hierarchy.",
        includes: [
            "Website UI design",
            "UX flows & wireframes",
            "Design systems & components",
            "Interaction design",
            "Interface refinement & iteration",
        ],
        workLink: "/work/ui-ux-web-dev",
        workLabel: "View UI/UX Work",
    },
    {
        title: "Web Development",
        accent: "teal",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
        ),
        description:
            "Modern websites and front-end systems built for performance, scalability, and real-world usability — designed to look sharp, load fast, and scale cleanly.",
        includes: [
            "Front-end architecture",
            "Custom React builds",
            "Responsive development",
            "Performance optimization",
            "CMS / content integration",
        ],
        workLink: "/work/ui-ux-web-dev",
        workLabel: "View Dev Work",
    },
];

export default function Services() {
    usePageTitle("Services");
    return (
        <>
            <section className="page-section">
                <div className="container stack">

                    {/* Hero */}
                    <div className="page-hero">
                        <span className="accent-label">What We Do</span>
                        <h1 className="h1">Services</h1>
                        <p className="page-lead">
                            Three focused capabilities for building brands, interfaces, and high-performance websites.
                        </p>
                    </div>

                    {/* Service cards */}
                    <div className="services__grid">
                        {services.map((s) => (
                            <div key={s.title} className="card services__card">
                                <div className={`services__icon accent--${s.accent}`}>
                                    {s.icon}
                                </div>
                                <h2 className={`h2 services__title accent--${s.accent}`}>
                                    {s.title}
                                </h2>
                                <p className="small services__description">{s.description}</p>
                                <ul className="services__list">
                                    {s.includes.map((item) => (
                                        <li key={item} className="small services__item">
                                            <span className="services__bullet">—</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="services__actions">
                                    <Link to="/contact" className="btn btn--primary services__cta">
                                        Start a Project
                                    </Link>
                                    <Link to={s.workLink} className="services__workLink">
                                        {s.workLabel} →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Process Teaser */}
            <section className="page-section services__process-teaser">
                <div className="container">
                    <div className="services__teaser-card card">
                        <div className="services__teaser-content">
                            <span className="accent-label">How We Work</span>
                            <h2 className="h2">The Process</h2>
                            <p className="services__teaser-text">
                                Every project moves through four focused phases — Discovery, Strategy, Design, and Delivery — ensuring clear thinking, intentional decisions, and no guesswork.
                            </p>
                            <Link to="/process" className="btn btn--outline">
                                Learn About Our Process
                            </Link>
                        </div>
                        <div className="services__teaser-steps">
                            <div className="services__teaser-step">
                                <span>01</span> Discovery
                            </div>
                            <div className="services__teaser-step">
                                <span>02</span> Strategy
                            </div>
                            <div className="services__teaser-step">
                                <span>03</span> Design
                            </div>
                            <div className="services__teaser-step">
                                <span>04</span> Deliver
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="page-section services__cta-section">
                <div className="container">
                    <div className="services__cta-card card">
                        <h2 className="h2">Ready to build something sharp?</h2>
                        <p className="services__cta-text">
                            Whether you need a brand system, a sharper interface, or a high-impact website, let's talk.
                        </p>
                        <Link to="/contact" className="btn btn--primary btn--large">
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
