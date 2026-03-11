import { Link } from "react-router-dom";
import { WORK_CATEGORIES, getWorkByCategory } from "../../data/work.js";
import WorkCard from "../../components/work/WorkCard.jsx";

export default function WorkIndex() {
    const brandProjects = getWorkByCategory("brand-systems");
    const webProjects = getWorkByCategory("ui-ux-web-dev");

    return (
        <section style={{ padding: "0 0 80px" }}>
            <div className="container stack">
                <div className="page-hero">
                    <span className="accent-label">Our Work</span>
                    <h1 className="h1">Selected Projects</h1>
                    <p className="page-lead">
                        Selected projects across brand systems, UI/UX design, and web development.
                    </p>
                </div>

                {/* Brand Systems Section */}
                <div className="work-section" style={{ marginBottom: "var(--space-9)" }}>
                    <div className="work-section__header" style={{ 
                        display: "flex", 
                        alignItems: "baseline", 
                        justifyContent: "space-between",
                        marginBottom: "var(--space-5)",
                        borderBottom: "1px solid var(--color-border)",
                        paddingBottom: "var(--space-4)"
                    }}>
                        <h2 className="h2" style={{ margin: 0 }}>Brand Systems</h2>
                        <Link to="/work/brand-systems" className="small" style={{ color: "var(--color-accent-teal)" }}>
                            View All →
                        </Link>
                    </div>
                    <div className="workGrid">
                        {brandProjects.slice(0, 3).map((item) => (
                            <WorkCard key={item.slug} item={item} />
                        ))}
                    </div>
                </div>

                {/* UI/UX & Web Development Section */}
                <div className="work-section">
                    <div className="work-section__header" style={{ 
                        display: "flex", 
                        alignItems: "baseline", 
                        justifyContent: "space-between",
                        marginBottom: "var(--space-5)",
                        borderBottom: "1px solid var(--color-border)",
                        paddingBottom: "var(--space-4)"
                    }}>
                        <h2 className="h2" style={{ margin: 0 }}>UI/UX Design & Web Development</h2>
                        <Link to="/work/ui-ux-web-dev" className="small" style={{ color: "var(--color-accent-teal)" }}>
                            View All →
                        </Link>
                    </div>
                    <div className="workGrid">
                        {webProjects.slice(0, 3).map((item) => (
                            <WorkCard key={item.slug} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}