"use client"

import { FadeInDiv } from "@/app/components/animations";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <FadeInDiv>
          <h2 className="text-4xl md:text-5xl pb-6 md:pb-8 font-bold">
            NUANSA 2024
          </h2>
        </FadeInDiv>
        <FadeInDiv>
          <h3 className="text-3xl md:text-4xl font-semibold">
            Keong Mas: Daha to Surabaya
          </h3>
        </FadeInDiv>
      </section>
    </main>
  );
}
