import { useParams, Link } from "react-router-dom";
import { getWorkBySlug, getAllWork } from "../../data/work.js";
import { usePageTitle } from "../../hooks/usePageTitle.js";

export default function CaseStudy() {
    const { category, slug } = useParams();
    const item = getWorkBySlug(slug);
    usePageTitle(item?.title ?? "Project");

    if (!item) {
        return (
            <main style={{ flex: 1 }}>
                <section className="page-section">
                    <div className="container stack">
                        <h1 className="h1">Not found</h1>
                        <p className="small">That project doesn't exist yet.</p>
                        <Link className="btn" to="/work">← Back to Work</Link>
                    </div>
                </section>
            </main>
        );
    }

    const backPath = `/work/${category ?? item.category}`;
    const categoryLabel = (category ?? item.category).replace(/-/g, " ");

    return (
        <main style={{ flex: 1 }}>
            <section className="page-section">
                <div className="container">
                    <div className="stack">

                        {/* Breadcrumb */}
                        <Link className="small cs-back" to={backPath}>
                            ← {categoryLabel}
                        </Link>

                        {/* Header */}
                        <div className="cs-header stack">
                            <span className="accent-label">{categoryLabel}</span>
                            <h1 className="h1">{item.title}</h1>
                            {item.summary && (
                                <p className="page-lead">{item.summary}</p>
                            )}
                        </div>

                        {/* Tags */}
                        {!!item.tags?.length && (
                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                                {item.tags.map((t) => (
                                    <span className="tag tag--teal" key={t}>{t}</span>
                                ))}
                            </div>
                        )}

                        {/* Meta bar - Enhanced with client info */}
                        {item.content && (
                            <div className="cs-meta card">
                                <div className="cs-meta__item">
                                    <span className="cs-meta__label">Role</span>
                                    <span className="cs-meta__value">{item.content.role}</span>
                                </div>
                                {item.content.client && (
                                    <div className="cs-meta__item">
                                        <span className="cs-meta__label">Client</span>
                                        <span className="cs-meta__value">{item.content.client}</span>
                                    </div>
                                )}
                                {item.year && (
                                    <div className="cs-meta__item">
                                        <span className="cs-meta__label">Year</span>
                                        <span className="cs-meta__value">{item.year}</span>
                                    </div>
                                )}
                                <div className="cs-meta__item">
                                    <span className="cs-meta__label">Category</span>
                                    <span className="cs-meta__value" style={{ textTransform: "capitalize" }}>{categoryLabel}</span>
                                </div>
                                {item.liveUrl && (
                                    <div className="cs-meta__item cs-meta__item--action">
                                        <a
                                            href={item.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cs-live-link"
                                        >
                                            Visit Live Site ↗
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Main cover image */}
                        {item.cover && (
                            <div
                                className="card cs-hero-image"
                                style={{
                                    padding: item.category === "brand-design" ? "var(--space-8)" : "0",
                                    background: item.category === "brand-design" ? "#050505" : "var(--color-card)",
                                    maxWidth: "1000px",
                                    width: "100%",
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "0 auto"
                                }}
                            >
                                <img
                                    src={item.cover}
                                    alt={item.title}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        display: "block",
                                        width: item.category === "brand-design" ? "auto" : "100%",
                                        maxWidth: item.category === "brand-design" ? "80%" : "none",
                                        maxHeight: item.category === "brand-design" ? "500px" : "none",
                                        height: "auto",
                                        borderRadius: item.category === "brand-design" ? "0" : "var(--radius-lg)"
                                    }}
                                />
                            </div>
                        )}

                        {/* Gallery - Additional project images */}
                        {item.gallery && item.gallery.length > 0 && (
                            <div className="cs-gallery">
                                <h3 className="cs-gallery__title">Project Gallery</h3>
                                <div className="cs-gallery__grid">
                                    {item.gallery.map((img, index) => (
                                        <div key={index} className="cs-gallery__item">
                                            <img
                                                src={img}
                                                alt={`${item.title} - Image ${index + 1}`}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Content sections */}
                        {item.content && (
                            <div className="cs-sections">
                                {[
                                    { key: "overview",  label: "Overview"  },
                                    { key: "challenge", label: "Challenge" },
                                    { key: "solution",  label: "Solution"  },
                                    { key: "outcome",   label: "Outcome"   },
                                ]
                                    .filter(({ key }) => item.content[key])
                                    .map(({ key, label }) => (
                                        <div key={key} className="cs-section">
                                            <h2 className="cs-section__title">{label}</h2>
                                            <p className="small">{item.content[key]}</p>
                                        </div>
                                    ))}
                            </div>
                        )}

                        {/* Services / Deliverables */}
                        {item.content?.services && item.content.services.length > 0 && (
                            <div className="cs-services">
                                <h3 className="cs-services__title">Deliverables</h3>
                                <ul className="cs-services__list">
                                    {item.content.services.map((service, idx) => (
                                        <li key={idx}>{service}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Footer nav */}
                        <div style={{ paddingTop: "var(--space-5)" }}>
                            <Link className="btn" to={backPath}>← Back to {categoryLabel}</Link>
                        </div>

                        {/* Next Project Preview */}
                        <NextProjectPreview currentSlug={slug} />

                    </div>
                </div>
            </section>
        </main>
    );
}

// Next Project Preview Component
function NextProjectPreview({ currentSlug }) {
    const allWork = getAllWork();
    const currentIndex = allWork.findIndex((p) => p.slug === currentSlug);
    const nextIndex = (currentIndex + 1) % allWork.length;
    const nextProject = allWork[nextIndex];

    const nextCategoryLabel = nextProject.category.replace(/-/g, " ");

    return (
        <div style={{
            marginTop: "var(--space-9)",
            paddingTop: "var(--space-7)",
            borderTop: "1px solid var(--color-border)"
        }}>
            <span
                className="small"
                style={{
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "var(--space-4)"
                }}
            >
                Next Project
            </span>

            <Link
                to={`/work/${nextProject.category}/${nextProject.slug}`}
                className="next-project"
                style={{
                    textDecoration: "none",
                    color: "inherit"
                }}
            >
                {/* Preview Image - Left */}
                <div
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "var(--radius-lg)"
                    }}
                >
                    <img
                        src={nextProject.cover}
                        alt={nextProject.title}
                    />
                </div>

                {/* Text Block - Right */}
                <div>
                    <h3
                        className="h2"
                        style={{
                            marginBottom: "var(--space-2)"
                        }}
                    >
                        {nextProject.title}
                    </h3>
                    <p
                        className="small"
                        style={{
                            color: "var(--color-text-muted)",
                            textTransform: "capitalize",
                            marginBottom: "var(--space-4)"
                        }}
                    >
                        {nextCategoryLabel}{nextProject.year && ` — ${nextProject.year}`}
                    </p>
                    {nextProject.summary && (
                        <p style={{
                            color: "var(--color-text)",
                            marginBottom: "var(--space-4)",
                            lineHeight: "1.6"
                        }}>
                            {nextProject.summary}
                        </p>
                    )}
                    <span
                        style={{
                            color: "#6fe7e0",
                            fontWeight: "600",
                            fontSize: "0.875rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--space-2)"
                        }}
                    >
                        View Case Study
                        <span style={{ transition: "transform 0.2s ease" }}>→</span>
                    </span>
                </div>
            </Link>
        </div>
    );
}
