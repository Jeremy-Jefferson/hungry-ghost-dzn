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
        slug: "creator-stack",
        title: "Creator Stack",
        category: "ui-ux-web-dev",
        year: "2026",
        featured: true,

        summary:
            "A modern SaaS platform designed for creators to sell digital products, prints, and merchandise through a unified storefront and dashboard system.",

        tags: [
            "React",
            "Vite",
            "SaaS Product",
            "Dashboard UI",
            "UI/UX Design",
            "Front-End Development",
            "Ecommerce",
            "Design System"
        ],

        cover: "/images/work/WEB/CREATOR-STACK-HOME.webp",
        liveUrl: "https://creatorstack-beige.vercel.app/",

        content: {
            role: "UI/UX Design, Front-End Development",
            client: "Concept Product",

            overview:
                "Creator Stack is a product-focused commerce platform designed to help independent creators sell digital products, prints, and merchandise through a unified system. The platform combines storefront creation, product management, analytics, and order tracking into a cohesive experience built for clarity and scalability.",

            problem:
                "Creators often rely on multiple disconnected tools to manage storefronts, analytics, and product delivery. This fragmentation creates friction, limits visibility into performance, and complicates workflows—especially for non-technical users.",

            challenge:
                "Design a platform that feels simple and approachable for beginners while remaining powerful enough for serious creators. The system needed to balance marketing, product management, and analytics without overwhelming the user.",

            solution:
                "A unified SaaS platform structured around two core layers: a marketing experience for onboarding and conversion, and a product-focused dashboard for managing content, tracking performance, and handling operations. The interface uses a modular component system to ensure consistency and scalability across features.",

            outcome:
                "A cohesive product experience that streamlines creator workflows, improves visibility into performance, and demonstrates how modern creator commerce platforms can be structured through a clean, scalable UI system.",

            processSteps: [
                "Product Strategy",
                "UX Structure",
                "UI System Design",
                "Development",
                "Refinement"
            ],

            interfaceWalkthrough: [
                {
                    title: "Home Page — Positioning & Conversion",
                    description:
                        "A typography-driven hero with strong visual hierarchy and clear calls to action. The dashboard preview reinforces product value early and supports conversion.",
                    image: "/images/work/WEB/CREATOR-STACK-HOME.webp"
                },
                {
                    title: "Pricing — Product Clarity",
                    description:
                        "A structured pricing system with clearly defined tiers and feature scaling, guiding users toward upgrades through subtle visual emphasis.",
                    image: "/images/work/WEB/CREATOR-STACK-PRICING.webp"
                },
                {
                    title: "Dashboard — Product Experience",
                    description:
                        "A modular dashboard interface featuring analytics, recent activity, and quick actions, designed for clarity, usability, and scalable growth.",
                    image: "/images/work/WEB/CREATOR-STACK-DASHBOARD.webp"
                }
            ],

            uiux: {
                userGoals: [
                    "Sell digital products and merchandise",
                    "Track revenue and performance metrics",
                    "Manage products and storefront content",
                    "Monitor orders and customer activity",
                    "Navigate workflows with minimal friction"
                ],

                navigation:
                    "A structured navigation system separating marketing pages from the authenticated dashboard, allowing clear transitions between discovery and product usage.",

                informationArchitecture:
                    "Home → Pricing → Authentication → Dashboard → Products → Orders → Analytics → Settings",

                visualHierarchy:
                    "Typography-first layouts, consistent spacing, and controlled accent usage guide user attention across both marketing and dashboard environments.",

                components: [
                    "Metric cards",
                    "Analytics charts",
                    "Product tables",
                    "Order lists",
                    "Status indicators",
                    "Buttons and CTAs",
                    "Forms and inputs",
                    "Navigation sidebar"
                ],

                responsive:
                    "Responsive layout system designed to maintain usability and readability across desktop and smaller devices, particularly within dashboard views."
            },

            interfaceDesign: {
                visualSystem:
                    "A modern SaaS visual system combining dark UI with subtle gradients and restrained accent colors to create depth while maintaining clarity.",

                layoutApproach:
                    "Grid-based layout system with consistent containers and spacing, ensuring alignment and rhythm across marketing pages and dashboard interfaces.",

                componentStrategy:
                    "Reusable UI components built as modular primitives, enabling scalable interface construction across multiple features and views.",

                accessibility:
                    "High contrast text, clear hierarchy, and structured layouts improve readability and support efficient data scanning."
            },

            developmentSummary: {
                architecture:
                    "Built as a modular React application using Vite, focusing on reusable components, scalable structure, and clean separation between marketing and application layers.",

                features: [
                    "Component-based architecture",
                    "Structured dashboard system",
                    "Reusable UI components",
                    "Dynamic routing",
                    "Scalable page composition",
                    "Responsive layouts"
                ],

                performance:
                    "Optimized using Vite for fast builds, efficient bundling, and smooth client-side navigation."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "Tailwind CSS",
                "Vercel"
            ],

            gallery: [
                "/images/work/WEB/CREATOR-STACK-HOME.webp",
                "/images/work/WEB/CREATOR-STACK-PRICING.webp",
                "/images/work/WEB/CREATOR-STACK-DASHBOARD.webp"
            ],

            relatedProjects: [
                {
                    slug: "creator-stack-brand-identity",
                    title: "Creator Stack Brand Identity",
                    type: "Brand Identity & Visual System",
                    cover: "/images/work/WEB/CREATOR-STACK-HOME.webp",
                    mediaType: "brand",
                    imageFit: "contain",
                    imagePosition: "center"
                }
            ]
        }
    },





    {
        slug: "command-center-dashboard",
        title: "Command Center — SaaS Dashboard",
        category: "ui-ux-web-dev",
        year: 2026,
        featured: true,

        summary:
            "Premium SaaS dashboard built to simulate a modern internal product environment through scalable UI systems, data-driven interfaces, and a modular React architecture.",

        tags: [
            "React",
            "Vite",
            "Dashboard UI",
            "SaaS Product",
            "UI/UX Design",
            "Front-End Development",
            "Design System",
            "Data Visualization"
        ],

        cover: "/images/work/WEB/COMMANDCENTER-WALKTHROUGH-01.webp",
        liveUrl: "https://command-center-beta-hazel.vercel.app",

        content: {
            role: "UI/UX Design, Front-End Development",
            client: "Concept Product",

            overview:
                "Command Center was created as a product-focused dashboard experience designed to simulate how modern SaaS platforms and internal tools are structured and used. The goal was to build an interface that feels production-ready, balancing clarity, data density, and usability within a refined dark UI system.",

            challenge:
                "Dashboards often struggle to balance complexity and clarity. Too much information leads to visual noise, while overly simplified interfaces fail to communicate meaningful insights. The challenge was to design a system that supports real-world workflows — analytics, project tracking, and team management — while maintaining strong hierarchy, readability, and performance.",

            solution:
                "The dashboard was designed using a component-driven system supported by a structured layout architecture. Data visualization, tables, and UI modules were built as reusable primitives, allowing consistent behavior across pages. A restrained dark visual system with layered surfaces, subtle borders, and controlled accent usage reinforces hierarchy while keeping the interface clean and scannable.",

            outcome:
                "The result is a scalable dashboard system that demonstrates how modern SaaS products are designed and built. The interface supports multiple workflows while maintaining clarity, consistency, and usability, making it suitable as both a portfolio showcase and a foundation for future product expansion.",

            processSteps: [
                "Product Thinking",
                "UX Structure",
                "UI System Design",
                "Development",
                "Refinement"
            ],

            interfaceWalkthrough: [
                {
                    title: "Dashboard Overview",
                    description:
                        "The main dashboard presents key metrics, recent activity, and system status through structured cards and data blocks, allowing users to quickly understand performance and priorities at a glance.",
                    image: "/images/work/WEB/COMMANDCENTER-WALKTHROUGH-01.webp"
                },
                {
                    title: "Analytics Interface",
                    description:
                        "Analytics views focus on data visualization and trend analysis, using charts and structured layouts to help users interpret performance metrics without overwhelming the interface.",
                    image: "/images/work/WEB/COMMANDCENTER-WALKTHROUGH-02.webp"
                },
                {
                    title: "Projects Management",
                    description:
                        "The projects section introduces table-based workflows and detail views, allowing users to track progress, view status, and manage structured data through a clean and scalable UI system.",
                    image: "/images/work/WEB/COMMANDCENTER-WALKTHROUGH-03.webp"
                }
            ],

            uiux: {
                userGoals: [
                    "Monitor key metrics and performance",
                    "Analyze data trends and insights",
                    "Track project status and progress",
                    "Manage team and operational workflows",
                    "Navigate complex information without friction"
                ],

                navigation:
                    "Sidebar-driven navigation system with clear section grouping, allowing users to move between dashboard, analytics, projects, team, and settings efficiently.",

                informationArchitecture:
                    "Dashboard → Analytics → Projects → Project Detail → Team → Billing → Settings",

                visualHierarchy:
                    "Layered card surfaces, consistent spacing, and controlled accent color guide attention across data points while maintaining clarity within dense information layouts.",

                components: [
                    "Dashboard metric cards",
                    "Analytics charts",
                    "Data tables",
                    "Status badges",
                    "Tabs and filters",
                    "Search input",
                    "Toast notifications",
                    "Skeleton loading states"
                ],

                responsive:
                    "Responsive layout system designed to preserve structure and usability across desktop and smaller screen sizes while maintaining data readability."
            },

            interfaceDesign: {
                visualSystem:
                    "A dark, premium SaaS visual system built around layered surfaces, subtle borders, and restrained accent color usage to create depth without visual clutter.",

                layoutApproach:
                    "Grid-based layout system with consistent containers and spacing ensures alignment and rhythm across all dashboard views.",

                componentStrategy:
                    "Reusable UI primitives such as cards, tables, tabs, and inputs allow consistent behavior and scalable interface composition across multiple pages.",

                accessibility:
                    "High contrast, clear typography, and structured layouts improve readability and support efficient data scanning."
            },

            developmentSummary: {
                architecture:
                    "Built as a modular React application using Vite, with a focus on reusable components, structured data models, and scalable page composition.",

                features: [
                    "Component-based architecture",
                    "Dynamic routing with detail views",
                    "Reusable UI system",
                    "Structured mock data modeling",
                    "Responsive dashboard layouts",
                    "Scalable page structure"
                ],

                performance:
                    "Optimized through Vite’s build system for fast load times, efficient bundling, and smooth client-side navigation."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "Tailwind CSS",
                "Vercel"
            ],

            gallery: [
                "/images/work/WEB/COMMANDCENTER-WALKTHROUGH-01.webp",
                "/images/work/WEB/COMMANDCENTER-WALKTHROUGH-02.webp",
                "/images/work/WEB/COMMANDCENTER-WALKTHROUGH-03.webp"
            ],

            relatedProjects: []
        }
    },

    {
        slug: "neo-unlimited-site",
        title: "Neo Unlimited — Consultancy Website",
        category: "ui-ux-web-dev",
        year: 2026,
        featured: true,

        summary:
            "Premium consultancy website built to emphasize strategic clarity, restrained UI, and typography-led design through a custom React architecture. The project also explores an alternate visual direction to compare tone, hierarchy, and conversion strategy.",

        tags: [
            "React",
            "Vite",
            "Consultancy Website",
            "Design System",
            "UI/UX",
            "Front-End Development",
            "Case Study",
            "Design Exploration"
        ],

        cover: "/images/work/WEB/NEO-WALKTHROUGH-01.webp",
        liveUrl: "https://neo-unlimited.vercel.app/",

        content: {
            role: "Brand Direction, UI/UX Design, Front-End Development",
            client: "Neo Unlimited",

            overview:
                "Neo Unlimited was developed as a premium consultancy website designed to position the brand as a high-end strategic partner rather than a typical agency. The project focused on building a digital experience that communicates clarity, confidence, and restraint — allowing typography, spacing, and composition to carry the experience instead of relying on visual noise or template-driven patterns.",

            challenge:
                "Many consultancy and agency websites rely on familiar layouts, excessive UI components, and over-designed sections that dilute the brand’s authority. The challenge was to create a site that feels premium and intentional while remaining minimal, structured, and conversion-focused. The interface needed to establish trust immediately while avoiding anything that felt generic, cluttered, or over-produced.",

            solution:
                "The site was designed around a typography-first approach supported by a strict layout system and minimal UI layer. A custom component architecture built with React and Vite ensures scalability while maintaining design consistency. Brand presence is applied selectively through logo placement and supporting visual elements rather than dominating the interface, allowing content, hierarchy, and spacing to define the experience. A second visual variant was also explored to test a more elevated and expressive direction while preserving the same core brand principles.",

            outcome:
                "The result is a refined consultancy website system that communicates authority through restraint while also demonstrating how alternate visual direction can change perception, pacing, and emotional impact. Together, both versions show a flexible brand and UX foundation capable of supporting different tones without losing clarity or strategic focus.",

            processSteps: [
                "Strategy",
                "UX",
                "UI",
                "Development",
                "Refinement"
            ],

            liveVariants: [
                {
                    label: "View Original Site",
                    url: "https://neo-unlimited.vercel.app/",
                    description:
                        "The original consultancy direction focused on restraint, structure, and typographic clarity."
                },
                {
                    label: "View Variant 2",
                    url: "https://neo-unlimited-2.vercel.app/",
                    description:
                        "An alternate direction with stronger visual emphasis, expanded brand presence, and a more expressive hero system."
                }
            ],

            keyDifferences: [
                {
                    area: "Tone",
                    original: "Minimal, restrained, and corporate-premium",
                    variant: "More elevated, expressive, and visually assertive"
                },
                {
                    area: "Hero Design",
                    original: "Typography-first with reduced visual intensity",
                    variant: "Stronger visual presence with more immediate brand personality"
                },
                {
                    area: "Brand Presence",
                    original: "Applied selectively and quietly",
                    variant: "More present within the page composition and supporting assets"
                },
                {
                    area: "Layout Feel",
                    original: "Structured and editorial",
                    variant: "More dynamic while still controlled"
                },
                {
                    area: "User Perception",
                    original: "Strategic partner with calm authority",
                    variant: "Premium consultancy with stronger emotional impact"
                }
            ],

            interfaceWalkthrough: [
                {
                    title: "Hero Composition",
                    description:
                        "The hero section is built around a typography-led layout, using strong headline hierarchy, controlled spacing, and minimal supporting elements to establish immediate clarity and brand positioning.",
                    image: "/images/work/WEB/NEO-WALKTHROUGH-01.webp"
                },
                {
                    title: "Services Structure",
                    description:
                        "Service sections are presented through clean, structured layouts that prioritize readability and strategic clarity, helping users quickly understand offerings without unnecessary visual complexity.",
                    image: "/images/work/WEB/NEO-WALKTHROUGH-02.webp"
                },
                {
                    title: "Contact Experience",
                    description:
                        "The contact section provides a direct, frictionless path for inquiries, reinforcing the site’s conversion focus while maintaining the same restrained visual language.",
                    image: "/images/work/WEB/NEO-WALKTHROUGH-03.webp"
                },
                {
                    title: "Variant Hero Direction",
                    description:
                        "The alternate version introduces a more visually assertive hero composition, increasing brand presence and giving the site a stronger first impression while preserving clarity.",
                    image: "/images/work/WEB/NEO2-WALKTHROUGH-01.webp"
                },
                {
                    title: "Variant Mid-Page Flow",
                    description:
                        "Section pacing in the second version feels more curated and immersive, using spacing, visual rhythm, and composition to create a more elevated experience.",
                    image: "/images/work/WEB/NEO2-WALKTHROUGH-02.webp"
                },
                {
                    title: "Variant Conversion Layer",
                    description:
                        "The alternate contact and CTA treatment feels more intentional and premium, pushing the site closer to a polished client-facing presentation rather than a purely informational layout.",
                    image: "/images/work/WEB/NEO2-WALKTHROUGH-03.webp"
                }
            ],

            uiux: {
                userGoals: [
                    "Understand consultancy services quickly",
                    "Evaluate brand credibility and positioning",
                    "Navigate content without friction",
                    "Initiate contact or inquiry",
                    "Compare alternate design directions within the same brand system"
                ],

                navigation:
                    "Simple top-level navigation supported by clear hierarchy and direct pathways to services, work, and contact.",

                informationArchitecture:
                    "Home → Services → Work → About → Contact",

                visualHierarchy:
                    "Large-scale typography, controlled spacing, and minimal UI elements guide attention toward key messaging and calls-to-action. In the alternate version, visual hierarchy is pushed further through stronger hero composition and more overt brand integration.",

                components: [
                    "Typography-led hero section",
                    "Service content blocks",
                    "Minimal navigation system",
                    "Call-to-action modules",
                    "Footer brand anchor",
                    "Variant comparison section",
                    "Dual live-site access"
                ],

                responsive:
                    "Responsive layout system designed to preserve hierarchy, spacing, and readability across desktop and mobile devices in both variants."
            },

            interfaceDesign: {
                visualSystem:
                    "A restrained dark interface paired with neutral tones and minimal accent usage creates a premium, editorial-style presentation that reinforces clarity and focus. The second direction expands this system with a more expressive composition while preserving cohesion.",

                layoutApproach:
                    "Centered container systems and controlled content widths create a consistent rhythm across sections while maintaining strong negative space. The alternate version explores a slightly more dramatic balance between content and visual assets.",

                componentStrategy:
                    "Lightweight, reusable primitives such as containers, sections, stacks, and CTA blocks ensure consistency while allowing flexible composition across pages and design directions.",

                accessibility:
                    "Clear typography scale, high contrast, and predictable layout structure improve readability and support usability across different contexts."
            },

            developmentSummary: {
                architecture:
                    "Built as a modular React application using Vite, with a focus on composable layout primitives and scalable content structure across both versions of the site.",

                features: [
                    "Component-based architecture",
                    "Custom layout system (Container, Section, Stack)",
                    "Responsive design system",
                    "SEO-friendly structure",
                    "Minimal dependency footprint",
                    "Variant-ready content approach"
                ],

                performance:
                    "Optimized through Vite’s build pipeline, ensuring fast load times, efficient bundling, and smooth navigation performance across both versions."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "CSS Modules",
                "Vercel"
            ],

            gallery: [
                "/images/work/WEB/NEO-WALKTHROUGH-01.webp",
                "/images/work/WEB/NEO-WALKTHROUGH-02.webp",
                "/images/work/WEB/NEO-WALKTHROUGH-03.webp",
                "/images/work/WEB/NEO2-WALKTHROUGH-01.webp",
                "/images/work/WEB/NEO2-WALKTHROUGH-02.webp",
                "/images/work/WEB/NEO2-WALKTHROUGH-03.webp"
            ],

            relatedProjects: [
                {
                    slug: "neo-seal-logo",
                    title: "NEO Unlimited Brand Identity",
                    type: "Brand Systems",
                    cover: "/images/work/BRANDING/NEO Seal.webp",
                    mediaType: "brand",
                    imageFit: "contain",
                    imagePosition: "center"
                }
            ]
        }
    },

    {
        slug: "body-spoils-site",
        title: "Body Spoils — Massage Therapy Website",
        category: "ui-ux-web-dev",
        year: 2026,
        featured: true,

        summary:
            "Massage therapy website designed to present services clearly, build trust quickly, and create a calm, premium path from discovery to booking.",

        tags: [
            "React",
            "Vite",
            "Wellness Website",
            "Massage Therapy",
            "UI/UX Design",
            "Front-End Development",
            "Responsive Design",
            "Conversion-Focused Design"
        ],

        cover: "/images/work/WEB/BODY SPOILS-WALKTHROUGH-01.webp",
        liveUrl: "https://bodyspoils.netlify.app/",

        content: {
            role: "Brand Direction, UI/UX Design, Front-End Development",
            client: "Body Spoils",

            overview:
                "Body Spoils was created as a digital presence for a massage therapy business focused on relaxation, restoration, and accessible self-care. The site needed to feel calm and elevated while helping visitors quickly understand the available services, pricing structure, and next steps for booking.",

            challenge:
                "Massage therapy websites often feel either overly generic, visually cluttered, or too clinical. The challenge was to create a digital experience that feels warm, polished, and trustworthy while still making service information easy to scan and the booking path easy to follow across devices.",

            solution:
                "The site was designed around a clear service hierarchy, calming visual presentation, and mobile-friendly structure that reduces friction between discovery and booking. Typography, spacing, and brand styling were used to reinforce trust and relaxation while keeping the interface structured, readable, and conversion-focused.",

            outcome:
                "The final website gives Body Spoils a stronger digital presence that supports both credibility and client action. Visitors can quickly understand services, pricing, and contact pathways, while the overall experience reinforces a calm, premium brand impression that feels intentional rather than templated.",

            processSteps: [
                "Strategy",
                "UX",
                "UI",
                "Development",
                "Launch"
            ],

            interfaceWalkthrough: [
                {
                    title: "Homepage Hero",
                    description:
                        "The homepage introduces the brand through a calm visual tone, clear value proposition, and direct calls-to-action that encourage visitors to explore services or book.",
                    image: "/images/work/WEB/BODY SPOILS-WALKTHROUGH-01.webp"
                },
                {
                    title: "Service Presentation",
                    description:
                        "Service cards and treatment sections were structured to help users quickly compare offerings, understand benefits, and evaluate which massage experience best fits their needs.",
                    image: "/images/work/WEB/BODY SPOILS-WALKTHROUGH-02.webp"
                },
                {
                    title: "Booking & Contact Path",
                    description:
                        "The contact and booking flow was designed to feel direct and low-friction, giving potential clients a clear path to inquire or schedule without feeling overwhelmed.",
                    image: "/images/work/WEB/BODY SPOILS-WALKTHROUGH-03.webp"
                }
            ],

            uiux: {
                userGoals: [
                    "Understand massage services quickly",
                    "Evaluate pricing and session options",
                    "Build trust in the therapist and brand",
                    "Find a clear path to booking or inquiry",
                    "Browse easily on mobile devices"
                ],

                navigation:
                    "Simple top-level navigation guides visitors through services, about information, and booking/contact without unnecessary complexity.",

                informationArchitecture:
                    "Home → Services → About → Contact / Booking",

                visualHierarchy:
                    "Large headlines, soft supporting visuals, and structured service cards guide attention from brand introduction into treatment details and calls-to-action.",

                components: [
                    "Hero section",
                    "Service cards",
                    "Benefits / value content blocks",
                    "About / trust-building section",
                    "Booking and contact CTA modules"
                ],

                responsive:
                    "Responsive layout system designed to preserve readability, spacing, and CTA clarity across desktop, tablet, and mobile."
            },

            interfaceDesign: {
                visualSystem:
                    "A soft, premium visual language balances warmth and clarity through restrained color usage, clean typography, and generous spacing.",

                layoutApproach:
                    "Sections were arranged to move visitors from brand introduction into service understanding, credibility-building content, and a clear conversion path.",

                componentStrategy:
                    "Reusable section blocks and card patterns support scalability while keeping the presentation visually cohesive across the site.",

                accessibility:
                    "Clear typography, readable spacing, and structured content hierarchy improve scanability and make key actions easier to identify."
            },

            developmentSummary: {
                architecture:
                    "Built as a modular React application using Vite, with reusable UI sections and scalable content structure to support future updates and service expansion.",

                features: [
                    "Component-based architecture",
                    "Responsive service layouts",
                    "Clear CTA integration",
                    "Scalable content structure",
                    "SEO-friendly page structure",
                    "Accessible visual hierarchy"
                ],

                performance:
                    "Built on Vite for fast development, optimized bundling, and a lightweight front-end experience that supports smooth browsing across devices."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "CSS",
                "Netlify"
            ],

            gallery: [
                "/images/work/WEB/BODY-SPOILS-WALKTHROUGH-01.webp",
                "/images/work/WEB/BODY-SPOILS-WALKTHROUGH-02.webp",
                "/images/work/WEB/BODY-SPOILS-WALKTHROUGH-03.webp"
            ],

            relatedProjects: [
                {
                    slug: "body-spoils-brand-identity",
                    title: "Body Spoils Brand Identity",
                    type: "Brand Systems",
                    cover: "/images/work/BRANDING/BodySpoils.webp",
                    mediaType: "brand",
                    imageFit: "contain",
                    imagePosition: "center"
                }
            ]
        }
    },

    {
        slug: "little-york-smoke-shop-site",
        title: "Little York Smoke Shop — Retail Website",
        category: "ui-ux-web-dev",
        year: 2026,
        featured: true,

        summary:
            "A bold retail website redesign built to help Little York Smoke Shop communicate value fast, showcase product categories and featured inventory, and drive real-world visits through a stronger digital storefront experience.",

        tags: [
            "React",
            "Vite",
            "Retail Website",
            "UI/UX Design",
            "Front-End Development",
            "Local Business",
            "Product Browsing",
            "Conversion-Focused Design"
        ],

        cover: "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-01.webp",
        liveUrl: "https://little-york.vercel.app/",

        content: {
            role: "UI/UX Design, Front-End Development",
            client: "Little York Smoke Shop",

            overview:
                "Little York Smoke Shop needed a stronger digital presence that felt more aligned with the energy of the storefront while making the site more useful for actual customers. The updated experience was designed to function like a modern retail landing page: clear value proposition up front, fast access to products and deals, strong location visibility, and direct paths to call or get directions.",

            problem:
                "Many local retail sites stop at basic information and never evolve into a real customer-facing experience. That creates friction for visitors who want to quickly understand what a shop carries, whether it is open, what the deals look like, and how to get there.",

            challenge:
                "The challenge was to create a site that feels visually bold and brand-specific without becoming chaotic. It needed to balance marketing energy with practical usability, giving customers fast access to promotions, product categories, inventory-style browsing, reviews, hours, directions, and contact pathways across both desktop and mobile.",

            solution:
                "The redesigned site was structured as a high-impact digital storefront. A strong hero immediately communicates the brand promise, while supporting sections move users through featured deals, product categories, searchable product browsing, trust-building content, store details, email capture, and direct contact actions. The visual system carries the Little York identity through dark surfaces, neon green accents, bold type, and a clear retail-focused hierarchy.",

            outcome:
                "The final result is a much more complete retail website experience that feels intentional, current, and conversion-driven. Instead of acting like a static information page, the site now works as an extension of the storefront itself—helping customers browse, evaluate, and take action quickly.",

            processSteps: [
                "UX Strategy",
                "Content Structure",
                "UI System Design",
                "Development",
                "Refinement"
            ],

            interfaceWalkthrough: [
                {
                    title: "Hero Section — Brand Positioning & Immediate Action",
                    description:
                        "The landing experience combines bold messaging, operating status, and direct calls-to-action to establish value immediately. The large-scale hero creates a stronger first impression while pushing high-intent actions like directions and phone calls above the fold.",
                    image: "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-01.webp"
                },
                {
                    title: "Product Browsing — Search, Categories, and Featured Inventory",
                    description:
                        "A more structured product discovery layer gives visitors a clearer sense of what the shop carries. Category blocks, search controls, and merchandised product cards help the site feel more like a real retail environment instead of a static promo page.",
                    image: "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-02.webp"
                },
                {
                    title: "Visit & Contact Experience",
                    description:
                        "Store hours, address, embedded map, contact details, newsletter signup, and direct inquiry form were grouped into a stronger destination section so customers can move from interest to action without friction.",
                    image: "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-03.webp"
                }
            ],

            uiux: {
                userGoals: [
                    "See if the shop is open",
                    "Understand what products are available",
                    "Check featured deals and promotions",
                    "Get directions quickly",
                    "Call or contact the shop easily",
                    "Build confidence before visiting"
                ],

                navigation:
                    "Top-level navigation was simplified around the customer journey: home, deals, products, about, and visit/contact. Utility actions like directions and call now sit in stronger high-visibility positions.",

                informationArchitecture:
                    "Home → Deals → Products → About → Visit Us → Contact",

                visualHierarchy:
                    "The updated hierarchy is led by a strong hero statement, supported by retail utility signals such as open status, category access, featured product blocks, and high-contrast calls-to-action. Supporting sections then reinforce trust, location, and contact pathways.",

                components: [
                    "Status pill / store-hours indicator",
                    "Hero CTA group",
                    "Featured deal cards",
                    "Product category cards",
                    "Search and category filter bar",
                    "Product grid cards",
                    "Customer testimonial blocks",
                    "Visit/location card",
                    "Contact form",
                    "Newsletter signup"
                ],

                responsive:
                    "The interface was designed to preserve strong CTA visibility and fast information access across screen sizes, with special emphasis on mobile usability for directions, phone calls, and quick browsing."
            },

            interfaceDesign: {
                visualSystem:
                    "The visual system extends the Little York identity through dark indigo surfaces, bright green accent color, soft glow treatments, and bold typography. The result feels more immersive and branded while still keeping content readable and action-oriented.",

                layoutApproach:
                    "The page is structured like a retail funnel: strong introduction, proof of value, product visibility, trust-building, and a clear visit/contact close. Each section was designed to feel distinct without breaking overall cohesion.",

                componentStrategy:
                    "Card-based modules and reusable content patterns make it easier to scale deals, product categories, product cards, testimonials, and location content over time without redesigning the entire experience.",

                accessibility:
                    "High-contrast text, large tap targets, clear section headings, and predictable content grouping improve scanability and make the site easier to use across different devices."
            },

            developmentSummary: {
                architecture:
                    "Built as a modular React application using Vite, with reusable data-driven sections for featured deals, product browsing, store details, testimonials, and contact flows.",

                features: [
                    "Component-based architecture",
                    "Hero with business status messaging",
                    "Searchable product browsing UI",
                    "Category filtering structure",
                    "Google Maps embed integration",
                    "Newsletter signup section",
                    "Contact form flow",
                    "Responsive retail layout system"
                ],

                performance:
                    "The site was structured for fast front-end performance, lean rendering, and a smoother browsing experience while still supporting more visual personality than the previous version."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "CSS",
                "Google Maps Embed"
            ],

            gallery: [
                "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-01.webp",
                "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-02.webp",
                "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-03.webp"
            ],

            relatedProjects: [
                {
                    slug: "little-york-smoke-shop",
                    title: "Little York Smoke Shop Brand Identity",
                    type: "Brand Systems",
                    cover: "/images/work/BRANDING/LYLOGO.webp",
                    mediaType: "brand",
                    imageFit: "contain",
                    imagePosition: "center"
                }
            ]
        }
    },

    {
        slug: "sapphire-site-concept",
        title: "Sapphire Developments — Luxury Real Estate Platform Concept",
        category: "ui-ux-web-dev",
        year: 2023,
        featured: true,

        summary:
            "Luxury real estate platform concept built to showcase premium property discovery through elegant UI, structured browsing, and responsive front-end development.",

        tags: [
            "Luxury Real Estate",
            "Product UI",
            "React",
            "Responsive Design",
            "Front-End Development"
        ],

        cover: "/images/work/WEB/SAPPHIRE-WALKTHROUGH-01.webp",
        liveUrl: "https://sapphire-developments.vercel.app/",

        content: {

            role: "UI/UX Design, Front-End Development",
            client: "Concept Project",

            overview:
                "Sapphire Developments is a luxury real estate web concept created to explore how high-end properties could be discovered, browsed, and evaluated online. The project focused on designing a browsing experience that feels polished and aspirational while still remaining easy to navigate, structured, and trustworthy.",

            challenge:
                "Luxury real estate platforms must balance aspirational presentation with practical browsing. Many listing sites either feel visually generic or overload users with dense information, making exploration feel clunky instead of premium. The challenge here was to create an interface that feels elevated and visually immersive without sacrificing clarity, navigation, or usability.",

            solution:
                "The interface was designed around strong visual hierarchy, spacious layouts, and image-first presentation. Large property photography helps establish quality and atmosphere immediately, while restrained typography, clean spacing, and clear sectioning support faster scanning. Search, filtering, and listing modules were structured to keep the browsing flow intuitive while reinforcing a polished, high-value brand feel.",

            outcome:
                "The result is a refined real estate browsing concept that demonstrates both product thinking and front-end execution. The project shows how thoughtful hierarchy, elegant UI structure, and reusable development patterns can create a premium property discovery experience that feels both credible and easy to use.",

            processSteps: [
                "UX Strategy",
                "UI Design",
                "Development",
                "Refinement"
            ],

            interfaceWalkthrough: [

                {
                    title: "Landing Page Experience",
                    description:
                        "The landing page introduces the platform with a prominent hero image, focused headline, and immediate search controls so users can begin browsing high-end properties without friction.",
                    image: "/images/work/WEB/SAPPHIRE-WALKTHROUGH-01.webp"
                },

                {
                    title: "Properties Grid View",
                    description:
                        "The listings grid was designed for scanability, allowing users to compare imagery, price, location, and property details quickly while maintaining a premium presentation.",
                    image: "/images/work/WEB/SAPPHIRE-WALKTHROUGH-03.webp"
                },

                {
                    title: "Contact Page",
                    description:
                        "The contact experience was designed to feel clean, direct, and trustworthy, giving users a clear path to inquire without friction while reinforcing the brand’s credibility through structured layout and supporting details.",
                    image: "/images/work/WEB/SAPPHIRE-WALKTHROUGH-02.webp"
                }

            ],

            uiux: {

                userGoals: [
                    "Browse luxury property listings",
                    "Compare homes by location, price, and style",
                    "View property details and imagery",
                    "Filter by category and browsing intent",
                    "Contact agents for inquiry"
                ],

                navigation:
                    "Browse-first navigation supported by top-level menu structure, category pathways, and prominent search controls.",

                informationArchitecture:
                    "Home → Search / Browse → Listings Grid → Property Details → Inquiry / Contact",

                visualHierarchy:
                    "Large photography, bold headings, restrained supporting text, and clean spacing create a premium and highly scannable browsing experience.",

                components: [
                    "Hero search module",
                    "Location cards",
                    "Category cards",
                    "Property listing cards",
                    "Inquiry/contact form",
                    "Footer navigation system"
                ],

                responsive:
                    "Responsive layouts were planned so the browsing experience could adapt cleanly across desktop, tablet, and mobile screen sizes."
            },

            interfaceDesign: {

                visualSystem:
                    "The visual language uses a restrained deep-blue palette, clean card structures, generous whitespace, and editorial-style imagery to establish trust and sophistication.",

                layoutApproach:
                    "Sections were organized to alternate between spacious presentation and structured browsing modules, helping users move naturally from discovery into comparison.",

                componentStrategy:
                    "Repeated UI patterns such as cards, filters, navigation links, and form elements were designed to feel consistent and reusable across the experience.",

                accessibility:
                    "Typography scale, contrast hierarchy, and clear button structure were considered to improve readability and interaction clarity."

            },

            developmentSummary: {

                architecture:
                    "Built as a React-based front-end concept using reusable UI sections and listing components to support scalable page construction.",

                features: [
                    "Property browsing interface",
                    "Responsive layout structure",
                    "Reusable card-based sections",
                    "Interactive search and listing patterns"
                ],

                performance:
                    "Structured as a lightweight front-end prototype with modular sections and reusable components for maintainability and future expansion."

            },

            developmentImplementation: {

                architecture: [

                    {
                        title: "Reusable Listing Components",

                        description:
                            "Property listings were structured as reusable React components so the same UI pattern could scale across landing sections, featured inventory, and listing grids.",

                        code: `function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="property-card__body">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <span>{property.price}</span>
      </div>
    </article>
  );
}`
                    },

                    {
                        title: "Section-Based Page Composition",

                        description:
                            "The interface was broken into modular page sections such as hero, categories, listings, and contact, making the layout easier to maintain and extend.",

                        code: `<>
  <HeroSection />
  <PropertiesByCity />
  <PropertyCategories />
  <LatestListings />
  <ContactSection />
</>`
                    }

                ],

                dataModel: [

                    {
                        title: "Structured Property Data",

                        description:
                            "Listings were organized as structured objects, making it easier to render consistent cards and scale the inventory system later.",

                        code: `const property = {
  id: 1,
  title: "2166 Marlin Ct.",
  location: "Miami, FL",
  price: "$2,660,840",
  bedrooms: 4,
  bathrooms: 4,
  sqft: 2096,
  image: "/images/property-1.jpg"
};`
                    }

                ],

                uiLogic: [

                    {
                        title: "Client-Side Browsing Logic",

                        description:
                            "Search and category filtering were designed to support fast browsing interactions without forcing users through unnecessary page reloads.",

                        code: `const filteredProperties = properties.filter((property) => {
  return selectedCity
    ? property.location.includes(selectedCity)
    : true;
});`
                    },

                    {
                        title: "Responsive Card Grid Behavior",

                        description:
                            "Card-based layouts were used to support flexible browsing across screen sizes while keeping content blocks visually consistent.",

                        code: `.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`
                    }

                ]

            },

            techStack: [
                "React",
                "JavaScript",
                "CSS",
                "Responsive Layout System",
                "Figma"
            ],

            gallery: [
                "/images/work/WEB/SAPPHIRE.webp",
                "/images/work/WEB/SAPPHIRE-LANDING.webp",
                "/images/work/WEB/SAPPHIRE-PROPERTIES.webp"
            ],

            relatedProjects: []

        }
    },


    /* ===============================
       BRAND SYSTEMS
    =============================== */



    {
        slug: "infinitely-fw-branding",
        title: "Infinite Floating World",
        category: "brand-systems",
        year: 2024,
        featured: false,
        summary:
            "Symbolic emblem built from recursive geometry to express infinity, depth, and layered identity.",
        tags: ["Symbol Design", "Visual Identity", "Emblem Design"],
        cover: "/images/work/BRANDING/InfinitelyFW.webp",
        content: {
            role: "Creator, Visual Identity",

            overview:
                "Infinite Floating World (Mugen ni Ukiyo) is the creative moniker for a body of illustration, painting, and narrative worldbuilding work. The identity is anchored by a symbolic emblem designed to express the idea of an infinite, layered universe through structure rather than literal imagery.",

            challenge:
                "Develop a visual symbol that conveys infinity, recursion, and dimensional depth without relying on obvious infinity motifs, cliché metaphors, or literal symbolism.",

            solution:
                "The mark was built from interlocking geometric forms arranged in recursive layers to suggest both expansion and compression at once. The result is a symbol with a strong central pull that functions more like an emblem or sigil than a conventional logo.",

            outcome:
                "The final mark serves as a central identifier for Infinite Floating World, providing a recognizable symbol that can extend across artwork signatures, digital platforms, and future creative applications tied to the broader identity.",

            processSteps: ["Concept", "Geometry", "Refine"],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Symbolic Emblem",
                        description:
                            "Interlocking geometric forms arranged in recursive layers to create the impression of an infinite center.",
                        colors: [
                            { name: "Black", value: "#000000" },
                            { name: "White", value: "#FFFFFF" },
                            { name: "Red", value: "#DC143C" }
                        ],
                        cover: "/images/work/BRANDING/InfinitelyFW.webp"
                    },

                    variants: []
                }
            },

            techStack: ["Illustrator", "Photoshop"],

            gallery: ["/images/work/BRANDING/InfinitelyFW.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "eb-cmd-branding",
        title: "E&B Correa Mobile Detailing Identity",
        category: "brand-systems",
        year: 2023,
        featured: false,

        summary:
            "Custom emblem identity for a mobile automotive detailing service built around a hand-illustrated Cadillac SUV.",

        tags: ["Automotive Branding", "Illustrated Logo", "Service Identity"],

        cover: "/images/work/BRANDING/E&B CMD.webp",

        content: {
            role: "Logo & Visual Identity",
            client: "E&B Correa Mobile Detailing",

            overview:
                "E&B Correa Mobile Detailing is a mobile automotive service specializing in professional vehicle detailing. The project focused on developing a distinctive emblem-style identity that could communicate reliability, precision, and automotive expertise while remaining recognizable across vehicles, uniforms, and digital platforms.",

            challenge:
                "Develop a distinctive identity that communicates automotive detailing while avoiding the generic car silhouettes and clip-art style graphics commonly used throughout the industry.",

            solution:
                "The identity centers on a custom illustrated Cadillac SUV silhouette drawn from scratch and placed within a structured triangular badge. The emblem format creates a strong, recognizable mark suited for vehicle graphics and uniforms. Clean typography and a restrained teal accent palette reinforce themes of precision, cleanliness, and premium service.",

            outcome:
                "The final emblem provides a recognizable brand mark that translates well across service vehicles, uniforms, and digital platforms, giving the business a clear and professional visual identity.",

            processSteps: ["Research", "Concept", "Design", "Delivery"],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Logo Identity",
                        description:
                            "Custom illustrated Cadillac SUV silhouette framed within a triangular badge emblem.",
                        colors: [
                            { name: "Black", value: "#1A1A1A" },
                            { name: "Teal", value: "#00897B" },
                            { name: "White", value: "#FFFFFF" }
                        ],
                        cover: "/images/work/BRANDING/E&B CMD.webp"
                    },

                    variants: []
                },

                typography: {
                    title: "Typography",
                    description:
                        "Classic Roman-style serif used for the primary wordmark, reinforcing a premium automotive aesthetic and strong badge-style identity.",
                    headings: "Cinzel Bold",
                    body: "Cinzel Regular"
                }
            },

            techStack: ["Illustrator", "Photoshop"],

            gallery: ["/images/work/BRANDING/E&B CMD.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "little-york-smoke-shop",
        title: "Little York Smoke Shop",
        category: "brand-systems",
        year: 2025,
        featured: false,

        summary:
            "Retail brand identity built around a bold circular emblem system designed to translate cleanly across storefront, digital, and promotional touchpoints.",

        tags: [
            "Brand System",
            "Retail Branding",
            "Logo Identity",
            "Visual Identity",
            "Brand Strategy"
        ],

        cover: "/images/work/BRANDING/LYLOGO.webp",
        // liveUrl: "https://little-york.vercel.app/",

        content: {
            role: "Brand Direction, Logo Design, Visual Identity",
            client: "Little York Smoke Shop",

            overview:
                "Little York Smoke Shop needed a brand identity that could unify the business across physical and digital customer touchpoints. The goal was to create a recognizable retail mark that feels bold, immediate, and adaptable enough to work on storefront signage, online branding, and promotional materials.",

            challenge:
                "The identity needed to read clearly at multiple sizes while maintaining enough personality to stand out in a competitive retail category. It had to feel recognizable from the street, usable online, and visually consistent across customer-facing applications.",

            solution:
                "The system was built around a circular emblem with strong outer typography, internal radial geometry, and a centered cannabis leaf motif. This structure gives the mark a compact, highly recognizable silhouette while also providing a visual language that can extend naturally into digital applications such as the website.",

            outcome:
                "The final identity gives Little York Smoke Shop a more cohesive and recognizable presence across branding and digital touchpoints. The mark functions well as a storefront-facing identifier while also adapting effectively to web and promotional use.",

            processSteps: [
                "Strategy",
                "Identity Design",
                "Application",
                "Refinement"
            ],

            deliverables: [
                "Primary Logo",
                "Color System",
                "Typography Direction",
                "Digital Brand Integration"
            ],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Logo Identity",
                        description:
                            "A retail-focused circular emblem designed for strong recognition across signage, digital platforms, and promotional use.",
                        colors: [
                            { name: "Deep Indigo", value: "#2A2F6C" },
                            { name: "Vibrant Green", value: "#1ED760" },
                            { name: "Clean White", value: "#FFFFFF" }
                        ],
                        cover: "/images/work/BRANDING/LYLOGO.webp"
                    },

                    variants: []
                },

                typography: {
                    title: "Typography",
                    description:
                        "Bold, highly legible typography supports strong recognition at storefront scale while remaining clear in digital use.",
                    headings: "Brandon Grotesque Bold",
                    body: "Brandon Grotesque Regular"
                }
            },

            techStack: ["Illustrator", "Photoshop", "Figma"],

            gallery: [
                "/images/work/BRANDING/LYLOGO.webp"
            ],

            relatedProjects: [
                {
                    slug: "little-york-smoke-shop-site",
                    title: "Little York Smoke Shop — Retail Website",
                    type: "UI/UX Design & Web Development",
                    cover: "/images/work/WEB/LITTLE-YORK-WALKTHROUGH-01.webp",
                    mediaType: "web",
                    imageFit: "cover",
                    imagePosition: "center"
                }
            ]
        }
    },

    {
        slug: "body-spoils-brand-identity",
        title: "Body Spoils Brand Identity",
        category: "brand-systems",
        year: 2020,
        featured: false,

        summary:
            "Wellness-focused brand identity designed to feel soft, premium, and restorative while maintaining clarity across digital and physical applications.",

        tags: [
            "Brand Identity",
            "Wellness Branding",
            "Logo Design",
            "Visual Identity"
        ],

        cover: "/images/work/BRANDING/BodySpoils.webp",

        content: {
            role: "Brand Direction, Logo Design, Visual Identity",
            client: "Body Spoils",

            overview:
                "Body Spoils is a massage therapy business focused on relaxation, restoration, and self-care. The identity was designed to create a sense of calm confidence while positioning the brand as premium and trustworthy.",

            challenge:
                "Wellness brands often fall into generic spa aesthetics or overly decorative visuals that reduce clarity and professionalism. The challenge was to create a distinctive identity that feels soft and inviting while remaining clean, modern, and versatile across applications.",

            solution:
                "The identity was built around a refined typographic mark supported by a restrained color palette and balanced spacing. The system prioritizes clarity and adaptability, allowing the brand to function consistently across website interfaces, promotional materials, and future business touchpoints.",

            outcome:
                "The final identity gives Body Spoils a cohesive and professional visual presence that supports both client trust and brand recognition. The system translates cleanly across digital and physical environments, reinforcing a consistent and calming brand experience.",

            processSteps: ["Strategy", "Concept", "Design", "Refinement"],

            deliverables: [
                "Primary Logo",
                "Logo Variants",
                "Color System",
                "Typography Direction"
            ],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Primary Logo",
                        description:
                            "Clean typographic mark designed to communicate calm, confidence, and professionalism.",
                        colors: [
                            { name: "Vibrant Pink", value: "#F985B1" },
                            { name: "Light Pink", value: "#FCBAD3" },
                            { name: "Warm Neutral", value: "#EDEDED" }
                        ],
                        cover: "/images/work/BRANDING/BodySpoils.webp"
                    },

                    variants: [

                        {
                            title: "Alternate Lockup",
                            description:
                                "Secondary logo arrangement for flexible placement across layouts and constrained spaces.",
                            cover: "/images/work/BRANDING/BodySpoilsLock.webp"
                        }
                    ]
                },

                typography: {
                    title: "Typography",
                    description:
                        "Clean, modern typography reinforces the calm and professional tone of the brand while maintaining readability across digital and print applications.",
                    headings: "Brandon Grotesque Bold",
                    body: "Brandon Grotesque Regular"
                }
            },

            techStack: ["Illustrator", "Photoshop"],

            gallery: [
                "/images/work/BRANDING/BODY-SPOILS-LOGO.webp"
            ],

            relatedProjects: [
                {
                    slug: "body-spoils-site",
                    title: "Body Spoils Website",
                    type: "UI/UX Design & Web Development",
                    cover: "/images/work/WEB/BODY SPOILS-WALKTHROUGH-01.webp",
                    mediaType: "web",
                    imageFit: "cover",
                    imagePosition: "center"
                }
            ]
        }
    },

    {
        slug: "neo-seal-logo",
        title: "NEO Unlimited",
        category: "brand-systems",
        year: 2025,
        summary:
            "Modernized corporate seal combining infinity motifs with clean contemporary typography.",
        tags: ["Brand Identity", "Seal Design", "Corporate Branding"],
        cover: "/images/work/BRANDING/NEO Seal.webp",

        content: {
            role: "Logo & Visual Identity",
            client: "NEO Unlimited",

            overview:
                "NEO Unlimited is a consulting agency focused on strategic growth and business development. The identity centers on a modernized corporate seal designed to communicate credibility, structure, and forward momentum.",

            challenge:
                "Develop a mark that feels authoritative and professional while avoiding the dated visual language often associated with traditional corporate seals.",

            solution:
                "The identity uses a circular seal structure paired with repeating infinity motifs along the outer ring to suggest continuity and unlimited potential. At the center, the NEO wordmark introduces a clean contemporary typographic structure, balancing institutional form with modern clarity.",

            outcome:
                "The final mark functions as a clear corporate identifier across digital platforms, documentation, and brand materials while maintaining a recognizable and authoritative presence.",

            processSteps: ["Research", "Concept", "Design", "Delivery"],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Corporate Seal",
                        description:
                            "Modernized corporate seal featuring infinity motifs and clean contemporary typography.",
                        colors: [
                            { name: "Black", value: "#1A1A1A" },
                            { name: "White", value: "#FFFFFF" }
                        ],
                        cover: "/images/work/BRANDING/NEO Seal.webp"
                    },

                    variants: [
                        {
                            title: "Alternate Lockup",
                            description:
                                "Secondary logo arrangement for flexible placement across layouts and constrained spaces.",
                            cover: "/images/work/BRANDING/NEO Lock.webp"
                        }

                    ]
                },

                typography: {
                    title: "Typography",
                    description:
                        "Extended geometric sans-serif used for the NEO wordmark, reinforcing a modern technical aesthetic and strong institutional clarity.",
                    headings: "Eurostile Extended Bold",
                    body: "Eurostile Extended"
                }
            },

            techStack: ["Illustrator", "Photoshop"],

            gallery: ["/images/work/BRANDING/NEO Seal.webp"],

            relatedProjects: [

                {
                    slug: "neo-unlimited-site",
                    title: "Neo Unlimited — Consultancy Website",
                    type: "ui-ux-web-dev",
                    cover: "/images/work/WEB/NEO-WALKTHROUGH-01.webp",
                    mediaType: "web",
                    imageFit: "cover",
                    imagePosition: "center"
                }
            ]
        }
    },

    {
        slug: "lv1-logo",
        title: "Liquorville Hookah",
        category: "brand-systems",
        year: 2023,
        summary:
            "Illustrative lounge emblem built around a central hookah symbol and ornamental hospitality lettering.",
        tags: ["Hospitality Branding", "Illustrative Logo", "Emblem Design"],
        cover: "/images/work/BRANDING/LV1.webp",

        content: {
            role: "Logo & Visual Identity",
            client: "Liquorville Hookah",

            overview:
                "Liquorville Hookah is a lounge concept centered around nightlife, social atmosphere, and premium hookah experiences. The identity is built around an emblem-style logo that combines illustrative detail and expressive typography to create a distinctive hospitality brand.",

            challenge:
                "Design a logo that clearly communicates hookah culture while maintaining a polished and inviting lounge aesthetic. The mark needed to feel expressive and detailed without becoming visually cluttered.",

            solution:
                "The logo centers on a stylized hookah illustration framed within a circular emblem structure. Decorative linework and ornamental accents reinforce the relaxed lounge atmosphere, while the custom Liquorville wordmark introduces personality and movement. A compact Hookah label anchors the composition, balancing expressive illustration with clear readability.",

            outcome:
                "The final mark functions as a versatile hospitality emblem suitable for signage, menus, merchandise, and digital platforms while maintaining a strong and recognizable visual identity.",

            processSteps: ["Concept", "Illustration", "Type", "Refine"],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Lounge Emblem",
                        description:
                            "Stylized hookah illustration framed within a circular emblem supported by ornamental hospitality lettering.",
                        colors: [
                            { name: "Black", value: "#1A1A1A" },
                            { name: "White", value: "#FFFFFF" }
                        ],
                        cover: "/images/work/BRANDING/LV1.webp"
                    },

                    variants: []
                },

                typography: {
                    title: "Typography",
                    description:
                        "Custom display lettering brings personality and movement to the primary Liquorville wordmark, while a bold condensed sans-serif anchors the secondary Hookah label with clarity and contrast.",
                    headings: "Custom Display Lettering",
                    body: "Bold Condensed Sans-Serif"
                }
            },

            techStack: ["Illustrator", "Photoshop"],

            gallery: ["/images/work/BRANDING/LV1.webp"],

            relatedProjects: []
        }
    },

    {
        slug: "stone-and-brier-logo",
        title: "Stone & Brier",
        category: "brand-systems",
        year: 2016,
        summary:
            "Architectural S&B monogram built within a circular emblem for a structured studio identity.",
        tags: ["Logo Design", "Monogram", "Agency Branding"],
        cover: "/images/work/BRANDING/S&B.webp",

        content: {
            role: "Logo & Identity",
            client: "Stone & Brier",

            overview:
                "Stone & Brier is a creative design studio defined by precision, structure, and disciplined visual thinking. The identity centers on a custom S&B monogram built within a circular emblem, giving the mark a strong and compact presence.",

            challenge:
                "Design a monogram that communicates stability and craftsmanship while remaining bold and immediately recognizable. The mark needed to feel architectural, balanced, and distinctive without becoming overly intricate.",

            solution:
                "The monogram was built using angular geometry and radial symmetry, merging the S and B into a unified symbol anchored by a triangular core. The circular enclosure reinforces the sense of structure while allowing the mark to function as a compact emblem across digital and physical applications.",

            outcome:
                "The final mark reads clearly at small sizes while maintaining strong visual impact at larger scale, functioning effectively as a digital icon, stamp, and core insignia across the studio’s identity system.",

            processSteps: ["Concept", "Geometry", "Refine"],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Monogram",
                        description:
                            "Custom S&B monogram built within a circular emblem and anchored by a triangular core.",
                        colors: [
                            { name: "Black", value: "#1A1A1A" },
                            { name: "White", value: "#FFFFFF" }
                        ],
                        cover: "/images/work/BRANDING/S&B.webp"
                    },

                    variants: []
                },

                typography: {
                    title: "Typography",
                    description:
                        "Bold sans-serif typography supports the monogram with clean legibility and a straightforward studio character.",
                    headings: "Bold Geometric Sans-Serif",
                    body: "Geometric Sans-Serif"
                }
            },

            techStack: ["Illustrator", "Photoshop"],

            gallery: ["/images/work/BRANDING/S&B.webp"],

            relatedProjects: [
                // {
                //     slug: "storefront-ui",
                //     title: "Stone & Brier General Store Website",
                //     type: "UI/UX & Web Development",
                //     cover: "/images/work/WEB/STORE.webp"
                // }
            ]
        }
    },

    {
        slug: "creator-stack-brand-identity",
        title: "Creator Stack Brand Identity",
        category: "brand-systems",
        year: 2025,
        featured: false,

        summary:
            "A modern SaaS identity system designed to express clarity, modularity, and creator-focused momentum across product and brand touchpoints.",

        tags: [
            "Brand Identity",
            "SaaS",
            "UI/UX",
            "Product Branding",
            "Illustrator"
        ],

        cover: "/images/work/BRANDING/CreatorStack.webp",
        // liveUrl: "https://creatorstack-beige.vercel.app/",

        content: {
            role: "Brand Direction, Visual Identity, Product Branding",
            client: "Creator Stack",

            overview:
                "Creator Stack required a brand identity that could unify a modern SaaS platform across marketing, product interface, and digital touchpoints. The goal was to create a system that communicates clarity, modularity, and creator-first momentum while maintaining the sophistication expected of a premium digital product.",

            challenge:
                "The identity needed to bridge brand presence and product experience without feeling disconnected or generic. It had to function as both a standalone brand mark and an integrated part of the product UI, supporting scalability across features, pages, and future expansion.",

            solution:
                "The system was built around a modular visual language that emphasizes structure, clarity, and forward motion. Typography, spacing, and a restrained color system work together to create a cohesive identity that translates seamlessly from brand collateral to product interface, reinforcing the platform's core values of simplicity and creator empowerment.",

            outcome:
                "The final identity gives Creator Stack a distinctive and scalable brand presence that strengthens both external marketing and internal product experience. The system supports the platform's positioning as a modern, creator-focused SaaS solution while maintaining visual consistency across all touchpoints.",

            processSteps: [
                "Strategy",
                "Identity Design",
                "Product Integration",
                "Refinement"
            ],

            deliverables: [
                "Brand Identity System",
                "Visual Language",
                "Product Brand Integration",
                "Digital Brand Guidelines"
            ],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Brand Identity",
                        description:
                            "A modular identity system built for clarity and scalability, designed to unify brand presence across marketing and product touchpoints.",
                        colors: [
                            { name: "Clean White", value: "#FFFFFF" },
                            { name: "Bright Teal", value: "#02EBB9" },
                            { name: "Electric Blue", value: "#05B1E7" }
                        ],
                        cover: "/images/work/BRANDING/CreatorStack.webp"
                    },

                    variants: [

                        {
                            title: "Alternate Lockup",
                            description:
                                "Secondary logo arrangement for flexible placement across layouts and constrained spaces.",
                            cover: "/images/work/BRANDING/CreatorStackLock.webp"
                        }
                    ]
                },

                typography: {
                    title: "Typography",
                    description:
                        "Modern, highly legible typography supports the brand's clarity-first approach while maintaining strong hierarchy across digital applications.",
                    headings: "Inter Bold",
                    body: "Inter Regular"
                }
            },

            techStack: ["Illustrator", "Figma", "Photoshop"],

            gallery: [
                "/images/work/WEB/CREATOR-STACK-HOME.webp",
                "/images/work/WEB/CREATOR-STACK-PRICING.webp",
                "/images/work/WEB/CREATOR-STACK-DASHBOARD.webp"
            ],

            relatedProjects: [
                {
                    slug: "creator-stack",
                    title: "Creator Stack — SaaS Platform",
                    type: "UI/UX Design & Web Development",
                    cover: "/images/work/WEB/CREATOR-STACK-HOME.webp",
                    mediaType: "web",
                    imageFit: "cover",
                    imagePosition: "center"
                }
            ]
        }
    }
];