import { useParams, Link } from "react-router-dom";
import { getWorkBySlug } from "../../data/work.js";
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

                        {/* Meta bar */}
                        {item.content && (
                            <div className="cs-meta card">
                                <div className="cs-meta__item">
                                    <span className="cs-meta__label">Role</span>
                                    <span className="cs-meta__value">{item.content.role}</span>
                                </div>
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
                            </div>
                        )}

                        {/* Optimized image container */}
                        {item.cover && (
                            <div
                                className="card"
                                style={{
                                    padding: item.category === "brand-design" ? "var(--space-8)" : "0",
                                    background: item.category === "brand-design" ? "#050505" : "var(--color-card)",
                                    maxWidth: "900px",
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
                                    style={{
                                        display: "block",
                                        width: item.category === "brand-design" ? "auto" : "100%",
                                        maxWidth: item.category === "brand-design" ? "80%" : "none",
                                        maxHeight: item.category === "brand-design" ? "400px" : "none",
                                        height: "auto",
                                        borderRadius: item.category === "brand-design" ? "0" : "var(--radius-lg)"
                                    }}
                                />
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

                        {/* Footer nav */}
                        <div style={{ paddingTop: "var(--space-5)" }}>
                            <Link className="btn" to={backPath}>← Back to {categoryLabel}</Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
