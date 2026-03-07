import { Link } from "react-router-dom";

export default function WorkCard({ item }) {
    return (
        <Link
            to={item.liveUrl ? item.liveUrl : `/work/${item.category}/${item.slug}`}
            className="workCard card workCard--branding"
            aria-label={item.title}
            target={item.liveUrl ? "_blank" : undefined}
            rel={item.liveUrl ? "noopener noreferrer" : undefined}
        >
            <div className="workCard__img-container">
                {item.cover ? (
                    <img
                        src={item.cover}
                        alt={item.title}
                        className="workCard__img"
                        loading="lazy"
                    />
                ) : (
                    <div className="workCard__img-placeholder" />
                )}
            </div>

            <div className="workCard__top">
                <div className="workCard__meta">
                    <div className="workCard__title">
                        {item.title}
                        {item.liveUrl && (
                            <span className="workCard__live-badge" title="Visit Live Site">↗</span>
                        )}
                    </div>
                    {item.year ? <div className="small">{item.year}</div> : null}
                </div>
            </div>

            {item.summary ? <p className="workCard__summary">{item.summary}</p> : null}

            {!!item.tags?.length && (
                <div className="workCard__tags">
                    {item.tags.slice(0, 4).map((t) => (
                        <span className="tag" key={t}>
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </Link>
    );
}