"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full z-50 px-4">
      <div className="flex justify-between items-center bg-transparent text-gray-600">
        <div className="flex items-center">
        <Image src="/images/W&E_Logo.svg" alt="Icon" width={240} height={240} className='pr-[50px] mt-2 block lg:hidden ' />
          
          <div className=" hidden lg:flex">
            <DesktopNav />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

        
        </div>
      </div>
      {isOpen && <MobileNav />}
    </div>
  );
};

const DesktopNav = () => (
  <header className="flex justify-between w-[98%] items-center py-8 px-[80px] xl:absolute z-20 mb-20 md:mb-1 ">
            <div className="flex">
                <Link href="/">
                    <Image src="/images/W&E_Logo.svg" alt="Icon" width={240} height={240} className='pr-[50px] mt-2' />
                </Link>
                <nav className="flex gap-[51px] ml-4 font-halyard font-bold">
                    <Link href="/life-insurance"><p className="text-[#00262B] hover:text-blue-500">Life Insurance</p></Link>
                    <Link href="/stories"><p className="text-[#00262B] hover:text-blue-500">Stories</p></Link>
                    <Link href="/campaigns"><p className="text-[#00262B]  hover:text-blue-500">Campaigns</p></Link>
                    <Link href="/about-us"><p className="text-[#00262B]  hover:text-blue-500">About Us</p></Link>
                </nav>
            </div>
            <div className="flex gap-3 font-halyard  mb-20  ">
                <Link href="/sign-in"><p className="px-4 py-2 font-medium text-white">Sign In</p></Link>
                <Link href="/get-started"><p className="px-4 py-2 bg-[#FCFF7F] text-black rounded-lg hover:bg-green-700 font-semibold">Get Started</p></Link>
            </div>
        </header>
);

const MobileNav = () => (
  <div className="flex flex-col items-center bg-white p-4 absolute inset-x-0 top-[60px] shadow-md z-50">
    {NAV_ITEMS.map((navItem) => (
      <Link key={navItem.label} href={navItem.href ?? "#"} className="py-2">
        {navItem.label}
      </Link>
    ))}
  </div>
);

const DropdownMenu = () => (
  <div className="absolute bg-white shadow-md rounded px-4 py-2 mt-2">
    <Link
      href="/settings"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      Settings
    </Link>
    <Link
      href="/profile"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      Profile
    </Link>
  </div>
);

const NAV_ITEMS = [
  { label: "Life Insurance", href: "/" },
  { label: "Stories", href: "/" },
  { label: "Campaigns", href: "/" },
  { label: "About Us", href: "/" },
];

export default Header;
