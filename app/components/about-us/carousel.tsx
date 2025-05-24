'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay, A11y } from 'swiper/modules';
import { ReactNode, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

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
    <div className="w-[90vw] mx-auto relative">
      <Swiper
        modules={[Navigation, Scrollbar, Autoplay, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        navigation
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-row justify-center items-center gap-x-10 md:gap-x-20 px-4 md:px-20 mb-10">
            {child}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
