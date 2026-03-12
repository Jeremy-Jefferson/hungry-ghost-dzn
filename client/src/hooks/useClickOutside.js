import { useEffect, useRef } from 'react';

/**
 * Hook to detect clicks outside of a referenced element
 * @param {function} callback - Function to call when click outside is detected
 * @returns {React.RefObject} - Ref to attach to the element
 */
export function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    };

    // Use mousedown for better responsiveness than click
    document.addEventListener('mousedown', handleClick);
    
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);

  return ref;
}

export default useClickOutside;
