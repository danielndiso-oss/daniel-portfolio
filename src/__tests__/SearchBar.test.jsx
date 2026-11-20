import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'
import SearchBar from '../components/SearchBar.jsx'

function SearchBarHarness() {
  const [searchTerm, setSearchTerm] = useState('')

  return <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
}

test('accepts typed search text', () => {
  render(<SearchBarHarness />)
  const input = screen.getByLabelText('Search projects')

  fireEvent.change(input, { target: { value: 'weather' } })

  expect(input).toHaveValue('weather')
})
