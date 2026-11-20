import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/ProjectCard.jsx'

const project = {
  id: 1,
  title: 'Personal Finance Tracker',
  description: 'Track income, expenses and savings goals.',
  category: 'Web Development',
  year: 2025,
  technologies: ['React', 'CSS'],
}

test('shows the project information and technologies', () => {
  render(<ProjectCard project={project} />)

  expect(
    screen.getByRole('heading', { name: 'Personal Finance Tracker' })
  ).toBeInTheDocument()
  expect(
    screen.getByText('Track income, expenses and savings goals.')
  ).toBeInTheDocument()
  expect(screen.getByText('Web Development')).toBeInTheDocument()
  expect(screen.getByText('2025')).toBeInTheDocument()
  expect(screen.getByText('React')).toBeInTheDocument()
  expect(screen.getByText('CSS')).toBeInTheDocument()
})
