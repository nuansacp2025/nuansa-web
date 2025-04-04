import React from "react";
import Image from "next/image";

interface CastProps {
  cast: CastMember[];
}

const MainCast: React.FC<CastProps> = ({ cast }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cast.map((member, index) => (
        <div
          key={index}
          data-testid="cast-card"
          className="w-full sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-green-a dark:border-gray-700 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        >
          <div className="relative w-full h-64">
            <Image
              src={member.image.src}
              alt={member.image.alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
              priority={index < 3}
            />
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {member.name}
            </h5>
            <p className="text-gray-700 dark:text-gray-400">
              <strong>Character:</strong> {member.character}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {member.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCast;
