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
      <section className="text-center py-24 px-4 md:px-10">
        <FadeInDiv>
          <h1 className="text-4xl font-bold mb-4">What is &quot;Nuansa&quot;</h1>
          <p className="text-lg">
            An annual arts and cultural event by a group of Indonesian students in NUS.
            <br/>
            It aims to promote the rich and diverse cultures of Indonesia.
          </p>
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
              <VideoFrame
                videoTitle="NUANSA 2024"
                videoSrc="https://www.youtube.com/embed/vxw_tFYr1mQ?si=9JU4IXp-JoKe0yrh"
              />
              <VideoFrame
                videoTitle="NUANSA 2024"
                videoSrc="https://www.youtube.com/embed/vxw_tFYr1mQ?si=9JU4IXp-JoKe0yrh"
              />
              <VideoFrame
                videoTitle="NUANSA 2024"
                videoSrc="https://www.youtube.com/embed/vxw_tFYr1mQ?si=9JU4IXp-JoKe0yrh"
              />
            </Carousel>
          </div>
        </FadeInDiv>
      </section>
      <section className="text-center py-12 px-4 md:px-10">
        <FadeInDiv>
          <h2 className="text-4xl mb-10 text-green-a">Why Join Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {/* Member Card */}
            {[
              {
                name: "Evan Wijaya",
                title: "President",
                company: "Nuansa",
                imgSrc: "/images/characters/black_widow.png", // Save the uploaded image to /public/images
                quote: "Joining Nuansa connected me with amazing people and creativity!"
              },
              {
                name: "Evan Wijaya",
                title: "President",
                company: "Nuansa",
                imgSrc: "/images/characters/black_widow.png",
                quote: "I found a community that values culture and collaboration."
              },
              {
                name: "Evan Wijaya",
                title: "President",
                company: "Nuansa",
                imgSrc: "/images/characters/black_widow.png",
                quote: "Creativity meets purpose here. It’s magical!"
              },
              {
                name: "Evan Wijaya",
                title: "President",
                company: "Nuansa",
                imgSrc: "/images/characters/black_widow.png",
                quote: "An inspiring platform for growth and friendship."
              }
            ].map((member, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white px-4 text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm italic">{member.title}, {member.company}</p>
                  <p className="mt-2 text-sm">{member.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInDiv>
      </section>
    </div>
  );
}
