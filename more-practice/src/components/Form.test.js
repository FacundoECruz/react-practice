import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from './Form'

test('renders username form', () => {
    render(<Form />)
    const label = screen.getByText(/username/i)
    expect(label).toBeInTheDocument()
})