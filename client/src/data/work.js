import { work } from "./work.mock";

export const WORK_CATEGORIES = [
    {
        key: "brand-systems",
        title: "Brand Systems",
        blurb: "Complete identity systems built for recognition, consistency, and long-term growth. Each brand is developed as a cohesive system — establishing typography, color, hierarchy, and visual language that remain clear and consistent across every touchpoint.",
    },
    {
        key: "ui-ux-web-dev",
        title: "UI/UX Design & Web Development",
        blurb: "High-impact websites and digital products designed and built for clarity, usability, and performance. Every project combines sharp visual design with thoughtful development so visitors understand the message quickly and know exactly where to go next.",
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