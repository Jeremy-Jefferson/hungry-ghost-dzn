import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Navbar', () => {
  beforeEach(() => {
    // Reset scroll position before each test
    window.scrollTo = vi.fn();
  });

  it('renders the logo', () => {
    renderWithRouter(<Navbar />);
    const logo = screen.getByAltText('Hungry Ghost DEV');
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Process')).toBeInTheDocument();
    expect(screen.getByText('Book / Contact')).toBeInTheDocument();
  });

  it('renders the Work dropdown menu', () => {
    renderWithRouter(<Navbar />);
    // Dropdown items should be in the DOM (visible on hover)
    expect(screen.getByText('Brand Design')).toBeInTheDocument();
    expect(screen.getByText('Graphic Design')).toBeInTheDocument();
    expect(screen.getByText('Web Design')).toBeInTheDocument();
  });

  it('has correct home link', () => {
    renderWithRouter(<Navbar />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('has correct work link', () => {
    renderWithRouter(<Navbar />);
    const workLink = screen.getByRole('link', { name: 'Work' });
    expect(workLink).toHaveAttribute('href', '/work');
  });

  it('has correct contact link', () => {
    renderWithRouter(<Navbar />);
    const contactLink = screen.getByRole('link', { name: 'Book / Contact' });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('has mobile hamburger menu button', () => {
    renderWithRouter(<Navbar />);
    const hamburger = screen.getByRole('button', { name: /open menu/i });
    expect(hamburger).toBeInTheDocument();
  });
});
