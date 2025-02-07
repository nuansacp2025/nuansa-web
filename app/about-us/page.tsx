"use client";

import Image from 'next/image';
import VideoFrame from '../components/about-us/video-frame';
import Carousel from '../components/about-us/carousel';
import FunFact from '../components/about-us/funfact';
import ModalOverlay from '../components/modal-overlay';
import { useState } from 'react';
import { FadeInDiv } from '../components/animations';
export default function AboutUs() {
  //To Test the modal Overlay Uncomment below
  const [isModalOpen, setIsModalOpen] = useState(true);
  const onClose = () => setIsModalOpen(false);



  return (
    <div>
      {
        /*
        To test the modal overlay, uncomment below
        
        
        isModalOpen && 
        <ModalOverlay onClose={onClose}>
          <div className="text-xl mb-8 text-gray-900">
            headddddddddasdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffadfasdhe
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </ModalOverlay>
        */
      }
      {/* What is Nuansa section */}
      <section className="text-center py-24 px-4 md:px-10 bg-orange-a">
        <FadeInDiv>
          <h1 className="text-4xl font-bold mb-4">What is &quot;Nuansa&quot;</h1>
          <p className="text-lg">
            An annual arts and cultural event by a group of Indonesian students in NUS.
            It aims to promote the rich and diverse cultures of Indonesia.
          </p>
        </FadeInDiv>
      </section>

      {/* Fun Fact Section */}
      <section className="text-center py-12 px-4 md:px-20 w-full flex flex-col md:flex-row items-center justify-center">
        <FadeInDiv>
          <h2 className="text-3xl mb-8 text-green-a">Fun Fact</h2>
        </FadeInDiv>
        <FadeInDiv className="flex-grow px-4 md:px-20">
          <FunFact>
            <h2 className="text-3xl mb-8 text-green-a">Fun Fact</h2>
            <h2 className="text-3xl mb-8 text-green-a">Fun Fict</h2>
          </FunFact>
        </FadeInDiv>
      </section>

      {/* Vision and Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-10 text-green-a">
        <FadeInDiv className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            To enrich society by creating and sharing diverse cultural expressions that inspire, challenge, and connect people across different backgrounds.
          </p>
        </FadeInDiv>
        <FadeInDiv className="text-left md:text-right">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            To produce and promote cultural works that reflect, preserve, and innovate cultural heritage, fostering greater understanding.
          </p>
        </FadeInDiv>
      </section>

       {/* Memorable Clips Section */}
       <section className="flex flex-col items-center justify-center py-12 text-center bg-green-a text-white pb-10">
        <FadeInDiv>
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
        </FadeInDiv>
      </section>
      <section className="text-center py-12">
        {/* Flex container for Why Join Us section */}
        <FadeInDiv>
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
              <h1 className="text-4xl mb-4 text-center text-green-a">Why Join Us</h1>
            </div>
          </div>
        </FadeInDiv>

        {/* Video section */}
        <FadeInDiv>
          <div className="flex flex-col md:flex-row items-center justify-center pb-10 gap-8 md:gap-20">
            <h1 className="text-4xl mb-4 text-green-a">View Our Latest Show<span className="hidden md:inline">{">>"}</span>
            </h1>
            <VideoFrame
              videoTitle="RickRoll"
              videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ?si=tSGI-Y2bIM5CKrxI"
            />
          </div>
        </FadeInDiv>
      </section>
    </div>
  );
}
