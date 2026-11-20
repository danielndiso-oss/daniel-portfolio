function FilterButtons({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filter-buttons" role="group" aria-label="Filter by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`filter-button${category === selectedCategory ? ' is-active' : ''}`}
          aria-pressed={category === selectedCategory}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
