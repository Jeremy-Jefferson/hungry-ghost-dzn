import { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Error boundary specifically designed for route-level error handling.
 * Provides a recovery mechanism that allows users to navigate back to safe pages.
 */
export default class RouteErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("RouteErrorBoundary caught an error:", error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-9) var(--space-4)',
                    textAlign: 'center'
                }}>
                    <span className="accent-label">Oops!</span>
                    <h1 className="h1" style={{ marginTop: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                        Something went wrong
                    </h1>
                    <p className="small" style={{ 
                        maxWidth: '400px', 
                        margin: '0 auto var(--space-5)',
                        color: 'var(--color-text-muted)'
                    }}>
                        This page encountered an unexpected error. Please try again or return to a safe page.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center' }}>
                        <button 
                            onClick={this.handleRetry}
                            className="btn btn--primary"
                        >
                            Try Again
                        </button>
                        <Link to="/" className="btn">
                            Go Home
                        </Link>
                    </div>
                    {import.meta.env.DEV && this.state.error && (
                        <details style={{ 
                            marginTop: 'var(--space-7)', 
                            textAlign: 'left',
                            maxWidth: '100%',
                            overflow: 'auto'
                        }}>
                            <summary style={{ cursor: 'pointer', marginBottom: 'var(--space-3)' }}>
                                Error Details (Dev Only)
                            </summary>
                            <pre style={{ 
                                padding: 'var(--space-3)', 
                                background: 'var(--color-surface-2)', 
                                borderRadius: 'var(--radius-md)',
                                fontSize: '12px',
                                overflow: 'auto'
                            }}>
                                {this.state.error.toString()}
                            </pre>
                        </details>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
