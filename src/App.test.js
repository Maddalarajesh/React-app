import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {

  test('renders welcome text', () => {
    render(<App />);
    expect(
      screen.getByText(/welcome to aesthisia, you are almost there!/i)
    ).toBeInTheDocument();
  });

  test('renders logo image', () => {
    render(<App />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /learn react/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://reactjs.org');
  });

});
