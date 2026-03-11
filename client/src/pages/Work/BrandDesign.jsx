import { Link } from "react-router-dom";
import { getWorkByCategory } from "../../data/work.js";

export default function BrandDesign() {
    const items = getWorkByCategory("brand-systems");

    return (
        <section style={{ padding: "0 0 120px" }}>
            <div className="container stack">
                <div className="page-hero" style={{ marginBottom: "var(--space-7)" }}>
                    <span className="accent-label">Brand Systems</span>
                    <h1 className="h1" style={{ marginBottom: "var(--space-4)" }}>Brand Design</h1>
                    <p className="page-lead" style={{ maxWidth: "560px" }}>
                        We build complete brand systems that scale across every touchpoint — from logos to websites to physical spaces.
                    </p>
                </div>

                {/* Featured: Full Brand Package Example */}
                <div className="featured-brand-package" style={{ marginBottom: "var(--space-8)" }}>
                    <div 
                        className="card" 
                        style={{ 
                            padding: "var(--space-6)", 
                            background: "var(--color-surface)", 
                            borderLeft: "4px solid var(--color-accent-teal)"
                        }}
                    >
                        <span className="accent-label" style={{ marginBottom: "var(--space-3)", display: "block" }}>Featured Project</span>
                        <h3 className="h2" style={{ marginBottom: "var(--space-3)" }}>Little York Smoke Shop</h3>
                        <p className="small" style={{ marginBottom: "var(--space-4)", maxWidth: "560px" }}>
                            Complete brand system and digital presence — showing how identity design extends across logos, storefront graphics, and the website.
                        </p>
                        
                        {/* Related Assets Grid - Now showing the complete system */}
                        <div style={{ 
                            display: "grid", 
                            gridTemplateColumns: "repeat(3, 1fr)", 
                            gap: "var(--space-4)",
                            marginBottom: "var(--space-5)"
                        }}>
                            <div style={{ position: "relative" }}>
                                <img 
                                    src="/images/work/BRANDING/LYLOGO.webp" 
                                    alt="Logo Identity"
                                    style={{ 
                                        width: "100%", 
                                        height: "160px", 
                                        objectFit: "contain", 
                                        borderRadius: "var(--radius-md)",
                                        background: "var(--color-surface-2)",
                                        padding: "var(--space-3)",
                                        transition: "transform .35s ease"
                                    }}
                                    className="featured-image"
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
                                    style={{ 
                                        width: "100%", 
                                        height: "160px", 
                                        objectFit: "cover", 
                                        borderRadius: "var(--radius-md)",
                                        transition: "transform .35s ease"
                                    }}
                                    className="featured-image"
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
                                    style={{ 
                                        width: "100%", 
                                        height: "160px", 
                                        objectFit: "cover", 
                                        borderRadius: "var(--radius-md)",
                                        transition: "transform .35s ease"
                                    }}
                                    className="featured-image"
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

                <h2 className="h2" style={{ marginBottom: "var(--space-6)" }}>Brand Projects</h2>

                {/* Projects Grid - Enhanced */}
                <div 
                    className="workGrid" 
                    style={{ 
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "var(--space-6)"
                    }}
                >
                    {items.filter(item => item.slug !== "little-york-smoke-shop").map((item) => (
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
                                    {item.content?.techStack && item.content.techStack.length > 0 && (
                                        <span className="tag tag--design">
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
                                            flex: 1,
                                            lineHeight: "1.6"
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
                    padding: "var(--space-7)", 
                    marginTop: "var(--space-8)",
                    textAlign: "center",
                    background: "var(--color-surface)"
                }}>
                    <h3 className="h3" style={{ marginBottom: "var(--space-3)" }}>Need a brand?</h3>
                    <p className="small" style={{ marginBottom: "var(--space-5)", maxWidth: "480px", margin: "0 auto var(--space-5)" }}>
                        Let's build a brand system that works across every touchpoint.
                    </p>
                    <Link to="/contact" className="btn btn--primary">Start a Project</Link>
                </div>
            </div>
        </section>
    );
}
