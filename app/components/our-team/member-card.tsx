import Image from "next/image";

interface MemberCardProps {
  imageSrc: string;
  name: string;
  role: string;
}

export default function MemberCard({ imageSrc, name, role }: MemberCardProps) {
  return (
    <div data-testid="member-card" className="max-w-[350px] flex flex-col bg-white rounded-md shadow-md overflow-hidden">
      <div className="relative aspect-square">
        <Image src={imageSrc} alt={name} fill={true} objectFit="cover" />
      </div>
      <div className="w-full h-[100px] flex flex-col items-center justify-center space-y-1">
        <h3 className="text-lg font-semibold text-center text-orange-200 md:text-xl">{name}</h3>
        <p className="text-md text-center md:text-lg">{role}</p>
      </div>
      
    </div>
  )
}