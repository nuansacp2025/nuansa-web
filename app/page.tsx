'use client'

import Image from "next/image";
import Link from "next/link";
import Timer from "./components/timer";

import { FadeInDiv } from "./components/animations";
import { ScrollableBackground } from "./components/background";
import SponsorGrid from "./components/sponsor-grid";
import { useEffect, useState } from "react";


export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState<ImageConfig>();
  const [images, setImages] = useState<Map<string, ImageConfig>>(new Map<string, ImageConfig>());
  const [launchDate, setLaunchDate] = useState<string>('');
  const [synopsis, setSynopsis] = useState<string>('');
  const [characters, setCharacters] = useState<CastMember[]>([]);
  const [sponsors, setSponsors] = useState<SponsorTier[]>([]);

  useEffect(() => {
    fetch('/config.json')
      .then((response) => {
        if(!response.ok) {
          throw new Error('Failed to fetch config.json');
        }
        return response.json()
      })
      .then((configData) => {
        const backgroundImage = configData?.app?.pages?.home?.background;
        const images = configData?.app?.pages?.home?.images;
        const launchDate = configData?.app?.pages?.home?.['launch-date'];
        const synopsis = configData?.app?.pages?.home?.synopsis;
        const characters = configData?.app?.pages?.home?.characters;
        const sponsors = configData?.app?.pages?.home?.sponsors;
        if (backgroundImage) {
          setBackgroundImage(backgroundImage);
        }
        if (images) {
          const imagesMap = new Map<string, ImageConfig>(Object.entries(images));
          setImages(imagesMap);
        }
        if(launchDate) {
          setLaunchDate(launchDate);
        }
        if(synopsis) {
          setSynopsis(synopsis);
        }
        if(characters) {
          setCharacters(characters);
        }
        if (sponsors) {
          setSponsors(sponsors);
        }
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 text-white">
      <ScrollableBackground src={backgroundImage?.src || ''} height={1920} width={1080} />
      <FadeInDiv className="flex flex-col items-center justify-center h-screen w-full">
        <Image src={images.get('crying-stone-logo')?.src || ''} alt={images.get('crying-stone-logo')?.alt || ''} width={0} height={0} sizes="100vw" style={{ width: '32rem', height: 'auto', marginTop: '-160px' }}/>
        <Timer launchDate={launchDate} />
      </FadeInDiv>
      <FadeInDiv className="flex flex-col items-center justify-center w-full py-6 px-8 sm:py-12 sm:px-16 md:py-20 md:px-32 bg-transparent">
        <h2 className="text-3xl md:text-4xl pb-4 sm:pb-6 md:pb-10 font-bold text-center text-orange-a">
          Synopsis
        </h2>
        <p className="text-center text-base sm:text-lg md:text-xl">
          {synopsis}
        </p>
      </FadeInDiv>
      <FadeInDiv className="w-full py-4 px-8 sm:py-12 sm:px-20 md:py-16 md:px-30 bg-transparent">
        <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-orange-a">
          Characters
        </h2>
        <div className="flex justify-between">
          {characters.map((character, index) => (
            <div key={index} className="flex flex-col w-24 sm:w-32 md:w-40 lg:w-64">
              <Image 
                src={character.image.src || '/images/characters/character_template.png'} 
                alt={character.image.alt || 'character'} 
                width={0} 
                height={0} 
                sizes="100vw" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <p className="text-center text-xs md:text-base p-1 md:p-4">
                {character.description || 'No description available.'}
              </p>
            </div>
        ))}
        </div>
      </FadeInDiv>
      <SponsorGrid sponsors={sponsors} />
      <FadeInDiv className="w-full py-4 px-8 sm:py-12 sm:px-20 md:py-16 md:px-30 bg-transparent">
        <h3 className="text-center text-xl md:text-2xl p-4 md:p-6">
          Have a question or need assistance? Interested in partnering with NUANSA?
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <Link href="/contact-us#general-form">
            <button className="block w-64 rounded-md bg-green-b px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-b/75">
              General Inquiry
            </button>
          </Link>
          <Link href="/contact-us#business-form">
            <button className="block w-64 rounded-md bg-green-b px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-green-b/75">
              Business Inquiry
            </button>
          </Link>
        </div>
      </FadeInDiv>
      <footer className="w-full py-4 text-center text-white">
        <p>© 2025 NUANSA. All rights reserved.</p>
      </footer>
    </main>
  );
}
