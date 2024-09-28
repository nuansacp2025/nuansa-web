import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timeline from '@/app/components/about-us/history/timeline';
import Year from '@/app/components/about-us/history/year';

// Mock the Year component using jest.fn()
jest.mock('@/app/components/about-us/history/year', () => {
    const YearMock = jest.fn(({ year, selected, setSelected }) => (
        <div onClick={setSelected}>{year}</div>
    ));
    return YearMock;
});

describe('Timeline Component', () => {
    const years = [2024, 2023, 2022];
    const setSelectedHistoryIndex = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders without crashing', () => {
        const { container } = render(
            <Timeline 
                years={years} 
                selectedHistoryIndex={0} 
                setSelectedHistoryIndex={setSelectedHistoryIndex} 
            />
        );
        expect(container).toBeInTheDocument();
    });

    it('renders the correct number of Year components', () => {
        render(
            <Timeline 
                years={years} 
                selectedHistoryIndex={0} 
                setSelectedHistoryIndex={setSelectedHistoryIndex} 
            />
        );

        expect(Year).toHaveBeenCalledTimes(years.length);
        
        years.forEach((year, index) => {
            expect(Year).toHaveBeenNthCalledWith(
                index + 1,
                expect.objectContaining({ year, selected: index === 0 }),
                expect.anything()
            );
        });
    });

    it('calls setSelectedHistoryIndex with the correct index when a year is clicked', () => {
        jest.unmock('@/app/components/about-us/history/year');
        const { getByText } = render(
            <Timeline 
                years={years} 
                selectedHistoryIndex={0} 
                setSelectedHistoryIndex={setSelectedHistoryIndex} 
            />
        );
        fireEvent.click(getByText(years[1].toString()));
        expect(setSelectedHistoryIndex).toHaveBeenCalledWith(1);
    });
});