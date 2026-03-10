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

    cover: "/images/work/WEB/HGDZN.webp",

    /*liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",*/

    content: {
        role: "Brand Direction, UI/UX, Front-End Development",
        client: "Hungry Ghost DZN",
        overview:
            "Hungry Ghost DZN was created as the digital foundation for a design studio focused on intentional brand systems and high-impact websites. The site needed to function as both a brand statement and a scalable portfolio platform — one capable of showcasing services, case studies, and future growth without feeling generic or templated.",

        challenge:
            "The core challenge was building a site that felt sharp, aggressive, and premium while still maintaining strong usability, clear hierarchy, and a polished user experience. It needed enough visual personality to stand apart from typical portfolio sites, but enough restraint and structure to remain credible, readable, and conversion-focused.",

        solution:
            "I designed and developed the site as a modular system using React and Vite, with reusable layout patterns, scalable content structure, and a token-based visual foundation for consistency across typography, spacing, color, and component behavior. Every section was built to support clarity, flexibility, and future expansion, allowing the platform to grow into a more complete studio website without requiring a full redesign.",

        outcome:
            "The final result is a strong studio-ready web presence that balances visual impact with usability and structure. It establishes a clear brand point of view, creates a foundation for future case studies and service pages, and positions Hungry Ghost DZN as a serious creative practice rather than just a personal portfolio."
    },
},

   {
    slug: "portfolio-showcase",
    title: "Developer Portfolio Platform",
    category: "web-design",
    year: 2023,
    featured: false,

    summary:
        "Personal developer portfolio designed for clear project presentation and fast navigation.",

    tags: ["React", "Portfolio Site", "Responsive UI"],

    cover: "/images/work/WEB/Portfolio.webp",

    liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",

    content: {
        role: "UI/UX Design, Front-End Development",

        overview:
            "This project is a personal developer portfolio built to present projects, experience, and contact information in a clear and approachable way. The interface prioritizes readability, quick navigation, and visual hierarchy so visitors can easily explore work samples and understand the developer’s skill set.",

        challenge:
            "Portfolio websites often become cluttered or overly decorative, which can make it harder for hiring managers or collaborators to quickly understand a developer’s work. The challenge was designing a layout that feels visually engaging while remaining clean, structured, and easy to scan.",

        solution:
            "The interface uses a simple responsive layout with strong typographic hierarchy and clear section separation to guide users through projects, background information, and contact details. Consistent spacing, restrained color usage, and predictable navigation patterns keep the experience focused on the work itself rather than visual distractions.",

        outcome:
            "The final result is a clear and functional developer portfolio that showcases projects while maintaining a smooth browsing experience across devices. The layout can easily expand to support additional projects and case studies while keeping the structure simple and readable."
    },
},

    {
    slug: "sapphire-site-concept",
    title: "Sapphire Developments — Web Concept",
    category: "web-design",
    year: 2023,
    featured: false,

    summary:
        "Luxury real estate browsing concept designed for discovering high-end homes and vacation properties.",

    tags: ["Concept", "Luxury Real Estate", "UI Design"],

    cover: "/images/work/WEB/SAPPHIRE.webp",

    /*liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",*/

    content: {
        role: "UI/UX Design",
        overview:
            "Sapphire Developments is a luxury real estate web concept created to explore how high-end properties could be discovered, browsed, and evaluated online. The interface focuses on showcasing expansive homes and vacation properties across multiple locations while maintaining a sense of elegance, clarity, and trust.",

        challenge:
            "Luxury real estate platforms must balance aspirational presentation with usability. The challenge was designing a browsing experience that feels premium and immersive without overwhelming users with information or sacrificing navigational clarity.",

        solution:
            "The concept emphasizes strong visual hierarchy, large property imagery, and deliberate spacing to give listings room to breathe. A restrained deep-blue palette reinforces a sense of trust and stability, while bold typographic structure helps users quickly scan locations, property highlights, and listing details.",

        outcome:
            "The result is a refined interface concept for a luxury property discovery platform. The design demonstrates how clear hierarchy, spacious layouts, and strong imagery can support both exploration and credibility for high-value real estate listings."
    },
},

    {
    slug: "dictionary-ui",
    title: "Dictionary UI Micro-App",
    category: "web-design",
    year: 2023,
    featured: false,

    summary:
        "React-powered dictionary micro-app with real-time word search and clean reading-focused UI.",

    tags: ["React", "Micro-App", "UI Design"],

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
            "The final result is a fast, minimal dictionary interface that demonstrates how thoughtful UI structure and lightweight React architecture can turn a simple lookup task into a smooth and efficient experience."
    },
},
    {
    slug: "storefront-ui",
    title: "Stone & Brier General Store",
    category: "web-design",
    year: 2022,
    featured: false,

    summary:
        "Full-stack eCommerce storefront with product catalog, authentication, and Stripe checkout.",

    tags: ["React", "PostgreSQL", "Stripe", "eCommerce"],

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
            "The final product demonstrates a complete eCommerce workflow, from browsing and product discovery to account management and payment processing. The project highlights both UI design decisions and the integration of real-world commerce functionality within a full-stack application."
    },
},

{
    slug: "little-york-smoke-shop-site",
    title: "Little York Smoke Shop Website",
    category: "web-design",
    year: 2025,
    featured: false,

    summary:
        "Promotional storefront website designed to highlight deals, product categories, and store information for a local smoke shop.",

    tags: ["Web Design", "UI Design", "Local Business", "Client Work"],

    cover: "/images/work/WEB/little-york-site.webp",

    liveUrl: "https://littleyorksmokeshop.com",

    content: {
        role: "Web Design / UI Design",
        client: "Little York Smoke Shop",

        overview:
            "This website was created to give Little York Smoke Shop a clear and engaging digital presence that reflects the energy of the physical store. The goal was to introduce the brand online while making it easy for customers to quickly see promotions, product categories, and location information before visiting.",

        challenge:
            "Local retail sites need to communicate value quickly. The challenge was designing a bold, eye-catching interface that captures the shop’s personality while keeping the layout simple enough for customers to immediately find deals, products, and store details.",

        solution:
            "The site uses a bold, image-forward layout with strong typography and brand-led visuals to reinforce the shop’s identity. Promotional messaging is prioritized near the top of the page to highlight key deals, while clearly defined sections guide visitors through product categories, current specials, and store information.",

        outcome:
            "The final site gives the shop a stronger online presence while acting as a digital storefront for new and returning customers. Visitors can quickly understand what the shop offers, see current deals, and find the store’s location and hours with minimal friction.",

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