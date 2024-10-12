import Image from "next/image";

interface TeamCardProps {
  imageSrc: string;
  name: string;
}

export default function TeamCard({ imageSrc, name }: TeamCardProps) {
  return (
    <div className="relative grow h-[200] rounded-md shadow-md overflow-hidden">
      <Image src={imageSrc} alt={name} fill={true} objectFit="cover" />
      <div className="absolute w-full h-full flex items-center justify-center text-white bg-black bg-opacity-40">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );
}