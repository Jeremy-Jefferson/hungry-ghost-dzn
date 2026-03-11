import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

const steps = [
    {
        num: "01",
        title: "Discovery",
        body: "Every project begins with clarity. We examine your business, audience, and goals to define what the brand or product actually needs to accomplish. This phase clarifies priorities, removes assumptions, and establishes a clear direction before any design work begins.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Strategy",
        body: "Position before pixels. We define the visual direction, messaging priorities, and structural approach for the project. By understanding the competitive landscape and the role your brand needs to play within it, every design decision is made with purpose.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Design",
        body: "With the strategy established, we move into execution. Concepts are explored, refined, and iterated with intention until the work reaches the right balance of clarity, impact, and usability.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Deliver",
        body: "Once the work is finalized, everything is prepared for launch. Final files, documentation, and assets are delivered in organized formats so your team has exactly what it needs to implement the work with confidence.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
        ),
    },
];

export default function Process() {
    usePageTitle("Process");

    return (
        <>
            <section className="page-section">
                <div className="container stack">
                    {/* Hero */}
                    <div className="page-hero">
                        <span className="accent-label">How We Work</span>
                        <h1 className="h1">The Process</h1>
                        <p className="page-lead">
                            Good design starts with clear thinking. Every project moves
                            through four focused phases that remove guesswork, clarify
                            decisions, and keep the work intentional from start to finish.
                        </p>
                        <p className="body-text">
                            While the details vary between brand, UI/UX, and development
                            projects, every engagement follows the same four core phases.
                        </p>
                        <p className="body-text">
                            This process has been used across brand identity projects,
                            product interfaces, and custom front-end builds.
                        </p>
                    </div>

                    {/* Steps with timeline */}
                    <div className="process__timeline">
                        {steps.map((step) => (
                            <div key={step.num} className="process__step-wrapper">
                                <div className="process__step-line" />
                                <div className="card process__step">
                                    <div className="process__step-header">
                                        <span className="process__num">{step.num}</span>
                                        <div className="process__step-icon">
                                            {step.icon}
                                        </div>
                                    </div>

                                    <div className="stack">
                                        <h2 className="h2">{step.title}</h2>
                                        <p className="small">{step.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA block */}
                    <section className="card process__cta">
                        <div className="process__cta-content">
                            <p className="h2">Have a project in mind?</p>
                            <p className="small">
                                Let's talk about what your brand actually needs.
                            </p>
                        </div>
                        <div className="process__cta-actions">
                            <Link to="/contact" className="btn btn--primary">
                                Book a Call
                            </Link>
                            <Link to="/work" className="btn btn--outline">
                                View Our Work
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}
