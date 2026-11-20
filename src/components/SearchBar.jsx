function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-field">
      <label htmlFor="project-search">Search projects</label>
      <input
        id="project-search"
        type="search"
        placeholder="Search by title or description"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  )
}

export default SearchBar
