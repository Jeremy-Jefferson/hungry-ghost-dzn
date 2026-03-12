import { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function WorkCard({ item }) {
    // Determine tag variant based on category
    const isDevCategory = item.category === "ui-ux-web-dev";
    const tagClass = isDevCategory ? "tag tag--dev" : "tag tag--design";
    
    // Always link to case study page for consistent navigation
    const caseStudyUrl = `/work/${item.category}/${item.slug}`;

    return (
        <Link
            to={caseStudyUrl}
            className="workCard card"
            aria-label={`View ${item.title} case study`}
        >
            <div className="workCard__img-container">
                {item.cover ? (
                    <img
                        src={item.cover}
                        alt={`Cover image for ${item.title}`}
                        className="workCard__img"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="250"
                    />
                ) : (
                    <div className="workCard__img-placeholder" />
                )}

                {/* Hover overlay with project info }*/}
                <div className="workCard__overlay">
                    <h3 className="workCard__overlay-title">{item.title}</h3>
                    {item.summary && (
                        <p className="workCard__overlay-summary">{item.summary}</p>
                    )}
                    {!!item.tags?.length && (
                        <div className="workCard__overlay-tags">
                            {item.tags.slice(0, 3).map((t) => (
                                <span className="workCard__overlay-tag" key={t}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="workCard__top">
                <div className="workCard__meta">
                    <span className="workCard__category">
                        {item.category.replace(/-/g, " ")}
                    </span>
                    <div className="workCard__title">
                        {item.title}
                    </div>
                    {item.year ? <div className="small" style={{ opacity: 0.5, fontSize: "14px" }}>{item.year}</div> : null}
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
                            <span className={tagClass} key={t}>
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}

export default memo(WorkCard);

WorkCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        summary: PropTypes.string,
        cover: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        featured: PropTypes.bool,
    }).isRequired,
};