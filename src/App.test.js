import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test("count === 1", () => {
  const newState = reducer({ count: 0 }, { type: "plus" });
  expect(newState.count).toBe(1)
})
