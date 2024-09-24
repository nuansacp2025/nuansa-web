'use client';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import HistorySummary from '@/app/components/about-us/history/summary';
import Timeline from '@/app/components/about-us/history/timeline';
import VideoFrame from '@/app/components/about-us/history/video-frame';

export default function AboutUsHistorypage() {
  const [data, setData] = useState<HistoryData[]>([]);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState<number>(0);

  useEffect(() => {
    fetch('/config.json')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Failed to fetch config.json');
        }
        return response.json()
      })
      .then((configData) => {
        const historyData = configData?.app?.pages?.['about-us']?.history;
        if (historyData) {
          setData(historyData);
        }
        console.log('Data:', historyData);
      });
  }, []);

  const selectedHistory = useMemo<null | HistoryData>(() => data === null ? data : data[selectedHistoryIndex], [data, selectedHistoryIndex]);
  const selectedTitle = useMemo<string>(() => selectedHistory === null ? "" : selectedHistory?.title, [selectedHistory]);
  const selectedDescription = useMemo<string>(() => selectedHistory === null ? "" : selectedHistory?.description, [selectedHistory]);
  const selectedVideo = useMemo<null | VideoData>(() => selectedHistory === null ? null : selectedHistory?.video, [selectedHistory]);
  const selectedVideoTitle = useMemo<string>(() => selectedVideo === null ? "" : selectedVideo?.title, [selectedVideo]);
  const selectedVideoSrc = useMemo<string>(() => selectedVideo === null ? "" : selectedVideo?.src, [selectedVideo]);
  const years = useMemo<number[]>(() => data.map((history) => history.year), [data]);

  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-4 md:p-8 items-start bg-black w-full min-h-screen">
      <div className="w-full md:w-1/4 md:h-full sticky top-8">
        <Timeline 
          years={years}
          selectedHistoryIndex={selectedHistoryIndex}
          setSelectedHistoryIndex={setSelectedHistoryIndex}
        />
      </div>
      
      <motion.div 
        className="w-full md:w-2/4 space-y-4"
        key={selectedHistoryIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <VideoFrame
          videoTitle={selectedVideoTitle}
          videoSrc={selectedVideoSrc}
        />
        <HistorySummary
          title={selectedTitle}
          description={selectedDescription}
        />
      </motion.div>
    </div>
  );
}
