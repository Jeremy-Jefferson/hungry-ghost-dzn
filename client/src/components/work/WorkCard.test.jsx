import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WorkCard from './WorkCard';

const mockItem = {
  title: 'Test Project',
  slug: 'test-project',
  category: 'brand-design',
  cover: '/test-image.jpg',
  year: '2024',
  tags: ['Branding', 'Logo'],
  liveUrl: null
};

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('WorkCard', () => {
  it('renders the project title', () => {
    renderWithRouter(<WorkCard item={mockItem} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('renders the category', () => {
    renderWithRouter(<WorkCard item={mockItem} />);
    expect(screen.getByText('brand design')).toBeInTheDocument();
  });

  it('renders the year', () => {
    renderWithRouter(<WorkCard item={mockItem} />);
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('renders tags', () => {
    renderWithRouter(<WorkCard item={mockItem} />);
    expect(screen.getByText('Branding')).toBeInTheDocument();
    expect(screen.getByText('Logo')).toBeInTheDocument();
  });

  it('links to the correct path', () => {
    renderWithRouter(<WorkCard item={mockItem} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/work/brand-design/test-project');
  });

  it('renders live badge when liveUrl is present', () => {
    const itemWithLiveUrl = { ...mockItem, liveUrl: 'https://example.com' };
    renderWithRouter(<WorkCard item={itemWithLiveUrl} />);
    expect(screen.getByTitle('Visit Live Site')).toBeInTheDocument();
  });

  it('renders placeholder when no cover image', () => {
    const itemNoCover = { ...mockItem, cover: null };
    const { container } = renderWithRouter(<WorkCard item={itemNoCover} />);
    const placeholder = container.querySelector('.workCard__img-placeholder');
    expect(placeholder).toBeInTheDocument();
  });
});
