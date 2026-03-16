import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Error Boundary class moved outside the component for React Fast Refresh compatibility
class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main style={{ flex: 1 }}>
          <section className="page-section">
            <div className="container stack" style={{ textAlign: "center", padding: "var(--space-9) 0" }}>
              <span className="accent-label">Oops!</span>
              <h1 className="h1">Something went wrong</h1>
              <p className="page-lead" style={{ maxWidth: "480px", margin: "0 auto" }}>
                We're sorry, but something unexpected happened. Please try refreshing the page or return to the homepage.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "var(--space-5)" }}>
                <button 
                  onClick={() => this.props.onReset()}
                  className="btn btn--primary"
                >
                  Go Home
                </button>
                <button 
                  onClick={() => window.location.reload()}
                  className="btn"
                >
                  Refresh Page
                </button>
              </div>
              {import.meta.env.DEV && this.state.error && (
                <details style={{ marginTop: "var(--space-7)", textAlign: "left" }}>
                  <summary style={{ cursor: "pointer", marginBottom: "var(--space-3)" }}>
                    Error Details (Development Only)
                  </summary>
                  <pre style={{ 
                    padding: "var(--space-3)", 
                    background: "var(--color-surface-2)", 
                    borderRadius: "var(--radius-md)",
                    overflow: "auto",
                    fontSize: "12px"
                  }}>
                    {this.state.error.toString()}
                  </pre>
                </details>
              )}
            </div>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}

export default function ErrorBoundary({ children }) {
  const navigate = useNavigate();

  // Handle error reset
  const handleReset = () => {
    navigate("/");
  };

  // Use the class component as the actual error boundary
  return <ErrorBoundaryClass onReset={handleReset}>{children}</ErrorBoundaryClass>;
}
