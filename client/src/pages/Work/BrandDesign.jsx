import { Link } from "react-router-dom";
import { getWorkByCategory } from "../../data/work.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";

export default function BrandDesign() {
    usePageTitle("Brand Design");
    const items = getWorkByCategory("brand-systems");

    // Featured Brand Systems - curated selection with strongest portfolio value
    const featuredSlugs = [
        "little-york-smoke-shop",
        "body-spoils-brand-identity",
        "neo-seal-logo"
    ];

    // Derive featured and selected arrays from existing data
    const featuredBrandProjects = items.filter(item => 
        featuredSlugs.includes(item.slug)
    );
    
    const selectedBrandProjects = items.filter(item => 
        !featuredSlugs.includes(item.slug)
    );

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

                {/* Featured Brand Systems */}
                <div style={{ marginBottom: "var(--space-8)" }}>
                    <h2 className="h2" style={{ marginBottom: "var(--space-2)" }}>Featured Brand Systems</h2>
                    <p className="small" style={{ 
                        color: "var(--color-text-muted)", 
                        marginBottom: "var(--space-6)",
                        maxWidth: "560px"
                    }}>
                        A focused selection of identity systems with the strongest brand range, application, and portfolio value.
                    </p>

                    <div 
                        className="workGrid" 
                        style={{ 
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "var(--space-6)"
                        }}
                    >
                        {featuredBrandProjects.map((item) => (
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
                                    background: "#050505"
                                }}>
                                    <img 
                                        src={item.cover} 
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ 
                                            width: "100%", 
                                            height: "100%", 
                                            objectFit: "contain",
                                            padding: "var(--space-4)",
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
                </div>

                {/* Selected Brand Work */}
                <div>
                    <h2 className="h2" style={{ marginBottom: "var(--space-2)" }}>Selected Brand Work</h2>
                    <p className="small" style={{ 
                        color: "var(--color-text-muted)", 
                        marginBottom: "var(--space-6)",
                        maxWidth: "560px"
                    }}>
                        Additional identity work showcasing illustrative marks, emblem systems, and legacy branding projects.
                    </p>

                    {/* Split items into full rows and final row */}
                    {(() => {
                        const itemsPerRow = 3;
                        const fullRows = Math.floor(selectedBrandProjects.length / itemsPerRow);
                        
                        const fullRowItems = selectedBrandProjects.slice(0, fullRows * itemsPerRow);
                        const finalRowItems = selectedBrandProjects.slice(fullRows * itemsPerRow);
                        
                        return (
                            <>
                                {/* Full rows - 3 column grid */}
                                {fullRows > 0 && (
                                    <div 
                                        className="workGrid" 
                                        style={{ 
                                            display: "grid",
                                            gridTemplateColumns: "repeat(3, 1fr)",
                                            gap: "var(--space-5)",
                                            marginBottom: finalRowItems.length > 0 ? "var(--space-5)" : 0
                                        }}
                                    >
                                        {fullRowItems.map((item) => (
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
                                                    background: "#050505"
                                                }}>
                                                    <img 
                                                        src={item.cover} 
                                                        alt={item.title}
                                                        loading="lazy"
                                                        style={{ 
                                                            width: "100%", 
                                                            height: "100%", 
                                                            objectFit: "contain",
                                                            padding: "var(--space-4)",
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
                                )}
                                
                                {/* Final row - centered 2 column grid */}
                                {finalRowItems.length > 0 && (
                                    <div 
                                        style={{ 
                                            display: "grid",
                                            gridTemplateColumns: "repeat(2, 1fr)",
                                            gap: "var(--space-5)",
                                            maxWidth: "calc(2 * 380px + var(--space-5))",
                                            margin: "0 auto"
                                        }}
                                    >
                                        {finalRowItems.map((item) => (
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
                                                    background: "#050505"
                                                }}>
                                                    <img 
                                                        src={item.cover} 
                                                        alt={item.title}
                                                        loading="lazy"
                                                        style={{ 
                                                            width: "100%", 
                                                            height: "100%", 
                                                            objectFit: "contain",
                                                            padding: "var(--space-4)",
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
                                )}
                            </>
                        );
                    })()}
                </div>

                {/* CTA */}
                <div className="card" style={{ 
                    padding: "var(--space-7)", 
                    marginTop: "var(--space-10)",
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
