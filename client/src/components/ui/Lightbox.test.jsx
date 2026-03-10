import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Lightbox from './Lightbox'

describe('Lightbox', () => {
  it('renders nothing when image is null', () => {
    const { container } = render(<Lightbox image={null} alt="test" onClose={() => {}} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders image when provided', () => {
    render(<Lightbox image="/test.jpg" alt="Test image" onClose={() => {}} />)
    const img = screen.getByAltText('Test image')
    expect(img).toBeInTheDocument()
    expect(img).toHaveClass('lightbox__image')
  })

  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn()
    render(<Lightbox image="/test.jpg" alt="Test" onClose={onClose} />)
    
    fireEvent.click(screen.getByLabelText('Close lightbox'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when pressing Escape', () => {
    const onClose = vi.fn()
    render(<Lightbox image="/test.jpg" alt="Test" onClose={onClose} />)
    
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('has correct accessibility attributes', () => {
    render(<Lightbox image="/test.jpg" alt="Test" onClose={() => {}} />)
    
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-label', 'Image lightbox')
  })
})
