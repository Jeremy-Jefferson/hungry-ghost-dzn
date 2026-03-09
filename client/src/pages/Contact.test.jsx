import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Contact from "./Contact";

// Mock fetch
const mockFetch = vi.fn();
window.fetch = mockFetch;

describe("Contact Page", () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  it("renders contact form", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Tell us about the project")).toBeInTheDocument();
  });

  it("renders page title", () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText("Start a Project")).toBeInTheDocument();
  });

  it("shows error when submitting empty form", async () => {
    const user = userEvent.setup();
    renderWithRouter(<Contact />);
    
    const submitButton = screen.getByRole("button", { name: /send project details/i });
    await user.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });

  it("allows typing in form fields", async () => {
    const user = userEvent.setup();
    renderWithRouter(<Contact />);
    
    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Tell us about the project");
    
    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "john@example.com");
    await user.type(messageInput, "Hello world");
    
    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john@example.com");
    expect(messageInput.value).toBe("Hello world");
  });

  it("submits form successfully", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: true,
      headers: { get: () => "application/json" },
      json: () => Promise.resolve({ success: true }),
    });
    
    renderWithRouter(<Contact />);
    
    await user.type(screen.getByLabelText("Name"), "John Doe");
    await user.type(screen.getByLabelText("Email"), "john@example.com");
    await user.type(screen.getByLabelText("Tell us about the project"), "Hello world");
    
    await user.click(screen.getByRole("button", { name: /send project details/i }));
    
    await waitFor(() => {
      expect(screen.getByText("Message received")).toBeInTheDocument();
    });
  });

  it("handles form submission error", async () => {
    const user = userEvent.setup();
    mockFetch.mockResolvedValueOnce({
      ok: false,
      headers: { get: () => "application/json" },
      json: () => Promise.resolve({ success: false, error: "Server error" }),
    });
    
    renderWithRouter(<Contact />);
    
    await user.type(screen.getByLabelText("Name"), "John Doe");
    await user.type(screen.getByLabelText("Email"), "john@example.com");
    await user.type(screen.getByLabelText("Tell us about the project"), "Hello world");
    
    await user.click(screen.getByRole("button", { name: /send project details/i }));
    
    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });
});
