import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

describe('HeroSection', () => {
  it('renders the hero section', () => {
    render(<HeroSection />);
    const section = document.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('min-h-screen');
  });

  it('displays the greeting text', () => {
    render(<HeroSection />);
    expect(screen.getByText("// Hello World, I'm")).toBeInTheDocument();
  });

  it('displays the name', () => {
    render(<HeroSection />);
    expect(screen.getByText('Your Name')).toBeInTheDocument();
  });

  it('displays the title with correct text', () => {
    render(<HeroSection />);
    expect(screen.getByText(/I build/i)).toBeInTheDocument();
    expect(screen.getByText(/digital experiences/i)).toBeInTheDocument();
  });

  it('displays the description paragraph', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Full-stack developer passionate/i)).toBeInTheDocument();
  });

  it('renders both CTA buttons with correct text and links', () => {
    render(<HeroSection />);
    const viewWorkButton = screen.getByText('View My Work');
    const getInTouchButton = screen.getByText('Get In Touch');
    
    expect(viewWorkButton).toBeInTheDocument();
    expect(getInTouchButton).toBeInTheDocument();
    
    expect(viewWorkButton.closest('a')).toHaveAttribute('href', '#projects');
    expect(getInTouchButton.closest('a')).toHaveAttribute('href', '#contact');
  });

  it('has correct container structure', () => {
    const { container } = render(<HeroSection />);
    expect(container.querySelector('.container')).toBeInTheDocument();
  });
});
