import MemberCard from "@/app/components/our-team/member-card";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-orange-50">
      <section className="relative w-full py-12 px-16 overflow-hidden md:py-20 md:px-0">
        <Image src={"/images/our-team/what-we-do.png"} alt="What We Do" fill={true} objectFit="cover" />
        <div className="relative w-full flex flex-col items-center md:flex-row">
          <div className="flex flex-1 items-center justify-center mb-12 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ARTS
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-4 md:items-start md:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-200">
              What We Do
            </h2>
            <p className="text-lg md:text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      
      <section className="w-full flex flex-col items-center py-12 px-16 md:py-20 md:px-32">
        <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 font-bold text-lime-950">
          Divisions and Tasks
        </h2>
        <h3 className="text-2xl md:text-3xl pb-6 md:pb-8 font-semibold text-lime-950">
          Members
        </h3>
        <div className="grid gap-8 place-content-center place-items-stretch grid-cols-[minmax(0,_350px)] md:grid-cols-[repeat(2,_minmax(0,_350px))] lg:grid-cols-[repeat(3,_minmax(0,_350px))] md:gap-16">
          <MemberCard imageSrc="/images/our-team/member-placeholder.png" name="Member Name 1" role="Role 1" />
          <MemberCard imageSrc="/images/our-team/member-placeholder.png" name="Member Name 2" role="Role 2" />
          <MemberCard imageSrc="/images/our-team/member-placeholder.png" name="Member Name 3" role="Role 3" />
          <MemberCard imageSrc="/images/our-team/member-placeholder.png" name="Member Name 4" role="Role 4" />
          <MemberCard imageSrc="/images/our-team/member-placeholder.png" name="Member Name 5" role="Role 5" />
        </div>
      </section>
    </main>
  )
}