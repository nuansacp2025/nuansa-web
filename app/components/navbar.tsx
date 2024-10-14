"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';

const NavbarItem = ({ href, label, children }: { href: string, label: string, children?: ReactNode }) => {
  const isHovered = React.useRef(false);
  const [dropdownHidden, setDropdownHidden] = React.useState(true);

  return (
    <div
      className="relative flex flex-col p-4 gap-2"
      onMouseEnter={children ? () => {
        isHovered.current = true;
        setTimeout(() => {setDropdownHidden(!isHovered.current)}, 250);
      } : undefined}
      onMouseLeave={children ? () => {
        isHovered.current = false
        setTimeout(() => {setDropdownHidden(!isHovered.current)}, 250);
      } : undefined}
    >
      <Link href={href} className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
        {label}
      </Link>
      {children && (
        <div className={`absolute ${dropdownHidden ? "hidden" : "flex"} flex-col p-2 items-stretch -left-4 top-full z-10 -mt-4 w-screen max-w-xs overflow-hidden rounded-lg bg-white shadow-md`}>
          {children}
        </div>
      )}
    </div>
  );
};

const NavbarDropdownItem = ({ href, children }: { href: string, children: ReactNode }) => {
  return (
    <Link href={href}>
      <div className="flex items-center rounded-md p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50">
        {children}
      </div>
    </Link>
  );
}

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center">
      <div
        className="fixed inset-0 z-10 lg:relative lg:flex lg:gap-x-12 opacity-100"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-4">
          <NavbarItem href="/" label="Home" />
          <NavbarItem href="/about-us" label="About Us">
            <NavbarDropdownItem href="/about-us/history">History</NavbarDropdownItem>
          </NavbarItem>
          <NavbarItem href="/our-team" label="Our Team">
            <NavbarDropdownItem href="/our-team/arts">Arts</NavbarDropdownItem>
            <NavbarDropdownItem href="/our-team/production">Production</NavbarDropdownItem>
            <NavbarDropdownItem href="/our-team/external-affairs">External Affairs</NavbarDropdownItem>
          </NavbarItem>
          <NavbarItem href="/contact-us" label="Contact Us" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;