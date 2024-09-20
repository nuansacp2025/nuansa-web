import React from 'react';

interface VideoFrameProps {
    videoTitle: string;
    videoSrc: string;
}

export default function VideoFrame({ videoTitle, videoSrc }: VideoFrameProps) {
    return (
        <div className="relative rounded-lg shadow-md">
            <iframe
                src={videoSrc}
                title={videoTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="flex-grow relative"
            />
        </div>
    );
}