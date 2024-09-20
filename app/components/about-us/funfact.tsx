'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useSwiper } from 'swiper/react';


import { ReactNode, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface CarouselProps {
  children: ReactNode[];
}

export default function FunFact({ children }: CarouselProps) {
  const swiper = useSwiper();
  
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={0}
      slidesPerView="auto"
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {children.map((child, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-row justify-center items-center gap-x-20 px-100">
            {child}
          </div>
        </SwiperSlide>
      ))}
      <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>

    </Swiper>
  );
};