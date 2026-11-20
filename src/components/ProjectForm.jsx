import { useState } from 'react'

function ProjectForm({ categories = [], onSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [year, setYear] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const technologyList = technologies
      .split(',')
      .map((technology) => technology.trim())
      .filter((technology) => technology !== '')

    if (
      title.trim() === '' ||
      description.trim() === '' ||
      category.trim() === '' ||
      year.trim() === '' ||
      technologyList.length === 0
    ) {
      setError('Please fill in every required field before adding a project.')
      setSuccess('')
      return
    }

    onSubmit({
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      year: Number(year),
      technologies: technologyList,
    })

    setTitle('')
    setDescription('')
    setCategory('')
    setYear('')
    setTechnologies('')
    setError('')
    setSuccess('Project added. It now appears in the list above.')
  }

  return (
    <section className="section container" id="add-project">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SOMETHING NEW</p>
          <h2>Add Project</h2>
          <p className="section-intro">
            Fill in the form to add your own project to the list.
          </p>
        </div>
      </div>

      <form className="project-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="project-title">Title *</label>
          <input
            id="project-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="e.g. Portfolio Redesign"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="project-description">Description *</label>
          <textarea
            id="project-description"
            rows="3"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="What does this project do?"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="project-category">Category *</label>
            <input
              id="project-category"
              type="text"
              list="category-options"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              placeholder="e.g. Web Development"
              required
            />
            <datalist id="category-options">
              {categories.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
          </div>

          <div className="form-field">
            <label htmlFor="project-year">Year *</label>
            <input
              id="project-year"
              type="number"
              min="2000"
              max="2100"
              value={year}
              onChange={(event) => setYear(event.target.value)}
              placeholder="2026"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="project-technologies">Technologies *</label>
          <input
            id="project-technologies"
            type="text"
            value={technologies}
            onChange={(event) => setTechnologies(event.target.value)}
            placeholder="React, CSS, JavaScript (separate with commas)"
            required
          />
        </div>

        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p className="form-success" role="status">
            {success}
          </p>
        )}

        <button type="submit" className="button button-primary">
          Add project
        </button>
      </form>
    </section>
  )
}

export default ProjectForm
