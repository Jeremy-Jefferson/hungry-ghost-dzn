import WorkGrid from "../../components/work/WorkGrid.jsx";
import { getWorkByCategory } from "../../data/work.js";

export default function WebDesign() {
    const items = getWorkByCategory("web-design");

    return (
        <section style={{ padding: "0 0 80px" }}>
            <div className="container stack">
                <h2 className="h2" style={{ marginBottom: "var(--space-5)" }}>Web Design</h2>
                <WorkGrid items={items} />
            </div>
        </section>
    );
}