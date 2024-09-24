interface YearProps {
    year: number;
    selected: boolean;
    setSelected: () => void;
}

export default function Year({ year, selected, setSelected }: YearProps) {
    return (
        <button 
            className={`text-sm font-bold text-justify ml-2 w-16 text-center ${selected ? 'text-[#ECBF7F]' : 'text-gray-500'}`} 
            onClick={setSelected}
        >
            {year}
        </button>
    );
}
