function EmptyState({ onClearFilters }) {
  return (
    <div className="empty-state">
      <p className="empty-title">No projects found</p>
      <p>Try a different search term or category.</p>
      {onClearFilters && (
        <button type="button" className="button button-secondary" onClick={onClearFilters}>
          Clear filters
        </button>
      )}
    </div>
  )
}

export default EmptyState
