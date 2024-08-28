"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { useDisclosure } from "@nextui-org/react";
import SignInModal from "../../SignInModal";
import GetStartedModal from "../../GetStartedModal";
import axios from "axios";
import api from "@/app/services/api";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitial, setUserInitial] = useState<string | null>(null);
  const pathname = usePathname();
  const { isOpen: isModalOpen, onOpen, onOpenChange } = useDisclosure();
  const { isOpen: isGetStartedModalOpen, onOpen: onGetStartedOpen, onOpenChange: onGetStartedOpenChange } = useDisclosure();

  const isActive = (path: any) => pathname === path;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      api.get("/auth/me")
        .then(response => {
          const email = response.data.user.email;
          localStorage.setItem('password', response.data.user.password)
          setUserInitial(email.charAt(0).toUpperCase());
        }).catch(() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className={`w-full z-50 px-4 ${isActive('/personal-information') || isActive('/calculator-results') ? "bg-[#00555A]" : "bg-[#F9F1EC]"}`}>
      <SignInModal isOpen={isModalOpen} onOpenChange={onOpenChange} />
      <GetStartedModal isOpen={isGetStartedModalOpen} onOpenChange={onGetStartedOpenChange} />
      <div className="flex justify-between items-center bg-transparent text-gray-600">
        <div className="flex items-center">
          <Image src="/images/W&E_Icon_BLK.png" alt="Icon" width={180} height={180} className="pr-[50px] mt-2 block lg:hidden" />

          <div className="hidden lg:flex">
            <DesktopNav onOpen={onOpen} onGetStartedOpen={onGetStartedOpenChange} isLoggedIn={isLoggedIn} userInitial={userInitial} />
          </div>
        </div>
        <div className={`flex items-center space-x-6 ${isActive('/personal-information') || isActive('/calculator-results') ? "text-white" : ""}`}>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && <MobileNav isLoggedIn={isLoggedIn} onOpen={onOpen} onGetStartedOpen={onGetStartedOpenChange} userInitial={userInitial} />}
    </div>
  );
};

const DesktopNav = ({ onOpen, onGetStartedOpen, isLoggedIn, userInitial }: any) => {
  const pathname = usePathname();
  const isActive = (path: any) => pathname === path;

  return (
    <header className="flex justify-between w-[98%] items-center px-[10px] xl:px-[80px] md:absolute z-20 mb-20 md:mb-1">
      <div className="flex items-center">
        <Link href="/">
          <Image src={`${isActive('/personal-information') || isActive('/calculator-results') ? "/images/W&E_Icon_WHT.png" : "/images/W&E_Icon_BLK.png"}`} alt="Icon" width={140} height={140} className="pr-[50px] text-black" />
        </Link>
        <nav className="flex md:gap-[30px] xl:gap-[51px] font-halyard font-bold">
          <Link href="/life-insurance">
            <p className={`${isActive('/personal-information') || isActive('/calculator-results') ? "text-white" : "text-[#00262B]"} md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] hover:text-[#19575f]`}>Life Insurance</p>
          </Link>
          <Link href="/stories">
            <p className={`${isActive('/personal-information') || isActive('/calculator-results') ? "text-white" : "text-[#00262B]"} md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] hover:text-[#19575f]`}>Stories</p>
          </Link>
          <Link href="/campaigns">
            <p className={`${isActive('/personal-information') || isActive('/calculator-results') ? "text-white" : "text-[#00262B]"} md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] hover:text-[#19575f]`}>Campaigns</p>
          </Link>
          <Link href="/about-us">
            <p className={`${isActive('/personal-information') || isActive('/calculator-results') ? "text-white" : "text-[#00262B]"} md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] hover:text-[#19575f]`}>About Us</p>
          </Link>
        </nav>
      </div>
      <div className="flex gap-3 font-halyard items-center justify-center mb-10 mt-10">
        {!isLoggedIn ? (
          <>
            <button onClick={onOpen}>
              <p className={`${isActive('/personal-information') || isActive('/calculator-results') ? "text-black" : "text-white"} px-4 py-2 md:text-[10px] lg:text-[13px] xl:text-[16px] font-medium`}>Sign In</p>
            </button>
            <button onClick={onGetStartedOpen}>
              <p className="px-3 py-3 xl:px-4 xl:py-4 md:text-[10px] lg:text-[13px] xl:text-[16px] bg-[#00555A] text-white xl:rounded-xl md:rounded-lg hover:bg-[#b3fbff] font-semibold">Create account</p>
            </button>
          </>
        ) : (
          <>
            <button className="px-3 py-3 xl:px-4 xl:py-4 md:text-[10px] xl:text-[16px] bg-[#FCFF7F] text-[#00262B] xl:rounded-xl md:rounded-lg hover:bg-[#feffc6] font-semibold">
              Request Consultation
            </button>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold">
              {userInitial}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

const MobileNav = ({ isLoggedIn, onOpen, onGetStartedOpen, userInitial }: any) => (
  <div className="flex flex-col rounded-lg font-halyard lg:hidden items-center text-[#F9F1EC] transition-opacity bg-[#00262B] p-4 mt-4 shadow-md z-50">
    {NAV_ITEMS.map((navItem) => (
      <Link key={navItem.label} href={navItem.href ?? "#"} className="py-2">
        {navItem.label}
      </Link>
    ))}
    {!isLoggedIn ? (
      <>
        <button onClick={onOpen} className="py-2">
          Sign In
        </button>
        <button onClick={onGetStartedOpen} className="py-2 bg-[#00555A] text-white rounded-md px-4 py-2">
          Create account
        </button>
      </>
    ) : (
      <>
        <button onClick={() => console.log('Request Consultation')} className="py-2 bg-[#00555A] text-white rounded-md px-4 py-2">
          Request Consultation
        </button>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00555A] text-white text-center">
          {userInitial}
        </div>
      </>
    )}
  </div>
);

const NAV_ITEMS = [
  { label: "Life Insurance", href: "/life-insurance" },
  { label: "Stories", href: "/stories" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "About Us", href: "/about-us" },
];

export default Header;
