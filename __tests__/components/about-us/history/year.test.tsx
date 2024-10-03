import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Year from '@/app/components/about-us/history/year';

describe('Year Component', () => {
    const year = 2024;
    const setSelected = jest.fn();

    it('renders the year correctly', () => {
        const { getByText } = render(
            <Year year={year} selected={false} setSelected={setSelected} />
        );

        expect(getByText(year.toString())).toBeInTheDocument();
    });

    it('applies the correct class when selected', () => {
        const { getByText } = render(
            <Year year={year} selected={true} setSelected={setSelected} />
        );

        expect(getByText(year.toString())).toHaveClass('text-[#ECBF7F]');
    });

    it('applies the correct class when not selected', () => {
        const { getByText } = render(
            <Year year={year} selected={false} setSelected={setSelected} />
        );

        expect(getByText(year.toString())).toHaveClass('text-gray-500');
    });

    it('calls setSelected when clicked', () => {
        const { getByText } = render(
            <Year year={year} selected={false} setSelected={setSelected} />
        );

        fireEvent.click(getByText(year.toString()));
        expect(setSelected).toHaveBeenCalledTimes(1);
    });
});
