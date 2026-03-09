import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

// Mock window.scrollTo
const mockScrollTo = vi.fn();
window.scrollTo = mockScrollTo;

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('ScrollToTop', () => {
  beforeEach(() => {
    mockScrollTo.mockClear();
  });

  it('renders without crashing', () => {
    const { container } = renderWithRouter(<ScrollToTop />);
    expect(container).toBeInTheDocument();
  });
});
