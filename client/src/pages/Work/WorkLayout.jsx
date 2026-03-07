import { Outlet } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle.js";

export default function WorkLayout() {
    usePageTitle("Work");
    return (
        <main>
            {/* Optional shared header for all /work pages */}
            <section style={{ padding: "64px 0" }}>
                <div className="container stack">
                    <h1 className="h1">Work</h1>
                    <p className="small">
                        A curated selection of brand identities, visual systems, and digital work.
                    </p>
                </div>
            </section>

            <Outlet />
        </main>
    );
}