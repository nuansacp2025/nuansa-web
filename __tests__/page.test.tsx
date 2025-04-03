import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";

jest.mock("next/image", () => jest.fn(() => <div>Mocked Image</div>));
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock("@/app/components/timer", () => jest.fn(() => <div>Mocked Timer</div>));
jest.mock("@/app/components/animations", () => ({
  FadeInDiv: jest.fn(({ children }: { children: React.ReactNode }) => <div>{children}</div>),
}));
jest.mock("@/app/components/background", () => ({
  ScrollableBackground: jest.fn(() => <div>Mocked ScrollableBackground</div>),
}));
jest.mock("@/app/components/sponsor-grid", () => jest.fn(() => <div>Mocked SponsorGrid</div>));

const mockHomeConfig = {
    background: {
        src: "/images/example-background.png",
        alt: "background"
    },
    images: {
        "crying-stone-logo": 
        {
            src: "/images/logo.png", 
            alt: "Crying Stone Logo"
        }
    },
  "launch-date": "2025-12-31",
  synopsis: "This is a sample synopsis.",
  characters: [
    {
        name: "Character 1",
        image: {
            src: "/images/character1.png", 
            alt: "Character 1"
        },
        description: "Character 1 description",
    },
    {
        name: "Character 2",
        image: {
            src: "/images/character2.png",
            alt: "Character 2"
        },
        description: "Character 2 description",
    },
  ],
  sponsors: [
    [
        {
            name: "Sponsor 1",
            image: {
                src: "/images/sponsor1.png",
                alt: "Sponsor 1"
            }
        },
        {
            name: "Sponsor 2",
            image: {
                src: "/images/sponsor2.png",
                alt: "Sponsor 2"
            }
        }
    ]
  ],
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        app: {
          pages: {
            home: mockHomeConfig,
          },
        },
      }),
  })
) as jest.Mock;

describe("Home Page", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    
    it("renders correctly and fetches data", async () => {
        render(<Home />);
        
        await waitFor(() => {
            expect(screen.getByText("Mocked ScrollableBackground")).toBeInTheDocument();
            expect(screen.getByText("Mocked Timer")).toBeInTheDocument();
            expect(screen.getByText("Synopsis")).toBeInTheDocument();
            expect(screen.getByText(mockHomeConfig.synopsis)).toBeInTheDocument();
            expect(screen.getByText("Characters")).toBeInTheDocument();
            expect(screen.getByText("Mocked SponsorGrid")).toBeInTheDocument();
        });
    });

    it("renders character images and descriptions", async () => {
        render(<Home />);

        await waitFor(() => {
            mockHomeConfig.characters.forEach((character) => {
                expect(screen.getByText(character.description)).toBeInTheDocument();
            });
        });
    });

  it("renders buttons for inquiries", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("General Inquiry")).toBeInTheDocument();
      expect(screen.getByText("Business Inquiry")).toBeInTheDocument();
    });
  });
});
