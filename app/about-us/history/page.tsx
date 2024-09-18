import React from 'react';
import HistorySummary from '@/app/components/about-us/history/summary';
import Timeline from '@/app/components/about-us/history/timeline';
import VideoFrame from '@/app/components/about-us/history/video-frame';

export default function AboutUsHistorypage() {
  return (
    <div className="flex space-x-8 p-8 items-start bg-[#000000] w-full h-screen">
      <div className="w-1/4 h-1/2">
        <Timeline years={[2025, 2024, 2023, 2022, 2021, 2020]} />
      </div>
      <div className="w-2/4 space-y-4">
        <VideoFrame videoTitle='RickRoll' videoSrc='https://www.youtube.com/embed/dQw4w9WgXcQ?si=tSGI-Y2bIM5CKrxI' />
        <HistorySummary 
          title='[Nuansa 2024] Keong Mas: Daha to Surabaya' 
          description='"Keongmas," which translates to "Golden Snail" in Indonesian, could indicate a theme or symbol central to the event. It might involve elements related to the cultural significance or artistic interpretation.'
        />
      </div>
    </div>
  );
}
