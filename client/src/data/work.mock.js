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

        summary:
            "Studio website and portfolio platform built with React and Vite to showcase services, case studies, and a scalable brand system.",

        tags: [
            "React",
            "Vite",
            "Design System",
            "Brand Strategy",
            "Web Development"
        ],

        cover: "/images/work/WEB/HGDZN.webp",

        content: {

            role: "Brand Direction, UI/UX Design, Front-End Development",
            client: "Hungry Ghost DEV",

            overview:
                "Hungry Ghost DEV was created as the digital foundation for a design and development studio focused on intentional brand systems and high-impact websites. The platform needed to function as both a brand statement and a scalable portfolio system capable of presenting services, case studies, and future studio work without feeling generic or templated.",

            challenge:
                "The challenge was designing a studio website that felt bold, distinctive, and visually sharp while still maintaining strong usability and structural clarity. Many portfolio sites lean too far toward minimalism or excessive visual experimentation. The goal here was to create a balance — a site with strong personality that still feels credible, readable, and conversion-focused.",

            solution:
                "The site was designed and developed as a modular React application using Vite for fast development and optimized builds. Reusable layout patterns, scalable content structures, and a token-based visual system ensure consistency across typography, spacing, color, and UI components. Each section was built with flexibility in mind, allowing the platform to grow into a full studio site without requiring structural redesign.",

            outcome:
                "The finished platform establishes a strong digital presence for the Hungry Ghost DEV studio while serving as a scalable portfolio framework. It supports case studies, services, and future content expansion while maintaining a clear brand voice and structured user experience.",

            processSteps: [
                "Strategy",
                "UX",
                "UI",
                "Development",
                "Launch"
            ],

            interfaceWalkthrough: [

                {
                    title: "Studio Home",
                    description:
                        "The homepage introduces the studio with a bold hero statement, brand visuals, and clear navigation to services and portfolio work.",
                    image: "/images/work/WEB/HGDEV-WALKTHROUGH-01.webp"
                },

                {
                    title: "Services Overview",
                    description:
                        "The services section presents the studio’s core offerings through structured cards, helping visitors quickly understand capabilities and areas of expertise.",
                    image: "/images/work/WEB/HGDEV-WALKTHROUGH-02.webp"
                },

                {
                    title: "Work Index",
                    description:
                        "The work index organizes portfolio case studies into a clear grid system with filtering and preview cards for easy project exploration.",
                    image: "/images/work/WEB/HGDEV-WALKTHROUGH-03.webp"
                }

            ],

            uiux: {

                userGoals: [
                    "Clearly present studio services",
                    "Showcase portfolio case studies",
                    "Convert visitors into project inquiries",
                    "Establish a distinct studio identity"
                ],

                navigation:
                    "Clear, structured navigation with prominent calls-to-action guiding visitors toward services and project work.",

                informationArchitecture:
                    "Home → Services → Work → About → Contact",

                visualHierarchy:
                    "Bold typography, strong spacing, and accent color usage guide attention toward key actions and content.",

                components: [
                    "Hero brand statement",
                    "Services grid",
                    "Featured case study previews",
                    "About section",
                    "Contact form"
                ],

                responsive:
                    "Mobile-first responsive layout designed to maintain clarity and visual impact across screen sizes."
            },

            interfaceDesign: {

                visualSystem:
                    "A high-contrast dark interface paired with bright accent colors reinforces the studio’s bold brand personality while maintaining strong readability.",

                layoutApproach:
                    "Content sections were structured to guide visitors from brand introduction into services, portfolio work, and contact opportunities.",

                componentStrategy:
                    "Reusable UI patterns allow new services, case studies, and content sections to be added without disrupting the overall layout.",

                accessibility:
                    "Clear typography, consistent spacing, and structured section layout help maintain readability and usability."
            },

            developmentSummary: {

                architecture:
                    "React front-end architecture powered by Vite, using modular component patterns for scalable UI development.",

                features: [
                    "Component-based architecture",
                    "Custom animations and transitions",
                    "SEO optimization",
                    "Accessibility considerations",
                    "Scalable portfolio data structure"
                ],

                performance:
                    "Vite-powered build pipeline enables fast development, optimized bundling, and strong page-load performance."
            },

            techStack: [
                "React",
                "Vite",
                "JavaScript",
                "CSS",
                "Vercel"
            ]

        }
    },

    {
        slug: "little-york-smoke-shop-site",
        title: "Little York Smoke Shop Website",
        category: "ui-ux-web-dev",
        year: 2025,
        featured: true,

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

    {
        slug: "portfolio-showcase",
        title: "Developer Portfolio Site",
        category: "ui-ux-web-dev",
        year: 2023,
        featured: false,
        summary:
            "Personal portfolio site built to present projects, skills, and contact information through a clear single-page experience.",
        tags: ["React", "Portfolio Website", "Responsive UI", "Front-End Development"],
        cover: "/images/work/WEB/Portfolio.webp",
        liveUrl: "https://jeremy-jefferson-portfolio.vercel.app",

        content: {
            role: "UI/UX Design, Front-End Development",
            client: "Personal Project",

            overview:
                "This project is a personal developer portfolio designed to present work, technical skills, and contact information in a direct and approachable way. The goal was to create a site that makes it easy for visitors to quickly understand the developer’s background, review selected projects, and navigate the experience without unnecessary friction.",

            challenge:
                "Developer portfolios often become visually cluttered or overloaded with information, making it harder for recruiters, collaborators, or potential clients to quickly evaluate the work. The challenge was to design a portfolio experience that felt personal and visually engaging while still remaining structured, readable, and easy to scan.",

            solution:
                "The interface was built around a simple single-page structure with strong typographic hierarchy, clear section separation, and focused navigation. Projects, background information, and contact details were organized into predictable content blocks so users could move through the site quickly and understand the work without distraction. A restrained visual system and responsive layout helped keep the experience clean across screen sizes.",

            outcome:
                "The final result is a streamlined portfolio site that showcases projects and developer strengths in a clear, accessible format. The structure supports quick browsing, smooth section-to-section navigation, and future content expansion while keeping the presentation simple and focused.",

            processSteps: ["UX Strategy", "UI Design", "Development", "Launch"],

            interfaceWalkthrough: [
                {
                    title: "Hero Introduction",
                    description:
                        "The hero section establishes identity immediately with a clear name, concise technical summary, and a direct call-to-action that encourages visitors to explore projects.",
                    image: "/images/work/WEB/Portfolio.webp"
                },
                {
                    title: "Project Showcase",
                    description:
                        "Project cards organize featured work into an easy-to-scan section, helping visitors review case studies, technologies used, and supporting links without hunting through dense content.",
                    image: "/images/work/WEB/Portfolio-WALKTHROUGH-02.webp"
                },
                {
                    title: "About and Contact",
                    description:
                        "The lower sections provide background context and contact information in a simple layout that supports trust, readability, and direct outreach.",
                    image: "/images/work/WEB/Portfolio-WALKTHROUGH-03.webp"
                }
            ],

            uiux: {
                userGoals: [
                    "Quickly understand the developer’s skills",
                    "Review selected projects with minimal friction",
                    "Learn about background and experience",
                    "Find contact information easily"
                ],
                navigation:
                    "Single-page scrolling navigation supported by clear section anchors and predictable layout flow.",
                informationArchitecture:
                    "Hero → Projects → About → Contact",
                visualHierarchy:
                    "Large headline typography, concise supporting copy, and clear content grouping help visitors scan the page quickly.",
                components: [
                    "Hero introduction",
                    "Project cards",
                    "About section",
                    "Contact section",
                    "Section navigation"
                ],
                responsive:
                    "Responsive layout designed to preserve readability and section clarity across desktop and smaller screens."
            },

            interfaceDesign: {
                visualSystem:
                    "The design uses a dark, high-contrast visual style with focused accent color and restrained content blocks to keep attention on the work.",
                layoutApproach:
                    "The layout follows a top-to-bottom narrative, guiding visitors from identity and skill summary into project exploration, background context, and contact.",
                componentStrategy:
                    "Reusable section patterns and project card structures help keep the experience consistent and easy to expand.",
                accessibility:
                    "Typography contrast, spacing, and section separation were used to improve readability and help users navigate content quickly."
            },

            developmentSummary: {
                architecture:
                    "Built as a React single-page application with modular sections for content organization and straightforward maintenance.",
                features: [
                    "Single-page portfolio structure",
                    "Responsive project layout",
                    "Smooth section navigation",
                    "Deployed live on Vercel"
                ],
                performance:
                    "Kept intentionally lightweight to support quick loading and a fast browsing experience."
            },

            developmentImplementation: {
                architecture: [
                    {
                        title: "Section-Based SPA Structure",
                        description:
                            "The site was organized as a single-page React application with distinct content sections, allowing visitors to move through the portfolio smoothly without context switching.",
                        code: `const sections = ["hero", "projects", "about", "contact"];

sections.map((section) => (
  <Section id={section} key={section}>
    {content[section]}
  </Section>
));`
                    }
                ],
                dataModel: [
                    {
                        title: "Structured Project Data",
                        description:
                            "Project content was shaped as reusable data objects so cards could be rendered consistently across the portfolio section.",
                        code: `const project = {
  title: "Project Name",
  description: "Brief overview",
  technologies: ["React", "CSS"],
  link: "https://..."
};`
                    }
                ],
                uiLogic: [
                    {
                        title: "Smooth Scroll Navigation",
                        description:
                            "Section-based navigation was supported by smooth scrolling behavior to make movement through the page feel direct and intuitive.",
                        code: `const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  });
};`
                    }
                ]
            },

            techStack: ["React", "CSS", "Vercel"],

            gallery: [
                "/images/work/WEB/Portfolio.webp",
                "/images/work/WEB/Portfolio-WALKTHROUGH-02.webp",
                "/images/work/WEB/Portfolio-WALKTHROUGH-03.webp"
            ],

            relatedProjects: []
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

        cover: "/images/work/WEB/SAPPHIRE.webp",

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
                    title: "City-Based Property Discovery",
                    description:
                        "Featured location cards help users explore listings by destination, making the browsing experience feel curated while supporting quicker decision-making across multiple markets.",
                    image: "/images/work/WEB/SAPPHIRE-WALKTHROUGH-02.webp"
                },

                {
                    title: "Properties Grid View",
                    description:
                        "The listings grid was designed for scanability, allowing users to compare imagery, price, location, and property details quickly while maintaining a premium presentation.",
                    image: "/images/work/WEB/SAPPHIRE-WALKTHROUGH-03.webp"
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

            interfaceWalkthrough: [
                {
                    title: "Search Interface + Phonetics & Audio",
                    description:
                        "Clean search input with instant word lookup, audio pronunciation, phonetic transcription, and syllable breakdown for accurate pronunciation.",
                    image: "/images/work/WEB/Dictionary-WALKTHROUGH-01.webp"
                },
                {
                    title: "Definition Display",
                    description:
                        "Organized definitions with part of speech labels, multiple meanings, and example usage in context.",
                    image: "/images/work/WEB/Dictionary-WALKTHROUGH-02.webp"
                },
                {
                    title: "Word of the Day",
                    description:
                        "Discover a new word each day with its definition, pronunciation, phonetic transcription, and syllable breakdown to expand your vocabulary and improve pronunciation..",
                    image: "/images/work/WEB/Dictionary-WALKTHROUGH-03.webp"
                }
            ],

            developmentImplementation: {
                architecture: [
                    {
                        title: "API Integration Layer",
                        description:
                            "Clean separation between API calls and UI rendering with custom hooks for word lookups.",
                        code: `// Custom hook for dictionary API
const useDictionary = (word) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!word) return;
    setLoading(true);
    fetch(
      'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
    )
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [word]);

  return { data, loading };
};`
                    }
                ],
                dataModel: [
                    {
                        title: "Dictionary API Response",
                        description:
                            "Parsed API response structure for extracting definitions, phonetics, and meanings.",
                        code: `const dictionaryEntry = {
  word: "example",
  phonetic: "/ɪɡˈzæmpəl/",
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        { definition: "...", example: "..." }
      ]
    }
  ]
};`
                    }
                ],
                uiLogic: [
                    {
                        title: "Search Debouncing",
                        description:
                            "Optimized search input with debouncing to prevent excessive API calls.",
                        code: `const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};`
                    }
                ]
            },

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

        summary:
            "Full-stack eCommerce storefront featuring product catalog browsing, account authentication, and Stripe-powered checkout.",

        tags: [
            "React",
            "PostgreSQL",
            "Stripe",
            "Node.js",
            "eCommerce"
        ],

        cover: "/images/work/WEB/STORE.webp",
        liveUrl: "https://stone-and-brier-general-store.vercel.app/Home",

        content: {

            role: "UI/UX Design, Front-End Development",
            client: "Capstone Project — Fullstack Academy",

            overview:
                "Stone & Brier General Store is a full-stack eCommerce application developed as a capstone project at Fullstack Academy. The platform enables users to browse a categorized product catalog, create accounts, manage shopping carts, and complete purchases through a Stripe-powered checkout flow. The project focuses on building a complete commerce experience that connects front-end interaction with backend data and payment processing.",

            challenge:
                "Building a functional eCommerce system requires balancing product discovery, account management, and secure purchasing flows within a cohesive interface. The challenge was to design a storefront that made product browsing intuitive while integrating user authentication, cart persistence, and payment processing without introducing unnecessary friction.",

            solution:
                "The application uses a PostgreSQL database to manage product inventory, categories, and order records while a Node.js API handles product retrieval, cart operations, and order creation. The front-end interface was designed with a focused green color system and product-first layout to emphasize browsing clarity and purchasing actions. User authentication enables account creation and order tracking, while Stripe integration powers the checkout and payment process.",

            outcome:
                "The final application demonstrates a complete end-to-end commerce workflow, from product discovery to order creation and payment confirmation. The project highlights both interface design decisions and the integration of real-world commerce functionality within a full-stack architecture.",

            processSteps: [
                "UX Research",
                "UI Design",
                "Development",
                "Testing",
                "Launch"
            ],

            interfaceWalkthrough: [

                {
                    title: "Product Catalog",
                    description:
                        "The catalog interface organizes products into clear categories with a grid layout that allows users to scan items quickly while comparing pricing and product details.",
                    image: "/images/work/WEB/Store-WALKTHROUGH-01.webp"
                },

                {
                    title: "Shopping Cart",
                    description:
                        "A persistent cart interface allows users to review selected items, adjust quantities, and view a running order total before proceeding to checkout.",
                    image: "/images/work/WEB/Store-WALKTHROUGH-02.webp"
                },

                {
                    title: "User Authentication",
                    description:
                        "Account creation and login forms support secure purchasing, order history tracking, and personalized account access.",
                    image: "/images/work/WEB/Store-WALKTHROUGH-03.webp"
                }

            ],

            uiux: {

                userGoals: [
                    "Browse product catalog",
                    "Add items to cart",
                    "Complete checkout",
                    "Manage account"
                ],

                navigation:
                    "Category-based navigation supported by persistent cart access and clear checkout pathways.",

                informationArchitecture:
                    "Home → Products → Product Details → Cart → Checkout",

                visualHierarchy:
                    "Product imagery and pricing are prioritized to support quick browsing and purchasing decisions.",

                components: [
                    "Product grid",
                    "Shopping cart",
                    "User authentication forms",
                    "Checkout flow",
                    "Navigation header"
                ],

                responsive:
                    "Responsive storefront layout designed to support browsing and checkout across multiple screen sizes."
            },

            interfaceDesign: {

                visualSystem:
                    "The interface uses a green-focused color palette with clear call-to-action styling to reinforce purchasing actions and maintain visual consistency across product browsing and checkout.",

                layoutApproach:
                    "Product listings are presented through a structured card system that allows users to scan items quickly while maintaining visual clarity across the catalog.",

                componentStrategy:
                    "Reusable product card and cart components were used to maintain consistent interaction patterns across browsing and purchasing flows.",

                accessibility:
                    "Clear button hierarchy and structured layout help guide users through the purchasing process without confusion."
            },

            developmentSummary: {

                architecture:
                    "Full-stack architecture using a React front-end, Node.js API, and PostgreSQL database.",

                features: [
                    "Product catalog with category filtering",
                    "User authentication system",
                    "Persistent shopping cart",
                    "Stripe payment integration",
                    "RESTful API endpoints"
                ],

                performance:
                    "Structured to support efficient product retrieval and checkout processing for a small commerce system."
            },

            techStack: [
                "React",
                "Node.js",
                "PostgreSQL",
                "Stripe",
                "CSS"
            ],

            developmentImplementation: {
                architecture: [
                    {
                        title: "Full-Stack Application Structure",
                        description:
                            "React front-end with Express/Node.js backend, RESTful API for product and order management.",
                        code: `// API route structure
app.get('/api/products', productController.getAll);
app.get('/api/products/:id', productController.getOne);
app.post('/api/orders', orderController.create);

// Frontend API client
const api = {
  products: () => fetch('/api/products').then(r => r.json()),
  createOrder: (data) => fetch('/api/orders', {
    method: 'POST',
    body: JSON.stringify(data)
  })
};`
                    }
                ],
                dataModel: [
                    {
                        title: "Product Schema",
                        description:
                            "PostgreSQL product table structure with categories, pricing, inventory, and image associations.",
                        code: `// Product model
const Product = {
  id: 1,
  name: "Product Name",
  description: "...",
  price: 29.99,
  category: "category-slug",
  imageUrl: "/images/products/1.jpg",
  inventory: 100
};`
                    },
                    {
                        title: "Order Schema",
                        description:
                            "Order tracking with user association, line items, shipping status, and payment references.",
                        code: `const Order = {
  id: "ord_123",
  userId: 1,
  items: [{ productId: 1, qty: 2 }],
  total: 59.98,
  status: "pending",
  stripePaymentId: "pi_..."
};`
                    }
                ],
                uiLogic: [
                    {
                        title: "Cart State Management",
                        description:
                            "React Context-based cart state with add, remove, update quantity, and persistence to localStorage.",
                        code: `// Cart context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => 
          p.id === product.id 
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
  
  return <CartContext.Provider value={{ cart, addToCart }}>
    {children}
  </CartContext.Provider>;
};`
                    },
                    {
                        title: "Stripe Checkout Integration",
                        description:
                            "Client-side Stripe Elements for payment entry, server-side payment intent creation.",
                        code: `// Stripe checkout
const stripe = await loadStripe('pk_test_...');
const { error } = await stripe.confirmPayment({
  elements,
  confirmParams: { return_url: '...' }
});`
                    }
                ]
            },

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
        slug: "infinitely-fw-branding",
        title: "Infinite Floating World",
        category: "brand-systems",
        year: 2024,
        featured: true,
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
                    title: "Symbolic Emblem",
                    description:
                        "Interlocking geometric forms arranged in recursive layers to create the impression of an infinite center.",
                    colors: [
                        { name: "Black", value: "#000000" },
                        { name: "White", value: "#FFFFFF" },
                        { name: "Red", value: "#DC143C" }
                    ],
                    cover: "/images/work/BRANDING/InfinitelyFW.webp"
                }
            },

            techStack: ["Illustrator", "Photoshop"],

            gallery: ["/images/work/BRANDING/InfinitelyFW.webp"],

            relatedProjects: []
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
                    title: "Corporate Seal",
                    description:
                        "Modernized corporate seal featuring infinity motifs and clean contemporary typography.",
                    colors: [
                        { name: "Black", value: "#1A1A1A" },
                        { name: "White", value: "#FFFFFF" }
                    ],
                    cover: "/images/work/BRANDING/NEO Seal.webp"
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

            relatedProjects: []
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
                    title: "Lounge Emblem",
                    description:
                        "Stylized hookah illustration framed within a circular emblem supported by ornamental hospitality lettering.",
                    colors: [
                        { name: "Black", value: "#1A1A1A" },
                        { name: "White", value: "#FFFFFF" }
                    ],
                    cover: "/images/work/BRANDING/LV1.webp"
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
                    title: "Monogram",
                    description:
                        "Custom S&B monogram built within a circular emblem and anchored by a triangular core.",
                    colors: [
                        { name: "Black", value: "#1A1A1A" },
                        { name: "White", value: "#FFFFFF" }
                    ],
                    cover: "/images/work/BRANDING/S&B.webp"
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
