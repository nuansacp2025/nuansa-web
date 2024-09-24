import React from 'react';
import Year from './year';

interface TimelineProps {
    years: number[];
    selectedHistoryIndex: number;
    setSelectedHistoryIndex: (index: number) => void;
}

export default function Timeline({ years, selectedHistoryIndex, setSelectedHistoryIndex }: TimelineProps) {

    return (
        <div className="flex flex-col items-center space-y-8 justify-start h-full">
            {years.map((year, index) => (
                <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center mx-2 relative">
                        <div className="w-2 h-2 bg-[#ECBF7F] rounded-full z-10"/>
                        {index < years.length - 1? <div className="w-0.5 h-14 bg-[#ECBF7F] absolute"/> : null}
                    </div>
                    <Year
                        year={year}
                        selected={selectedHistoryIndex === index}
                        setSelected={() => setSelectedHistoryIndex(index)}
                    />
                </div>
            ))}
        </div>
    );
}
