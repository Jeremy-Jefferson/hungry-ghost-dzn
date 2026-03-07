import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

const services = [
    {
        title: "Brand Design",
        accent: "teal",
        description:
            "Distinct identity systems built for recognition, consistency, and long-term growth — from full brand creation to strategic visual overhauls.",
        includes: [
            "Logo suite & brand marks",
            "Color palette & typography system",
            "Brand guidelines document",
            "Business card & stationery design",
            "Social media brand assets",
        ],
    },
    {
        title: "Graphic Design",
        accent: "magenta",
        description:
            "Striking visual design for print, digital, and apparel — made to stop the scroll, carry the message, and elevate the brand.",
        includes: [
            "Poster & print design",
            "Apparel & merch graphics",
            "Social media content design",
            "Illustration & iconography",
            "Event & promotional collateral",
        ],
    },
    {
        title: "Web Design",
        accent: "teal",
        description:
            "Custom websites that balance visual impact with real usability — designed to look sharp, load fast, and convert with intent.",
        includes: [
            "Landing pages & marketing sites",
            "Portfolio & studio websites",
            "Custom React / Vite builds",
            "Design system implementation",
            "Performance & UX optimization",
        ],
    },
];

export default function Services() {
    usePageTitle("Services");
    return (
        <main style={{ flex: 1 }}>
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
                                <h2 className={`h2 services__title accent--${s.accent}`}>
                                    {s.title}
                                </h2>
                                <p className="small">{s.description}</p>
                                <ul className="services__list">
                                    {s.includes.map((item) => (
                                        <li key={item} className="small services__item">
                                            <span className="services__bullet">—</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn btn--primary services__cta">
                                    Start a Project
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Bottom note */}
                    <p className="small" style={{ color: "var(--color-text-subtle)", maxWidth: "480px" }}>
                        Not sure which service fits? Drop us a message and we'll figure it out together.
                    </p>

                </div>
            </section>
        </main>
    );
}
