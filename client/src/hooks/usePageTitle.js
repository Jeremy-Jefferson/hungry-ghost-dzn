import { useEffect } from "react";

const STUDIO = "Hungry Ghost DEV";

/**
 * Sets document.title for the current page.
 * Pass null or undefined to show just the studio name.
 */
export function usePageTitle(title) {
    useEffect(() => {
        const prev = document.title;
        document.title = title ? `${title} — ${STUDIO}` : STUDIO;
        return () => {
            document.title = prev;
        };
    }, [title]);
}
