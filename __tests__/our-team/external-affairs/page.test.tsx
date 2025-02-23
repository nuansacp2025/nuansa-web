import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/our-team/external-affairs/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

jest.mock("@/app/components/animations", () => ({
  FadeInDiv: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("@/app/components/our-team/member-card", () => ({
  __esModule: true,
  default: ({ imageSrc, name, role }: { imageSrc: string; name: string; role: string }) => (
    <div data-testid="member-card" data-name={name} data-role={role}>
      {name} - {role}
    </div>
  ),
}));

describe("External Affairs Page", () => {
  it("renders without crashing", () => {
    render(<Page />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("renders all headings correctly", () => {
    render(<Page />);
    expect(screen.getByText("EXTERNAL AFFAIRS")).toBeInTheDocument();
    expect(screen.getByText("What We Do")).toBeInTheDocument();
    expect(screen.getByText("Divisions and Tasks")).toBeInTheDocument();
    expect(screen.getByText("Members")).toBeInTheDocument();
  });

  it("renders the main section image with correct alt text", () => {
    render(<Page />);
    expect(screen.getByAltText("What We Do")).toBeInTheDocument();
  });

  it("renders all MemberCard components with correct props", () => {
    render(<Page />);
    const memberCards = screen.getAllByTestId("member-card");
    expect(memberCards).toHaveLength(5);
    expect(memberCards[0]).toHaveAttribute("data-name", "Member Name 1");
    expect(memberCards[0]).toHaveAttribute("data-role", "Role 1");
    expect(memberCards[1]).toHaveAttribute("data-name", "Member Name 2");
    expect(memberCards[1]).toHaveAttribute("data-role", "Role 2");
  });
});
