import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders hello world', () => {
  const { getByTestId } = render(<App />)
  const title = getByTestId('hello-world')
  expect(title).toBeInTheDocument()
})
