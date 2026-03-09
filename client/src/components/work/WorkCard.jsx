import { Link } from "react-router-dom";

export default function WorkCard({ item }) {
    // Always link to case study page for consistent navigation
    const caseStudyUrl = `/work/${item.category}/${item.slug}`;

    return (
        <Link
            to={caseStudyUrl}
            className="workCard card workCard--branding"
            aria-label={`View ${item.title} case study`}
        >
            <div className="workCard__img-container">
                {item.cover ? (
                    <img
                        src={item.cover}
                        alt={item.title}
                        className="workCard__img"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="250"
                    />
                ) : (
                    <div className="workCard__img-placeholder" />
                )}
            </div>

            <div className="workCard__top">
                <div className="workCard__meta">
                    <span className="workCard__category">
                        {item.category.replace(/-/g, " ")}
                    </span>
                    <div className="workCard__title">
                        {item.title}
                    </div>
                    {item.year ? <div className="small">{item.year}</div> : null}
                </div>
            </div>

            {/* Summary for context - shows on card }*/}
            {item.summary && (
                <p className="workCard__summary">{item.summary}</p>
            )}

            <div className="workCard__footer">
                <span className="workCard__cta">
                    View Case Study
                    <span className="workCard__cta-arrow">→</span>
                </span>

                {!!item.tags?.length && (
                    <div className="workCard__tags">
                        {item.tags.slice(0, 3).map((t) => (
                            <span className="tag tag--teal" key={t}>
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}