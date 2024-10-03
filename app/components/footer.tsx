import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex items-center bg-[#1a7f7d] justify-start px-8 py-4 lg:justify-between">
      <div className="flex items-center gap-x-4">
        <Link href="https://www.facebook.com/nuansa.culturalproductions/">
          <Image src="/images/logo/facebook.svg" width={20} height={20} alt="Facebook" />
        </Link>
        <Link href="https://www.instagram.com/nuansacp/">
          <Image src="/images/logo/instagram.svg" width={20} height={20} alt="Instagram" />
        </Link>
        <Link href="https://www.youtube.com/@NUANSAcp">
          <Image src="/images/logo/youtube.svg" width={20} height={20} alt="Youtube" />
        </Link>
      </div>
      <div className="items-center gap-x-12 hidden lg:flex">
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
  );
};

export default Footer;