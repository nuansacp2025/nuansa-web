"use client"

import GroupCard from "@/app/components/our-team/group-card";
import Image from "next/image";
import Link from "next/link";
import { FadeInDiv } from "@/app/components/animations";
import RegularButton from "@/app/components/button";

export default function Page() {
  const team = [
    {
      team: "Sound & Lighting",
      src: "/images/our-team/production/SnL.JPG"
    },
    {
      team: "Stage Management",
      src: "/images/our-team/production/SM.JPG"
    },
    {
      team: "Logistics & Wardrobe",
      src: "/images/our-team/production/LnW.JPG"
    },
    {
      team: "Wardrobe & Makeup",
      src: "/images/our-team/production/WnM.jpg"
    },
    {
      team: "Sets & Props",
      src: "/images/our-team/production/SnP.JPG"
    }
  ]
  return (
    <main className="min-h-screen">
      <section className="relative w-full py-12 px-16 overflow-hidden md:py-20 md:px-0">
        <Image src={"/images/our-team/what-we-do.png"} alt="What We Do" fill={true} objectFit="cover" />
        <FadeInDiv className="relative w-full flex flex-col items-center md:flex-row">
          <div className="flex flex-1 items-center justify-center mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              PRODUCTION
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 md:items-start md:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-a">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </FadeInDiv>
      </section>
      
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <FadeInDiv className="w-full py-4 px-8 sm:py-12 sm:px-20 md:py-16 md:px-30 bg-transparent">
          <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-green-a text-center">
            Divisions
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12">
            {
              team.map(division => {
                return (
                  <Link key={division.team} href={`#${division.team}`}>
                    <RegularButton size="normal" variant="green" text={division.team} />
                  </Link>
                );
              })
            }
          </div>
        </FadeInDiv>
        {
          team.map(division => {
            return (
              <FadeInDiv key={division.team} id={division.team} className="w-full flex flex-col items-center justify-center mb-5">
                <h3 className="text-2xl md:text-3xl pb-6 md:pb-8 font-semibold text-green-a">
                  {division.team}
                </h3>
                <GroupCard imageSrc={division.src} name="Production Team"/>
              </FadeInDiv>
            );
          })
        }      
        </section>
    </main>
  )
}