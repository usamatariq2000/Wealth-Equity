"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDisclosure } from "@nextui-org/react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
  FiUser,
} from "react-icons/fi";
import SignInModal from "../SignInModal";
import GetStartedModal from "../GetStartedModal";
import api from "@/app/services/api";
const Header = () => {
  const { isOpen: isModalOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isGetStartedModalOpen,
    onOpen: onGetStartedOpen,
    onOpenChange: onGetStartedOpenChange,
  } = useDisclosure();

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [initial, setInitial] = useState("");

  const handleDropdown = () => setDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .get("/auth/me")
        .then((response) => {
          const email = response.data.user.email;
          setUserEmail(email);
          setInitial(email.charAt(0).toUpperCase());
        })
        .catch(() => {
          // Handle error
        });
    }
  }, []);

  return (
    <div className="w-full z-50 px-4 bg-[#F9F1EC]">
      <SignInModal isOpen={isModalOpen} onOpenChange={onOpenChange} />
      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onOpenChange={onGetStartedOpenChange}
      />
      <div className="flex justify-between items-center bg-transparent text-gray-600">
        <div className="flex items-center">
          <Image
            src="/images/W&E_Logo.svg"
            alt="Icon"
            width={240}
            height={240}
            className="pr-[50px] mt-2 block lg:hidden"
          />

          <div className="hidden lg:flex">
            <DesktopNav
              userEmail={userEmail}
              initial={initial}
              onOpen={onOpen}
              onGetStartedOpen={onGetStartedOpenChange}
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <MobileNav
          userEmail={userEmail}
          initial={initial}
          onOpen={onOpen}
          onGetStartedOpen={onGetStartedOpenChange}
        />
      )}
    </div>
  );
};

const DesktopNav = ({ userEmail, initial, onOpen, onGetStartedOpen }: any) => {
  const pathname = usePathname();
  const isActive = (path: any) => pathname === path;

  return (
    <header className="flex justify-between w-[98%] items-center py-5 px-[80px] md:absolute z-20 mb-20 md:mb-1 ">
      <div className="flex">
        <Link href="/">
          <Image
            src="/images/W&E_Logo.svg"
            alt="Icon"
            width={240}
            height={240}
            className="pr-[50px]"
          />
        </Link>
        <nav className="flex md:gap-[30px] xl:gap-[51px] font-halyard font-bold">
          <Link href="/life-insurance">
            <p className="text-[#00262B] md:text-[10px] xl:text-[16px] hover:text-[#19575f]">
              Life Insurance
            </p>
          </Link>
          <Link href="/stories">
            <p className="text-[#00262B] md:text-[10px] xl:text-[16px] hover:text-[#19575f]">
              Stories
            </p>
          </Link>
          <Link href="/campaigns">
            <p className="text-[#00262B] md:text-[10px] xl:text-[16px] hover:text-[#19575f]">
              Campaigns
            </p>
          </Link>
          <Link href="/about-us">
            <p className="text-[#00262B] md:text-[10px] xl:text-[16px] hover:text-[#19575f]">
              About Us
            </p>
          </Link>
        </nav>
      </div>
      <div className="flex gap-3 font-halyard items-center justify-center mb-20 mt-5">
        {!userEmail ? (
          <>
            <button onClick={onOpen}>
              <p
                className={`px-4 py-2 md:text-[10px] xl:text-[16px] ${isActive("/life-insurance") || isActive("/coverage-options") || isActive("/blogs")
                  ? "text-[#00262B] font-semibold"
                  : "text-white font-medium"
                  }`}
              >
                Sign In
              </p>
            </button>
            <button onClick={onGetStartedOpen}>
              <p className="px-3 py-3 xl:px-4 xl:py-4 md:text-[10px] xl:text-[16px] bg-[#FCFF7F] text-[#00262B] xl:rounded-xl md:rounded-lg hover:bg-[#feffc6] font-semibold">
                Get Started
              </p>
            </button>
          </>
        ) : (
          <>
            <button className="px-3 py-3 xl:px-4 xl:py-4 md:text-[10px] xl:text-[16px] bg-[#FCFF7F] text-[#00262B] xl:rounded-xl md:rounded-lg hover:bg-[#feffc6] font-semibold">
              Request Consultation
            </button>
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold">
              {initial}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

const MobileNav = ({ userEmail, initial, onOpen, onGetStartedOpen }: any) => (
  <div className="flex flex-col rounded-lg font-halyard lg:hidden items-center text-[#F9F1EC] transition-opacity bg-[#00262B] p-4 mt-4 shadow-md z-50">
    {NAV_ITEMS.map((navItem) => (
      <Link key={navItem.label} href={navItem.href ?? "#"} className="py-2">
        {navItem.label}
      </Link>
    ))}
    {!userEmail ? (
      <>
        <button onClick={onOpen} className="py-2 text-[#FCFF7F]">
          Sign In
        </button>
        <button onClick={onGetStartedOpen} className="py-2 text-[#FCFF7F]">
          Get Started
        </button>
      </>
    ) : (
      <>
        <button className="py-2 text-[#FCFF7F]">Request Consultation</button>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold">
          {initial}
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
