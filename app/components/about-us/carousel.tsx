'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';


import { ReactNode, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView="auto"
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {children.map((child, index) => (
        windowWidth < 1000
        ? <SwiperSlide key={index}>
            <div className="flex flex-row justify-center items-center gap-x-20 px-100 mb-10">
              {child}
            </div>
          </SwiperSlide>
        : index % 2 == 0 
        ? <SwiperSlide key={index}>
          <div className="flex flex-row justify-center items-center gap-x-20 px-100 mb-10">
            {children[index]}
            {index + 1 != children.length ? children[index + 1] : <></>}
          </div>
        </SwiperSlide>
        : <></>
      ))}

    </Swiper>
  );
};