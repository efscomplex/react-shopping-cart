import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Nav from './Nav'

afterEach(cleanup)

test('Nav Component - Renders Properly', () => {
   render(<Nav data-testid='nav' routes={[{ label: 'Home', path: '/' }]} />)
   expect(screen.getByTestId('nav')).toBeInTheDocument()
})
test('Nav Component - Renders the label properly', () => {
   render(<Nav routes={[{ label: 'Home', path: '/' }]} />)
   expect(screen.getByText('Home')).toBeInTheDocument()
})
test('matche the snaptshot', () => {
   const tree = renderer.create(<Nav routes={[{ label: 'Home', path: '/' }]}/>).toJSON()
   expect(tree).toMatchSnapshot()
})