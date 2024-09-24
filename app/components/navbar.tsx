"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';

const NavbarItem = ({ href, label, children }: { href: string, label: string, children?: ReactNode }) => {
  const [dropdownHidden, setDropdownHidden] = React.useState(true);
  const [dropdownOnHover, setDropdownOnHover] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={children ? () => setTimeout(() => setDropdownHidden(false), 300) : undefined}
      onMouseLeave={children ? () => setTimeout(() => setDropdownHidden(true), 300) : undefined}
    >
      <Link href={href} className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
        {label}
      </Link>
      {children && (
        <div
          className={`absolute ${(dropdownHidden && !dropdownOnHover) ? "hidden" : "flex"} flex-col p-2 items-stretch -left-4 top-full z-10 mt-4 w-screen max-w-xs overflow-hidden rounded-lg bg-white shadow-md`}
          onMouseEnter={() => setDropdownOnHover(true)}
          onMouseLeave={() => setDropdownOnHover(false)}
        >
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
  const [aboutUsHidden, setAboutUsHidden] = React.useState(true);
  const [aboutUsOnHover, setAboutUsOnHover] = React.useState(false);

  return (
    <nav className="flex items-center justify-center p-6 lg:px-8 ">
      <div
        className={`fixed inset-0 z-10 bg-gray-800 bg-opacity-75 transition-opacity lg:relative lg:flex lg:gap-x-12 lg:bg-transparent opacity-100`}
      >
        <div className="flex flex-col lg:flex-row lg:gap-x-12 lg:items-center lg:justify-center p-4 lg:p-0">
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