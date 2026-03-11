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
                                    padding: item.category === "brand-systems" ? "var(--space-6)" : "0",
                                    background: item.category === "brand-systems" ? "#050505" : "var(--color-card)",
                                    maxWidth: "1200px",
                                    width: "100%",
                                    overflow: "hidden",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "0 auto var(--space-6)",
                                    borderRadius: "var(--radius-lg)"
                                }}
                            >
                                <img
                                    src={item.cover}
                                    alt={`Cover design for ${item.title}`}
                                    loading="lazy"
                                    decoding="async"
                                    style={{
                                        display: "block",
                                        width: "100%",
                                        maxWidth: item.category === "brand-systems" ? "600px" : "none",
                                        maxHeight: "600px",
                                        height: "auto",
                                        objectFit: "contain",
                                        borderRadius: item.category === "brand-systems" ? "var(--radius-md)" : "var(--radius-lg)"
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
                                {/* Process Indicators - Visual Stepper */}
                                {item.content.processSteps && item.content.processSteps.length > 0 && (
                                    <div className="cs-process-stepper" style={{ 
                                        marginBottom: "var(--space-6)",
                                        padding: "var(--space-4)",
                                        background: "var(--color-surface)",
                                        borderRadius: "var(--radius-lg)"
                                    }}>
                                        <div style={{ 
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center",
                                            gap: "var(--space-2)",
                                            flexWrap: "wrap"
                                        }}>
                                            {item.content.processSteps.map((step, idx) => (
                                                <span key={idx}>
                                                    <span style={{
                                                        padding: "var(--space-2) var(--space-3)",
                                                        background: "var(--color-card)",
                                                        color: "var(--color-text)",
                                                        borderRadius: "var(--radius-md)",
                                                        fontSize: "var(--text-sm)",
                                                        fontWeight: "var(--font-bold)"
                                                    }}>
                                                        {step}
                                                    </span>
                                                    {idx < item.content.processSteps.length - 1 && (
                                                        <span style={{ color: "var(--color-text-muted)", margin: "0 var(--space-2)" }}>→</span>
                                                    )}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Standard sections */}
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

                        {/* Brand System Section - For Brand Projects */}
                        {item.content?.brandSystem && (
                            <div className="cs-brand-system" style={{ marginTop: "var(--space-6)" }}>
                                <h3 className="cs-section__title" style={{ 
                                    fontSize: "var(--text-2xl)",
                                    marginBottom: "var(--space-5)"
                                }}>Brand System</h3>
                                
                                {/* Logo Identity */}
                                {item.content.brandSystem.logo && (
                                    <div className="cs-brand-subsection" style={{ marginBottom: "var(--space-5)" }}>
                                        <div className="card" style={{ padding: "var(--space-5)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>
                                                {item.content.brandSystem.logo.title}
                                            </h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                                                {item.content.brandSystem.logo.description}
                                            </p>
                                            {item.content.brandSystem.logo.colors && (
                                                <div style={{ marginBottom: "var(--space-3)" }}>
                                                    <span className="small" style={{ fontWeight: "var(--font-bold)", display: "block", marginBottom: "var(--space-2)" }}>Color System:</span>
                                                    <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                                                        {Array.isArray(item.content.brandSystem.logo.colors) 
                                                            ? item.content.brandSystem.logo.colors.map((color, idx) => (
                                                                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                                                                    <span style={{
                                                                        width: "24px",
                                                                        height: "24px",
                                                                        borderRadius: "var(--radius-sm)",
                                                                        background: color.value,
                                                                        border: color.name === "White" ? "1px solid var(--color-border)" : "none"
                                                                    }}></span>
                                                                    <span className="small">{color.name} — {color.value}</span>
                                                                </div>
                                                            ))
                                                            : Object.entries(item.content.brandSystem.logo.colors).map(([key, value]) => (
                                                                <div key={key} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                                                                    <span style={{
                                                                        width: "24px",
                                                                        height: "24px",
                                                                        borderRadius: "var(--radius-sm)",
                                                                        background: key === 'primary' ? '#6B4C9A' : key === 'secondary' ? '#4CAF50' : key === 'accent' ? '#FFFFFF' : '#1A1A1A',
                                                                        border: key === 'accent' ? '1px solid var(--color-border)' : 'none'
                                                                    }}></span>
                                                                    <span className="small">{value}</span>
                                                                </div>
                                                            ))}
                                                    </div>
                                                </div>
                                            )}
                                            {item.content.brandSystem.logo.cover && (
                                                <img 
                                                    src={item.content.brandSystem.logo.cover} 
                                                    alt="Logo Identity"
                                                    style={{ 
                                                        width: "100%", 
                                                        maxWidth: "300px", 
                                                        marginTop: "var(--space-3)",
                                                        borderRadius: "var(--radius-md)"
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Typography */}
                                {item.content.brandSystem.typography && (
                                    <div className="cs-brand-subsection" style={{ marginBottom: "var(--space-5)" }}>
                                        <div className="card" style={{ padding: "var(--space-5)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>
                                                {item.content.brandSystem.typography.title}
                                            </h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-3)" }}>
                                                {item.content.brandSystem.typography.description}
                                            </p>
                                            <div style={{ display: "flex", gap: "var(--space-4)" }}>
                                                {item.content.brandSystem.typography.headings && (
                                                    <div>
                                                        <span className="small" style={{ fontWeight: "var(--font-bold)", display: "block", marginBottom: "var(--space-1)" }}>Headings:</span>
                                                        <span className="small">{item.content.brandSystem.typography.headings}</span>
                                                    </div>
                                                )}
                                                {item.content.brandSystem.typography.body && (
                                                    <div>
                                                        <span className="small" style={{ fontWeight: "var(--font-bold)", display: "block", marginBottom: "var(--space-1)" }}>Body:</span>
                                                        <span className="small">{item.content.brandSystem.typography.body}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Applications / Environmental Graphics - Supports both legacy (environmental) and new (applications) */}
                                {item.content.brandSystem.applications && item.content.brandSystem.applications.map((app, appIdx) => (
                                    <div key={appIdx} className="cs-brand-subsection" style={{ marginBottom: "var(--space-5)" }}>
                                        <div className="card" style={{ padding: "var(--space-5)" }}>
                                            {app.type && (
                                                <div style={{ fontSize: "var(--text-xs)", fontWeight: "var(--font-bold)", color: "var(--color-accent-teal)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "var(--space-2)" }}>
                                                    {app.type}
                                                </div>
                                            )}
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>
                                                {app.title}
                                            </h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-3)" }}>
                                                {app.description}
                                            </p>
                                            {app.cover && (
                                                <img 
                                                    src={app.cover} 
                                                    alt={app.title}
                                                    style={{ 
                                                        width: "100%", 
                                                        borderRadius: "var(--radius-md)"
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* Legacy environmental support */}
                                {item.content.brandSystem.environmental && !item.content.brandSystem.applications && (
                                    <div className="cs-brand-subsection" style={{ marginBottom: "var(--space-5)" }}>
                                        <div className="card" style={{ padding: "var(--space-5)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>
                                                {item.content.brandSystem.environmental.title}
                                            </h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-3)" }}>
                                                {item.content.brandSystem.environmental.description}
                                            </p>
                                            {item.content.brandSystem.environmental.cover && (
                                                <img 
                                                    src={item.content.brandSystem.environmental.cover} 
                                                    alt="Environmental Graphics"
                                                    style={{ 
                                                        width: "100%", 
                                                        borderRadius: "var(--radius-md)"
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* UX Strategy Section - Supports both legacy format (uxStrategy) and new format (uiux) */}
                        {(item.content?.uxStrategy || item.content?.uiux) && (
                            <div className="cs-ux-strategy" style={{ marginTop: "var(--space-6)" }}>
                                <h3 className="cs-section__title" style={{ 
                                    fontSize: "var(--text-2xl)",
                                    marginBottom: "var(--space-5)"
                                }}>UX Strategy</h3>
                                
                                <div className="card" style={{ padding: "var(--space-5)" }}>
                                    {(item.content.uiux?.userGoals || item.content.uxStrategy?.userGoals) && (
                                        <div style={{ marginBottom: "var(--space-4)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-3)" }}>User Goals</h4>
                                            <ul style={{ 
                                                display: "grid", 
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                                gap: "var(--space-2)",
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0
                                            }}>
                                                {(item.content.uiux?.userGoals || item.content.uxStrategy?.userGoals).map((goal, idx) => (
                                                    <li key={idx} className="small" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                                                        <span style={{ color: "var(--color-accent-teal)" }}>✓</span>
                                                        {goal}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {(item.content.uiux?.navigation || item.content.uxStrategy?.navigation) && (
                                        <div style={{ marginBottom: "var(--space-4)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Navigation Strategy</h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                                {item.content.uiux?.navigation || item.content.uxStrategy?.navigation}
                                            </p>
                                        </div>
                                    )}

                                    {(item.content.uiux?.informationArchitecture || item.content.uxStrategy?.informationArchitecture) && (
                                        <div>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Information Architecture</h4>
                                            <code className="small" style={{ 
                                                background: "var(--color-surface)", 
                                                padding: "var(--space-2) var(--space-3)",
                                                borderRadius: "var(--radius-md)",
                                                display: "inline-block"
                                            }}>
                                                {item.content.uiux?.informationArchitecture || item.content.uxStrategy?.informationArchitecture}
                                            </code>
                                        </div>
                                    )}

                                    {(item.content.uiux?.cover || item.content.uxStrategy?.cover) && (
                                        <img 
                                            src={item.content.uiux?.cover || item.content.uxStrategy?.cover} 
                                            alt="UX Strategy"
                                            style={{ 
                                                width: "100%", 
                                                marginTop: "var(--space-4)",
                                                borderRadius: "var(--radius-md)"
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Interface Design Section - Supports both legacy format (interfaceDesign) and new format (uiux) */}
                        {(item.content?.interfaceDesign || item.content?.uiux) && (
                            <div className="cs-interface" style={{ marginTop: "var(--space-6)" }}>
                                <h3 className="cs-section__title" style={{ 
                                    fontSize: "var(--text-2xl)",
                                    marginBottom: "var(--space-5)"
                                }}>Interface Design</h3>
                                
                                <div className="card" style={{ padding: "var(--space-5)" }}>
                                    {(item.content.uiux?.visualHierarchy || item.content.interfaceDesign?.visualHierarchy) && (
                                        <div style={{ marginBottom: "var(--space-4)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Visual Hierarchy</h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                                {item.content.uiux?.visualHierarchy || item.content.interfaceDesign?.visualHierarchy}
                                            </p>
                                        </div>
                                    )}

                                    {(item.content.uiux?.components || item.content.interfaceDesign?.components) && (
                                        <div style={{ marginBottom: "var(--space-4)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Components</h4>
                                            <ul style={{ 
                                                display: "grid", 
                                                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                                                gap: "var(--space-2)",
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0
                                            }}>
                                                {(item.content.uiux?.components || item.content.interfaceDesign?.components).map((comp, idx) => (
                                                    <li key={idx} className="small" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                                                        <span style={{ color: "var(--color-accent-magenta)" }}>•</span>
                                                        {comp}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {(item.content.uiux?.responsive || item.content.interfaceDesign?.responsive) && (
                                        <div>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Responsive Design</h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                                {item.content.uiux?.responsive || item.content.interfaceDesign?.responsive}
                                            </p>
                                        </div>
                                    )}

                                    {(item.content.uiux?.cover || item.content.interfaceDesign?.cover) && (
                                        <img 
                                            src={item.content.uiux?.cover || item.content.interfaceDesign?.cover} 
                                            alt="Interface Design"
                                            style={{ 
                                                width: "100%", 
                                                marginTop: "var(--space-4)",
                                                borderRadius: "var(--radius-md)"
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Development Section */}
                        {item.content?.development && (
                            <div className="cs-development" style={{ marginTop: "var(--space-6)" }}>
                                <h3 className="cs-section__title" style={{ 
                                    fontSize: "var(--text-2xl)",
                                    marginBottom: "var(--space-5)"
                                }}>Development</h3>
                                
                                <div className="card" style={{ padding: "var(--space-5)" }}>
                                    {item.content.development.architecture && (
                                        <div style={{ marginBottom: "var(--space-4)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Frontend Architecture</h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                                {item.content.development.architecture}
                                            </p>
                                        </div>
                                    )}

                                    {item.content.development.features && (
                                        <div style={{ marginBottom: "var(--space-4)" }}>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Key Features</h4>
                                            <ul style={{ 
                                                display: "grid", 
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                                gap: "var(--space-2)",
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0
                                            }}>
                                                {item.content.development.features.map((feature, idx) => (
                                                    <li key={idx} className="small" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                                                        <span style={{ color: "var(--color-accent-teal)" }}>✓</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {item.content.development.performance && (
                                        <div>
                                            <h4 className="h4" style={{ marginBottom: "var(--space-2)" }}>Performance</h4>
                                            <p className="small" style={{ color: "var(--color-text-muted)" }}>
                                                {item.content.development.performance}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Tools Section - For Brand Projects / Tech Stack - For Web Projects */}
                        {item.content?.techStack && item.content.techStack.length > 0 && (
                            <div className="cs-tech-stack" style={{ marginTop: "var(--space-6)" }}>
                                <h3 className="cs-section__title" style={{ 
                                    fontSize: "var(--text-xl)",
                                    marginBottom: "var(--space-4)"
                                }}>{item.category === "brand-systems" ? "Tools" : "Tech Stack"}</h3>
                                <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                                    {item.content.techStack.map((tech, idx) => (
                                        <span 
                                            key={idx} 
                                            className="tag"
                                            style={{ 
                                                padding: "var(--space-2) var(--space-4)",
                                                background: "var(--color-surface)",
                                                border: "1px solid var(--color-border)"
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
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

                        {/* Process Stages - For Web Projects */}
                        {item.content?.stages && item.content.stages.length > 0 && (
                            <div className="cs-stages" style={{ marginTop: "var(--space-6)" }}>
                                <h3 className="cs-stages__title" style={{ 
                                    marginBottom: "var(--space-5)",
                                    fontSize: "var(--text-2xl)",
                                    fontWeight: "var(--font-bold)"
                                }}>The Process</h3>
                                
                                <div style={{ display: "grid", gap: "var(--space-5)" }}>
                                    {item.content.stages.map((stage, idx) => (
                                        <div 
                                            key={idx} 
                                            className="card"
                                            style={{ 
                                                padding: "var(--space-5)",
                                                borderLeft: idx === 0 ? "4px solid var(--color-accent-teal)" : "4px solid var(--color-accent-magenta)"
                                            }}
                                        >
                                            <div style={{ 
                                                display: "flex", 
                                                alignItems: "baseline", 
                                                gap: "var(--space-3)",
                                                marginBottom: "var(--space-3)"
                                            }}>
                                                <span style={{
                                                    fontSize: "var(--text-sm)",
                                                    fontWeight: "var(--font-bold)",
                                                    color: idx === 0 ? "var(--color-accent-teal)" : "var(--color-accent-magenta)",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.1em"
                                                }}>
                                                    Stage {idx + 1}
                                                </span>
                                                <h4 className="h3" style={{ margin: 0 }}>{stage.stage}</h4>
                                            </div>
                                            <p className="small" style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                                                {stage.description}
                                            </p>
                                            
                                            {/* Stage items as checkmarks */}
                                            <ul style={{ 
                                                display: "grid", 
                                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                                gap: "var(--space-2)",
                                                listStyle: "none",
                                                padding: 0,
                                                margin: 0
                                            }}>
                                                {stage.items?.map((itemText, itemIdx) => (
                                                    <li 
                                                        key={itemIdx} 
                                                        className="small"
                                                        style={{ 
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "var(--space-2)"
                                                        }}
                                                    >
                                                        <span style={{ color: "var(--color-accent-teal)" }}>✓</span>
                                                        {itemText}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Related Assets - For Brand Projects */}
                        {(item.content?.relatedAssets || item.content?.brandComponents) && (
                            <div className="cs-related" style={{ marginTop: "var(--space-6)" }}>
                                <h3 className="cs-related__title" style={{ 
                                    marginBottom: "var(--space-4)",
                                    fontSize: "var(--text-2xl)",
                                    fontWeight: "var(--font-bold)"
                                }}>
                                    {item.content?.brandComponents ? "Brand Components" : "Related Assets"}
                                </h3>
                                <p className="small" style={{ color: "var(--color-text-muted)", marginBottom: "var(--space-4)" }}>
                                    This project connects with other work — showing how brand design spans across different touchpoints.
                                </p>
                                
                                <div style={{ 
                                    display: "grid", 
                                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                    gap: "var(--space-4)"
                                }}>
                                    {(item.content?.brandComponents || item.content?.relatedAssets || []).map((asset, idx) => (
                                        <Link 
                                            key={idx}
                                            to={`/work/${asset.slug}`}
                                            className="card"
                                            style={{ 
                                                padding: 0,
                                                overflow: "hidden",
                                                textDecoration: "none",
                                                color: "inherit",
                                                transition: "transform 0.2s ease, box-shadow 0.2s ease"
                                            }}
                                        >
                                            <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                                                <img 
                                                    src={asset.cover} 
                                                    alt={asset.title}
                                                    style={{ 
                                                        width: "100%", 
                                                        height: "100%", 
                                                        objectFit: "cover" 
                                                    }}
                                                />
                                            </div>
                                            <div style={{ padding: "var(--space-4)" }}>
                                                <div style={{ 
                                                    fontSize: "var(--text-xs)",
                                                    fontWeight: "var(--font-bold)",
                                                    color: "var(--color-accent-teal)",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.1em",
                                                    marginBottom: "var(--space-2)"
                                                }}>
                                                    {asset.component || asset.type}
                                                </div>
                                                <h4 className="h4" style={{ margin: 0 }}>{asset.title}</h4>
                                                {asset.description && (
                                                    <p className="small" style={{ color: "var(--color-text-muted)", marginTop: "var(--space-2)" }}>
                                                        {asset.description}
                                                    </p>
                                                )}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
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
    
    // Return null if no work exists
    if (!allWork || allWork.length === 0) {
        return null;
    }
    
    const currentIndex = allWork.findIndex((p) => p.slug === currentSlug);
    const nextIndex = (currentIndex + 1) % allWork.length;
    const nextProject = allWork[nextIndex];

    // Guard against undefined nextProject
    if (!nextProject) {
        return null;
    }

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
