import WorkGrid from "../../components/work/WorkGrid.jsx";
import { getWorkByCategory } from "../../data/work.js";

export default function GraphicDesign() {
    const items = getWorkByCategory("graphic-design");

    return (
        <section style={{ padding: "0 0 64px" }}>
            <div className="container stack">
                <h2 className="h2">Graphic Design</h2>
                <WorkGrid items={items} />
            </div>
        </section>
    );
}