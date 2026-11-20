import { fireEvent, render, screen, within } from '@testing-library/react'
import App from '../App.jsx'

test('adds a project and shows it in the list immediately', () => {
  render(<App />)

  expect(
    screen.queryByRole('heading', { name: 'Practice Blog' })
  ).not.toBeInTheDocument()

  fireEvent.change(screen.getByLabelText(/Title/), {
    target: { value: 'Practice Blog' },
  })
  fireEvent.change(screen.getByLabelText(/Description/), {
    target: { value: 'A blog built to practise forms.' },
  })
  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: 'Web Development' },
  })
  fireEvent.change(screen.getByLabelText(/Year/), { target: { value: '2026' } })
  fireEvent.change(screen.getByLabelText('Technologies *'), {
    target: { value: 'React' },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Add project' }))

  expect(
    screen.getByRole('heading', { name: 'Practice Blog' })
  ).toBeInTheDocument()
  expect(screen.getByText('Showing 7 projects')).toBeInTheDocument()
})

test('combines search and category filters and shows an empty state', () => {
  render(<App />)

  fireEvent.change(screen.getByLabelText('Search projects'), {
    target: { value: 'recipe' },
  })
  expect(screen.getByText('Showing 1 project')).toBeInTheDocument()
  expect(
    screen.getByRole('heading', { name: 'Recipe Finder' })
  ).toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: 'UI Design' }))
  expect(screen.getByText('No projects found')).toBeInTheDocument()

  fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }))
  expect(screen.getByText('Showing 6 projects')).toBeInTheDocument()
})

test('navigation links point to sections that exist on the page', () => {
  render(<App />)

  const navigation = screen.getByRole('navigation', { name: 'Main navigation' })
  const sections = ['home', 'projects', 'about', 'contact']

  sections.forEach((sectionId) => {
    const label = sectionId[0].toUpperCase() + sectionId.slice(1)
    expect(within(navigation).getByRole('link', { name: label })).toHaveAttribute(
      'href',
      `#${sectionId}`
    )
    expect(document.getElementById(sectionId)).toBeInTheDocument()
  })
})
