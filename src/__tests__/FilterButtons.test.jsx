import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'
import FilterButtons from '../components/FilterButtons.jsx'

const categories = ['All', 'Web Development', 'UI Design', 'Mobile Apps']

function FilterButtonsHarness() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  return (
    <FilterButtons
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={setSelectedCategory}
    />
  )
}

test('changes the selected category when a filter is clicked', () => {
  render(<FilterButtonsHarness />)

  const allButton = screen.getByRole('button', { name: 'All' })
  const uiButton = screen.getByRole('button', { name: 'UI Design' })

  expect(allButton).toHaveAttribute('aria-pressed', 'true')

  fireEvent.click(uiButton)

  expect(uiButton).toHaveAttribute('aria-pressed', 'true')
  expect(allButton).toHaveAttribute('aria-pressed', 'false')
})
