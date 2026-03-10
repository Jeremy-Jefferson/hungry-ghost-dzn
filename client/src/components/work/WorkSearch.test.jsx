import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import WorkSearch from './WorkSearch'

const mockWork = [
  { title: 'Brand Project', slug: 'brand-project', tags: ['branding'] },
  { title: 'Web Project', slug: 'web-project', tags: ['web'] },
]

describe('WorkSearch', () => {
  it('renders search input', () => {
    render(<WorkSearch work={mockWork} onFilter={() => {}} />)
    expect(screen.getByPlaceholderText('Search projects...')).toBeInTheDocument()
  })

  it('calls onFilter with filtered results', () => {
    const onFilter = vi.fn()
    render(<WorkSearch work={mockWork} onFilter={onFilter} />)
    
    fireEvent.change(screen.getByPlaceholderText('Search projects...'), {
      target: { value: 'brand' },
    })
    
    expect(onFilter).toHaveBeenCalled()
  })

  it('has accessible label', () => {
    render(<WorkSearch work={mockWork} onFilter={() => {}} />)
    expect(screen.getByLabelText('Search projects')).toBeInTheDocument()
  })
})
