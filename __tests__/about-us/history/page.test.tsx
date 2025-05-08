import React from 'react';
import { render, waitFor } from '@testing-library/react';
import AboutUsHistorypage from '@/app/about-us/history/page';
import '@testing-library/jest-dom';

import HistorySummary from '@/app/components/about-us/history/summary';
import Timeline from '@/app/components/about-us/history/timeline';
import VideoFrame from '@/app/components/about-us/history/video-frame';

const mockAboutUsHistoryConfig = [
    {
        year: 2021,
        title: '2021 Title',
        description: '2021 Description',
        video: {
            title: '2021 Video',
            src: 'https://www.youtube.com/embed/2021',
        },
    },
    {
        year: 2020,
        title: '2020 Title',
        description: '2020 Description',
        video: {
            title: '2020 Video',
            src: 'https://www.youtube.com/embed/2020',
        },
    },
]

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () =>
        Promise.resolve({
            app: {
                pages: {
                    'about-us': {
                        history: mockAboutUsHistoryConfig
                    },
                },
            },
        }),
    })
) as jest.Mock;

jest.mock('@/app/components/about-us/history/summary', () => jest.fn(() => <div>Mocked HistorySummary</div>));
jest.mock('@/app/components/about-us/history/timeline', () => jest.fn(() => <div>Mocked Timeline</div>));
jest.mock('@/app/components/about-us/history/video-frame', () => jest.fn(() => <div>Mocked VideoFrame</div>));

describe('AboutUsHistorypage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders correctly and fetches data', async () => {
        render(<AboutUsHistorypage />);

        await waitFor(() => {
            // Check if only the first history is rendered
            expect(HistorySummary).toHaveBeenCalledWith(
                expect.objectContaining({
                    title: mockAboutUsHistoryConfig[0].title,
                    description: mockAboutUsHistoryConfig[0].description,
                }),
                expect.anything()
            );
            expect(VideoFrame).toHaveBeenCalledWith(
                expect.objectContaining({
                    videoTitle: mockAboutUsHistoryConfig[0].video.title,
                    videoSrc: mockAboutUsHistoryConfig[0].video.src,
                }),
                expect.anything()
            );

            for(let i = 1; i < mockAboutUsHistoryConfig.length; i++) {
                expect(HistorySummary).not.toHaveBeenCalledWith(
                    expect.objectContaining({
                        title: mockAboutUsHistoryConfig[i].title,
                        description: mockAboutUsHistoryConfig[i].description,
                    }),
                    expect.anything()
                );
                expect(VideoFrame).not.toHaveBeenCalledWith(
                    expect.objectContaining({
                        videoTitle: mockAboutUsHistoryConfig[i].video.title,
                        videoSrc: mockAboutUsHistoryConfig[i].video.src,
                    }),
                    expect.anything()
                );
            }
            
            expect(Timeline).toHaveBeenCalledWith(
                expect.objectContaining({
                    years: mockAboutUsHistoryConfig.map((history) => history.year),
                }),
                expect.anything()
            );
        });
    });
});