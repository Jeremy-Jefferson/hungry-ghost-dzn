import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import "./styles/global.css";

// Let vite-plugin-pwa manage updates correctly
registerSW({ immediate: true });

// Recover from stale chunk/preload errors after a new deploy
window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  window.location.reload();
});

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element #root not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);