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

    relatedProjects: []
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

    {
        slug: "little-york-smoke-shop-site",
        title: "Little York Smoke Shop Website",
        category: "ui-ux-web-dev",
        year: 2025,
        featured: false,

        summary:
            "Retail storefront website built to highlight promotions, product categories, and store information through a bold, mobile-friendly experience.",

        tags: [
            "UI/UX Design",
            "React",
            "Retail Website",
            "Local Business",
            "Front-End Development"
        ],

        cover: "/images/work/WEB/little-york-site.webp",
        liveUrl: "https://littleyorksmokeshop.com",

        content: {

            role: "UI/UX Design, Front-End Development",
            client: "Little York Smoke Shop",

            overview:
                "The Little York Smoke Shop website extends the brand’s physical storefront into a clear and engaging digital experience. The goal was to create a site that reflects the visual identity of the shop while helping customers quickly discover promotions, browse product categories, and find essential store information such as hours and location.",

            challenge:
                "Local retail websites must communicate value immediately. Customers typically visit to check promotions, confirm store hours, or quickly understand what products are available. The challenge was designing an interface that carried the bold visual style of the brand while remaining simple, readable, and fast to navigate across mobile and desktop devices.",

            solution:
                "The site structure prioritizes promotions, product categories, and store details within a clear visual hierarchy. Promotional sections highlight current deals while category cards help customers quickly understand what the shop offers. Brand visuals from the identity system were integrated throughout the interface to ensure the online experience felt connected to the physical store environment.",

            outcome:
                "The final website gives Little York Smoke Shop a stronger digital storefront that supports local discovery and customer engagement. Visitors can quickly view promotions, browse product categories, and find store information, reinforcing a more complete and professional retail presence online.",

            processSteps: [
                "UX Strategy",
                "UI Design",
                "Development",
                "Optimization",
                "Launch"
            ],

            interfaceWalkthrough: [

                {
                    title: "Product Categories",
                    description:
                        "Product category cards help visitors quickly understand what the store offers, from cannabis products to smoking accessories and glass.",
                    image: "/images/work/WEB/SMOKE-WALKTHROUGH-01.webp"
                },

                {
                    title: "Featured Deals",
                    description:
                        "Promotional highlight sections surface current specials and featured products, helping customers immediately see available deals.",
                    image: "/images/work/WEB/SMOKE-WALKTHROUGH-02.webp"
                },

                {
                    title: "Location & Contact",
                    description:
                        "Store information is presented clearly with address, hours, phone number, and an embedded Google Maps location for quick navigation.",
                    image: "/images/work/WEB/SMOKE-WALKTHROUGH-03.webp"
                }

            ],

            uiux: {

                userGoals: [
                    "Quickly find store hours and location",
                    "View current promotions and deals",
                    "Browse product categories",
                    "Contact the shop easily"
                ],

                navigation:
                    "Simple, linear navigation prioritizing promotions, products, and essential store information.",

                informationArchitecture:
                    "Home → Promotions → Product Categories → About → Contact",

                visualHierarchy:
                    "Promotions and brand imagery lead the experience above the fold, followed by structured category and store information sections.",

                components: [
                    "Hero section with promotional emphasis",
                    "Product category cards",
                    "Deal highlight sections",
                    "Location and contact block",
                    "Responsive navigation"
                ],

                responsive:
                    "Mobile-first layout designed for quick browsing and fast access to store information."
            },

            interfaceDesign: {

                visualSystem:
                    "Brand colors and visual motifs from the Little York identity system were integrated throughout the interface to reinforce brand recognition.",

                layoutApproach:
                    "Content sections were structured to surface promotions first, followed by product categories and store information for quick customer scanning.",

                componentStrategy:
                    "Reusable card and promotional modules help keep the layout consistent while allowing the store to update promotions easily.",

                accessibility:
                    "Clear headings, readable contrast, and simplified layout structure help users quickly find key information."
            },

            developmentSummary: {

                architecture:
                    "Built using React with modular UI components to keep the layout flexible and easy to maintain.",

                features: [
                    "Responsive layouts across device sizes",
                    "Structured promotional content sections",
                    "Google Maps location integration",
                    "SEO-friendly page structure",
                    "Reusable UI sections"
                ],

                performance:
                    "Built with Vite for fast development, optimized bundling, and strong page-load performance."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "CSS",
                "Google Maps API"
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
        featured: false,

        summary:
            "Complete retail brand system spanning logo identity, storefront graphics, and digital brand integration.",

        tags: ["Brand System", "Environmental Design", "Retail Branding", "Brand Strategy"],

        cover: "/images/work/BRANDING/LYLOGO.webp",
        liveUrl: "https://littleyorksmokeshop.com",

        content: {
            role: "Brand Direction, Logo Design, Environmental Graphics",
            client: "Little York Smoke Shop",

            overview:
                "Little York Smoke Shop needed a brand identity capable of unifying the business across physical and digital touchpoints. The project focused on building a cohesive retail brand system that performs across storefront signage, promotional surfaces, and digital platforms while remaining bold, clean, and immediately recognizable.",

            challenge:
                "Design a flexible retail identity system that performs at multiple scales. The mark needed to read clearly from a distance on storefront signage, remain recognizable in digital use, and support promotional applications like large-format window graphics without becoming visually inconsistent.",

            solution:
                "The system was built around a circular emblem with strong outer typography, radiating internal geometry, and a central cannabis leaf icon that anchors the mark. Supporting environmental graphics extended the identity into the storefront through a modular layout that distributes promotional messaging across multiple window panes while maintaining visual consistency.",

            outcome:
                "The final system gives Little York Smoke Shop a cohesive brand presence across identity, environmental graphics, and digital touchpoints. The logo delivers instant recognition, the storefront graphics increase street visibility, and the brand now feels unified across customer-facing experiences.",

            processSteps: ["Strategy", "Identity Design", "Application", "Refinement"],

            deliverables: [
                "Logo Identity",
                "Color System",
                "Typography Direction",
                "Window Wrap",
                "Brand Integration for Web"
            ],

            brandSystem: {
                logo: {
                    primary: {
                        title: "Logo Identity",
                        description:
                            "Bold dispensary emblem combining retail badge structure with clean cannabis iconography. The circular form creates a strong storefront-ready silhouette while the inner sunburst geometry focuses attention around the central symbol.",
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
                        "Bold, highly legible typography supports strong recognition at storefront scale while maintaining clarity in digital applications.",
                    headings: "Brandon Grotesque Bold",
                    body: "Brandon Grotesque Regular"
                },

                applications: [
                    {
                        title: "Window Wrap",
                        type: "Environmental Graphics",
                        description:
                            "Large-format storefront graphics designed to communicate promotions, product categories, and brand identity to passing foot and vehicle traffic. The layout uses modular information blocks and layered textures to balance clarity with visual impact.",
                        cover: "/images/work/BRANDING/WindowWrappp.webp"
                    },
                    {
                        title: "Space Motion Menu",
                        type: "Digital Menu",
                        description:
                            "Animated digital menu system featuring motion graphics and dynamic content display designed to support the in-store customer experience.",
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
                    imageFit: "contain",
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
                    imageFit: "contain",
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
    }
];