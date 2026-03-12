import { useState, useEffect, useMemo } from 'react'

export default function WorkSearch({ work, onFilter }) {
  const [searchQuery, setSearchQuery] = useState('')

  // Memoize the filtered results to avoid unnecessary recalculations
  const filteredWork = useMemo(() => {
    if (!searchQuery.trim()) return work
    const query = searchQuery.toLowerCase()
    return work.filter((item) => 
      item.title?.toLowerCase().includes(query) ||
      item.summary?.toLowerCase().includes(query) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(query))
    )
  }, [work, searchQuery])

  // Debounce the filter callback to avoid excessive re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      onFilter(filteredWork)
    }, 150) // 150ms debounce delay

    return () => clearTimeout(timer)
  }, [filteredWork, onFilter])

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="work-search">
      <div className="work-search__input-wrapper">
        <input
          type="search"
          className="work-search__input"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search projects"
        />
        <span className="work-search__icon">🔍</span>
      </div>
    </div>
  )
}
