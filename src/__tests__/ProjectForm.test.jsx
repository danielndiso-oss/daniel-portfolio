import { fireEvent, render, screen } from '@testing-library/react'
import ProjectForm from '../components/ProjectForm.jsx'

function renderForm(onSubmit = jest.fn()) {
  render(<ProjectForm categories={['Web Development', 'UI Design']} onSubmit={onSubmit} />)
  return onSubmit
}

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText(/Title/), {
    target: { value: 'New Portfolio' },
  })
  fireEvent.change(screen.getByLabelText(/Description/), {
    target: { value: 'A practice project for styling components.' },
  })
  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: 'UI Design' },
  })
  fireEvent.change(screen.getByLabelText(/Year/), { target: { value: '2026' } })
  fireEvent.change(screen.getByLabelText('Technologies *'), {
    target: { value: 'React, CSS' },
  })
}

test('submits valid project information and clears the form', () => {
  const onSubmit = renderForm()
  fillRequiredFields()

  fireEvent.click(screen.getByRole('button', { name: 'Add project' }))

  expect(onSubmit).toHaveBeenCalledWith({
    title: 'New Portfolio',
    description: 'A practice project for styling components.',
    category: 'UI Design',
    year: 2026,
    technologies: ['React', 'CSS'],
  })
  expect(screen.getByLabelText(/Title/)).toHaveValue('')
  expect(screen.getByLabelText('Technologies *')).toHaveValue('')
  expect(screen.getByRole('status')).toHaveTextContent('Project added')
})

test('does not submit when required fields are empty', () => {
  const onSubmit = renderForm()

  fireEvent.click(screen.getByRole('button', { name: 'Add project' }))

  expect(onSubmit).not.toHaveBeenCalled()
  expect(screen.getByRole('alert')).toHaveTextContent('Please fill in every required field')
})
