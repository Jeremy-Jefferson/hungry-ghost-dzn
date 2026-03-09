/*
  HUNGRY GHOST DZN — Work Mock Data
  Category keys:
    - brand-design
    - graphic-design
    - web-design
*/

export const work = [
    /* ===============================
       WEB DESIGN
    =============================== */

    {
        slug: "hungry-ghost-dzn-site",
        title: "Hungry Ghost DZN",
        category: "web-design",
        year: 2026,
        featured: true,

        summary:
            "Studio brand system and high-impact portfolio built with React + Vite.",

        tags: ["React", "Vite", "Design System", "Brand Strategy"],

        cover: "/images/work/WEB/HGDZN.png",

        /*liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",*/

        content: {
            role: "Brand Direction, UI/UX, Front-End Development",
            client: "Hungry Ghost DZN",
            overview:
                "Hungry Ghost DZN was built as a modular brand system and performance-first marketing site designed to scale with services, case studies, and client acquisition goals.",
            challenge:
                "Create a visual identity and web presence that feels aggressive, precise, and premium without sacrificing clarity and usability.",
            solution:
                "Built a scalable token-based design system, structured layout architecture, and modular component grid for long-term expansion.",
            outcome:
                "A studio-ready foundation capable of supporting service expansion, case studies, and monetization.",
        },
    },


    {
        slug: "portfolio-showcase",
        title: "Portfolio Showcase",
        category: "web-design",
        year: 2023,
        featured: false,

        summary:
            "Clean, image-forward portfolio layout with high-contrast typography.",

        tags: ["UI Design", "Responsive", "Grid System"],

        cover: "/images/work/WEB/Portfolio.jpg",

        liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",

        content: {
            role: "UI/UX, Front-End",
            overview:
                "A modular gallery-driven layout designed for clarity and fast scanning across devices.",
            challenge:
                "Balance visual impact with speed and readability.",
            solution:
                "Optimized imagery, clear typographic rhythm, and accessible color contrast.",
            outcome:
                "An elegant showcase pattern adaptable to case studies and galleries.",
        },
    },

    {
        slug: "sapphire-site-concept",
        title: "Sapphire Developments — Web Concept",
        category: "web-design",
        year: 2023,
        featured: false,

        summary:
            "Authoritative site concept with sharp hierarchy and trust-focused visuals.",

        tags: ["Concept", "Corporate", "UI Design"],

        cover: "/images/work/WEB/SAPPHIRE.png",

        /*liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",*/

        content: {
            role: "UI Design",
            overview:
                "A corporate web direction leveraging deep blue accents, clear spacing, and decisive headings.",
            challenge:
                "Convey stability and premium positioning without clutter.",
            solution:
                "Structured section rhythm, restrained color, and confident typographic scale.",
            outcome:
                "A credible, conversion-ready foundation for a property developer site.",
        },
    },

    {
        slug: "dictionary-ui",
        title: "Dictionary UI Micro-App",
        category: "web-design",
        year: 2023,
        featured: false,

        summary:
            "Lightweight dictionary interface focused on clarity and speed.",

        tags: ["Micro-app", "UI", "Accessibility"],

        cover: "/images/work/WEB/Dictionary.png",

        liveUrl: "https://dictionary-react-app-rho.vercel.app/",

        content: {
            role: "UI/UX",
            overview:
                "A compact interface for quick lookups with clean type, dark mode, and keyboard-friendly flows.",
            challenge:
                "Keep interactions minimal while surfacing meaning, usage, and variations.",
            solution:
                "Focused content grouping, semantic markup, and keyboard-first controls.",
            outcome:
                "Faster scanning and lower interaction cost for common tasks.",
        },
    },

    {
        slug: "storefront-ui",
        title: "Storefront UI Kit",
        category: "web-design",
        year: 2022,
        featured: false,

        summary:
            "Composable eCommerce components for quick storefront spins.",

        tags: ["Design System", "eCommerce", "Components"],

        cover: "/images/work/WEB/STORE.png",

        liveUrl: "https://stone-and-brier-general-store.vercel.app/Home",

        content: {
            role: "Design System, UI",
            overview:
                "Reusable product cards, grids, and CTAs tuned for conversion and speed.",
            challenge:
                "Ship pages quickly without sacrificing brand and usability.",
            solution:
                "A constrained set of tokens, responsive grids, and high-contrast CTAs.",
            outcome:
                "Faster go-to-market with consistent visuals and performance.",
        },
    },

    {
        slug: "little-york-smoke-shop-site",
        title: "Little York Smoke Shop Website",
        category: "web-design",
        year: 2025,
        featured: false,

        summary:
            "Promotional website designed to showcase products, deals, and brand identity for Little York Smoke Shop.",

        tags: ["Web Design", "UI Design", "Brand Integration", "Client Work"],

        cover: "/images/work/WEB/little-york-site.png",

        liveUrl: "https://littleyorksmokeshop.com",

        content: {
            role: "Web Design / UI Design",
            client: "Little York Smoke Shop",

            overview:
                "A promotional website created for Little York Smoke Shop to give customers a clear, visually engaging introduction to the brand, its offerings, and in-store promotions. The site was designed to reinforce the shop’s identity while helping visitors quickly understand what the business offers before visiting in person.",

            challenge:
                "Design a website that felt visually bold and on-brand while keeping the experience simple, readable, and easy to scan for product categories, promotions, and store information.",

            solution:
                "Developed a bold, image-driven layout using cannabis leaf textures, strong typography, and brand-led visuals to reinforce the shop’s identity. Clear hierarchy, oversized headings, and focused promotional messaging were used to make key information easy to find at a glance.",

            outcome:
                "The final site gives Little York Smoke Shop a stronger digital presence, helping communicate brand personality, highlight promotions, and provide customers with a quick overview of the store before they visit.",

            services: [
                "Web Design",
                "UI Design",
                "Brand Integration",
                "Promotional Layout"
            ],
        },
    },


    /* ===============================
       BRAND DESIGN
    =============================== */



    {
        slug: "eb-cmd-branding",
        title: "E&B Correa Mobile Detailing Identity",
        category: "brand-design",
        year: 2023,
        featured: false,
        summary: "Automotive service emblem featuring a custom illustrated Cadillac silhouette.",
        tags: ["Automotive Branding", "Illustrative Logo", "Service Identity"],
        cover: "/images/work/BRANDING/E&B CMD.webp",
        content: {
            role: "Logo & Visual Identity",
            client: "E&B Correa Mobile Detailing",

            overview: "E&B Correa Mobile Detailing is an automotive detailing service focused on convenience and premium vehicle care. The identity centers on a bold emblem designed to communicate professionalism, trust, and automotive expertise.",

            challenge: "Create a distinctive logo that clearly communicates automotive detailing while standing apart from the generic car icons commonly used in the industry.",

            solution: "The mark features a custom illustrated Cadillac SUV silhouette drawn from scratch, placed within a strong triangular badge structure. Clean typography and a teal accent palette reinforce the themes of precision, cleanliness, and premium service.",

            outcome: "The final emblem works effectively across service vehicles, uniforms, and digital platforms, giving the business a recognizable and professional automotive brand mark."
        }
    },
    {
        slug: "infinitely-fw-branding",
        title: "Infinite Floating World Identity",
        category: "brand-design",
        year: 2024,
        featured: true,
        summary: "Symbolic emblem built from recursive geometry representing the Infinite Floating World.",
        tags: ["Symbol Design", "Visual Identity", "Sigil Design"],
        cover: "/images/work/BRANDING/InfinitelyFW.webp",
        content: {
            role: "Creator, Visual Identity",

            overview: "Infinite Floating World (Mugen ni Ukiyo) is the creative moniker under which illustration, painting, and narrative worldbuilding projects are produced. The identity is anchored by a symbolic emblem that reflects the concept of an infinite, layered universe.",

            challenge: "Develop a visual symbol that conveys infinity, recursion, and dimensional depth without relying on obvious infinity motifs or literal symbolism.",

            solution: "The mark was constructed using interlocking geometric forms that rotate outward while simultaneously collapsing inward through recursive layers. The resulting structure creates the impression of an infinite center, functioning more like a sigil or emblem than a traditional logo.",

            outcome: "The final mark operates as a central symbol for the Infinite Floating World identity, appearing across artwork signatures, digital platforms, and future narrative projects connected to the broader universe."
        }
    },
    {
        slug: "ly-logo-identity",
        title: "Little York Smoke Shop Identity",
        category: "brand-design",
        year: 2025,
        summary: "Bold dispensary emblem combining retail badge structure with clean cannabis iconography.",
        tags: ["Brand Identity", "Retail Branding", "Emblem Design"],
        cover: "/images/work/BRANDING/LYLOGO.webp",
        content: {
            role: "Logo & Visual Identity",
            client: "Little York Smoke Shop",

            overview: "Little York Smoke Shop is a cannabis retailer positioned as clean, modern, and approachable. The identity centers on a bold circular emblem designed for strong visibility in storefront signage, packaging, and promotional materials.",

            challenge: "Create a recognizable dispensary logo that balances cannabis symbolism with a professional retail aesthetic. The mark needed to stand out at a distance while avoiding the overly playful or cliché look common in the industry.",

            solution: "The design uses a circular badge structure with radiating sunburst geometry to draw attention to the central cannabis leaf. Medical cross symbols and clean typography reinforce a sense of legitimacy and wellness, while the purple and green palette keeps the identity distinctly tied to cannabis culture.",

            outcome: "The final emblem functions as a strong retail identifier across storefront signage, packaging, and digital assets, giving the shop a recognizable and scalable brand mark."
        },
    },
    {
        slug: "neo-seal-logo",
        title: "NEO Unlimited Identity",
        category: "brand-design",
        year: 2025,
        summary: "Modernized corporate seal combining infinity motifs with clean technology-driven typography.",
        tags: ["Brand Identity", "Seal Design", "Corporate Branding"],
        cover: "/images/work/BRANDING/NEO Seal.webp",
        content: {
            role: "Logo & Visual Identity",

            overview: "NEO Unlimited is a consulting agency focused on strategic growth and business development. The brand identity centers on a modernized corporate seal designed to convey credibility, structure, and forward momentum.",

            challenge: "Develop a mark that feels authoritative and professional while avoiding the dated aesthetic commonly associated with traditional seals.",

            solution: "The design uses a circular seal format paired with repeating infinity motifs along the border to symbolize continuity and unlimited potential. The central NEO wordmark introduces a clean, contemporary typographic structure, balancing institutional form with modern clarity.",

            outcome: "The final mark functions as a strong corporate identifier across digital platforms, documentation, and brand materials while maintaining a recognizable and authoritative presence."
        },
    },
    {
        slug: "lv1-logo",
        title: "Liquorville Hookah Identity",
        category: "brand-design",
        year: 2023,
        summary: "Illustrative lounge emblem built around a central hookah symbol and ornamental hospitality typography.",
        tags: ["Hospitality Branding", "Illustrative Logo", "Emblem Design"],
        cover: "/images/work/BRANDING/LV1.webp",
        content: {
            role: "Logo & Visual Identity",

            overview: "Liquorville Hookah is a lounge concept centered around nightlife, social atmosphere, and premium hookah experiences. The identity focuses on an emblem-style logo that blends illustration and typography to create a memorable lounge brand.",

            challenge: "Design a logo that clearly communicates hookah culture while maintaining a polished and inviting lounge aesthetic. The mark needed to feel detailed and expressive without becoming visually cluttered.",

            solution: "The logo centers on a stylized hookah illustration framed within a circular emblem. Decorative linework and ornamental accents reinforce the relaxed lounge atmosphere, while the custom Liquorville wordmark introduces personality and movement.",

            outcome: "The final mark functions as a versatile hospitality emblem that works across signage, menus, merchandise, and digital platforms while maintaining strong visual character."
        }
    },

    {
        slug: "stone-and-brier-logo",
        title: "Stone & Brier Identity",
        category: "brand-design",
        year: 2016,
        summary: "Architectural S&B monogram constructed within a circular emblem for a creative design studio.",
        tags: ["Logo Design", "Monogram", "Agency Branding"],
        cover: "/images/work/BRANDING/S&B.webp",
        content: {
            role: "Logo & Identity",

            overview: "Stone & Brier is a creative design studio built around precision, structure, and disciplined visual thinking. The identity centers on a custom S&B monogram contained within a circular emblem, giving the mark a strong, emblematic presence.",

            challenge: "Design a monogram that communicates stability and craftsmanship while remaining bold and immediately recognizable. The mark needed to feel architectural and balanced without becoming overly intricate.",

            solution: "The monogram was constructed using angular geometry and radial symmetry, merging the S and B into a unified symbol anchored by a triangular core. The circular enclosure reinforces the sense of structure while allowing the mark to function as a compact emblem across applications.",

            outcome: "The final mark reads clearly at small sizes while maintaining strong visual impact at large scale, functioning equally well as a digital icon, stamp, or brand insignia across the studio's identity system."
        },
    },

    /* ===============================
       GRAPHIC DESIGN
    =============================== */

    {
    slug: "space-motion-graphic",
    title: "Cosmic Motion Menu — Little York Smoke Shop",
    category: "graphic-design",
    year: 2025,
    featured: false,

    summary:
        "Animated space-themed menu built as a lightweight looping motion graphic for digital displays and social media.",

    tags: ["Motion Design", "Digital Menu", "Loop Animation"],

    cover: "/images/work/GRAPHICS/Space.webp",

    content: {
        role: "Motion Graphic",

        overview:
            "A looping animated menu designed for a smoke shop’s digital display. The piece combines cosmic visuals with bold pricing tables to create a striking, easily readable menu that feels dynamic rather than static.",

        challenge:
            "Create motion that feels visually rich while keeping the file lightweight enough for fast loading on social feeds and in-store screens.",

        solution:
            "Used a controlled frame loop, high-contrast typography, and layered space textures to maintain visual impact while optimizing the animation for efficient playback.",

        outcome:
            "A vibrant animated menu that captures attention instantly and works seamlessly across social media, web embeds, and in-store digital displays.",
    },
},


    {
        slug: "larn-smoke-shop-window-wrap",
        title: "L.A.R.N. Smoke Shop Window Wrap",
        category: "graphic-design",
        year: 2025,
        featured: true,

        summary:
            "Large-format storefront window wrap concept designed to promote products, deals, and brand presence for L.A.R.N. Smoke Shop.",

        tags: ["Environmental Design", "Large Format Print", "Storefront Graphics"],

        cover: "/images/work/GRAPHICS/window wrap example.webp",

        content: {
            role: "Environmental Graphic Design",
            client: "L.A.R.N. Smoke Shop",

            overview:
                "A large-format storefront window wrap concept created for L.A.R.N. Smoke Shop. The design transforms the shop’s exterior windows into a high-impact promotional surface, communicating product offerings, daily deals, and brand identity to pedestrians and passing traffic.",

            challenge:
                "Design a window wrap that balances bold visual impact with clear information hierarchy across multiple panels, ensuring key messages remain legible from a distance while maintaining visual cohesion across the storefront.",

            solution:
                "Developed a modular panel layout that distributes brand messaging, product categories, and promotional offers across the window surfaces. High-contrast gold typography, layered smoke textures, and decorative elements reinforce the shop’s brand personality while guiding the viewer’s eye through the storefront messaging.",

            outcome:
                "The final concept creates a strong street-facing presence, turning the storefront into a large-scale advertisement that communicates offerings clearly while strengthening the brand’s visual identity.",
        },
    },

    {
        slug: "little-york-window-wrap",
        title: "Little York Smoke Shop Window Wrap",
        category: "graphic-design",
        year: 2025,
        featured: false,

        summary:
            "Large-format storefront window wrap designed to communicate product offerings and promotions for Little York Smoke Shop.",

        tags: ["Environmental Design", "Large Format Print", "Storefront Graphics"],

        cover: "/images/work/GRAPHICS/WindowWrappp.webp",

        content: {
            role: "Environmental Graphic Design",

            overview:
                "A storefront window wrap concept created for Little York Smoke Shop. The design transforms the exterior windows into a large-format promotional graphic that clearly communicates available products, store promotions, and brand identity to passing foot and vehicle traffic.",

            challenge:
                "Design a large-format window graphic that balances readability, product information, and visual impact across multiple glass panels while remaining legible from a distance.",

            solution:
                "Developed a modular layout system that distributes information across multiple window panes while maintaining a cohesive visual structure. Bold typography, high-contrast icons, and layered cannabis leaf textures help anchor the composition and guide viewers through the storefront messaging.",

            outcome:
                "The final design creates a strong street-facing presence for the shop, turning the storefront into a large-scale promotional surface that clearly communicates offerings, reinforces brand identity, and attracts customer attention.",
        },
    },

    {
        slug: "ashton-character-illustration",
        title: "Character & Companion Illustration",
        category: "graphic-design",
        year: 2023,
        featured: false,

        summary:
            "Custom vector character illustration created for a client, featuring a stylized portrait alongside their bulldog.",

        tags: ["Vector Illustration", "Character Design", "Client Work"],

        cover: "/images/work/GRAPHICS/DressyAshton.webp",

        content: {
            role: "Vector Illustration / Graphic Design",

            overview:
                "A custom vector illustration created for a client who wanted a stylized graphic of themselves alongside their bulldog. The goal was to capture personality while maintaining a clean, graphic style suitable for digital use and potential merchandise.",

            challenge:
                "Translate real-world features into a simplified vector character style while keeping the likeness recognizable and visually engaging.",

            solution:
                "Developed a bold, simplified illustration style with clean outlines, strong shapes, and balanced color contrast to ensure the character remained expressive and readable across different formats.",

            outcome:
                "The final graphic provides a versatile character illustration that can be used for profile graphics, promotional visuals, or branded merchandise.",
        },
    },

    {
        slug: "bear-crest-mascot",
        title: "Bear Crest Mascot",
        category: "graphic-design",
        year: 2018,
        featured: false,

        summary:
            "Mascot-style crest graphic featuring a suited bear character designed for brand and promotional use.",

        tags: ["Mascot", "Vector Illustration", "Brand Emblem", "Client Work"],

        cover: "/images/work/GRAPHICS/Mascot.webp",

        content: {
            role: "Vector Illustration / Graphic Design",

            overview:
                "A mascot-style crest graphic created for a client seeking a bold, recognizable visual mark. The design combines a strong bear character illustration with a shield emblem to create a logo-like graphic suitable for branding, merchandise, and promotional materials.",

            challenge:
                "Design a character-driven graphic that felt authoritative and memorable while maintaining the clarity and balance needed for a crest-style emblem.",

            solution:
                "Developed a symmetrical bear illustration with sharp facial features and confident expression, framed inside a shield emblem to reinforce a strong, brand-ready silhouette. Clean vector shapes and layered color contrast help the design remain legible across digital and print formats.",

            outcome:
                "The final design delivers a striking mascot emblem that can function as a brand mark, promotional graphic, or merchandise logo while maintaining a bold and recognizable identity.",
        },
    },

    {
        slug: "somethin-good-preroll-mascot",
        title: "Somethin Good Mascot",
        category: "graphic-design",
        year: 2023,
        featured: false,

        summary:
            "Character-driven promotional graphic created for a preroll cannabis brand.",

        tags: ["Mascot", "Illustration", "Packaging", "Brand Character"],

        cover: "/images/work/GRAPHICS/Somethin Good logo.webp",

        content: {
            role: "Illustration / Graphic Design",

            overview:
                "A bold character graphic created for Somethin Good, a preroll cannabis brand. The piece blends street-inspired illustration with playful branding to create a memorable visual identity for promotional materials and packaging.",

            challenge:
                "Design a mascot-style graphic that felt energetic, recognizable, and aligned with cannabis culture without looking generic or overly corporate.",

            solution:
                "Developed a cartoon-inspired character illustration with exaggerated expression and confident body language, paired with bold typography and a high-contrast color palette to ensure strong visibility across packaging, merch, and promotional graphics.",

            outcome:
                "The final graphic delivers a memorable brand character that can be reused across marketing materials, helping reinforce brand personality while remaining highly legible and visually striking in both print and digital formats.",
        },
    }
];