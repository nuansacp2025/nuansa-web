import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HistorySummary from '@/app/components/about-us/history/summary';

describe('HistorySummary Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<HistorySummary title="Test Title" description="Test Description" />);
        expect(container).toBeInTheDocument();
    });

    it('renders the title correctly', () => {
        const { getByText } = render(<HistorySummary title="Test Title" description="Test Description" />);
        expect(getByText('Test Title')).toBeInTheDocument();
    });

    it('renders the description correctly', () => {
        const { getByText } = render(<HistorySummary title="Test Title" description="Test Description" />);
        expect(getByText('Test Description')).toBeInTheDocument();
    });

    it('renders html in the description correctly', () => {
        const { getByText } = render(<HistorySummary title="Test Title" description="Test Description with <strong>HTML</strong>" />);
        expect(getByText((content, element) => {
            if (!element) return false;
            const hasText = (node: Element) => node.textContent === 'Test Description with HTML';
            const elementHasText = hasText(element);
            const childrenDontHaveText = Array.from(element.children).every(child => !hasText(child));
            return elementHasText && childrenDontHaveText;
        })).toBeInTheDocument();
    });
});
