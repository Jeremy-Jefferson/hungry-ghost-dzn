import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Determines the navigation direction based on current and previous paths
 * @param {string} currentPath - Current location pathname
 * @param {string} previousPath - Previous location pathname
 * @returns {string} Direction: 'forward', 'back', 'up', or 'initial'
 */
function getNavigationDirection(currentPath, previousPath) {
  // Initial load - no transition
  if (!previousPath) return 'initial';

  const currentParts = currentPath.split('/').filter(Boolean);
  const previousParts = previousPath.split('/').filter(Boolean);

  // Going back to a parent route (fewer segments)
  if (currentParts.length < previousParts.length) {
    return 'back';
  }

  // Going deeper into nested routes (more segments)
  if (currentParts.length > previousParts.length) {
    return 'up';
  }

  // Same depth - determine forward/back based on order in navigation stack
  // Common routes in order: home -> about, services, process, contact, work
  const routeOrder = ['/', '/about', '/services', '/process', '/contact', '/work'];
  
  const currentIndex = routeOrder.indexOf(currentPath);
  const previousIndex = routeOrder.indexOf(previousPath);

  // If both routes are in our known list, compare positions
  if (currentIndex !== -1 && previousIndex !== -1) {
    return currentIndex > previousIndex ? 'forward' : 'back';
  }

  // Default: treat as forward (slide from right)
  return 'forward';
}

/**
 * Checks if the user prefers reduced motion
 * @returns {boolean}
 */
function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionState, setTransitionState] = useState('enter');
  const [direction, setDirection] = useState('initial');
  const previousPathRef = useRef(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (prefersReducedMotion()) {
      setDisplayLocation(location);
      return;
    }

    // Determine navigation direction
    const newDirection = getNavigationDirection(location.pathname, previousPathRef.current);
    setDirection(newDirection);
    
    // Update previous path for next navigation
    previousPathRef.current = location.pathname;

    // Trigger exit animation
    if (location.pathname !== displayLocation.pathname) {
      setTransitionState('exit');
      
      // Wait for exit animation to complete, then update location
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionState('enter');
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  // Build class name with direction
  const baseClass = 'page-transition';
  const directionClass = direction !== 'initial' ? ` page-transition--${direction}` : '';
  const stateClass = ` page-transition--${transitionState}`;
  const className = `${baseClass}${directionClass}${stateClass}`;

  return (
    <div 
      className={className}
    >
      {children}
    </div>
  );
}
