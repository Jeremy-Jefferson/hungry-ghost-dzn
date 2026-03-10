import { useState } from 'react'

export default function WorkSearch({ work, onFilter }) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredWork = work.filter((item) => {
    const query = searchQuery.toLowerCase()
    return (
      item.title?.toLowerCase().includes(query) ||
      item.summary?.toLowerCase().includes(query) ||
      item.tags?.some((tag) => tag.toLowerCase().includes(query))
    )
  })

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    onFilter(filteredWork)
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
