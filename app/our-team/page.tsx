import Image from "next/image";
import TeamCard from "../components/our-team/team-card";

export default function Page() {
  return (
    <main className="min-h-screen bg-teal-950">
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-orange-200">
          Structure
        </h2>
        <Image src={"/images/our-team/structure.png"} alt="Structure" width={800} height={0} />
      </section>
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <div className="rounded-md bg-orange-200">
          <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold bg-teal-950">
          Management Profile
          </h2>
          <Image src={"/images/our-team/structure.png"} alt="Management Profile" width={800} height={0}/>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-orange-200">
          Find Out More
        </h2>
        <div className="w-full flex flex-col gap-8 md:flex-row">
          <TeamCard imageSrc="/images/our-team/find-out-more.png" name="Arts" />
          <TeamCard imageSrc="/images/our-team/find-out-more.png" name="Production" />
          <TeamCard imageSrc="/images/our-team/find-out-more.png" name="External Affairs" />
        </div>
      </section>
    </main>
  )
}
