import { useEffect, createContext, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Site is dark-mode only - no theme switching
  const theme = 'dark';

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", 'dark');
  }, []);

  const toggleTheme = () => {
    // Theme toggle disabled - dark mode only
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
