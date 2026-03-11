import { Link } from "react-router-dom";
import { getWorkByCategory } from "../../data/work.js";

export default function WebDesign() {
    const items = getWorkByCategory("ui-ux-web-dev");

    return (
        <section style={{ padding: "0 0 80px" }}>
            <div className="container stack">
                <div className="page-hero" style={{ marginBottom: "var(--space-6)" }}>
                    <span className="accent-label">What We Build</span>
                    <h1 className="h1" style={{ marginBottom: "var(--space-4)" }}>Web Development</h1>
                    <p className="page-lead" style={{ maxWidth: "640px" }}>
                        Every web project moves through two distinct phases — <strong>UI/UX Design</strong> and <strong>Web Development</strong>. 
                        We don't just make things look good; we build websites that perform.
                    </p>
                </div>

                {/* Process Overview */}
                <div className="work-process-overview" style={{ marginBottom: "var(--space-7)" }}>
                    <div className="card" style={{ padding: "var(--space-5)", background: "var(--color-surface)" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-5)" }}>
                            <div className="process-phase">
                                <div className="process-phase__number" style={{ 
                                    fontSize: "var(--text-4xl)", 
                                    fontWeight: "var(--font-bold)",
                                    color: "var(--color-accent-teal)",
                                    marginBottom: "var(--space-3)"
                                }}>01</div>
                                <h3 className="h3" style={{ marginBottom: "var(--space-2)" }}>UI/UX Design</h3>
                                <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                    User research, wireframing, visual design, and interaction patterns. 
                                    Every pixel is intentional.
                                </p>
                                <ul style={{ marginTop: "var(--space-3)", listStyle: "none", padding: 0 }}>
                                    <li className="small">→ Wireframes & Prototypes</li>
                                    <li className="small">→ Visual Design</li>
                                    <li className="small">→ Design Systems</li>
                                    <li className="small">→ Responsive Layouts</li>
                                </ul>
                            </div>
                            <div className="process-phase">
                                <div className="process-phase__number" style={{ 
                                    fontSize: "var(--text-4xl)", 
                                    fontWeight: "var(--font-bold)",
                                    color: "var(--color-accent-magenta)",
                                    marginBottom: "var(--space-3)"
                                }}>02</div>
                                <h3 className="h3" style={{ marginBottom: "var(--space-2)" }}>Web Development</h3>
                                <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                    Building with modern frameworks, optimization, and best practices. 
                                    Code that performs.
                                </p>
                                <ul style={{ marginTop: "var(--space-3)", listStyle: "none", padding: 0 }}>
                                    <li className="small">→ React / Next.js</li>
                                    <li className="small">→ Custom WordPress</li>
                                    <li className="small">→ Performance Tuning</li>
                                    <li className="small">→ SEO & Accessibility</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="h2" style={{ marginBottom: "var(--space-5)" }}>Web Projects</h2>
                
                {/* Projects Grid */}
                <div 
                    className="workGrid" 
                    style={{ 
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "var(--space-5)"
                    }}
                >
                    {items.map((item) => (
                        <Link 
                            key={item.slug} 
                            to={`/work/${item.category}/${item.slug}`}
                            className="card"
                            style={{ 
                                textDecoration: "none", 
                                color: "inherit",
                                padding: 0,
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease"
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
                                        transition: "transform 0.4s ease"
                                    }}
                                />
                            </div>
                            
                            {/* Content */}
                            <div style={{ 
                                padding: "var(--space-4)",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "var(--space-2)"
                            }}>
                                {/* Year and Tags */}
                                <div style={{ 
                                    display: "flex", 
                                    alignItems: "center",
                                    gap: "var(--space-2)" 
                                }}>
                                    <span className="tag tag--teal">{item.year}</span>
                                    {item.content?.stages && (
                                        <span className="tag">Process Included</span>
                                    )}
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
                                            flex: 1
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
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="card" style={{ 
                    padding: "var(--space-6)", 
                    marginTop: "var(--space-6)",
                    textAlign: "center",
                    background: "var(--color-surface)"
                }}>
                    <h3 className="h3" style={{ marginBottom: "var(--space-3)" }}>Need a website?</h3>
                    <p className="small" style={{ marginBottom: "var(--space-4)", maxWidth: "500px", margin: "0 auto var(--space-4)" }}>
                        Let's build something that looks great and performs even better.
                    </p>
                    <Link to="/contact" className="btn btn--primary">Start a Project</Link>
                </div>
            </div>
        </section>
    );
}
