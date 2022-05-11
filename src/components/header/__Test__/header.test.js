import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../header';

const MockHeader = () => (
  <Router>
    <Header />
  </Router>
);

describe('Testing Header', () => {
  it('Check if logo if visible', () => {
    render(<MockHeader />);
    const imgElement = screen.getByAltText(/planet logo/i);
    expect(imgElement).toBeVisible();
  });

  it('Check number of link', () => {
    render(<MockHeader />);
    const linksElement = screen.getAllByRole('link');
    expect(linksElement.length).toBe(3);
  });
});
