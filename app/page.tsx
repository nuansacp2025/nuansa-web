'use client'

import Image from "next/image";
import Timer from "./components/timer";
import { FadeInDiv } from "./components/animations";
import { ScrollableBackground } from "./components/background";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-0 text-white">
        <ScrollableBackground src={'/images/home/background.png'} height={1920} />
        <FadeInDiv className="flex flex-col items-center justify-center h-screen w-full">
          <Image src={'/images/home/the-crying-stone.png'} alt={'The Crying Stone'} width={0} height={0} sizes="100vw" style={{ width: '24rem', height: 'auto' }}/>
          <Timer launchDate="09-07-2025" />
        </FadeInDiv>
        <FadeInDiv className="flex flex-col items-center justify-center w-full py-6 px-8 sm:py-12 sm:px-16 md:py-20 md:px-32 bg-transparent">
          <h2 className="text-3xl md:text-4xl pb-4 sm:pb-6 md:pb-10 font-bold text-center text-orange-a">
            Synopsis
          </h2>
          <p className="text-center text-base sm:text-lg md:text-xl">
            The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
            As punishment for her mistreatment of her mother, a prayer by the widow causes the daughter to be struck by lightning and turned into a crying stone statue. 
            The story teaches the importance of honoring one&apos;s parents.
          </p>
        </FadeInDiv>
        <FadeInDiv className="w-full py-4 px-8 sm:py-12 sm:px-20 md:py-16 md:px-30 bg-transparent">
          <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-orange-a">
            Characters
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col w-24 sm:w-32 md:w-40 lg:w-64">
              <Image src={'/images/characters/character_template.png'} alt={'character'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
              <p className="text-center text-xs md:text-base p-1 md:p-4">
                The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
              </p>
            </div>
            <div className="flex flex-col w-24 sm:w-32 md:w-40 lg:w-64">
              <Image src={'/images/characters/character_template.png'} alt={'character'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
              <p className="text-center text-xs md:text-base p-1 md:p-4">
                The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
              </p>
            </div>
            <div className="flex flex-col w-24 sm:w-32 md:w-40 lg:w-64">
              <Image src={'/images/characters/character_template.png'} alt={'character'} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', borderRadius: '8px' }}/>
              <p className="text-center text-xs md:text-base p-1 md:p-4">
                The daughter is very lazy and refuses to help her sick mother, instead treating her cruelly. 
              </p>
            </div>
          </div>
        </FadeInDiv>
        <footer className="w-full py-4 text-center text-white">
          <p>© 2025 NUANSA. All rights reserved.</p>
        </footer>
      </main>
  );
}