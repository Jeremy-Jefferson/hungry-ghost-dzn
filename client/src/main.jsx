import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import "./styles/global.css";

// Register service worker for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                // Only log in development
                if (import.meta.env.DEV) {
                    console.log('Service Worker registered:', registration.scope);
                }
            })
            .catch((error) => {
                // Only log errors in development
                if (import.meta.env.DEV) {
                    console.log('Service Worker registration failed:', error);
                }
            });
    });
}

// Determine if we should use StrictMode (disable in production for performance)
const useStrictMode = true; // Enable in prod to catch hook races

// Wait for DOM fully ready before rendering (PWA safety)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}

function renderApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Root element #root not found');
    return;
  }

  ReactDOM.createRoot(rootElement).render(
    useStrictMode ? (
      <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </React.StrictMode>
    ) : (
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    )
  );
}
