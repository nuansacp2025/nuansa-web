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

export default function Carousel({ children }: CarouselProps) {
  const swiper = useSwiper();

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
        index % 2 == 0
        ? <SwiperSlide key={index}>
          <div className="flex flex-row justify-center items-center gap-x-20 px-100">
            {children[index]}
            {index + 1 != children.length ? children[index + 1] : <></>}
          </div>
        </SwiperSlide>
        : <></>
      ))}

    </Swiper>
  );
};