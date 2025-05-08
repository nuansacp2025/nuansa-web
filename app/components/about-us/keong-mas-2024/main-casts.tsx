import React from "react";
import Image from "next/image";

interface CastProps {
  cast: CastMember[];
}

const MainCast: React.FC<CastProps> = ({ cast }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {cast.map((member, index) => (
        <div
          key={index}
          data-testid="cast-card"
          style={{
            width: member.size?.width,
            gridColumnEnd: member.size?.colSpan
              ? `span ${member.size.colSpan}`
              : undefined,
            gridRowEnd: member.size?.rowSpan
              ? `span ${member.size.rowSpan}`
              : undefined,
          }}
          className="group w-full sm:w-80 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-green-a dark:border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
        >
          <div
            className="relative w-full h-64"
            style={{ height: member.size?.height || "16rem" }}
          >
            <Image
              src={member.image.src}
              alt={member.image.alt}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-lg"
              priority={index < 3}
            />
            {/* Description overlay on hover */}
            {member.description && (
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white p-4 text-center">{member.description}</p>
              </div>
            )}
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {member.name}
            </h5>
            <p className="text-gray-700 dark:text-gray-400">
              <strong>Character:</strong> {member.character}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCast;
