import Image from "next/image";

interface GroupCardProps {
  imageSrc: string;
  name: string;
}

export default function GroupCard({ imageSrc, name }: GroupCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md overflow-hidden">
      <div className="relative w-full max-w-[800px]">
        <Image 
          src={imageSrc} 
          alt={name} 
          width={800} 
          height={0}
          className="object-cover w-full h-auto"
        />
      </div>
      <div className="py-3 px-4 flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-center text-orange-600 md:text-xl">{name}</h3>
      </div>
    </div>
  )
}