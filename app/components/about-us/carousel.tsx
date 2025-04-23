'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import { ReactNode, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

interface CarouselProps {
  children: ReactNode[];
}

export default function Carousel({ children }: CarouselProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView="auto"
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-row justify-center items-center gap-x-20 px-100 mb-10">
            {child}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
