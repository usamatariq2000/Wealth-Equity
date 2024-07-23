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


const LoaderHeader = () => {

  const router = useRouter();

  
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDropdown = () => setDropdownOpen(!isDropdownOpen);

  return (
    <div className="w-full z-50  relative bg-[#F9F1EC]">
      <div className="flex justify-between items-center w-full px-4 bg-transparent text-gray-600 absolute">
        <div className="flex items-center">
          <Image src="/images/W&E_Icon_BLK.png" alt="Icon" width={180} height={180} className='pr-[50px] mt-2 block lg:hidden ' />

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
      <div className="absolute">
      {isOpen && <MobileNav />}
      </div>
      
    </div>
  );
};

const DesktopNav = () => (
  
  <header className="flex justify-between w-[98%] items-center  px-[10px] xl:px-[80px] md:absolute z-20 mb-20 md:mb-1 ">
    <div className="flex items-center">
      <Link href="/">
        <Image src="/images/W&E_Icon_BLK.png" alt="Icon" width={140} height={140} className='pr-[50px] text-black' />
      </Link>
      <nav className="flex md:gap-[30px] xl:gap-[51px] font-halyard font-bold">
        <Link href="/life-insurance" ><p className="text-[#F9F1EC] md:text-[10px] lg:text-[13px] xl:text-[16px] hover:text-[#19575f]">Life Insurance</p></Link>
        <Link href="/stories"><p className="text-[#F9F1EC] md:text-[10px] lg:text-[13px] xl:text-[16px] hover:text-[#19575f]">Stories</p></Link>
        <Link href="/campaigns"><p className="text-[#F9F1EC] md:text-[10px] lg:text-[13px] xl:text-[16px] hover:text-[#19575f]">Campaigns</p></Link>
        <Link href="/about-us"><p className="text-[#F9F1EC] md:text-[10px] lg:text-[13px] xl:text-[16px] hover:text-[#19575f]">About Us</p></Link>
      </nav>
    </div>
    <div className="flex gap-3 font-halyard items-center justify-center mb-20 mt-5">
      <Link href="/sign-in"><p className="px-4 py-2 md:text-[10px] lg:text-[13px] xl:text-[16px] font-medium text-white">Sign In</p></Link>
      <Link href="/get-started"><p className="px-3 py-3 xl:px-4 xl:py-4 md:text-[10px] lg:text-[13px] xl:text-[16px] bg-[#00555A] text-white xl:rounded-xl md:rounded-lg hover:bg-[#b3fbff] font-semibold">Create account</p></Link>
    </div>
  </header>
);

const MobileNav = () => (
  <div className="flex flex-col absolute rounded-lg font-halyard  lg:hidden items-center text-[#F9F1EC] transition-opacity bg-[#00262B] p-4 mt-4 shadow-md z-50">
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

export default LoaderHeader;
