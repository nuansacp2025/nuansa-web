import { render, screen, act, fireEvent } from "@testing-library/react";
import Gallery from "@/app/components/about-us/keong-mas-2024/gallery";
import "@testing-library/jest-dom";

jest.useFakeTimers();

const mockImages = [
  [
    { src: "/mock-image-1A.png", alt: "Image 1A" },
    { src: "/mock-image-1B.png", alt: "Image 1B" },
  ],
  [
    { src: "/mock-image-2A.png", alt: "Image 2A" },
    { src: "/mock-image-2B.png", alt: "Image 2B" },
  ],
];

describe("Gallery Component - moveCarousel", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("moveCarousel updates scrollLeft based on row direction", () => {
    render(<Gallery images={mockImages} speed={2} />);

    const rows = screen.getAllByTestId("gallery-row");
    rows.forEach((row, rowIndex) => {
      Object.defineProperty(row, "scrollWidth", { value: 2000, writable: true });
      Object.defineProperty(row, "clientWidth", { value: 500, writable: true });
      Object.defineProperty(row, "scrollLeft", { value: 100, writable: true });
      row.scrollTo = jest.fn();
    });

    const initialPositions = rows.map((row) => row.scrollLeft);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    rows.forEach((row, rowIndex) => {
      const direction = rowIndex % 2 === 0 ? 1 : -1;

      if (direction === 1) {
        expect(row.scrollLeft).toBeGreaterThan(initialPositions[rowIndex]); // Moves right
      } else {
        expect(row.scrollLeft).toBeLessThan(initialPositions[rowIndex]); // Moves left
      }
    });
  });

  it("moveCarousel resets scrollLeft when reaching scroll limits", () => {
    render(<Gallery images={mockImages} speed={2} />);

    const rows = screen.getAllByTestId("gallery-row");

    rows.forEach((row, rowIndex) => {
      Object.defineProperty(row, "scrollWidth", { value: 2000, writable: true });
      Object.defineProperty(row, "clientWidth", { value: 500, writable: true });

      if (rowIndex % 2 === 0) {
        Object.defineProperty(row, "scrollLeft", { value: 1000, writable: true });
      } else {
        Object.defineProperty(row, "scrollLeft", { value: 0, writable: true });
      }

      row.scrollTo = jest.fn();
    });

    act(() => {
      jest.advanceTimersByTime(100);
    });

    rows.forEach((row, rowIndex) => {
      if (rowIndex % 2 === 0) {
        expect(row.scrollTo).toHaveBeenCalledWith({ left: 0, behavior: "instant" });
      } else {
        expect(row.scrollTo).toHaveBeenCalledWith({ left: 1000, behavior: "instant" });
      }
    });
  });

  it("moveCarousel does not update scrollLeft when isPaused is true", () => {
    render(<Gallery images={mockImages} speed={2} />);
  
    const galleryContainer = screen.getByTestId("gallery-container");
  
    // Mock rows
    const rows = screen.getAllByTestId("gallery-row");
    rows.forEach((row) => {
      Object.defineProperty(row, "scrollWidth", { value: 2000, writable: true });
      Object.defineProperty(row, "clientWidth", { value: 500, writable: true });
      Object.defineProperty(row, "scrollLeft", { value: 100, writable: true });
      row.scrollTo = jest.fn();
    });
  
    const initialPositions = rows.map((row) => row.scrollLeft);
  
    // Simulate mouse enter (pause effect)
    fireEvent.mouseEnter(galleryContainer);
  
    act(() => {
      jest.advanceTimersByTime(100);
    });
  
    rows.forEach((row, rowIndex) => {
      expect(row.scrollLeft).toBe(initialPositions[rowIndex]); // Scroll should NOT change
    });
  });

  it("moveCarousel pauses on hover and resumes on mouse leave", () => {
    render(<Gallery images={mockImages} speed={2} />);
  
    const galleryContainer = screen.getByTestId("gallery-container");
  
    // Mock rows
    const rows = screen.getAllByTestId("gallery-row");
    rows.forEach((row) => {
      Object.defineProperty(row, "scrollWidth", { value: 2000, writable: true });
      Object.defineProperty(row, "clientWidth", { value: 500, writable: true });
      Object.defineProperty(row, "scrollLeft", { value: 100, writable: true });
      row.scrollTo = jest.fn();
    });
  
    const initialPositions = rows.map((row) => row.scrollLeft);
  
    // Simulate mouse enter (pause effect)
    fireEvent.mouseEnter(galleryContainer);
  
    act(() => {
      jest.advanceTimersByTime(100);
    });
  
    // Expect scrollLeft to remain the same (paused)
    rows.forEach((row, rowIndex) => {
      expect(row.scrollLeft).toBe(initialPositions[rowIndex]);
    });
  
    // Simulate mouse leave (resume scrolling)
    fireEvent.mouseLeave(galleryContainer);
  
    act(() => {
      jest.advanceTimersByTime(100);
    });
  
    // Expect scrolling to resume
    rows.forEach((row, rowIndex) => {
      const direction = rowIndex % 2 === 0 ? 1 : -1;
      if (direction === 1) {
        expect(row.scrollLeft).toBeGreaterThan(initialPositions[rowIndex]); // Moves right
      } else {
        expect(row.scrollLeft).toBeLessThan(initialPositions[rowIndex]); // Moves left
      }
    });
  });
  
  it("moveCarousel does not run if container width is too small", () => {
    render(<Gallery images={mockImages} speed={2} />);

    const rows = screen.getAllByTestId("gallery-row");

    rows.forEach((row) => {
      Object.defineProperty(row, "scrollWidth", { value: 500, writable: true });
      Object.defineProperty(row, "clientWidth", { value: 500, writable: true });
      Object.defineProperty(row, "scrollLeft", { value: 100, writable: true });
      row.scrollTo = jest.fn();
    });

    act(() => {
      jest.advanceTimersByTime(100);
    });

    rows.forEach((row) => {
      expect(row.scrollLeft).toBe(100); // No scrolling should happen
    });
  });

  it("cleans up animation frame when component unmounts", () => {
    const { unmount } = render(<Gallery images={mockImages} speed={2} />);

    const cancelSpy = jest.spyOn(window, "cancelAnimationFrame");

    unmount();

    expect(cancelSpy).toHaveBeenCalled();
  });
});
