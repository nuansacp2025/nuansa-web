"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";


interface TeamCardProps {
  imageSrc: string;
  name: string;
  href: string;
}

export default function TeamCard({ imageSrc, name, href }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative md:flex-1 h-[200] rounded-md shadow-md overflow-hidden md:max-w-[300]"
    >
      <Image src={imageSrc} alt={name} fill={true} objectFit="cover" />
      <Link href={href}>
        <motion.div
          whileHover={{ backgroundColor: "rgba(0, 0, 0, 0)", transition: { duration: 0.2 } }}
          className="absolute w-full h-full flex items-center justify-center text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <h3 className="text-xl font-semibold text-center">{name}</h3>
        </motion.div>
      </Link>
    </motion.div>
  );
}