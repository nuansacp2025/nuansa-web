import { render, screen } from "@testing-library/react";
import  MainCast  from "@/app/components/about-us/keong-mas-2024/main-casts";
import "@testing-library/jest-dom";

const mockCast = [
  {
    name: "Cast 1",
    character: "Character 1",
    image: "/cast-1.png",
    description: "Genius billionaire playboy philanthropist.",
  },
  {
    name: "Cast 2",
    character: "Character 2",
    image: "/cast-2.png",
    description: "The strongest Avenger.",
  },
  {
    name: "Cast 3",
    character: "Character 3",
    image: "/cast-3.png",
    description: "The God of Thunder.",
  },
];

describe("MainCast Component", () => {
  test("renders the correct number of cast members", () => {
    render(<MainCast cast={mockCast} />);
    const castCards = screen.getAllByTestId("cast-card");
    expect(castCards.length).toBe(mockCast.length);
  });

  test("displays actor's name, character, and description", () => {
    render(<MainCast cast={mockCast} />);

    mockCast.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes(member.character))).toBeInTheDocument();
      expect(screen.getByText(member.description)).toBeInTheDocument();
    });
  });

  test("renders images with correct alt text", () => {
    render(<MainCast cast={mockCast} />);

    mockCast.forEach((member) => {
      const image = screen.getByAltText(member.name);
      expect(image).toBeInTheDocument();
    });
  });
});
