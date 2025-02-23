"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface GalleryProps {
  images: ImageConfig[][];
  speed?: number;
}

const Gallery: React.FC<GalleryProps> = ({ images, speed = 1 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const animationFrames: number[] = [];

    const moveCarousel = (rowIndex: number) => {
      if (!rowRefs.current[rowIndex]) return;

      const container = rowRefs.current[rowIndex];
      if (!container) return;

      // Set movement direction: odd rows move left, even rows move right
      const direction = rowIndex % 2 === 0 ? 1 : -1;
      const movementSpeed = speed * direction;

      if (!isPaused && container.scrollWidth > container.clientWidth) {
        container.scrollLeft += movementSpeed;

        const maxScrollLeft = container.scrollWidth / 2;
        const minScrollLeft = 0;

        if (container.scrollLeft >= maxScrollLeft && direction === 1) {
          container.scrollTo({ left: minScrollLeft, behavior: "instant" });
        } else if (container.scrollLeft <= minScrollLeft && direction === -1) {
          container.scrollTo({ left: maxScrollLeft, behavior: "instant" });
        }
      }

      animationFrames[rowIndex] = requestAnimationFrame(() => moveCarousel(rowIndex));
    };

    images.forEach((_, rowIndex) => {
      animationFrames[rowIndex] = requestAnimationFrame(() => moveCarousel(rowIndex));
    });

    return () => animationFrames.forEach((frame) => cancelAnimationFrame(frame));
  }, [isPaused, speed, images]);

  return (
    <div
      data-testid="gallery-container"
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((row, rowIndex) => (
        <div
          key={rowIndex}
          ref={(el) => {
            rowRefs.current[rowIndex] = el;
          }}
          data-testid="gallery-row"
          data-direction={rowIndex % 2 === 0 ? 1 : -1}
          className="flex whitespace-nowrap overflow-hidden no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {[...row, ...row].map((image, colIndex) => (
            <div
              key={colIndex}
              className="w-auto min-w-[150px] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[300px] max-w-full"
            >
              <div className="relative w-full h-[150px] md:h-[200px] lg:h-[250px] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
