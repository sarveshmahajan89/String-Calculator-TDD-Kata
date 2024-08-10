import { render, screen } from '@testing-library/react';
import StringCalculator from './StringCalculator';

test('renders learn react link', () => {
  render(<StringCalculator />);
  const linkElement = screen.getByText(/String Calculator TDD Kata App/i);
  expect(linkElement).toBeInTheDocument();
});
