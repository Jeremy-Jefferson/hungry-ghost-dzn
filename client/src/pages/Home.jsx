import { Link } from "react-router-dom";
import hero from "../assets/images/HERO.webp";
import { work } from "../data/work.mock.js";
import { WORK_CATEGORIES } from "../data/work.js";
import WorkCard from "../components/work/WorkCard.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { useParallax } from "../hooks/useParallax.js";

const featuredWork = work.filter((w) => w.featured).sort((a, b) => {
    // Put Hungry Ghost DZN site first
    if (a.slug === "hungry-ghost-dzn-site") return -1;
    if (b.slug === "hungry-ghost-dzn-site") return 1;
    return 0;
});

export default function Home() {
    usePageTitle(null); // "Hungry Ghost DEV"
    const parallaxRef = useParallax({ tealSpeed: 0.3, magentaSpeed: 0.15 });

    return (
        <>
            {/* ── Hero ── */}
            <section className="hero" ref={parallaxRef}>
                <div className="container hero__inner">
                    <div className="hero__copy stack">
                        <h1 className="h1">Bold brands.<br />Sharp websites.<br />Development that performs.</h1>

                        <p className="hero__lead">
                            Hungry Ghost DEV creates intentional brand systems,
                            high-impact websites, and premium UI/UX experiences where clarity,
                            usability, and performance matter.
                        </p>

                        <div className="hero__cta">
                            <Link to="/contact" className="btn btn--primary">Start a Project</Link>
                            <Link to="/work" className="btn">View Work</Link>
                        </div>
                    </div>

                    <div className="hero__media">
                        <img
                            src={hero}
                            alt="Hungry Ghost hero graphic"
                            loading="eager"
                            decoding="async"
                            width="480"
                            height="480"
                        />
                    </div>
                </div>
            </section>

            {/* ── Featured Work ── */}
            <section className="home-section">
                <div className="container">
                    <div className="home-section__header">
                        <div className="home-section__title">
                            <span className="accent-label">Selected Work</span>
                            <h2 className="h2">What we've built</h2>
                            <p>Selected work across branding, digital, and environmental design.</p>
                        </div>
                        <Link to="/work" className="btn">View all work →</Link>
                    </div>
                    <div className="workGrid">
                        {featuredWork.slice(0, 3).map((item) => (
                            <WorkCard key={item.slug} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services Strip ── */}
            <section className="home-section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="home-section__header">
                        <div className="home-section__title">
                            <span className="accent-label">What We Do</span>
                            <h2 className="h2">Two disciplines, one studio</h2>
                        </div>
                        <Link to="/services" className="btn">All services →</Link>
                    </div>
                    <div className="home-services">
                        {WORK_CATEGORIES.map((cat) => (
                            <Link
                                key={cat.key}
                                to={`/work/${cat.key}`}
                                className="card home-service-card"
                            >
                                <div>
                                    <h3 className="h2" style={{ fontSize: "20px", margin: 0 }}>
                                        {cat.title}
                                    </h3>
                                    <p className="small" style={{ marginTop: "8px", marginBottom: 0 }}>
                                        {cat.blurb}
                                    </p>
                                </div>
                                <span className="home-service-card__arrow">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Strip ── */}
            <section className="home-cta">
                <div className="container home-cta__inner">
                    <div className="home-cta__heading stack">
                        <span className="accent-label">Ready to start?</span>
                        <h2 className="h1">
                            Let's build something<br />worth talking about.
                        </h2>
                    </div>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        <Link to="/contact" className="btn btn--primary">Book a Call</Link>
                        <Link to="/process" className="btn">See the Process</Link>
                    </div>
                </div>
            </section>

        </>
    );
}
