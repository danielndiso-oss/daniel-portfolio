import { useState } from 'react'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import ProjectForm from './components/ProjectForm.jsx'
import ProjectList from './components/ProjectList.jsx'
import initialProjects from './data/projects.js'
import './styles/main.css'

function App() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const search = searchTerm.trim().toLowerCase()

  const visibleProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search)
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  function handleAddProject(newProject) {
    setProjects((currentProjects) => [
      ...currentProjects,
      { ...newProject, id: Date.now() },
    ])
  }

  function handleClearFilters() {
    setSearchTerm('')
    setSelectedCategory('All')
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectList
          projects={visibleProjects}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onClearFilters={handleClearFilters}
        />
        <ProjectForm categories={categories.slice(1)} onSubmit={handleAddProject} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
