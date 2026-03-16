// Production work data - minimal version for featured work
// This file should contain only the data needed for production

export const workData = [
    {
        slug: "hungry-ghost-dzn-site",
        title: "Hungry Ghost DZN",
        category: "ui-ux-web-dev",
        featured: true,
        description: "Portfolio website for design studio",
        image: "/images/work/WEB/HGDZN.webp"
    },
    {
        slug: "sapphire-spa",
        title: "Sapphire Spa",
        category: "ui-ux-web-dev",
        featured: true,
        description: "Luxury spa website",
        image: "/images/work/WEB/SAPPHIRE.webp"
    },
    {
        slug: "store-fixtures",
        title: "Store Fixtures",
        category: "ui-ux-web-dev",
        featured: true,
        description: "E-commerce platform",
        image: "/images/work/WEB/STORE.webp"
    }
];

export const WORK_CATEGORIES = [
    {
        key: "brand-systems",
        title: "Brand Systems",
        blurb: "Identity systems built for recognition, consistency, and long-term growth — from logo foundations to visual language across every touchpoint.",
    },
    {
        key: "ui-ux-web-dev",
        title: "UI/UX Design & Web Development",
        blurb: "High-impact websites and digital products designed for clarity, usability, and performance — pairing sharp visual design with clean frontend execution.",
    },
];

export function getWorkByCategory(categoryKey) {
    return workData.filter((p) => p.category === categoryKey);
}

export function getWorkBySlug(slug) {
    return workData.find((p) => p.slug === slug);
}

export function getAllWork() {
    return workData;
}

export function getFeaturedWork() {
    return workData.filter((w) => w.featured);
}
