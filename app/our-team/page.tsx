import Image from "next/image";
import TeamCard from "../components/our-team/team-card";

export default function Page() {
  return (
    <main className="min-h-screen bg-green-a">
      <section className="relative w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-orange-a">
          Structure
        </h2>
        <Image src={"/images/our-team/structure.png"} alt="Structure" width={800} height={0} />
      </section>
      <section className="w-full flex justify-center py-12 px-16 md:py-20 md:px-32">
        <div className="w-full flex flex-col items-center -m-8 p-8 md:-m-16 md:p-16 rounded-md bg-orange-a">
          <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-green-a">
          Management Profile
          </h2>
          <Image src={"/images/our-team/structure.png"} alt="Management Profile" width={800} height={0}/>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-orange-a">
          Find Out More
        </h2>
        <div className="relative w-full flex flex-col justify-center gap-8 md:flex-row">
          <TeamCard imageSrc="/images/our-team/find-out-more.png" name="Arts" href="/our-team/arts" />
          <TeamCard imageSrc="/images/our-team/find-out-more.png" name="Production" href="/our-team/production" />
          <TeamCard imageSrc="/images/our-team/find-out-more.png" name="External Affairs" href="/our-team/external-affairs" />
        </div>
      </section>
    </main>
  )
}
