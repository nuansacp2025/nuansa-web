import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center p-6 lg:px-8 ">
      <div
        className={`fixed inset-0 z-10 bg-gray-800 bg-opacity-75 transition-opacity lg:relative lg:flex lg:gap-x-12 lg:bg-transparent opacity-100`}
      >
        <div className="flex flex-col lg:flex-row lg:gap-x-12 lg:items-center lg:justify-center p-4 lg:p-0">
          <Link href="/" className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
            Home
          </Link>
          <Link href="/about-us" className="text-sm font-semibold leading-6 text-white lg:text-gray-0">
            About Us
          </Link>
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