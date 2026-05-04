import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getAllByText(/tirem milles/i)[0];
  expect(titleElement).toBeInTheDocument();
});
