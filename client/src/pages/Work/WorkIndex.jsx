import { Link } from "react-router-dom";
import { WORK_CATEGORIES, getWorkByCategory } from "../../data/work.js";

export default function WorkIndex() {
    return (
        <section style={{ padding: "0 0 80px" }}>
            <div className="container stack">
                <div className="workCats">
                    {WORK_CATEGORIES.map((cat) => {
                        const count = getWorkByCategory(cat.key).length;

                        return (
                            <Link key={cat.key} to={`/work/${cat.key}`} className="workCat card">
                                <div className="workCat__top">
                                    <h2 className="h2 workCat__title">{cat.title}</h2>
                                    <span className="tag tag--teal">{count} projects</span>
                                </div>

                                <p className="workCat__blurb">{cat.blurb}</p>

                                <div className="workCat__cta small">
                                    View {cat.title} →
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}