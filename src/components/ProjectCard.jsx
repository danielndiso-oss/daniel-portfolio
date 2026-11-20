function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-meta">
        <span className="category-tag">{project.category}</span>
        <span className="project-year">{project.year}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="tech-list" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
