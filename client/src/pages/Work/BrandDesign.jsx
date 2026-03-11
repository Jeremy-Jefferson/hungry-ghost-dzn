import { Link } from "react-router-dom";
import { getWorkByCategory } from "../../data/work.js";

export default function BrandDesign() {
    const items = getWorkByCategory("brand-systems");

    return (
        <section style={{ padding: "0 0 80px" }}>
            <div className="container stack">
                <div className="page-hero" style={{ marginBottom: "var(--space-6)" }}>
                    <span className="accent-label">What We Create</span>
                    <h1 className="h1" style={{ marginBottom: "var(--space-4)" }}>Brand Design</h1>
                    <p className="page-lead" style={{ maxWidth: "640px" }}>
                        Great brands work across every touchpoint — from logos to websites to physical spaces. 
                        See how we build complete brand systems that scale.
                    </p>
                </div>

                {/* Brand Process Overview */}
                <div className="brand-process-overview" style={{ marginBottom: "var(--space-7)" }}>
                    <div className="card" style={{ padding: "var(--space-5)", background: "var(--color-surface)" }}>
                        <h3 className="h3" style={{ marginBottom: "var(--space-4)" }}>The Brand Design Process</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-4)" }}>
                            <div>
                                <div style={{ 
                                    fontSize: "var(--text-sm)", 
                                    fontWeight: "var(--font-bold)",
                                    color: "var(--color-accent-teal)",
                                    marginBottom: "var(--space-2)"
                                }}>PHASE 01</div>
                                <h4 className="h4">Discovery</h4>
                                <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                    Understanding your business, audience, and competitive landscape.
                                </p>
                            </div>
                            <div>
                                <div style={{ 
                                    fontSize: "var(--text-sm)", 
                                    fontWeight: "var(--font-bold)",
                                    color: "var(--color-accent-teal)",
                                    marginBottom: "var(--space-2)"
                                }}>PHASE 02</div>
                                <h4 className="h4">Strategy</h4>
                                <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                    Defining brand positioning, messaging, and visual direction.
                                </p>
                            </div>
                            <div>
                                <div style={{ 
                                    fontSize: "var(--text-sm)", 
                                    fontWeight: "var(--font-bold)",
                                    color: "var(--color-accent-teal)",
                                    marginBottom: "var(--space-2)"
                                }}>PHASE 03</div>
                                <h4 className="h4">Design</h4>
                                <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                    Creating logos, collateral, and digital assets that bring the brand to life.
                                </p>
                            </div>
                            <div>
                                <div style={{ 
                                    fontSize: "var(--text-sm)", 
                                    fontWeight: "var(--font-bold)",
                                    color: "var(--color-accent-teal)",
                                    marginBottom: "var(--space-2)"
                                }}>PHASE 04</div>
                                <h4 className="h4">Delivery</h4>
                                <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                    Organizing files, creating guidelines, and ensuring consistency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured: Full Brand Package Example */}
                <div className="featured-brand-package" style={{ marginBottom: "var(--space-7)" }}>
                    <div className="card" style={{ padding: "var(--space-5)", background: "var(--color-surface)", borderLeft: "4px solid var(--color-accent-teal)" }}>
                        <span className="accent-label" style={{ marginBottom: "var(--space-3)", display: "block" }}>Featured Project</span>
                        <h3 className="h2" style={{ marginBottom: "var(--space-3)" }}>Little York Smoke Shop</h3>
                        <p className="small" style={{ marginBottom: "var(--space-4)", maxWidth: "640px" }}>
                            Complete brand system + website development — showing how brand design spans across physical and digital touchpoints as one cohesive story.
                        </p>
                        
                        {/* Process Flow - Visual Stepper */}
                        <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            gap: "var(--space-3)", 
                            marginBottom: "var(--space-5)",
                            flexWrap: "wrap"
                        }}>
                            <span className="tag tag--teal">Brand Identity</span>
                            <span style={{ color: "var(--color-text-muted)" }}>→</span>
                            <span className="tag">Environmental Graphics</span>
                            <span style={{ color: "var(--color-text-muted)" }}>→</span>
                            <span className="tag">UX Design</span>
                            <span style={{ color: "var(--color-text-muted)" }}>→</span>
                            <span className="tag tag--magenta">Web Development</span>
                        </div>

                        {/* Related Assets Grid - Now showing the complete system */}
                        <div style={{ 
                            display: "grid", 
                            gridTemplateColumns: "repeat(3, 1fr)", 
                            gap: "var(--space-3)",
                            marginBottom: "var(--space-4)"
                        }}>
                            <div style={{ position: "relative" }}>
                                <img 
                                    src="/images/work/BRANDING/LYLOGO.webp" 
                                    alt="Logo Identity"
                                    style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "var(--radius-md)" }}
                                />
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: 0, 
                                    left: 0, 
                                    right: 0, 
                                    background: "rgba(0,0,0,0.7)", 
                                    padding: "var(--space-2)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: "var(--font-bold)"
                                }}>Logo</div>
                            </div>
                            <div style={{ position: "relative" }}>
                                <img 
                                    src="/images/work/BRANDING/WindowWrappp.webp" 
                                    alt="Window Wrap"
                                    style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "var(--radius-md)" }}
                                />
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: 0, 
                                    left: 0, 
                                    right: 0, 
                                    background: "rgba(0,0,0,0.7)", 
                                    padding: "var(--space-2)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: "var(--font-bold)"
                                }}>Window Wrap</div>
                            </div>
                            <div style={{ position: "relative" }}>
                                <img 
                                    src="/images/work/WEB/little-york-site.webp" 
                                    alt="Website"
                                    style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "var(--radius-md)" }}
                                />
                                <div style={{ 
                                    position: "absolute", 
                                    bottom: 0, 
                                    left: 0, 
                                    right: 0, 
                                    background: "rgba(0,0,0,0.7)", 
                                    padding: "var(--space-2)",
                                    fontSize: "var(--text-xs)",
                                    fontWeight: "var(--font-bold)"
                                }}>Website</div>
                            </div>
                        </div>
                        
                        <Link to="/work/brand-systems/little-york-smoke-shop" className="btn btn--outline">
                            View Case Study →
                        </Link>
                    </div>
                </div>

                <h2 className="h2" style={{ marginBottom: "var(--space-5)" }}>Brand Projects</h2>

                {/* Projects Grid - Enhanced */}
                <div 
                    className="workGrid" 
                    style={{ 
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "var(--space-5)"
                    }}
                >
                    {items.filter(item => item.slug !== "little-york-smoke-shop").map((item) => (
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
                                background: item.category === "brand-systems" ? "#050505" : "var(--color-surface-2)"
                            }}>
                                <img 
                                    src={item.cover} 
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ 
                                        width: "100%", 
                                        height: "100%", 
                                        objectFit: item.category === "brand-systems" ? "contain" : "cover",
                                        padding: item.category === "brand-systems" ? "var(--space-4)" : 0,
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
                                    {item.content?.techStack && item.content.techStack.length > 0 && (
                                        <span className="tag" style={{ fontSize: "10px" }}>
                                            {item.content.techStack[0]}
                                        </span>
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
                                
                                {/* View Case Study Link */}
                                <div style={{ 
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "var(--space-2)",
                                    marginTop: "var(--space-2)",
                                    color: "var(--color-accent-teal)",
                                    fontWeight: "var(--font-semibold)",
                                    fontSize: "var(--text-sm)"
                                }}>
                                    View Case Study
                                    <span style={{ transition: "transform 0.2s ease" }}>→</span>
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
                    <h3 className="h3" style={{ marginBottom: "var(--space-3)" }}>Need a brand?</h3>
                    <p className="small" style={{ marginBottom: "var(--space-4)", maxWidth: "500px", margin: "0 auto var(--space-4)" }}>
                        Let's build a complete brand system that works across every touchpoint.
                    </p>
                    <Link to="/contact" className="btn btn--primary">Start a Project</Link>
                </div>
            </div>
        </section>
    );
}
