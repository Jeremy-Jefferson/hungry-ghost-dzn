import WorkCard from "./WorkCard.jsx";

export default function WorkGrid({ items = [] }) {
    if (!items.length) {
        return (
            <div className="card" style={{ padding: "24px" }}>
                <p className="small">No projects here yet — we’re loading it up.</p>
            </div>
        );
    }

    return (
        <div className="workGrid">
            {items.map((item) => (
                <WorkCard key={item.slug} item={item} />
            ))}
        </div>
    );
}