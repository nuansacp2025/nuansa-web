import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/our-team/page";
import TeamCard from "@/app/components/our-team/team-card";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

jest.mock("@/app/components/animations", () => ({
  FadeInDiv: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("@/app/components/our-team/team-card", () => ({
  __esModule: true,
  default: ({ imageSrc, name, href }: { imageSrc: string; name: string; href: string }) => (
    <div data-testid="team-card" data-name={name} data-href={href}>
      {name}
    </div>
  ),
}));

describe("Page Component", () => {  
  it("renders without crashing", () => {
    render(<Page />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders all headings correctly", () => {
    render(<Page />);
    expect(screen.getByText("Structure")).toBeInTheDocument();
    expect(screen.getByText("Management Profile")).toBeInTheDocument();
    expect(screen.getByText("Find Out More")).toBeInTheDocument();
  });

  it("renders all images with correct alt text", () => {
    render(<Page />);
    expect(screen.getByAltText("Structure")).toBeInTheDocument();
    expect(screen.getByAltText("Management Profile")).toBeInTheDocument();
  });

  it("renders all TeamCard components with correct props", () => {
    render(<Page />);
    const teamCards = screen.getAllByTestId("team-card");
    expect(teamCards).toHaveLength(3);
    expect(teamCards[0]).toHaveAttribute("data-name", "Arts");
    expect(teamCards[0]).toHaveAttribute("data-href", "/our-team/arts");
    expect(teamCards[1]).toHaveAttribute("data-name", "Production");
    expect(teamCards[1]).toHaveAttribute("data-href", "/our-team/production");
    expect(teamCards[2]).toHaveAttribute("data-name", "External Affairs");
    expect(teamCards[2]).toHaveAttribute("data-href", "/our-team/external-affairs");
  });
});
