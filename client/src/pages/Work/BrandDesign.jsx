import WorkGrid from "../../components/work/WorkGrid.jsx";
import { getWorkByCategory } from "../../data/work.js";

export default function BrandDesign() {
    const items = getWorkByCategory("brand-design");

    return (
        <section style={{ padding: "0 0 80px" }}>
            <div className="container stack">
                <h2 className="h2" style={{ marginBottom: "var(--space-5)" }}>Brand Design</h2>
                <WorkGrid items={items} />
            </div>
        </section>
    );
}