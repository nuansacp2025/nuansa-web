"use client";
import { useEffect, useState } from "react";
import { FadeInDiv } from "@/app/components/animations";
import Gallery from "@/app/components/about-us/keong-mas-2024/gallery";
import MainCast from "@/app/components/about-us/keong-mas-2024/main-casts";
import Team from "@/app/components/about-us/keong-mas-2024/team";
import { ScrollableBackground } from "@/app/components/background";
import SponsorGrid from "@/app/components/sponsor-grid";

export default function AboutUsKeongMasPage() {
  const [castData, setCastData] = useState<CastMember[]>([]);
  const [teamData, setTeamData] = useState<string>("");
  const [galleryImages, setGalleryImages] = useState<ImageConfig[][]>([]);
  const sponsorImages: string[] = [
    "https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/TBSS-2023/media/libraries/partners/BISA-logo-(2).jpeg",
    "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8287ebaf6cbce55cd8ab1604ca92281f.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCg_JnHe9fpgSVJWYf10gHf0lQmaL_V9wgQ&s",
    "https://imageio.forbes.com/specials-images/dam/imageserve/66eb19d7812fe443fd87e06e/0x0.png?format=png&crop=560,560,x70,y70,safe&height=416&width=416",
    "https://www.moe.gov.sg/-/media/sgis/industries/2022-psa-logo-black-no-tagline.png?h=120&hash=647EE62F9070590C140FDE75F02243AA",
    "https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/TBSS-2023/media/libraries/partners/BISA-logo-(2).jpeg",
    "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8287ebaf6cbce55cd8ab1604ca92281f.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCg_JnHe9fpgSVJWYf10gHf0lQmaL_V9wgQ&s",
    "https://imageio.forbes.com/specials-images/dam/imageserve/66eb19d7812fe443fd87e06e/0x0.png?format=png&crop=560,560,x70,y70,safe&height=416&width=416",
    "https://www.moe.gov.sg/-/media/sgis/industries/2022-psa-logo-black-no-tagline.png?h=120&hash=647EE62F9070590C140FDE75F02243AA",
    "https://cdn.asp.events/CLIENT_Business_DCF4FF16_FAB8_0D4B_807D8955A223D6D8/sites/TBSS-2023/media/libraries/partners/BISA-logo-(2).jpeg",
    "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/8287ebaf6cbce55cd8ab1604ca92281f.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCg_JnHe9fpgSVJWYf10gHf0lQmaL_V9wgQ&s",
    "https://imageio.forbes.com/specials-images/dam/imageserve/66eb19d7812fe443fd87e06e/0x0.png?format=png&crop=560,560,x70,y70,safe&height=416&width=416",
    "https://www.moe.gov.sg/-/media/sgis/industries/2022-psa-logo-black-no-tagline.png?h=120&hash=647EE62F9070590C140FDE75F02243AA",
    
    ];    

  useEffect(() => {
    fetch("/config.json")
      .then((response) => response.json())
      .then((configData) => {
        setCastData(configData?.app?.pages?.["about-us"]?.["keong-mas-2024"]?.["main-casts"] || []);
        setTeamData(configData?.app?.pages?.["about-us"]?.["keong-mas-2024"]?.team || "");
        setGalleryImages(configData?.app?.pages?.["about-us"]?.["keong-mas-2024"]?.gallery || []);
      });
  }, []);

  return (
    <main className="min-h-screen">
      <ScrollableBackground src="/images/about-us/background.png" height={1920} width={1080} />
      
      {/* NUANSA Title */}
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <FadeInDiv>
          <h2 className="text-4xl md:text-5xl pb-6 md:pb-8 font-bold">NUANSA 2024</h2>
          <p className="text-lg md:text-xl text-center">Keong Mas: Daha to Surabaya</p>
        </FadeInDiv>
      </section>

      {/* Main Casts & Team Section */}
      <section className="w-full flex flex-col items-center py-12 px-4 md:py-20 md:px-16">
        <FadeInDiv className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-12">

          {/* Team */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl pb-6 font-bold text-green-a text-center">
              Team
            </h2>
            <Team team={teamData} />
          </div>
          
          {/* Main Casts */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl pb-6 font-bold text-green-a text-center">
              Main Casts
            </h2>
            <MainCast cast={castData} />
          </div>

        </FadeInDiv>
      </section>

      {/* Gallery Section */}
      <section className="w-full flex flex-col items-center py-12 px-4 md:py-20 md:px-16">
        <FadeInDiv>
          <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-green-a">Gallery</h2>
        </FadeInDiv>
        <FadeInDiv className="w-full max-w-6xl">
          <Gallery images={galleryImages} speed={2} />
        </FadeInDiv>
      </section>
      <SponsorGrid images={sponsorImages} />
    </main>
  );
}
