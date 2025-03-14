"use client";
import { useEffect, useMemo, useState } from 'react';
import { FadeInDiv } from "@/app/components/animations";
import { ScrollableBackground } from "@/app/components/background";
import Gallery from "@/app/components/about-us/keong-mas-2024/gallery";
import MainCast from "@/app/components/about-us/keong-mas-2024/main-casts";

export default function AboutUsKeongMasPage() {
  const [castData, setCastData] = useState<CastMember[]>([]);
  const [galleryImages, setGalleryImages] = useState<ImageConfig[][]>([]);

  useEffect(() => {
    fetch('/config.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch config.json');
        }
        return response.json();
      })
      .then((configData) => {
        const castData = configData?.app?.pages?.['about-us']?.['keong-mas-2024']?.['main-casts'];
        if (castData) {
          setCastData(castData);
        }

        const galleryData = configData?.app?.pages?.['about-us']?.['keong-mas-2024']?.gallery;
        if (galleryData) {
          setGalleryImages(galleryData);
        }
      });
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollableBackground src='/images/about-us/background.png' height={1920} width={1080} />
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <FadeInDiv>
          <h2 className="text-4xl md:text-5xl pb-6 md:pb-8 font-bold">
            NUANSA 2024
          </h2>
        </FadeInDiv>
      </section>

      {/* Main Casts Section */}
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <FadeInDiv>
          <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-green-a">
            Main Casts
          </h2>
        </FadeInDiv>
        <FadeInDiv className="min-h-screen flex flex-col items-center">
          <MainCast cast={castData} />
        </FadeInDiv>
      </section>

      {/* Gallery Section */}
      <section className="w-full flex flex-col items-center py-12 px-4 md:py-20 md:px-16">
        <FadeInDiv>
          <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-green-a">
            Gallery
          </h2>
        </FadeInDiv>
        
        <FadeInDiv className="w-full max-w-6xl">
          <Gallery images={galleryImages} speed={2} />
        </FadeInDiv>
      </section>
    </main>
  );
}
