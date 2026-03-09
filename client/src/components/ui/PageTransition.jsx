import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionState, setTransitionState] = useState('enter');

  useEffect(() => {
    // Trigger exit animation
    if (location !== displayLocation) {
      setTransitionState('exit');
      
      // Wait for exit animation to complete, then update location
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionState('enter');
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <div 
      className={`page-transition page-transition--${transitionState}`}
      key={displayLocation.pathname}
    >
      {children}
    </div>
  );
}
