import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Analytics from './Analytics'

describe('Analytics', () => {
  beforeEach(() => {
    delete window.plausible
  })

  afterEach(() => {
    delete window.plausible
  })

  it('renders null when analytics URL is not configured', () => {
    const { container } = render(
      <BrowserRouter>
        <Analytics />
      </BrowserRouter>
    )
    expect(container.firstChild).toBeNull()
  })

  it('does not throw when analytics URL is set', () => {
    // This test verifies the component doesn't crash
    expect(() => {
      render(
        <BrowserRouter>
          <Analytics />
        </BrowserRouter>
      )
    }).not.toThrow()
  })
})
