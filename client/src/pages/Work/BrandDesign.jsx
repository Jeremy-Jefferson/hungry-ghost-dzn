import WorkGrid from "../../components/work/WorkGrid.jsx";
import { getWorkByCategory } from "../../data/work.js";

export default function BrandDesign() {
    const items = getWorkByCategory("brand-design");

    return (
        <section style={{ padding: "0 0 64px" }}>
            <div className="container stack">
                <h2 className="h2">Brand Design</h2>
                <WorkGrid items={items} />
            </div>
        </section>
    );
}