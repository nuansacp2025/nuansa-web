import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemberCard from '@/app/components/our-team/member-card';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

const mockProps = {
  imageSrc: '/path/to/image.jpg',
  name: 'John Doe',
  role: 'Software Engineer',
};

describe('MemberCard Component', () => {
  it('renders without crashing', () => {
    render(<MemberCard {...mockProps} />);
    const memberCard = screen.getByTestId('member-card');
    expect(memberCard).toBeInTheDocument();
  });

  it('displays the correct name', () => {
    render(<MemberCard {...mockProps} />);
    const nameElement = screen.getByText(mockProps.name);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveClass('text-orange-200');
  });

  it('displays the correct role', () => {
    render(<MemberCard {...mockProps} />);
    const roleElement = screen.getByText(mockProps.role);
    expect(roleElement).toBeInTheDocument();
  });

  it('renders the image with the correct src and alt attributes', () => {
    render(<MemberCard {...mockProps} />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.imageSrc);
    expect(imageElement).toHaveAttribute('alt', mockProps.name);
  });

  it('applies the correct styling to the container', () => {
    render(<MemberCard {...mockProps} />);
    const container = screen.getByTestId('member-card');
    expect(container).toHaveClass('max-w-[350px]');
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('flex-col');
    expect(container).toHaveClass('bg-white');
    expect(container).toHaveClass('rounded-md');
    expect(container).toHaveClass('shadow-md');
    expect(container).toHaveClass('overflow-hidden');
  });

  it('applies the correct styling to the name and role text', () => {
    render(<MemberCard {...mockProps} />);
    const nameElement = screen.getByText(mockProps.name);
    const roleElement = screen.getByText(mockProps.role);

    // Check name styling
    expect(nameElement).toHaveClass('text-lg');
    expect(nameElement).toHaveClass('font-semibold');
    expect(nameElement).toHaveClass('text-center');
    expect(nameElement).toHaveClass('text-orange-200');
    expect(nameElement).toHaveClass('md:text-xl');

    // Check role styling
    expect(roleElement).toHaveClass('text-md');
    expect(roleElement).toHaveClass('text-center');
    expect(roleElement).toHaveClass('md:text-lg');
  });
});