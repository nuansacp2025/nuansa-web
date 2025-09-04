import { render, screen, act } from "@testing-library/react";
import Timer from "@/app/components/timer";
import "@testing-library/jest-dom";

jest.useFakeTimers();

describe("Timer Component", () => {
    it("should display the correct initial time left", () => {
        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 1); // 1 day in the future
        const launchDate = futureDate.toISOString();

        const endDate = new Date(futureDate.getTime() + 3 * 60 * 60 * 1000).toISOString();
        render(
            <Timer
                launchDate={launchDate}
                endDate={endDate}
                ongoingMessage="Ongoing"
                postMessage="See you next year!"
            />
        );
    
        const days = screen.getByText("01");
        const timeComponents = screen.getAllByText("00");
    
        expect(days).toBeInTheDocument();
        expect(timeComponents.length).toBe(3); // 3 components: hours, minutes, seconds
    });

    it("should update the countdown every second", () => {
        const futureDate = new Date();
        futureDate.setSeconds(futureDate.getSeconds() + 5); // 5 seconds in the future
        const launchDate = futureDate.toISOString();

        const endDate = new Date(futureDate.getTime() + 3 * 60 * 60 * 1000).toISOString();
        render(
            <Timer
                launchDate={launchDate}
                endDate={endDate}
                ongoingMessage="Ongoing"
                postMessage="See you next year!"
            />
        );


        const seconds = screen.getByText("05");

        expect(seconds).toBeInTheDocument();

        act(() => {
            jest.advanceTimersByTime(1000); // Advance 1 second
        });

        const updatedSeconds = screen.getByText("04");
        expect(updatedSeconds).toBeInTheDocument();
    });

    it("should display 00:00:00:00 for an invalid launchDate", () => {
        render(
            <Timer
                launchDate="invalid-date"
                endDate="invalid-date"
                ongoingMessage="Ongoing"
                postMessage="See you next year!"
            />
        );

        const timeComponents = screen.getAllByText("00");
        expect(timeComponents.length).toBe(4); // 4 components: days, hours, minutes, seconds
    });

    it("should display 'Ongoing' during the event window", () => {
        const launchDate = "2025-09-07T19:00:00+08:00";
        const duringEvent = new Date("2025-09-07T20:00:00+08:00");
        jest.setSystemTime(duringEvent);

        const endDate = "2025-09-07T22:00:00+08:00";
        render(
            <Timer
                launchDate={launchDate}
                endDate={endDate}
                ongoingMessage="Ongoing"
                postMessage="See you next year!"
            />
        );

        expect(screen.getByText("Ongoing")).toBeInTheDocument();
    });

    it("should display 'See you next year!' after the event window", () => {
        const launchDate = "2025-09-07T19:00:00+08:00";
        const afterEvent = new Date("2025-09-07T22:30:00+08:00");
        jest.setSystemTime(afterEvent);

        const endDate = "2025-09-07T22:00:00+08:00";
        render(
            <Timer
                launchDate={launchDate}
                endDate={endDate}
                ongoingMessage="Ongoing"
                postMessage="See you next year!"
            />
        );

        expect(screen.getByText("See you next year!")).toBeInTheDocument();
    });
});
