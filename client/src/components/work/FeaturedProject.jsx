import { Link } from "react-router-dom";

export default function FeaturedProject({ item }) {
    const caseStudyUrl = `/work/${item.category}/${item.slug}`;

    return (
        <div 
            className="featuredProject card" 
            style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 0,
                padding: 0,
                overflow: "hidden",
                background: "var(--color-surface)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 0 40px rgba(0, 0, 0, 0.3)"
            }}
        >
            {/* Image Section - Left */}
            <div 
                className="featuredProject__image"
                style={{
                    aspectRatio: "16/9",
                    overflow: "hidden",
                    background: "var(--color-surface-2)"
                }}
            >
                {item.cover ? (
                    <img
                        src={item.cover}
                        alt={`Cover image for ${item.title}`}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "transform .35s ease"
                        }}
                        className="featured-image"
                    />
                ) : (
                    <div 
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "var(--color-surface-3)"
                        }} 
                    />
                )}
            </div>

            {/* Content Section - Right */}
            <div 
                className="featuredProject__content"
                style={{
                    padding: "var(--space-7)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: "linear-gradient(180deg, var(--color-surface) 0%, rgba(20,20,20,0.5) 100%)"
                }}
            >
                <span 
                    className="accent-label" 
                    style={{ 
                        marginBottom: "var(--space-3)",
                        display: "block"
                    }}
                >
                    Featured Project
                </span>
                
                <h2 
                    className="h2" 
                    style={{ 
                        marginBottom: "var(--space-4)",
                        fontSize: "var(--text-3xl)"
                    }}
                >
                    {item.title}
                </h2>

                {item.summary && (
                    <p 
                        className="featuredProject__summary" 
                        style={{
                            color: "var(--color-text-muted)",
                            fontSize: "var(--text-lg)",
                            lineHeight: "1.6",
                            marginBottom: "var(--space-5)",
                            maxWidth: "560px"
                        }}
                    >
                        {item.summary}
                    </p>
                )}

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                    <div 
                        className="featuredProject__tags"
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "var(--space-3)",
                            marginBottom: "var(--space-6)"
                        }}
                    >
                        {item.tags.slice(0, 5).map((tag) => (
                            <span className="tag tag--teal" key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <Link 
                    to={caseStudyUrl}
                    className="btn btn--primary"
                    style={{
                        alignSelf: "flex-start"
                    }}
                >
                    View Case Study
                </Link>
            </div>
        </div>
    );
}
