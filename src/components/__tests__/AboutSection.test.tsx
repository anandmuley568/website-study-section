import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
  it('renders the section with correct id', () => {
    render(<AboutSection />);
    const section = document.getElementById('about');
    expect(section).toBeInTheDocument();
  });

  it('displays the section header with correct text', () => {
    render(<AboutSection />);
    expect(screen.getByText("// GET TO KNOW ME")).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Me/i)).toBeInTheDocument();
  });

  it('displays the about me description paragraphs', () => {
    render(<AboutSection />);
    expect(screen.getByText(/I'm a passionate developer/i)).toBeInTheDocument();
    expect(screen.getByText(/When I'm not coding/i)).toBeInTheDocument();
  });

  it('displays all three statistics', () => {
    render(<AboutSection />);
    expect(screen.getByText('3+')).toBeInTheDocument();
    expect(screen.getByText('Years Exp.')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Passion')).toBeInTheDocument();
  });

  it('renders emoji icons in the visual section', () => {
    render(<AboutSection />);
    const emojis = screen.getAllByText(/👨‍💻|🚀|💡/);
    expect(emojis.length).toBeGreaterThan(0);
  });

  it('has correct container structure', () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector('.container')).toBeInTheDocument();
    expect(container.querySelector('.grid')).toBeInTheDocument();
  });
});
