import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

const steps = [
    {
        num: "01",
        title: "Discovery",
        body: "Every project begins with understanding. We examine your business, audience, and goals to define what the brand or website actually needs to accomplish. This phase clarifies priorities, removes assumptions, and establishes a clear direction before any design work begins.",
    },
    {
        num: "02",
        title: "Strategy",
        body: "Position before pixels. We define the visual direction, messaging priorities, and structural approach for the project. By understanding the competitive landscape and the role your brand needs to play within it, every design decision starts with purpose.",
    },
    {
        num: "03",
        title: "Design",
        body: "With the strategy established, we move into execution. Concepts are explored, refined, and iterated with intention until the work reaches the right balance of clarity, impact, and usability.",
    },
    {
        num: "04",
        title: "Deliver",
        body: "Once the work is finalized, everything is prepared for launch. Final files, documentation, and assets are delivered in organized formats so your team has exactly what it needs to implement the work with confidence.",
    },
];

export default function Process() {
    usePageTitle("Process");

    return (
        <main className="page-main">
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
                    </div>

                    {/* Steps */}
                    <ul className="process__steps">
                        {steps.map((step) => (
                            <li key={step.num} className="card process__step">
                                <span className="process__num">{step.num}</span>

                                <div className="stack">
                                    <h2 className="h2">{step.title}</h2>
                                    <p className="small">{step.body}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* CTA block */}
                    <section className="card process__cta">
                        <p className="h2">Have a project in mind?</p>
                        <p className="small">
                            Let’s talk about what your brand actually needs.
                        </p>
                        <Link to="/contact" className="btn btn--primary">
                            Book a Call
                        </Link>
                    </section>
                </div>
            </section>
        </main>
    );
}