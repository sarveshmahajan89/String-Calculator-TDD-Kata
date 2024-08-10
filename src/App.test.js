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
  it('should return 0 with empty string', () => {
    const result = add('');
    expect(result).toEqual(0);
  })

  it('should return number with one number string', () => {
    const resultOne = add('1');
    const resultTwo = add('2');
    expect(resultOne).toEqual(1);
    expect(resultTwo).toEqual(2);
  })

  it('should aggregate numbers with two numbers comma separated', () => {
    const result = add('1,2');
    expect(result).toEqual(3);
  })
})