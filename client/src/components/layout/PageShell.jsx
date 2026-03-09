import { useState, useEffect } from "react";

export default function PageShell({ children }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / documentHeight) * 100;
            
            setScrollProgress(progress);
            setShowBackToTop(scrollTop > 400);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            {/* Skip link for accessibility */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            
            {/* Scroll progress indicator */}
            <div 
                className="scroll-progress" 
                style={{ width: `${scrollProgress}%` }} 
                aria-hidden="true"
            />
            
            {children}
            
            {/* Back to top button */}
            <button
                className={`back-to-top ${showBackToTop ? "visible" : ""}`}
                onClick={scrollToTop}
                aria-label="Back to top"
                title="Back to top"
            >
                ↑
            </button>
        </div>
    );
}