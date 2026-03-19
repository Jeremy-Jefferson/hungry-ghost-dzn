import { useState, useEffect, useRef, useCallback, useMemo, useSyncExternalStore } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/LOGO.webp";

// Swipe configuration
const SWIPE_THRESHOLD = 100; // pixels
const SWIPE_VELOCITY_THRESHOLD = 0.3; // pixels/ms
const IS_TOUCH_CAPABLE = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const linkClass = ({ isActive }) =>
    `nav__link ${isActive ? "is-active" : ""}`;

const mobileLinkClass = ({ isActive }) =>
    `nav__mobileLink ${isActive ? "is-active" : ""}`;

// The actual navbar implementation. It will be re-mounted on route changes,
// resetting its internal state (e.g., menuOpen, dropdownOpen).
function NavbarImpl({ scrolled }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [swipeTranslateX, setSwipeTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Touch start position
    const touchStartPos = useRef({ x: 0, y: 0 });
    const menuRef = useRef(null);

    // Check for prefers-reduced-motion using useSyncExternalStore for SSR safety
    const prefersReducedMotion = useSyncExternalStore(
        (callback) => {
            const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
            mediaQuery.addEventListener('change', callback);
            return () => mediaQuery.removeEventListener('change', callback);
        },
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        () => false // default for SSR
    );

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    // Close mobile menu on Escape key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (menuOpen && e.key === 'Escape') {
                setMenuOpen(false);
                // Return focus to hamburger button for accessibility
                const hamburger = document.querySelector('.nav__hamburger');
                if (hamburger) hamburger.focus();
            }
        };
        
        if (menuOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [menuOpen]);

    // Touch event handlers for swipe-to-close
    const handleTouchStart = useCallback((e) => {
        if (!IS_TOUCH_CAPABLE || prefersReducedMotion || !menuOpen) return;
        const touch = e.touches[0];
        touchStartPos.current = { x: touch.clientX, y: touch.clientY };
        setIsDragging(true);
        setSwipeTranslateX(0);
    }, [menuOpen, prefersReducedMotion]);

    const handleTouchMove = useCallback((e) => {
        if (!isDragging || !menuOpen) return;
        const touch = e.touches[0];
        const startX = touchStartPos.current.x;
        
        // Calculate horizontal swipe distance (only from left edge)
        const deltaX = touch.clientX - startX;

        // Only allow swiping from left to right (positive deltaX)
        if (deltaX > 0) {
            // Apply resistance and limit to menu width
            const maxTranslate = 320; // approximate menu width
            const progress = Math.min(deltaX / maxTranslate, 1);
            const translateX = deltaX * (1 - progress * 0.5); // Add resistance
            setSwipeTranslateX(translateX);
        } else {
            setSwipeTranslateX(0);
        }
    }, [isDragging, menuOpen]);

    const handleTouchEnd = useCallback(() => {
        if (!isDragging || !menuOpen) return;
        
        // Check if swipe threshold met
        const shouldClose = swipeTranslateX > SWIPE_THRESHOLD;

        if (shouldClose) {
            setMenuOpen(false);
        }

        setIsDragging(false);
        setSwipeTranslateX(0);
    }, [isDragging, menuOpen, swipeTranslateX]);

    // Clean up touch listeners
    useEffect(() => {
        const menu = menuRef.current;
        if (!menu || !IS_TOUCH_CAPABLE) return;

        menu.addEventListener('touchstart', handleTouchStart, { passive: true });
        menu.addEventListener('touchmove', handleTouchMove, { passive: true });
        menu.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            menu.removeEventListener('touchstart', handleTouchStart);
            menu.removeEventListener('touchmove', handleTouchMove);
            menu.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

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

    // Visual feedback style for swipe
    const swipeStyle = useMemo(() => {
        if (prefersReducedMotion || !isDragging || !menuOpen) {
            return {};
        }
        return {
            transform: `translateX(${swipeTranslateX}px)`,
            transition: 'none',
        };
    }, [isDragging, menuOpen, swipeTranslateX, prefersReducedMotion]);

    // Get overlay opacity based on swipe progress
    const overlayStyle = useMemo(() => {
        if (prefersReducedMotion || !isDragging || !menuOpen) {
            return {};
        }
        const progress = Math.min(swipeTranslateX / SWIPE_THRESHOLD, 1);
        return {
            backgroundColor: `rgba(0, 0, 0, ${0.7 * (1 - progress * 0.5)})`,
        };
    }, [isDragging, menuOpen, swipeTranslateX, prefersReducedMotion]);

    // Close handler
    const close = useCallback(() => setMenuOpen(false), []);

    return (
        <>
            <header className={`nav ${scrolled ? "scrolled" : ""}`}>
                <div className="container nav__inner">
                    <Link to="/" className="nav__brand" aria-label="Hungry Ghost DEV">
                        <img src={logo} alt="Hungry Ghost DEV" className="nav__logo" />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="nav__links" aria-label="Primary navigation">
                        <NavLink to="/" end className={linkClass}>Home</NavLink>

                        <div
                            className="nav__dropdown"
                            ref={dropdownRef}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                            onFocus={() => setDropdownOpen(true)}
                        >
                            <NavLink
                                to="/work"
                                className={linkClass}
                                onClick={(e) => {
                                    if (location.pathname.startsWith('/work')) {
                                        e.preventDefault();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setDropdownOpen((prev) => !prev);
                                    }
                                }}
                                aria-expanded={dropdownOpen}
                                aria-haspopup="true"
                            >
                                Work
                                <span className={`nav__dropdownArrow ${dropdownOpen ? "open" : ""}`}>▾</span>
                            </NavLink>
                            <div className={`nav__dropdownMenu card ${dropdownOpen ? "open" : ""}`}>
                                <NavLink to="/work/brand-systems" className="nav__sublink">
                                    <span className="nav__sublink-icon">◆</span>
                                    Brand Systems
                                </NavLink>
                                <NavLink to="/work/ui-ux-web-dev" className="nav__sublink">
                                    <span className="nav__sublink-icon">◆</span>
                                    UI/UX & Web Dev
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
            <div 
                className={`nav__mobileOverlay ${menuOpen ? "open" : ""}`} 
                onClick={close}
                style={overlayStyle}
            >
                <nav
                    ref={menuRef}
                    className="nav__mobileMenu card"
                    onClick={(e) => e.stopPropagation()}
                    style={swipeStyle}
                    aria-label="Mobile navigation"
                >
                    <div className="nav__mobileHeader">
                        <Link to="/" onClick={close}>
                            <img src={logo} alt="Hungry Ghost DEV" className="nav__mobileLogo" />
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
                            <NavLink to="/work/brand-systems" className={mobileLinkClass} onClick={close}>
                                Brand Systems
                            </NavLink>
                            <NavLink to="/work/ui-ux-web-dev" className={mobileLinkClass} onClick={close}>
                                UI/UX & Web Dev
                            </NavLink>
                        </div>

                        <div className="nav__mobileDivider" />

                        <NavLink to="/services" className={mobileLinkClass} onClick={close}>Services</NavLink>
                        <NavLink to="/about" className={mobileLinkClass} onClick={close}>About</NavLink>
                        <NavLink to="/process" className={mobileLinkClass} onClick={close}>Process</NavLink>
                        <NavLink to="/contact" className={mobileLinkClass} onClick={close}>Book / Contact</NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}

// This shell component manages state that persists across route changes (e.g., scroll position).
// It passes the scrolled state to the implementation component.
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Add scrolled class on scroll. This state persists across route changes.
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Use key on NavbarImpl to force re-render on route change
    // This ensures nav state updates when navigating between pages
    return <NavbarImpl scrolled={scrolled} key={location.pathname} />;
}
