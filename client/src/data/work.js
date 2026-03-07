import { work } from "./work.mock";

export const WORK_CATEGORIES = [
    {
        key: "brand-design",
        title: "Brand Design",
        blurb: "Identity systems, logos, and visual foundations designed to scale with the business. Each brand is built as a cohesive system — establishing typography, color, hierarchy, and visual language that remain clear and consistent across every touchpoint.",
    },
    {
        key: "graphic-design",
        title: "Graphic Design",
        blurb: "Posters, merchandise, layouts, and illustration-driven visuals built with strong composition and intentional typography. Each piece is designed to stand on its own while reinforcing the larger brand system.",
    },
    {
        key: "web-design",
        title: "Web Design",
        blurb: "High-impact websites designed for clarity, usability, and performance. Every site combines sharp visual design with thoughtful structure so visitors understand the message quickly and know exactly where to go next.",
    },
];

export function getWorkByCategory(categoryKey) {
    return work.filter((p) => p.category === categoryKey);
}

export function getWorkBySlug(slug) {
    return work.find((p) => p.slug === slug);
}