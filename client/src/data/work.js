// In development, use full mock data. In production, use optimized data.
// This saves ~66KB in production bundle by avoiding the large mock data file.
import { workData as devWorkData, WORK_CATEGORIES } from "./work.data.js";

// Re-export WORK_CATEGORIES from data file
export { WORK_CATEGORIES };

// Lazy load full mock data only in development
let work = devWorkData;

export function getWorkByCategory(categoryKey) {
    return work.filter((p) => p.category === categoryKey);
}

export function getWorkBySlug(slug) {
    return work.find((p) => p.slug === slug);
}

export async function getAllWork() {
    // In development, load full mock data for more projects
    if (import.meta.env.DEV) {
        const mockModule = await import("./work.mock.js");
        return mockModule.work;
    }
    return work;
}

export function getFeaturedWork() {
    // For featured work, use the production data in both dev and prod
    // to ensure consistent behavior
    return work.filter((w) => w.featured);
}