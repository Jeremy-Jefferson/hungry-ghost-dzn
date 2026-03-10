import { useEffect, useRef } from 'react';

/**
 * Custom hook for parallax scroll effect on hero background orbs
 * @param {Object} options - Configuration options
 * @param {number} options.tealSpeed - Parallax speed for teal orb (::before) - default 0.3
 * @param {number} options.magentaSpeed - Parallax speed for magenta orb (::after) - default 0.15
 * @returns {React.RefObject} Ref to attach to the hero element
 */
export function useParallax({ tealSpeed = 0.3, magentaSpeed = 0.15 } = {}) {
    const heroRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        // Check for prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) {
            return; // Disable parallax for users who prefer reduced motion
        }

        const hero = heroRef.current;
        if (!hero) return;

        // Use CSS custom properties to track scroll position
        // This is more performant than direct DOM manipulation
        const updateParallax = () => {
            const scrollY = window.scrollY;
            const heroRect = hero.getBoundingClientRect();
            const heroTop = heroRect.top;
            const heroHeight = heroRect.height;

            // Only animate when hero is in viewport
            if (heroTop < window.innerHeight && heroTop + heroHeight > 0) {
                // Calculate relative scroll position within hero section
                const relativeScroll = Math.max(0, scrollY);

                // Apply transforms using CSS custom properties for GPU acceleration
                // Using transform3d forces GPU acceleration
                hero.style.setProperty(
                    '--parallax-teal',
                    `translate3d(0, ${relativeScroll * tealSpeed}px, 0)`
                );
                hero.style.setProperty(
                    '--parallax-magenta',
                    `translate3d(0, ${-relativeScroll * magentaSpeed}px, 0)`
                );
            }

            // Continue animation frame loop
            rafRef.current = requestAnimationFrame(updateParallax);
        };

        // Start the animation frame loop
        rafRef.current = requestAnimationFrame(updateParallax);

        // Cleanup on unmount
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            // Clean up custom properties
            if (hero) {
                hero.style.removeProperty('--parallax-teal');
                hero.style.removeProperty('--parallax-magenta');
            }
        };
    }, [tealSpeed, magentaSpeed]);

    return heroRef;
}

export default useParallax;
