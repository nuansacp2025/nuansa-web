import React from "react";
import Image from "next/image";

interface TeamProps {
  team: string; // Single image URL
}

const Team: React.FC<TeamProps> = ({ team }) => {
  return (
    <div className="w-full flex justify-center p-6">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto shadow-lg rounded-lg overflow-hidden">
        <Image
          src={team}
          alt="Team"
          width={800}
          height={600}
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Team;
