import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";

const linkClass = ({ isActive }) =>
    `nav__link ${isActive ? "is-active" : ""}`;

const mobileLinkClass = ({ isActive }) =>
    `nav__mobileLink ${isActive ? "is-active" : ""}`;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        setMenuOpen(false);
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

    const close = () => setMenuOpen(false);

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

                        <div className="nav__dropdown">
                            <NavLink to="/work" className={linkClass}>Work</NavLink>
                            <div className="nav__dropdownMenu card">
                                <NavLink to="/work/brand-design" className="nav__sublink">
                                    Brand Design
                                </NavLink>
                                <NavLink to="/work/graphic-design" className="nav__sublink">
                                    Graphic Design
                                </NavLink>
                                <NavLink to="/work/web-design" className="nav__sublink">
                                    Web Design
                                </NavLink>
                            </div>
                        </div>

                        <NavLink to="/services" className={linkClass}>Services</NavLink>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                        <NavLink to="/process" className={linkClass}>Process</NavLink>
                        <NavLink to="/contact" className={linkClass}>Book / Contact</NavLink>
                    </nav>

                    {/* Hamburger — mobile only */}
                    <button
                        className="nav__hamburger"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((o) => !o)}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </header>

            {/* Mobile overlay */}
            {menuOpen && (
                <div className="nav__mobileOverlay" onClick={close}>
                    <nav
                        className="nav__mobileMenu card"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Mobile navigation"
                    >
                        <NavLink to="/" end className={mobileLinkClass}>Home</NavLink>

                        <div className="nav__mobileDivider" />

                        <NavLink to="/work" end className={mobileLinkClass}>Work</NavLink>
                        <div className="nav__mobileSub">
                            <NavLink to="/work/brand-design" className={mobileLinkClass}>
                                Brand Design
                            </NavLink>
                            <NavLink to="/work/graphic-design" className={mobileLinkClass}>
                                Graphic Design
                            </NavLink>
                            <NavLink to="/work/web-design" className={mobileLinkClass}>
                                Web Design
                            </NavLink>
                        </div>

                        <div className="nav__mobileDivider" />

                        <NavLink to="/services" className={mobileLinkClass}>Services</NavLink>
                        <NavLink to="/about" className={mobileLinkClass}>About</NavLink>
                        <NavLink to="/process" className={mobileLinkClass}>Process</NavLink>
                        <NavLink to="/contact" className={mobileLinkClass}>Book / Contact</NavLink>
                    </nav>
                </div>
            )}
        </>
    );
}
