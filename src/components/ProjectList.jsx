import EmptyState from './EmptyState.jsx'
import FilterButtons from './FilterButtons.jsx'
import ProjectCard from './ProjectCard.jsx'
import SearchBar from './SearchBar.jsx'

function ProjectList({
  projects,
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onSelectCategory,
  onClearFilters,
}) {
  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Projects</h2>
          <p className="section-intro">
            A few things I have built while practising React and CSS.
          </p>
        </div>
        <a className="button button-secondary" href="#add-project">
          Add a project
        </a>
      </div>

      <div className="project-toolbar">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
        <FilterButtons
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </div>

      <p className="project-count">
        Showing {projects.length} {projects.length === 1 ? 'project' : 'projects'}
      </p>

      {projects.length === 0 ? (
        <EmptyState onClearFilters={onClearFilters} />
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProjectList
