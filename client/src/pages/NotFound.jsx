import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function NotFound() {
    usePageTitle("404");

    return (
        <main style={{ flex: 1 }}>
            <section className="page-section">
                <div className="container stack">
                    <div className="page-hero">
                        <span className="accent-label">404</span>
                        <h1 className="h1">Page not found.</h1>
                        <p className="page-lead">
                            That URL doesn't exist — or not yet, anyway.
                        </p>
                    </div>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                        <Link to="/" className="btn btn--primary">Back to Home</Link>
                        <Link to="/work" className="btn">View Work</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
