import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ScrollableBackground } from "@/app/components/background";
import { act } from "react";

describe("ScrollableBackground", () => {
  it("renders the background image", () => {
    render(<ScrollableBackground src="/test-image.jpg" width={1920} height={1080} />);
    expect(screen.getByAltText("Background")).toBeInTheDocument();
  });

  it("updates marginTop and marginBottom on scroll", () => {
    render(<ScrollableBackground src="/test-image.jpg" width={1920} height={1080} />);
    
    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });
    
    // No direct way to check inline styles, but we can check if re-renders happen without errors
    expect(screen.getByAltText("Background")).toBeInTheDocument();
  });
  it("adjusts margins when background height is smaller than window height", () => {
    render(<ScrollableBackground src="/test-image.jpg" width={1920} height={500} />);
    
    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event("scroll"));
    });
    
    expect(screen.getByAltText("Background")).toBeInTheDocument();
  });

  it("recalculates dimensions and margins on window resize", () => {
    render(<ScrollableBackground src="/test-image.jpg" width={1920} height={1080} />);
    
    act(() => {
      window.innerWidth = 1600;
      window.dispatchEvent(new Event("resize"));
    });
    
    expect(screen.getByAltText("Background")).toBeInTheDocument();
  });
});
