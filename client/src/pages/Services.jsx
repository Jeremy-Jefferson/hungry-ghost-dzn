import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

const services = [
    {
        title: "Brand Design",
        accent: "teal",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
        description:
            "Distinct identity systems built for recognition, consistency, and long-term growth — from full brand creation to strategic visual overhauls.",
        includes: [
            "Logo suite & brand marks",
            "Color palette & typography system",
            "Brand guidelines document",
            "Business card & stationery design",
            "Social media brand assets",
        ],
        workLink: "/work/brand-design",
        workLabel: "View Brand Work",
    },
    {
        title: "Graphic Design",
        accent: "magenta",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
        description:
            "Striking visual design for print, digital, and apparel — made to stop the scroll, carry the message, and elevate the brand.",
        includes: [
            "Poster & print design",
            "Apparel & merch graphics",
            "Social media content design",
            "Illustration & iconography",
            "Event & promotional collateral",
        ],
        workLink: "/work/graphic-design",
        workLabel: "View Graphic Work",
    },
    {
        title: "Web Design",
        accent: "teal",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="12" y1="2" x2="12" y2="22" />
            </svg>
        ),
        description:
            "Custom websites that balance visual impact with real usability — designed to look sharp, load fast, and convert with intent.",
        includes: [
            "Landing pages & marketing sites",
            "Portfolio & studio websites",
            "Custom React / Vite builds",
            "Design system implementation",
            "Performance & UX optimization",
        ],
        workLink: "/work/web-design",
        workLabel: "View Web Work",
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
                            Three focused disciplines. One sharp, cohesive brand presence.
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
                                Every project moves through four focused phases — Discovery, Strategy, Design, and Delivery.
                                Clear thinking, intentional decisions, no guesswork.
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
                            Whether you need a complete brand overhaul or a single standout piece, let's talk.
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
