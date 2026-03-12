import { useState, useEffect } from 'react';

/**
 * Hook to track scroll position
 * @param {number} threshold - Scroll threshold in pixels to consider as "scrolled"
 * @returns {object} - { scrollY, isScrolled }
 */
export function useScrollPosition(threshold = 20) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsScrolled(currentY > threshold);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { scrollY, isScrolled };
}

export default useScrollPosition;
