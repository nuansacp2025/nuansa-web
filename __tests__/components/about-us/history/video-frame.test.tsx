import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import VideoFrame from '@/app/components/about-us/history/video-frame';

describe('VideoFrame Component', () => {
    const videoTitle = 'Sample Video';
    const videoSrc = 'https://www.youtube.com/embed/sample-video';

    it('renders without crashing', () => {
        const { container } = render(
            <VideoFrame videoTitle={videoTitle} videoSrc={videoSrc} />
        );
        expect(container).toBeInTheDocument();
    });

    it('renders the iframe with the correct src and title', () => {
        const { getByTitle } = render(
            <VideoFrame videoTitle={videoTitle} videoSrc={videoSrc} />
        );
        const iframe = getByTitle(videoTitle);
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute('src', videoSrc);
    });

    it('applies the correct classes and styles to the container div', () => {
        const { container } = render(
            <VideoFrame videoTitle={videoTitle} videoSrc={videoSrc} />
        );
        const div = container.firstChild;
        expect(div).toHaveClass('relative h-0 rounded-lg overflow-hidden shadow-md');
        expect(div).toHaveStyle('paddingBottom: 56.25%');
    });

    it('applies the correct classes to the iframe', () => {
        const { getByTitle } = render(
            <VideoFrame videoTitle={videoTitle} videoSrc={videoSrc} />
        );
        const iframe = getByTitle(videoTitle);
        expect(iframe).toHaveClass('absolute top-0 left-0 w-full h-full');
    });
});
