import { render, screen } from '@testing-library/react';
import StringCalculator from './StringCalculator';
import { add } from './addNumbers';

test('renders learn react link', () => {
  render(<StringCalculator />);
  const linkElement = screen.getByText(/String Calculator TDD Kata App/i);
  expect(linkElement).toBeInTheDocument();
});

describe ('Addition', () => {
  it('Adding 2 and 2 makes 4', () => {
    expect(2+2).toBe(4);
  })
})

describe ('Addition using addNumber method', () => {
  it('with empty string', () => {
    const result = add('');
    expect(result).toEqual(0);
  })
})