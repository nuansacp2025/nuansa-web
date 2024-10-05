"use client";

import Image from 'next/image';
import VideoFrame from '../components/about-us/video-frame';
import Carousel from '../components/about-us/carousel';
import FunFact from '../components/about-us/funfact';
import ModalOverlay from '../components/modal-overlay';
import { useState } from 'react';
export default function AboutUs() {
  //To Test the modal Overlay Uncomment below
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onClose = () => setIsModalOpen(false);



  return (
    <div className="pt-12">
      {
        /*
        To test the modal overlay, uncomment below
        */
        
        isModalOpen && 
        <ModalOverlay onClose={onClose}>
          <div className="text-3xl mb-8 text-lime-900">headddddddddasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffadfasdhe</div>
        </ModalOverlay>
        
      }
      {/* What is Nuansa section */}
      <section className="text-center py-12 px-4 md:px-10">
        <h1 className="text-4xl font-bold mb-4">What is &quot;Nuansa&quot;</h1>
        <p className="text-lg mb-8">
          An annual arts and cultural event by a group of Indonesian students in NUS.
          It aims to promote the rich and diverse cultures of Indonesia.
        </p>
      </section>

      {/* Fun Fact Section */}
      <section className="text-center py-12 px-4 md:px-20 bg-orange-50 flex flex-col md:flex-row items-center justify-center">
        <h2 className="text-3xl mb-8 text-lime-900">Fun Fact</h2>
        <div className="flex-grow px-4 md:px-20">
          <FunFact>
            <h2 className="text-3xl mb-8 text-lime-900">Fun Fact</h2>
            <h2 className="text-3xl mb-8 text-lime-900">Fun Fict</h2>
          </FunFact>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-orange-50 gap-8 py-12 px-4 md:px-10 text-lime-900">
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            To enrich society by creating and sharing diverse cultural expressions that inspire, challenge, and connect people across different backgrounds.
          </p>
        </div>
        <div className="text-left md:text-right">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            To produce and promote cultural works that reflect, preserve, and innovate cultural heritage, fostering greater understanding.
          </p>
        </div>
      </section>

       {/* Memorable Clips Section */}
       <section className="flex flex-col items-center justify-center py-12 text-center bg-lime-950 text-white pb-10">
        <h2 className="text-3xl font-bold mb-5">Memorable Clips</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-20">
          <Carousel>
            <img 
              src="https://media.licdn.com/dms/image/v2/D5622AQEyPzD7WAMiyA/feedshare-shrink_800/feedshare-shrink_800/0/1726034259793?e=2147483647&v=beta&t=yYGRAZoKbJV0xHLg8XkpiB2QF7J_g1hs02U5lFw_ziU" 
              alt="Some Memorable Clips"
              className="max-h-[200px] object-contain"
            />
            <img 
              src="https://media.licdn.com/dms/image/v2/D5622AQEyPzD7WAMiyA/feedshare-shrink_800/feedshare-shrink_800/0/1726034259793?e=2147483647&v=beta&t=yYGRAZoKbJV0xHLg8XkpiB2QF7J_g1hs02U5lFw_ziU" 
              alt="Some Memorable Clips" 
              className="max-h-[200px] object-contain"
            />
            <img 
              src="https://media.licdn.com/dms/image/v2/D5622AQEyPzD7WAMiyA/feedshare-shrink_800/feedshare-shrink_800/0/1726034259793?e=2147483647&v=beta&t=yYGRAZoKbJV0xHLg8XkpiB2QF7J_g1hs02U5lFw_ziU" 
              alt="Some Memorable Clips" 
              className="max-h-[200px] object-contain"
            />
          </Carousel>
        </div>
      </section>
      <section className="text-center py-12 bg-orange-50">
        {/* Flex container for Why Join Us section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center pb-10 gap-8 md:gap-20">
          {/* Grid of Features (Networking, Collaboration, Creativity) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-900 text-white p-10 rounded-md w-48 h-44 flex justify-center items-center mx-2 my-2">
              Networking
            </div>
            <div className="bg-yellow-500 text-white p-10 rounded-md w-48 h-44 flex justify-center items-center mx-2 my-2">
              Networking
            </div>
            <div className="bg-purple-900 text-white p-10 rounded-md w-48 h-44 flex justify-center items-center mx-2 my-2">
              Networking
            </div>
          </div>

          {/* Why Join Us heading */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl mb-4 text-center text-lime-950">Why Join Us</h1>
          </div>
        </div>

        {/* Video section */}
        <div className="flex flex-col md:flex-row items-center justify-center pb-10 gap-8 md:gap-20">
          <h1 className="text-4xl mb-4 text-lime-950">View Our Latest Show {">>"}</h1>
          <VideoFrame
            videoTitle="RickRoll"
            videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tSGI-Y2bIM5CKrxI"
          />
        </div>
      </section>
    </div>
  );
}
