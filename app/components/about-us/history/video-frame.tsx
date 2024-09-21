import React from 'react';

interface VideoFrameProps {
    videoTitle: string;
    videoSrc: string;
}

export default function VideoFrame({ videoTitle, videoSrc }: VideoFrameProps) {
    return (
        <div className="relative h-0 rounded-lg overflow-hidden shadow-md" style={{ paddingBottom: '56.25%' }}>
            <iframe
                width="560"
                height="315"
                src={videoSrc}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
}
