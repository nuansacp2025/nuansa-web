import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SponsorGrid from '@/app/components/sponsor-grid';

describe('SponsorGrid Component', () => {
  const mockImages = [
    'image1.jpg',
    'image2.png',
    'image3.svg',
    'image4.jpeg',
    'image5.gif',
  ];

  it('renders the component with the correct heading', () => {
    render(<SponsorGrid images={mockImages} />);
    expect(screen.getByText('Our Sponsors')).toBeInTheDocument();
  });

  it('renders all sponsor images', () => {
    render(<SponsorGrid images={mockImages} />);
    mockImages.forEach((image, index) => {
      expect(screen.getByAltText(`Sponsor ${index + 1}`)).toBeInTheDocument();
      expect(screen.getByAltText(`Sponsor ${index + 1}`)).toHaveAttribute('src', image);
    });
  });

  it('renders the correct number of images', () => {
    render(<SponsorGrid images={mockImages} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockImages.length);
  });

  it('applies correct CSS classes', () => {
    render(<SponsorGrid images={mockImages} />);
    const container = screen.getByText('Our Sponsors').parentElement;
    const grid = screen.getByRole('heading').parentElement?.querySelector('.grid');
    const images = screen.getAllByRole('img');

    expect(container).toHaveClass('text-center');
    expect(container).toHaveClass('my-12');

    expect(grid).toHaveClass('grid');
    expect(grid).toHaveClass('grid-cols-2');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('lg:grid-cols-5');
    expect(grid).toHaveClass('gap-x-20');
    expect(grid).toHaveClass('gap-y-10');
    expect(grid).toHaveClass('justify-items-center');
    expect(grid).toHaveClass('items-center');
    expect(grid).toHaveClass('ml-8');
    expect(grid).toHaveClass('mr-8');

    images.forEach((image) => {
      expect(image).toHaveClass('max-w-30');
      expect(image).toHaveClass('md:max-w-40');
      expect(image).toHaveClass('h-auto');
    });
  });

  it('renders an empty grid when no images are provided', () => {
    render(<SponsorGrid images={[]} />);
    const images = screen.queryAllByRole('img');
    expect(images).toHaveLength(0);
  });
});