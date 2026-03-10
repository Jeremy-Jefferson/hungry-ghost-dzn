import { useState } from "react";
import { usePageTitle } from "../hooks/usePageTitle.js";

const initialForm = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function Contact() {
  usePageTitle("Contact");

  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all required fields.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // Check if response has valid JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server error: Invalid response. Please try again.");
      }

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSent(true);
      setForm(initialForm);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="page-section">
        <div className="container stack">
          <section className="contact__intro">
            <div className="contact__intro-copy">
              <span className="accent-label">Let's Talk</span>
              <h1 className="h1">Start a Project</h1>
              <p className="page-lead">
                Tell us what you're building. We'll tell you how to make it
                great.
              </p>
            </div>

            <aside className="contact__intro-details card">
              <span className="accent-label">What Happens Next</span>
              <h2 className="h2">Here's how it works.</h2>
              <ul className="contact__next-list">
                <li>We'll review your project details</li>
                <li>You'll receive a response within 24–48 hours</li>
                <li>If it's a good fit, we'll schedule a discovery call</li>
              </ul>
            </aside>
          </section>

          {sent ? (
            <section className="card contact__success" aria-live="polite">
              <p className="h2">Message received 👻</p>
              <p className="small">
                Thanks for reaching out. We'll review your project and be in
                touch shortly.
              </p>
            </section>
          ) : (
            <form
              className="contact__form card"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="contact__row">
                <div className="contact__field">
                  <label className="contact__label small" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="contact__input"
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-describedby={error ? "contact-error" : undefined}
                  />
                </div>

                <div className="contact__field">
                  <label className="contact__label small" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="contact__input"
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-describedby={error ? "contact-error" : undefined}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label className="contact__label small" htmlFor="service">
                  Service
                </label>
                <select
                  className="contact__input"
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service…</option>
                  <option value="brand-design">Brand Design</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="web-design">Web Design</option>
                </select>
              </div>

              <div className="contact__field">
                <label className="contact__label small" htmlFor="message">
                  Tell us about the project
                </label>
                <textarea
                  className="contact__input"
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What are you working on? Goals, timeline, budget…"
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-describedby={error ? "contact-error" : undefined}
                />
              </div>

              {error ? (
                <p className="contact__error small" id="contact-error" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="contact__actions">
                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Project Details"}
                </button>
              </div>
            </form>
          )}
        </div>
    </section>
  );
}
