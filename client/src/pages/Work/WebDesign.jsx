import { Link } from "react-router-dom";
import { getWorkByCategory } from "../../data/work.js";

export default function WebDesign() {
    const items = getWorkByCategory("ui-ux-web-dev");

    return (
        <section style={{ padding: "0 0 120px" }}>
            <div className="container stack">
                <div className="page-hero" style={{ marginBottom: "var(--space-7)" }}>
                    <span className="accent-label">Web Development</span>
                    <h1 className="h1" style={{ marginBottom: "var(--space-4)" }}>UI/UX & Web Development</h1>
                    <p className="page-lead" style={{ maxWidth: "560px" }}>
                        We design and build high-performance websites where UX clarity, modern frameworks, and clean frontend architecture work together.
                    </p>
                </div>

                <h2 className="h2" style={{ marginBottom: "var(--space-6)" }}>Web Projects</h2>
                
                {/* Projects Grid */}
                <div 
                    className="workGrid" 
                    style={{ 
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "var(--space-6)"
                    }}
                >
                    {items.map((item) => (
                        <Link 
                            key={item.slug} 
                            to={`/work/${item.category}/${item.slug}`}
                            className="card workCard"
                            style={{ 
                                textDecoration: "none", 
                                color: "inherit",
                                padding: 0,
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform .35s ease, box-shadow .35s ease"
                            }}
                        >
                            {/* Image */}
                            <div style={{ 
                                aspectRatio: "16/10", 
                                overflow: "hidden",
                                background: "var(--color-surface-2)"
                            }}>
                                <img 
                                    src={item.cover} 
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ 
                                        width: "100%", 
                                        height: "100%", 
                                        objectFit: "cover",
                                        transition: "transform .35s ease"
                                    }}
                                />
                            </div>
                            
                            {/* Content */}
                            <div style={{ 
                                padding: "var(--space-5)",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "var(--space-3)"
                            }}>
                                {/* Year and Tags */}
                                <div style={{ 
                                    display: "flex", 
                                    alignItems: "center",
                                    gap: "var(--space-2)" 
                                }}>
                                    <span className="tag tag--teal">{item.year}</span>
                                </div>
                                
                                {/* Title */}
                                <h3 
                                    className="h3" 
                                    style={{ 
                                        margin: 0,
                                        fontSize: "var(--text-lg)",
                                        fontWeight: "var(--font-bold)"
                                    }}
                                >
                                    {item.title}
                                </h3>
                                
                                {/* Summary */}
                                {item.summary && (
                                    <p 
                                        className="small" 
                                        style={{ 
                                            color: "var(--color-text-muted)",
                                            margin: 0,
                                            flex: 1,
                                            lineHeight: "1.6"
                                        }}
                                    >
                                        {item.summary}
                                    </p>
                                )}
                                
                                {/* Tags */}
                                <div style={{ 
                                    display: "flex",
                                    gap: "var(--space-2)",
                                    flexWrap: "wrap",
                                    marginTop: "var(--space-2)"
                                }}>
                                    {item.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="tag tag--dev">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="card" style={{ 
                    padding: "var(--space-7)", 
                    marginTop: "var(--space-8)",
                    textAlign: "center",
                    background: "var(--color-surface)"
                }}>
                    <h3 className="h3" style={{ marginBottom: "var(--space-3)" }}>Need a website?</h3>
                    <p className="small" style={{ marginBottom: "var(--space-5)", maxWidth: "480px", margin: "0 auto var(--space-5)" }}>
                        Let's build something that looks sharp and performs even better.
                    </p>
                    <Link to="/contact" className="btn btn--primary">Start a Project</Link>
                </div>
            </div>
        </section>
    );
}
