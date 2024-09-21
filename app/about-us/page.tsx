import Image from 'next/image';
import VideoFrame from '../components/about-us/video-frame';
import Carousel from '../components/about-us/carousel';
import FunFact from '../components/about-us/funfact';
export default function AboutUs() {
  return (
    <div className="pt-12">
      {/* What is Nuansa section */}
      <section className="text-center py-12 px-10">
        <h1 className="text-4xl font-bold mb-4">What is &quot;Nuansa&quot;</h1>
        <p className="text-lg mb-8">
          An annual arts and cultural event by a group of Indonesian students in NUS.
          It aims to promote the rich and diverse cultures of Indonesia.
        </p>
      </section>

      <section className="text-center py-12 px-20 bg-orange-50 flex flex-row items-end">
        <h2 className="text-3xl mb-8 text-lime-900">Fun Fact</h2>
        <div className="flex-grow px-20">
          <FunFact>
            <h2 className="text-3xl mb-8 text-lime-900">Fun Fact</h2>
            <h2 className="text-3xl mb-8 text-lime-900">Fun Fict</h2>
          </FunFact>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div className="text-left px-10">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">
            To enrich society by creating and sharing diverse cultural expressions that inspire, challenge, and connect people across different backgrounds.
          </p>
        </div>
        <div className="text-right px-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            To produce and promote cultural works that reflect, preserve, and innovate cultural heritage, fostering greater understanding.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-12 text-center bg-lime-950 text-white pb-10">
        <h2 className="text-3xl font-bold mb-5">Memorable Clips</h2>
        <div className="flex flex-row items center justify-center gap-x-20">
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
        <div className="flex items-center justify-center pb-10 gap-x-20">
          <div className="flex items-center space-x-8">
            <div className="grid md:grid-cols-3 items-center">
              <div className="bg-red-900 text-white p-10 rounded-md w-48 h-44 flex justify-center items-center mx-2 my-2">Networking</div>
              <div className="bg-yellow-500 text-white p-10 rounded-md-2 w-48 h-44 flex justify-center items-center mx-2 my-2">Networking</div>
              <div className="bg-purple-900 text-white p-10 rounded-md w-48 h-44 flex justify-center items-center mx-2 my-2">Networking</div>
            </div>

            <div>
              <h1 className="text-4xl mb-4 text-center text-lime-950">Why Join Us</h1>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pb-10 gap-x-20">
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
