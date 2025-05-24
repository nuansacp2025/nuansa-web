interface RegularButtonProps {
    size: "normal" | "small",
    variant: "green" | "orange",
    text: string,
    onClick?: () => void,
}

export default function RegularButton({ size, variant, text, onClick }: RegularButtonProps) {
    return (
        <button
            className={`flex items-center justify-center rounded-md shadow-xl font-semibold
            transition duration-300 active:scale-110 bg-opacity-80 hover:bg-opacity-100
            w-full ${size === "normal" ? "sm:w-64 sm:h-12 text-lg" : "sm:w-48 sm:h-10 text-sm"}
            ${variant === "green" ? "bg-green-b text-white" : "bg-orange-a text-green-a"}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}