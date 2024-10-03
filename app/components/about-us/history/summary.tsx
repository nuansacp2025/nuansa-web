import React from 'react';

interface HistorySummaryProps {
    title: string;
    description: string;
}

export default function HistorySummary({ title, description }: HistorySummaryProps) {
    return (
        <div className="text-left space-y-2 p-4 bg-transparent shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-[#ECBF7F] font-poppins text-justify">
                {title}
            </h2>
            <p className="text-white font-poppins text-2xl text-justify">
                <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
        </div>
    );
}
