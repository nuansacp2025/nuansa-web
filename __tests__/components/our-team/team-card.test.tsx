import React from 'react';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import TeamCard from "@/app/components/our-team/team-card";

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

const mockProps = {
  imageSrc: '/path/to/image.jpg',
  name: 'John Doe',
  href: "/team/john-doe"
};

describe("TeamCard Component", () => {
  it("renders without crashing", () => {
    render(<TeamCard {...mockProps} />);
    const teamCard = screen.getByRole("link"); // 'Link' will be the anchor element in this case
    expect(teamCard).toBeInTheDocument();
  });

  it("renders the correct image with the correct src and alt attributes", () => {
    render(<TeamCard {...mockProps} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", mockProps.imageSrc);
    expect(imageElement).toHaveAttribute("alt", mockProps.name);
  });

  it("displays the correct name", () => {
    render(<TeamCard {...mockProps} />);
    const nameElement = screen.getByText(mockProps.name);
    expect(nameElement).toBeInTheDocument();
  });

  it("navigates to the correct href when clicked", () => {
    render(<TeamCard {...mockProps} />);
    const teamCardLink = screen.getByRole("link");
    expect(teamCardLink).toHaveAttribute("href", mockProps.href);
  });

  it("has the correct background color", () => {
    render(<TeamCard {...mockProps} />);
    
    // Get the element containing the name
    const teamCard = screen.getByText(mockProps.name);
    
    // Check background color
    const parentDiv = teamCard.closest('div');
    expect(parentDiv).toHaveStyle('background-color: rgba(0, 0, 0, 0.2)');
  });
});
