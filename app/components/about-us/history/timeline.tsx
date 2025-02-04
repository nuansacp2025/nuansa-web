import React from 'react';
import Year from './year';

interface TimelineProps {
    years: number[];
    selectedHistoryIndex: number;
    setSelectedHistoryIndex: (index: number) => void;
}

export default function Timeline({ years, selectedHistoryIndex, setSelectedHistoryIndex }: TimelineProps) {

    return (
        <div className="flex md:flex-col flex-row items-center md:space-y-8 md:space-x-0 space-x-8 justify-center h-full mt-5 md:mt-0">
            {years.map((year, index) => (
                <div key={index} className="flex md:flex-row flex-col items-center">
                    <div className="flex md:flex-col flex-row items-center mx-2 relative">
                        <div className="w-2 h-2 bg-orange-a rounded-full z-10"/>
                        {index < years.length - 1? <div className="md:w-0.5 md:h-14 w-24 h-0.5 bg-orange-a absolute"/> : null}
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
