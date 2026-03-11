import { work } from "./work.mock";

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
    return work.filter((p) => p.category === categoryKey);
}

export function getWorkBySlug(slug) {
    return work.find((p) => p.slug === slug);
}

export function getAllWork() {
    return work;
}