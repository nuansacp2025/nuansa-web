"use client";

import React, { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { MdArrowDropDown, MdArrowDropUp, MdMenu, MdClose } from 'react-icons/md';

const NavbarItem = ({ href, label, children }: { href: string, label: string, children?: ReactNode }) => {
  const isHovered = React.useRef(false);
  const [dropdownHidden, setDropdownHidden] = React.useState(true);  // state for desktop layout (using hover)
  const [mobileDropdownHidden, setMobileDropdownHidden] = React.useState(true);  // state for mobile layout (using click)

  return (
    <div
      className="relative flex flex-col"
      onMouseEnter={children ? () => {
        isHovered.current = true;
        setTimeout(() => {setDropdownHidden(!isHovered.current)}, 250);
      } : undefined}
      onMouseLeave={children ? () => {
        isHovered.current = false
        setTimeout(() => {setDropdownHidden(!isHovered.current)}, 250);
      } : undefined}
    >
      <div className="flex items-center self-stretch">
        <Link href={href} className="group transition p-4 flex-1">
          <span className={`
            text-sm font-semibold leading-6 md:text-white
            ${mobileDropdownHidden ? "text-white" : "text-orange-a"}
            md:group-hover:text-orange-a duration-300
            `}>
            {label}
          </span>
          <span className="hidden md:block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-orange-a" />
        </Link>
        {children && (
          <div
            className="p-4 cursor-pointer text-white text-xl leading-6 md:hidden"
            onClick={() => {setMobileDropdownHidden(!mobileDropdownHidden)}}
            >
            {mobileDropdownHidden ? <MdArrowDropDown /> : <MdArrowDropUp />}
          </div>
        )}
      </div>
      
      {children && (
        <div className={`
          ${mobileDropdownHidden ? "hidden" : "flex"}
          ${dropdownHidden ? "md:hidden" : "md:flex"}
          flex-col items-stretch w-full pl-4 md:p-2
          md:absolute md:w-screen md:max-w-xs md:-left-1 md:z-10 md:-mt-2 md:top-full
          md:rounded-lg md:bg-white md:shadow-md
          `}>
          {children}
        </div>
      )}
    </div>
  );
};

const NavbarDropdownItem = ({ href, children }: { href: string, children: ReactNode }) => {
  return (
    <Link href={href} className="group transition">
      <div className={`
        flex items-center rounded-md p-2
        text-sm font-normal leading-6 text-white
        md:font-semibold md:text-gray-900
        md:group-hover:bg-gray-50 md:group-hover:text-orange-a transition-all duration-300
        `}>
        {children}
      </div>
    </Link>
  );
}

const Navbar = () => {
  const [mobileMenuHidden, setMobileMenuHidden] = React.useState(true);

  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [navbarHidden, setNavbarHidden] = React.useState("visible");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() ?? 0);
    if (pathname === "/") {
      setNavbarHidden(current > window.innerHeight ? "visible" : "hidden");
    } else {
      setNavbarHidden(diff > 0 && current > 100 ? "hidden" : "visible");
    }
  })
  useEffect(() => {
    setNavbarHidden(pathname === "/" ? "hidden" : "visible");
    setMobileMenuHidden(true);
  }, [pathname]);

  return (
    <motion.nav
      className="flex sticky top-0 h-[72px] shadow-lg items-center justify-between bg-green-a p-2 md:p-0 z-10"
      animate={navbarHidden}
      variants={{visible: { y: 0 }, hidden: { y: "-100%" }}}
      transition={{ duration: 0.2 }}
    >
      <div>
        <span className="md:hidden ml-4 text-2xl text-white font-bold leading-8">
          NUANSA
        </span>
      </div>
      <div className={`
        ${mobileMenuHidden ? "hidden" : "block"}
        absolute top-full left-0 right-0 h-screen bg-black bg-opacity-25 z-10
        md:block md:top-0 md:w-full md:h-full md:bg-inherit md:bg-opacity-0 p-2
        `}>
        <div className="
          flex flex-col md:flex-row md:items-center md:justify-center md:p-0 md:gap-6 lg:gap-12
          bg-green-b md:bg-inherit rounded-md md:rounded-none shadow-2xl md:shadow-none">
          <NavbarItem href="/" label="Home" />
          <NavbarItem href="/about-us" label="About Us">
            <NavbarDropdownItem href="/about-us/history">History</NavbarDropdownItem>
            <NavbarDropdownItem href="/about-us/keong-mas-2024">Keong Mas (NUANSA 2024)</NavbarDropdownItem>
          </NavbarItem>
          <NavbarItem href="/our-team" label="Our Team">
            <NavbarDropdownItem href="/our-team/arts">Arts</NavbarDropdownItem>
            <NavbarDropdownItem href="/our-team/production">Production</NavbarDropdownItem>
            <NavbarDropdownItem href="/our-team/external-affairs">External Affairs</NavbarDropdownItem>
          </NavbarItem>
          <NavbarItem href="/contact-us" label="Contact Us" />
        </div>
      </div>
      <div>
        <div
          className="md:hidden p-4 cursor-pointer text-white text-xl leading-6"
          onClick={() => {setMobileMenuHidden(!mobileMenuHidden)}}
          >
          {mobileMenuHidden ? <MdMenu /> : <MdClose />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;