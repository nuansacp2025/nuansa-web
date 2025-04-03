import { render, screen, act } from "@testing-library/react";
import Timer from "@/app/components/timer";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("Timer Component", () => {
    it("should display the correct initial time left", () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1); // 1 day in the future
        const launchDate = futureDate.toISOString();
    
        render(<Timer launchDate={launchDate} />);
    
        const days = screen.getByText("01");
        const timeComponents = screen.getAllByText("00");
    
        expect(days).toBeInTheDocument();
        expect(timeComponents.length).toBe(3); // 3 components: hours, minutes, seconds
    });

    it("should update the countdown every second", () => {
        const futureDate = new Date();
        futureDate.setSeconds(futureDate.getSeconds() + 5); // 5 seconds in the future
        const launchDate = futureDate.toISOString();

        render(<Timer launchDate={launchDate} />);

        const seconds = screen.getByText("05");

        expect(seconds).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(1000); // Advance 1 second
        });

        const updatedSeconds = screen.getByText("04");
        expect(updatedSeconds).toBeInTheDocument();
    });

    it("should display 00:00:00:00 for an invalid launchDate", () => {
        render(<Timer launchDate="invalid-date" />);

        const timeComponents = screen.getAllByText("00");
        expect(timeComponents.length).toBe(4); // 4 components: days, hours, minutes, seconds
    });
});
