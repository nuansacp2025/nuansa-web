import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/footer';
import '@testing-library/jest-dom';

// Mocking Next.js Link and Image components
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
    <img src={src} alt={alt} width={width} height={height} />
  ),
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}));

describe('Footer Component', () => {
  it('renders social media links with icons', () => {
    render(<Footer />);

    const facebookLink = screen.getByAltText('Facebook');
    const instagramLink = screen.getByAltText('Instagram');
    const youtubeLink = screen.getByAltText('Youtube');

    // Check if the social media links are present
    expect(facebookLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(youtubeLink).toBeInTheDocument();

    // Check if the correct links are present
    expect(facebookLink.closest('a')).toHaveAttribute('href', 'https://www.facebook.com/nuansa.culturalproductions/');
    expect(instagramLink.closest('a')).toHaveAttribute('href', 'https://www.instagram.com/nuansacp/');
    expect(youtubeLink.closest('a')).toHaveAttribute('href', 'https://www.youtube.com/@NUANSAcp/');
  });

  it('renders the footer navigation links', () => {
    render(<Footer />);

    const homeLink = screen.getByText(/Home/i);
    const aboutUsLink = screen.getByText(/About Us/i);
    const ourTeamLink = screen.getByText(/Our Team/i);
    const contactUsLink = screen.getByText(/Contact Us/i);

    // Check if the footer navigation links are present
    expect(homeLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
    expect(ourTeamLink).toBeInTheDocument();
    expect(contactUsLink).toBeInTheDocument();

    // Check if the correct links are present
    expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    expect(aboutUsLink.closest('a')).toHaveAttribute('href', '/about-us');
    expect(ourTeamLink.closest('a')).toHaveAttribute('href', '/our-team');
    expect(contactUsLink.closest('a')).toHaveAttribute('href', '/contact-us');
  });

  it('renders the footer with the correct classes and structure', () => {
    render(<Footer />);

    const footer = screen.getByRole('footer');
    expect(footer).toHaveClass('flex items-center bg-green-b justify-start px-8 py-4 lg:justify-between z-10');
  });
});
