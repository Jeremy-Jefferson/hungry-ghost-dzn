/*
  HUNGRY GHOST DEV — Work Mock Data
  
  Category keys:
    - brand-systems
    - ui-ux-web-dev

  Structure notes:
    - Primary work items are case studies
    - Supporting assets live inside related case studies
    - Brand projects emphasize identity systems and applications
    - Web projects emphasize UI/UX thinking and development execution
*/

export const work = [
    /* ===============================
       UI/UX & WEB DEVELOPMENT
    =============================== */

    {
        slug: "hungry-ghost-dev-site",
        title: "Hungry Ghost DEV",
        category: "ui-ux-web-dev",
        year: 2026,
        featured: true,
        summary: "Studio brand system and high-impact portfolio built with React + Vite.",
        tags: ["React", "Vite", "Design System", "Brand Strategy", "Web Development"],
        cover: "/images/work/WEB/HGDZN.webp",

        content: {
            role: "Brand Direction, UI/UX, Front-End Development",
            client: "Hungry Ghost DEV",
            overview:
                "Hungry Ghost DEV was created as the digital foundation for a development studio focused on intentional brand systems and high-impact websites. The site needed to function as both a brand statement and a scalable portfolio platform — one capable of showcasing services, case studies, and future growth without feeling generic or templated.",
            challenge:
                "The core challenge was building a site that felt sharp, aggressive, and premium while still maintaining strong usability, clear hierarchy, and a polished user experience. It needed enough visual personality to stand apart from typical portfolio sites, but enough restraint and structure to remain credible, readable, and conversion-focused.",
            solution:
                "I designed and developed the site as a modular system using React and Vite, with reusable layout patterns, scalable content structure, and a token-based visual foundation for consistency across typography, spacing, color, and component behavior. Every section was built to support clarity, flexibility, and future expansion, allowing the platform to grow into a more complete studio website without requiring a full redesign.",
            outcome:
                "The final result is a strong studio-ready web presence that balances visual impact with usability and structure. It establishes a clear brand point of view, creates a foundation for future case studies and service pages, and positions Hungry Ghost DEV as a serious creative practice rather than just a personal portfolio.",
            processSteps: ["Strategy", "UX", "UI", "Development", "Launch"],

            uiux: {
                userGoals: [
                    "Clearly present services and capabilities",
                    "Showcase portfolio case studies effectively",
                    "Convert visitors into leads",
                    "Establish studio credibility and personality"
                ],
                navigation: "Clear, intuitive navigation with clear CTAs",
                informationArchitecture: "Home → Services → Work → About → Contact",
                visualHierarchy: "Bold typography, strong spacing, strategic use of color to guide attention",
                components: [
                    "Hero section with brand statement",
                    "Services grid",
                    "Featured case studies",
                    "About section",
                    "Contact form"
                ],
                responsive: "Mobile-first responsive design"
            },

            development: {
                architecture: "React + Vite with modular component structure",
                features: [
                    "Component-based architecture",
                    "Custom animations and transitions",
                    "Performance optimization",
                    "SEO implementation",
                    "Accessibility compliance"
                ],
                performance: "Built with Vite for fast builds and optimal page loads"
            },

            techStack: ["React", "Vite", "JavaScript", "CSS", "Vercel"],

            gallery: ["/images/work/WEB/HGDZN.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "portfolio-showcase",
        title: "Developer Portfolio Platform",
        category: "ui-ux-web-dev",
        year: 2023,
        featured: false,
        summary: "Personal developer portfolio designed for clear project presentation and fast navigation.",
        tags: ["React", "Portfolio Site", "Responsive UI", "Web Development"],
        cover: "/images/work/WEB/Portfolio.webp",
        liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",

        content: {
            role: "UI/UX Design, Front-End Development",
            client: "Developer Portfolio",
            overview:
                "This project is a personal developer portfolio built to present projects, experience, and contact information in a clear and approachable way. The interface prioritizes readability, quick navigation, and visual hierarchy so visitors can easily explore work samples and understand the developer's skill set.",
            challenge:
                "Portfolio websites often become cluttered or overly decorative, which can make it harder for hiring managers or collaborators to quickly understand a developer's work. The challenge was designing a layout that feels visually engaging while remaining clean, structured, and easy to scan.",
            solution:
                "The interface uses a simple responsive layout with strong typographic hierarchy and clear section separation to guide users through projects, background information, and contact details. Consistent spacing, restrained color usage, and predictable navigation patterns keep the experience focused on the work itself rather than visual distractions.",
            outcome:
                "The final result is a clear and functional developer portfolio that showcases projects while maintaining a smooth browsing experience across devices. The layout can easily expand to support additional projects and case studies while keeping the structure simple and readable.",
            processSteps: ["UX Strategy", "UI Design", "Development", "Launch"],

            uiux: {
                userGoals: [
                    "Quickly understand developer's skills",
                    "View project samples easily",
                    "Learn about background and experience",
                    "Contact the developer"
                ],
                navigation: "Simple single-page scroll with section links",
                informationArchitecture: "Hero → Projects → About → Contact",
                visualHierarchy: "Clean typography with clear section separation",
                components: [
                    "Hero with intro",
                    "Project cards",
                    "About section",
                    "Contact information"
                ],
                responsive: "Responsive grid layout"
            },

            development: {
                architecture: "React single-page application",
                features: [
                    "Responsive grid system",
                    "Fast page loads",
                    "Contact information display"
                ],
                performance: "Optimized for fast loading"
            },

            techStack: ["React", "Vercel", "CSS"],

            gallery: ["/images/work/WEB/Portfolio.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "sapphire-site-concept",
        title: "Sapphire Developments — Web Concept",
        category: "ui-ux-web-dev",
        year: 2023,
        featured: false,
        summary: "Luxury real estate browsing concept designed for discovering high-end homes and vacation properties.",
        tags: ["Concept", "Luxury Real Estate", "UI Design", "Web Development"],
        cover: "/images/work/WEB/SAPPHIRE.webp",

        content: {
            role: "UI/UX Design, Front-End Development",
            overview:
                "Sapphire Developments is a luxury real estate web concept created to explore how high-end properties could be discovered, browsed, and evaluated online. The interface focuses on showcasing expansive homes and vacation properties across multiple locations while maintaining a sense of elegance, clarity, and trust.",
            challenge:
                "Luxury real estate platforms must balance aspirational presentation with usability. The challenge was designing a browsing experience that feels premium and immersive without overwhelming users with information or sacrificing navigational clarity.",
            solution:
                "The concept emphasizes strong visual hierarchy, large property imagery, and deliberate spacing to give listings room to breathe. A restrained deep-blue palette reinforces a sense of trust and stability, while bold typographic structure helps users quickly scan locations, property highlights, and listing details.",
            outcome:
                "The result is a refined interface concept for a luxury property discovery platform. The design demonstrates how clear hierarchy, spacious layouts, and strong imagery can support both exploration and credibility for high-value real estate listings.",
            processSteps: ["UX Strategy", "UI Design", "Development", "Refinement"],

            uiux: {
                userGoals: [
                    "Browse luxury property listings",
                    "View property details and images",
                    "Filter by location and features",
                    "Contact agents"
                ],
                navigation: "Browse-focused navigation with search",
                informationArchitecture: "Home → Listings → Property Details → Contact",
                visualHierarchy: "Large imagery with clean typographic overlays",
                components: [
                    "Property cards",
                    "Search and filter",
                    "Listing detail pages",
                    "Contact forms"
                ],
                responsive: "Responsive design for all devices"
            },

            development: {
                architecture: "React prototype",
                features: [
                    "Property browsing interface",
                    "Responsive layouts",
                    "Interactive UI elements"
                ],
                performance: "Built for prototype performance"
            },

            techStack: ["React", "Figma"],

            gallery: ["/images/work/WEB/SAPPHIRE.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "dictionary-ui",
        title: "Dictionary UI Micro-App",
        category: "ui-ux-web-dev",
        year: 2023,
        featured: false,
        summary: "React-powered dictionary micro-app with real-time word search and clean reading-focused UI.",
        tags: ["React", "Micro-App", "UI Design", "Web Development"],
        cover: "/images/work/WEB/Dictionary.webp",
        liveUrl: "https://dictionary-react-app-rho.vercel.app/",

        content: {
            role: "UI/UX Design, Front-End Development",
            overview:
                "This project explores a lightweight dictionary interface built with React, designed for fast word lookups and distraction-free reading. The goal was to create a compact application where users can quickly search for any term and immediately view definitions in a clean, structured layout.",
            challenge:
                "Dictionary interfaces often present dense linguistic information that can feel overwhelming. The challenge was designing a UI that keeps the interaction simple while presenting definitions, meanings, and related information in a way that remains easy to scan and visually organized.",
            solution:
                "The application was built as a small React micro-app with a responsive search interface and dynamic word lookup functionality. Results are displayed using clear typographic hierarchy, grouped content blocks, and accessible color contrast to make definitions easy to read and navigate. Keyboard-friendly input flows allow users to quickly search and iterate through terms without unnecessary interaction steps.",
            outcome:
                "The final result is a fast, minimal dictionary interface that demonstrates how thoughtful UI structure and lightweight React architecture can turn a simple lookup task into a smooth and efficient experience.",
            processSteps: ["UX Research", "UI Design", "Development", "Testing"],

            uiux: {
                userGoals: [
                    "Quickly search for word definitions",
                    "Read definitions without distraction",
                    "Access phonetic pronunciations",
                    "View multiple meanings"
                ],
                navigation: "Single-page search interface",
                informationArchitecture: "Search → Results → Definitions",
                visualHierarchy: "Clean typography focused on readability",
                components: [
                    "Search input",
                    "Definition cards",
                    "Phonetic display",
                    "Part of speech labels"
                ],
                responsive: "Mobile-friendly interface"
            },

            development: {
                architecture: "React micro-app with API integration",
                features: [
                    "Real-time search",
                    "Dictionary API integration",
                    "Keyboard navigation",
                    "State management"
                ],
                performance: "Lightweight and fast"
            },

            techStack: ["React", "Dictionary API", "CSS"],

            gallery: ["/images/work/WEB/Dictionary.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "storefront-ui",
        title: "Stone & Brier General Store",
        category: "ui-ux-web-dev",
        year: 2022,
        featured: false,
        summary: "Full-stack eCommerce storefront with product catalog, authentication, and Stripe checkout.",
        tags: ["React", "PostgreSQL", "Stripe", "eCommerce", "Web Development"],
        cover: "/images/work/WEB/STORE.webp",
        liveUrl: "https://stone-and-brier-general-store.vercel.app/Home",

        content: {
            role: "UI/UX Design, Front-End Development",
            overview:
                "Stone & Brier General Store is a full-stack eCommerce application built as a capstone project at Fullstack Academy. The platform allows users to browse a categorized product catalog, create accounts, manage shopping carts, and complete purchases through a Stripe-powered checkout flow.",
            challenge:
                "Design and build an eCommerce experience that balances product discovery, clear navigation, and secure purchasing flows. The interface needed to handle catalog browsing, authentication, and checkout while remaining visually cohesive and easy to navigate.",
            solution:
                "The application uses a PostgreSQL database with an Amazon-style product categorization system to organize items and support scalable catalog browsing. The front-end interface was designed with a restrained green color system to create visual consistency across navigation, product cards, and calls to action. User authentication enables account creation and login, while Stripe integration powers the checkout and payment flow.",
            outcome:
                "The final product demonstrates a complete eCommerce workflow, from browsing and product discovery to account management and payment processing. The project highlights both UI design decisions and the integration of real-world commerce functionality within a full-stack application.",
            processSteps: ["UX Research", "UI Design", "Development", "Testing", "Launch"],

            uiux: {
                userGoals: [
                    "Browse product catalog",
                    "Add items to cart",
                    "Complete checkout",
                    "Manage account"
                ],
                navigation: "Category-based navigation with cart",
                informationArchitecture: "Home → Products → Product Details → Cart → Checkout",
                visualHierarchy: "Product-focused with clear CTAs",
                components: [
                    "Product grid",
                    "Shopping cart",
                    "User authentication",
                    "Checkout flow"
                ],
                responsive: "Responsive eCommerce layout"
            },

            development: {
                architecture: "React front-end with PostgreSQL backend",
                features: [
                    "Product catalog with categories",
                    "User authentication",
                    "Shopping cart",
                    "Stripe payment integration",
                    "RESTful API"
                ],
                performance: "Optimized for eCommerce loads"
            },

            techStack: ["React", "PostgreSQL", "Stripe", "Node.js", "CSS"],

            gallery: ["/images/work/WEB/STORE.webp"],

            relatedProjects: [
                {
                    slug: "stone-and-brier-logo",
                    title: "Stone & Brier Logo",
                    type: "Brand Systems",
                    cover: "/images/work/BRANDING/S&B.webp"
                }
            ]
        }
    },

    {
        slug: "little-york-smoke-shop-site",
        title: "Little York Smoke Shop Website",
        category: "ui-ux-web-dev",
        year: 2025,
        featured: true,
        summary: "Promotional storefront website designed to highlight deals, product categories, and store information through a bold retail-focused digital experience.",
        tags: ["UI/UX Design", "React", "Web Development", "Local Business", "Retail UX"],
        cover: "/images/work/WEB/little-york-site.webp",
        liveUrl: "https://littleyorksmokeshop.com",

        content: {
            role: "UI/UX Design, Front-End Development",
            client: "Little York Smoke Shop",

            overview:
                "This website was designed to extend the Little York Smoke Shop brand into a clear, engaging digital storefront. The goal was to create an online experience that reflects the visual energy of the physical location while helping customers quickly find promotions, product categories, hours, and location details.",

            problem:
                "The business needed a web presence that felt connected to the brand while still functioning as a practical customer tool. The site had to communicate promotions quickly, support easy navigation, and give local users the essential information they need before visiting the store.",

            challenge:
                "Local retail websites need to communicate value immediately. The challenge was designing a high-impact interface that carried the bold visual identity of the brand while staying clear, readable, and conversion-friendly across mobile and desktop devices.",

            solution:
                "The interface was built around strong promotional hierarchy, clear category sections, and direct access to contact and location information. Brand visuals from the identity system were integrated into the UI so the experience felt connected to the storefront, while the layout remained simple enough for customers to scan quickly and act without friction.",

            outcome:
                "The finished site gives Little York Smoke Shop a stronger digital presence that works like an extension of the physical storefront. It helps customers understand the brand, browse promotions, and find store information quickly, while reinforcing a more complete and professional business presence online.",

            processSteps: ["UX Strategy", "UI Design", "Development", "Optimization", "Launch"],

            uiux: {
                userGoals: [
                    "Quickly find store hours and location",
                    "View current promotions and featured deals",
                    "Browse product categories",
                    "Contact the shop with minimal friction"
                ],
                navigation:
                    "Simple, linear navigation prioritizing promotions, products, and store information over unnecessary depth.",
                informationArchitecture:
                    "Home → Promotions → Product Categories → About → Contact",
                visualHierarchy:
                    "Promotions and brand imagery lead the experience above the fold, followed by structured category and store information sections.",
                components: [
                    "Hero section with promotional emphasis",
                    "Product category cards",
                    "Deal highlight blocks",
                    "Location and contact section",
                    "Responsive navigation"
                ],
                responsive:
                    "Mobile-first layout designed for fast browsing and easy information access across all screen sizes."
            },

            development: {
                architecture:
                    "Built with a modular React component system to keep layouts reusable, consistent, and easy to scale.",
                features: [
                    "Responsive layouts across device sizes",
                    "Structured promotional content sections",
                    "Google Maps/location integration",
                    "SEO-friendly page structure",
                    "Reusable UI sections for future expansion"
                ],
                performance:
                    "Built with Vite for fast development, efficient bundling, and strong page-load performance."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "CSS",
                "Google Maps API"
            ],

            gallery: [
                "/images/work/WEB/little-york-site.webp"
            ],

            relatedProjects: [
                {
                    slug: "little-york-smoke-shop",
                    title: "Little York Smoke Shop Brand System",
                    type: "Brand Systems",
                    cover: "/images/work/BRANDING/LYLOGO.webp"
                }
            ]
        }
    },


    /* ===============================
       BRAND SYSTEMS
    =============================== */

    {
        slug: "little-york-smoke-shop",
        title: "Little York Smoke Shop",
        category: "brand-systems",
        year: 2025,
        featured: true,
        summary:
            "Complete brand system spanning logo identity, storefront graphics, and digital brand integration.",
        tags: ["Brand System", "Environmental Design", "Retail Branding", "Brand Strategy"],
        cover: "/images/work/BRANDING/LYLOGO.webp",
        liveUrl: "https://littleyorksmokeshop.com",

        content: {
            role: "Brand Direction, Logo Design, Environmental Graphics",
            client: "Little York Smoke Shop",

            overview:
                "Little York Smoke Shop needed a brand identity that could unify the business across physical and digital touchpoints. The project centered on building a cohesive retail brand system that would work on storefront signage, promotional surfaces, and future web applications while remaining bold, clean, and easy to recognize.",

            problem:
                "The business needed a recognizable visual identity that could stand out in a competitive retail environment while feeling legitimate, modern, and approachable. The brand needed to work across large-scale storefront graphics, smaller branded materials, and digital touchpoints without becoming visually inconsistent.",

            challenge:
                "Design a flexible retail identity system that performs at multiple scales. The mark needed to read clearly from a distance on storefront signage, remain recognizable in digital use, and support promotional applications like a large-format window wrap without becoming visually inconsistent.",

            solution:
                "The system was built around a circular emblem with strong outer typography, radiating internal geometry, and a central cannabis leaf icon that anchors the mark. Supporting environmental graphics extended the identity into the storefront using a modular layout approach that distributed promotional messaging across multiple window panes while keeping the brand visually unified.",

            outcome:
                "The final system gives Little York Smoke Shop a cohesive brand presence across identity, environmental graphics, and future digital use. The logo creates instant recognition, the storefront graphics increase street visibility, and the brand now feels unified across customer-facing touchpoints.",

            processSteps: ["Research", "Strategy", "Identity Design", "Application", "Refinement"],

            deliverables: [
                "Logo Identity",
                "Color System",
                "Typography Direction",
                "Window Wrap",
                "Brand Integration for Web"
            ],

            brandSystem: {
                logo: {
                    title: "Logo Identity",
                    description:
                        "Bold dispensary emblem combining retail badge structure with clean cannabis iconography. The circular form creates a strong storefront-ready silhouette, while the inner sunburst geometry adds energy and focus around the central symbol.",
                    colors: [
                        { name: "Deep Indigo", value: "#2A2F6C" },
                        { name: "Vibrant Green", value: "#1ED760" },
                        { name: "Clean White", value: "#FFFFFF" }
                    ],
                    cover: "/images/work/BRANDING/LYLOGO.webp"
                },

                typography: {
                    title: "Typography",
                    description:
                        "Bold, highly legible typography supports strong recognition at storefront scale while maintaining clarity in digital applications.",
                    headings: "Brandon Grotesque Bold",
                    body: "Brandon Grotesque Regular"
                },

                applications: [
                    {
                        title: "Window Wrap",
                        type: "Environmental Graphics",
                        description:
                            "Large-format storefront graphics designed to communicate promotions, product categories, and brand identity to passing foot and vehicle traffic. The layout uses modular information blocks and layered textures to create both clarity and visual impact.",
                        cover: "/images/work/BRANDING/WindowWrappp.webp"
                    },
                    {
                        title: "Space Motion Menu",
                        type: "Digital Menu",
                        description:
                            "Animated digital menu system featuring motion graphics and dynamic content display for in-store customer experience.",
                        cover: "/images/work/BRANDING/Space.webp"
                    }
                ]
            },

            techStack: ["Illustrator", "Photoshop", "Figma"],

            gallery: [
                "/images/work/BRANDING/LYLOGO.webp",
                "/images/work/BRANDING/WindowWrappp.webp",
                "/images/work/BRANDING/Space.webp"
            ],

            relatedProjects: [
                {
                    slug: "little-york-smoke-shop-site",
                    title: "Little York Smoke Shop Website",
                    type: "UI/UX Design & Web Development",
                    cover: "/images/work/WEB/little-york-site.webp"
                }
            ]
        }
    },

    {
        slug: "eb-cmd-branding",
        title: "E&B Correa Mobile Detailing",
        category: "brand-systems",
        year: 2023,
        featured: false,
        summary: "Automotive service emblem featuring a custom illustrated Cadillac silhouette.",
        tags: ["Automotive Branding", "Illustrative Logo", "Service Identity"],
        cover: "/images/work/BRANDING/E&B CMD.webp",
        content: {
            role: "Logo & Visual Identity",
            client: "E&B Correa Mobile Detailing",

            problem: "E&B Correa Mobile Detailing needed a distinctive brand identity that communicated automotive expertise and premium service. The challenge was creating a logo that stood apart from generic car icons while remaining professional.",

            overview: "E&B Correa Mobile Detailing is an automotive detailing service focused on convenience and premium vehicle care. The identity centers on a bold emblem designed to communicate professionalism, trust, and automotive expertise.",

            challenge: "Create a distinctive logo that clearly communicates automotive detailing while standing apart from the generic car icons commonly used in the industry.",

            solution: "The mark features a custom illustrated Cadillac SUV silhouette drawn from scratch, placed within a strong triangular badge structure. Clean typography and a teal accent palette reinforce the themes of precision, cleanliness, and premium service.",

            outcome: "The final emblem works effectively across service vehicles, uniforms, and digital platforms, giving the business a recognizable and professional automotive brand mark.",

            processSteps: ["Research", "Concept", "Design", "Delivery"],

            brandSystem: {
                logo: {
                    title: "Logo Identity",
                    description: "Custom illustrated Cadillac SUV silhouette in triangular badge structure.",
                    colors: [
                        { name: "Black", value: "#1A1A1A" },
                        { name: "Teal", value: "#00897B" },
                        { name: "White", value: "#FFFFFF" }
                    ],
                    cover: "/images/work/BRANDING/E&B CMD.webp"
                },
                typography: {
                    title: "Typography",
                    description: "Bold sans-serif for authority and clarity.",
                    headings: "Brandon Grotesque Bold",
                    body: "Brandon Grotesque Regular"
                }
            },

            techStack: ["Figma", "Illustrator"],

            gallery: ["/images/work/BRANDING/E&B CMD.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "infinitely-fw-branding",
        title: "Infinite Floating World",
        category: "brand-systems",
        year: 2024,
        featured: true,
        summary: "Symbolic emblem built from recursive geometry representing the Infinite Floating World.",
        tags: ["Symbol Design", "Visual Identity", "Sigil Design"],
        cover: "/images/work/BRANDING/InfinitelyFW.webp",
        content: {
            role: "Creator, Visual Identity",

            problem: "Infinite Floating World needed a symbolic emblem that could represent a creative moniker across multiple platforms and future projects. The challenge was creating something that conveyed infinity and depth without literal symbolism.",

            overview: "Infinite Floating World (Mugen ni Ukiyo) is the creative moniker under which illustration, painting, and narrative worldbuilding projects are produced. The identity is anchored by a symbolic emblem that reflects the concept of an infinite, layered universe.",

            challenge: "Develop a visual symbol that conveys infinity, recursion, and dimensional depth without relying on obvious infinity motifs or literal symbolism.",

            solution: "The mark was constructed using interlocking geometric forms that rotate outward while simultaneously collapsing inward through recursive layers. The resulting structure creates the impression of an infinite center, functioning more like a sigil or emblem than a traditional logo.",

            outcome: "The final mark operates as a central symbol for the Infinite Floating World identity, appearing across artwork signatures, digital platforms, and future narrative projects connected to the broader universe.",

            processSteps: ["Concept", "Geometry", "Refine"],

            brandSystem: {
                logo: {
                    title: "Symbolic Emblem",
                    description: "Recursive geometric interlocking forms creating infinite center.",
                    colors: [
                        { name: "Black", value: "#000000" },
                        { name: "White", value: "#FFFFFF" },
                        { name: "Red", value: "#DC143C" }
                    ],
                    cover: "/images/work/BRANDING/InfinitelyFW.webp"
                }
            },

            techStack: ["Figma", "Illustrator"],

            gallery: ["/images/work/BRANDING/InfinitelyFW.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "neo-seal-logo",
        title: "NEO Unlimited",
        category: "brand-systems",
        year: 2025,
        summary: "Modernized corporate seal combining infinity motifs with clean technology-driven typography.",
        tags: ["Brand Identity", "Seal Design", "Corporate Branding"],
        cover: "/images/work/BRANDING/NEO Seal.webp",
        content: {
            role: "Logo & Visual Identity",
            client: "NEO Unlimited",

            problem: "NEO Unlimited, a consulting agency focused on strategic growth, needed a brand identity that conveyed credibility and authority while avoiding dated corporate aesthetics.",

            overview: "NEO Unlimited is a consulting agency focused on strategic growth and business development. The brand identity centers on a modernized corporate seal designed to convey credibility, structure, and forward momentum.",

            challenge: "Develop a mark that feels authoritative and professional while avoiding the dated aesthetic commonly associated with traditional seals.",

            solution: "The design uses a circular seal format paired with repeating infinity motifs along the border to symbolize continuity and unlimited potential. The central NEO wordmark introduces a clean, contemporary typographic structure, balancing institutional form with modern clarity.",

            outcome: "The final mark functions as a strong corporate identifier across digital platforms, documentation, and brand materials while maintaining a recognizable and authoritative presence.",

            processSteps: ["Research", "Concept", "Design", "Delivery"],

            brandSystem: {
                logo: {
                    title: "Corporate Seal",
                    description: "Modernized seal with infinity motifs and clean typography.",
                    colors: [
                        { name: "Black", value: "#1A1A1A" },
                        { name: "White", value: "#FFFFFF" }
                    ],
                    cover: "/images/work/BRANDING/NEO Seal.webp"
                },
                typography: {
                    title: "Typography",
                    description: "Clean, contemporary typography for modern authority.",
                    headings: "Brandon Grotesque Bold",
                    body: "Brandon Grotesque Regular"
                }
            },

            techStack: ["Figma", "Illustrator"],

            gallery: ["/images/work/BRANDING/NEO Seal.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "lv1-logo",
        title: "Liquorville Hookah",
        category: "brand-systems",
        year: 2023,
        summary: "Illustrative lounge emblem built around a central hookah symbol and ornamental hospitality typography.",
        tags: ["Hospitality Branding", "Illustrative Logo", "Emblem Design"],
        cover: "/images/work/BRANDING/LV1.webp",
        content: {
            role: "Logo & Visual Identity",
            client: "Liquorville Hookah",

            problem: "Liquorville Hookah needed a memorable lounge brand identity that communicated nightlife, social atmosphere, and premium hookah experiences without becoming visually cluttered.",

            overview: "Liquorville Hookah is a lounge concept centered around nightlife, social atmosphere, and premium hookah experiences. The identity focuses on an emblem-style logo that blends illustration and typography to create a memorable lounge brand.",

            challenge: "Design a logo that clearly communicates hookah culture while maintaining a polished and inviting lounge aesthetic. The mark needed to feel detailed and expressive without becoming visually cluttered.",

            solution: "The logo centers on a stylized hookah illustration framed within a circular emblem. Decorative linework and ornamental accents reinforce the relaxed lounge atmosphere, while the custom Liquorville wordmark introduces personality and movement.",

            outcome: "The final mark functions as a versatile hospitality emblem that works across signage, menus, merchandise, and digital platforms while maintaining strong visual character.",

            processSteps: ["Concept", "Illustration", "Type", "Refine"],

            brandSystem: {
                logo: {
                    title: "Lounge Emblem",
                    description: "Stylized hookah illustration in circular emblem with ornamental typography.",
                    colors: [
                        { name: "Black", value: "#1A1A1A" },
                        { name: "Purple", value: "#6B4C9A" },
                    ],
                    cover: "/images/work/BRANDING/LV1.webp"
                }
            },

            techStack: ["Figma", "Illustrator"],

            gallery: ["/images/work/BRANDING/LV1.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "stone-and-brier-logo",
        title: "Stone & Brier",
        category: "brand-systems",
        year: 2016,
        summary: "Architectural S&B monogram constructed within a circular emblem for a creative design studio.",
        tags: ["Logo Design", "Monogram", "Agency Branding"],
        cover: "/images/work/BRANDING/S&B.webp",
        content: {
            role: "Logo & Identity",
            client: "Stone & Brier",

            problem: "Stone & Brier, a creative design studio, needed a monogram that communicated stability, craftsmanship, and architectural precision while remaining bold and recognizable.",

            overview: "Stone & Brier is a creative design studio built around precision, structure, and disciplined visual thinking. The identity centers on a custom S&B monogram contained within a circular emblem, giving the mark a strong, emblematic presence.",

            challenge: "Design a monogram that communicates stability and craftsmanship while remaining bold and immediately recognizable. The mark needed to feel architectural and balanced without becoming overly intricate.",

            solution: "The monogram was constructed using angular geometry and radial symmetry, merging the S and B into a unified symbol anchored by a triangular core. The circular enclosure reinforces the sense of structure while allowing the mark to function as a compact emblem across applications.",

            outcome: "The final mark reads clearly at small sizes while maintaining strong visual impact at large scale, functioning equally well as a digital icon, stamp, or brand insignia across the studio's identity system.",

            processSteps: ["Concept", "Geometry", "Refine"],

            brandSystem: {
                logo: {
                    title: "Monogram",
                    description: "Architectural S&B monogram in circular emblem with triangular core.",
                    colors: [
                        { name: "Black", value: "#1A1A1A" },
                        { name: "White", value: "#FFFFFF" }
                    ],
                    cover: "/images/work/BRANDING/S&B.webp"
                }
            },

            techStack: ["Illustrator", "Figma"],

            gallery: ["/images/work/BRANDING/S&B.webp"],

            relatedProjects: [
                {
                    slug: "storefront-ui",
                    title: "Stone & Brier General Store Website",
                    type: "UI/UX & Web Development",
                    cover: "/images/work/WEB/STORE.webp"
                }
            ]
        }
    },
];
