export default function Skeleton({ type = "text", width, height, className = "" }) {
    const style = {
        width: width || (type === "image" ? "100%" : undefined),
        height: height || (type === "title" ? "32px" : type === "text" ? "16px" : type === "image" ? "200px" : undefined),
    };

    const classNames = `skeleton skeleton--${type} ${className}`.trim();

    return <div className={classNames} style={style} aria-hidden="true" />;
}

export function SkeletonCard() {
    return (
        <div className="card" style={{ padding: "var(--space-5)", display: "grid", gap: "var(--space-3)" }}>
            <Skeleton type="image" height="180px" />
            <Skeleton type="title" width="70%" />
            <Skeleton type="text" width="40%" />
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                <Skeleton type="text" width="60px" height="28px" />
                <Skeleton type="text" width="80px" height="28px" />
            </div>
        </div>
    );
}

export function SkeletonHero() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", padding: "var(--space-7) var(--space-8)" }}>
            <div style={{ display: "grid", gap: "var(--space-4)", alignContent: "start" }}>
                <Skeleton type="title" width="100%" height="52px" />
                <Skeleton type="text" width="90%" />
                <Skeleton type="text" width="85%" />
                <Skeleton type="text" width="60%" />
                <div style={{ display: "flex", gap: "12px", marginTop: "var(--space-3)" }}>
                    <Skeleton type="text" width="120px" height="44px" />
                    <Skeleton type="text" width="100px" height="44px" />
                </div>
            </div>
            <Skeleton type="image" height="400px" />
        </div>
    );
}
