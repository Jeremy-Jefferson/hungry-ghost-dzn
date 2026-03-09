import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./ErrorBoundary";

// Throw an error to trigger ErrorBoundary
const ThrowError = () => {
  throw new Error("Test error");
};

describe("ErrorBoundary Component", () => {
  // Suppress console.error for expected errors
  const originalConsoleError = console.error;
  beforeEach(() => {
    console.error = vi.fn();
  });
  afterEach(() => {
    console.error = originalConsoleError;
  });

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div>Normal content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText("Normal content")).toBeInTheDocument();
  });

  it("renders error UI when child component throws", () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    // Check for error message
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Oops!")).toBeInTheDocument();
  });

  it("has working refresh button", () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    const refreshButton = screen.getByText("Refresh Page");
    expect(refreshButton).toBeInTheDocument();
  });

  it("has working home button", () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    
    const homeButton = screen.getByText("Go Home");
    expect(homeButton).toBeInTheDocument();
  });
});
