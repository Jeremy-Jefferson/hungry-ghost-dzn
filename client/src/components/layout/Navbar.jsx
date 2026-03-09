import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/LOGO.webp";
import { useTheme } from "../../hooks/useTheme.jsx";

const linkClass = ({ isActive }) =>
    `nav__link ${isActive ? "is-active" : ""}`;

const mobileLinkClass = ({ isActive }) =>
    `nav__mobileLink ${isActive ? "is-active" : ""}`;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Close mobile menu on route change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setMenuOpen(false);
        setDropdownOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // Add scrolled class on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const close = () => setMenuOpen(false);

    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className={`nav ${scrolled ? "scrolled" : ""}`}>
                <div className="container nav__inner">
                    <Link to="/" className="nav__brand" aria-label="Hungry Ghost DZN">
                        <img src={logo} alt="Hungry Ghost DZN" className="nav__logo" />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="nav__links" aria-label="Primary navigation">
                        <NavLink to="/" end className={linkClass}>Home</NavLink>

                        <div
                            className="nav__dropdown"
                            ref={dropdownRef}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <NavLink
                                to="/work"
                                className={linkClass}
                                onClick={(e) => {
                                    if (location.pathname.startsWith('/work')) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                Work
                                <span className={`nav__dropdownArrow ${dropdownOpen ? "open" : ""}`}>▾</span>
                            </NavLink>
                            <div className={`nav__dropdownMenu card ${dropdownOpen ? "open" : ""}`}>
                                <NavLink to="/work/brand-design" className="nav__sublink">
                                    <span className="nav__sublink-icon">◆</span>
                                    Brand Design
                                </NavLink>
                                <NavLink to="/work/graphic-design" className="nav__sublink">
                                    <span className="nav__sublink-icon">◆</span>
                                    Graphic Design
                                </NavLink>
                                <NavLink to="/work/web-design" className="nav__sublink">
                                    <span className="nav__sublink-icon">◆</span>
                                    Web Design
                                </NavLink>
                                <div className="nav__dropdownDivider" />
                                <NavLink to="/work" className="nav__sublink nav__sublink--all">
                                    View All Work →
                                </NavLink>
                            </div>
                        </div>

                        <NavLink to="/services" className={linkClass}>Services</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                        <NavLink to="/process" className={linkClass}>Process</NavLink>
                        <NavLink to="/contact" className={linkClass}>Book / Contact</NavLink>
                        <button
                            className="nav__themeToggle"
                            onClick={toggleTheme}
                            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                            title={theme === "light" ? "Dark mode" : "Light mode"}
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </nav>

                    {/* Hamburger — mobile only */}
                    <button
                        className={`nav__hamburger ${menuOpen ? "open" : ""}`}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((o) => !o)}
                    >
                        <span className="nav__hamburger-line" />
                        <span className="nav__hamburger-line" />
                        <span className="nav__hamburger-line" />
                    </button>
                </div>
            </header>

            {/* Mobile overlay */}
            <div className={`nav__mobileOverlay ${menuOpen ? "open" : ""}`} onClick={close}>
                <nav
                    className="nav__mobileMenu card"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="Mobile navigation"
                >
                    <div className="nav__mobileHeader">
                        <Link to="/" onClick={close}>
                            <img src={logo} alt="Hungry Ghost DZN" className="nav__mobileLogo" />
                        </Link>
                        <button
                            className="nav__mobileClose"
                            onClick={close}
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="nav__mobileLinks">
                        <NavLink to="/" end className={mobileLinkClass} onClick={close}>Home</NavLink>

                        <div className="nav__mobileDivider" />

                        <div className="nav__mobileSection">
                            <span className="nav__mobileSectionTitle">Work</span>
                            <NavLink to="/work" end className={mobileLinkClass} onClick={close}>
                                All Projects
                            </NavLink>
                            <NavLink to="/work/brand-design" className={mobileLinkClass} onClick={close}>
                                Brand Design
                            </NavLink>
                            <NavLink to="/work/graphic-design" className={mobileLinkClass} onClick={close}>
                                Graphic Design
                            </NavLink>
                            <NavLink to="/work/web-design" className={mobileLinkClass} onClick={close}>
                                Web Design
                            </NavLink>
                        </div>

                        <div className="nav__mobileDivider" />

                        <NavLink to="/services" className={mobileLinkClass} onClick={close}>Services</NavLink>
                        <NavLink to="/about" className={mobileLinkClass} onClick={close}>About</NavLink>
                        <NavLink to="/process" className={mobileLinkClass} onClick={close}>Process</NavLink>
                        <NavLink to="/contact" className={mobileLinkClass} onClick={close}>Book / Contact</NavLink>
                    </div>

                    <div className="nav__mobileFooter">
                        <button
                            className="nav__themeToggleMobile"
                            onClick={() => { toggleTheme(); }}
                        >
                            {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}
