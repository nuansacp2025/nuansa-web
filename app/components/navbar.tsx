"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [aboutUsHidden, setAboutUsHidden] = React.useState(true);
  const [aboutUsOnHover, setAboutUsOnHover] = React.useState(false);

  return (
    <nav className="flex items-center justify-center p-6 lg:px-8 ">
      <div
        className={`fixed inset-0 z-10 bg-gray-800 bg-opacity-75 transition-opacity lg:relative lg:flex lg:gap-x-12 lg:bg-transparent opacity-100`}
      >
        <div className="flex flex-col lg:flex-row lg:gap-x-12 lg:items-center lg:justify-center p-4 lg:p-0">
          <Link href="/" className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
            Home
          </Link>
          <div className="relative" onMouseEnter={() => setTimeout(() => setAboutUsHidden(false), 300)} onMouseLeave={() => setTimeout(() => setAboutUsHidden(true), 300)}>
            <Link href="/about-us" className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
              About Us <span className="inline"></span>
            </Link>
            <div
              className={`absolute ${(aboutUsHidden && !aboutUsOnHover) ? "hidden" : "flex"} flex-col p-2 items-stretch -left-4 top-full z-10 mt-4 w-screen max-w-xs overflow-hidden rounded-lg bg-white shadow-md`}
              onMouseEnter={() => setAboutUsOnHover(true)}
              onMouseLeave={() => setAboutUsOnHover(false)}
            >
              <Link href="/about-us/history">
                <div className="flex items-center rounded-md p-2 text-sm leading-6 hover:bg-gray-50">
                  <span className="text-sm font-semibold leading-6 text-gray-900">History</span>
                </div>
              </Link>
            </div>
          </div>
          <Link href="/our-team" className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
            Our Team
          </Link>
          <Link href="/contact-us" className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;