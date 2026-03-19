import { Link } from "react-router-dom";
import logo from "../../assets/images/LOGO.webp";

const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Process", to: "/process" },
    { label: "Contact", to: "/contact" },
];

const WORK_LINKS = [
    { label: "Brand Systems", to: "/work/brand-systems" },
    { label: "UI/UX & Web Dev", to: "/work/ui-ux-web-dev" },
    { label: "All Work", to: "/work" },
];

const SOCIAL_LINKS = [
    // {
    //     name: "Facebook",
    //     url: "https://www.facebook.com/jeremyejefferson",
    //     icon: (
    //         <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    //             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    //         </svg>
    //     ),
    // },
    // {
    //     name: "X",
    //     url: "https://x.com/Vagrant_Mugen",
    //     icon: (
    //         <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    //             <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    //         </svg>
    //     ),
    // },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jeremyejefferson/",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    // {
    //     name: "Instagram",
    //     url: "https://www.instagram.com/lord_mugen/",
    //     icon: (
    //         <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    //             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    //         </svg>
    //     ),
    // },
    {
        name: "GitHub",
        url: "https://github.com/Jeremy-Jefferson",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__inner">
                {/* Brand stamp */}
                <section className="brand-stamp">
                    <div className="container">
                        <p className="brand-stamp__line">
                            Clarity. Precision. Systems that work.
                        </p>
                    </div>
                </section>

                {/* Top grid */}
                <div className="footer__top">

                    {/* Brand col */}
                    <div className="footer__brand">
                        <Link to="/" aria-label="Hungry Ghost DEV" className="footer__brandLink">
                            <img src={logo} alt="Hungry Ghost DEV - Home" className="footer__logo" />
                        </Link>
                        <p className="footer__tagline">
                            Brand systems and high-impact websites built for performance.
                        </p>
                        <div className="footer__cta">
                            <Link to="/contact" className="btn btn--primary">
                                Start a Project
                            </Link>
                        </div>
                    </div>

                    {/* Navigation col */}
                    <div className="footer__col">
                        <span className="footer__col-title">Navigation</span>
                        <div className="footer__links">
                            {NAV_LINKS.map((l) => (
                                <Link key={l.to} to={l.to} className="footer__link">
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Work col */}
                    <div className="footer__col">
                        <span className="footer__col-title">Work</span>
                        <div className="footer__links">
                            {WORK_LINKS.map((l) => (
                                <Link key={l.to} to={l.to} className="footer__link">
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact col */}
                    <div className="footer__col">
                        <span className="footer__col-title">Get in Touch</span>
                        <div className="footer__contact">
                            <a href="mailto:therealhungryghost@gmail.com" className="footer__contactLink">
                                therealhungryghost@gmail.com
                            </a>
                            <p className="footer__availability">
                                <span className="footer__status-dot" />
                                Available for new projects
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer__socials">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="footer__social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="footer__bottom">
                    <span className="footer__copy">
                        © {currentYear} Hungry Ghost DEV. All rights reserved.
                    </span>

                    <div className="footer__legal">
                        <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
                        <span style={{ margin: '0 8px' }}>•</span>
                        <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
                        <span style={{ margin: '0 8px' }}>•</span>
                        <span className="footer__legal-link">Designed & built by Jeremy E. Jefferson.</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}
