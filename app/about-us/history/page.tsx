import React from 'react';
import HistorySummary from '@/app/components/about-us/history/summary';
import Timeline from '@/app/components/about-us/history/timeline';
import VideoFrame from '@/app/components/about-us/history/video-frame';

export default function AboutUsHistorypage() {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8 items-start bg-black w-full min-h-screen">
      <div className="w-full md:w-1/4 md:h-full sticky top-8">
        <Timeline years={[2025, 2024, 2023, 2022, 2021, 2020]} />
      </div>

      <div className="w-full md:w-2/4 space-y-4">
        <VideoFrame
          videoTitle="RickRoll"
          videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tSGI-Y2bIM5CKrxI"
        />
        <HistorySummary
          title="[Nuansa 2024] Keong Mas: Daha to Surabaya"
          description='"Keongmas," which translates to "Golden Snail" in Indonesian, could indicate a theme or symbol central to the event. It might involve elements related to the cultural significance or artistic interpretation.'
        />
      </div>
    </div>
  );
}
