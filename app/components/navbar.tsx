"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
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
        <Link href={href} className="p-4 flex-1">
          <span className="text-sm font-semibold leading-6 text-white">
            {label}
          </span>
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
    <Link href={href}>
      <div className="
        flex items-center rounded-md p-2
        text-sm font-normal leading-6 text-white
        md:font-semibold md:text-gray-900 md:hover:bg-gray-50
        ">
        {children}
      </div>
    </Link>
  );
}

const Navbar = () => {
  const [mobileMenuHidden, setMobileMenuHidden] = React.useState(true);

  return (
    <nav className="flex sticky top-0 h-[72] shadow-lg items-center justify-between bg-green-a p-2 md:p-0 z-10">
      <div>
        <span className="md:hidden ml-4 text-2xl text-white font-bold leading-8">
          NUANSA
        </span>
      </div>
      <div className={`
        ${mobileMenuHidden ? "hidden" : "flex"}
        absolute h-max inset-0 top-full z-10 md:relative md:flex md:top-0 
        flex-col p-2 md:flex-row md:items-center md:justify-center md:p-0 md:gap-6 lg:gap-12
        bg-green-b md:bg-inherit
        `}>
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
      <div>
        <div
          className="md:hidden p-4 cursor-pointer text-white text-xl leading-6"
          onClick={() => {setMobileMenuHidden(!mobileMenuHidden)}}
          >
          {mobileMenuHidden ? <MdMenu /> : <MdClose />}
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;