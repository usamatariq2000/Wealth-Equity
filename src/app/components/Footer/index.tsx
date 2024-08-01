"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { usePathname } from "next/navigation";


const Footer = () => {
  const links = [
    {
      title: "Get Started",
      options: [
        "Life Insurance",
        "Financial Planning",
        "Personal Wealth Potential",
        "Account Login",
        "FAQs",
      ],
    },
    {
      title: "Partnerships",
      options: [
        "W&E for Agents",
        "W&E for Employers",
        "Personal Wealth Potential",
        "Agent Login",
        "Affiliate Program",
      ],
    },
    {
      title: "Company",
      options: ["About Us", "Blog", "Careers", "Press", "Contact"],
    },
  ];

  const [sliderValue, setSliderValue] = useState(0);
  const [animate, setAnimate] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation should trigger only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
      const interval = setInterval(() => {
        setSliderValue((prev) => (prev < 15 ? prev + 1 : 15));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const pathname = usePathname();
  const isActive = (path:any) => pathname === path;

  return (
    <div className="bg-[#00555A] p-4 md:p-20 ">
      <div className="">
        <text
          className="text-center text-white font-jubilee text-[42px] lg:text-[88px] leading-[50px] md:leading-[88px]"
          style={{ letterSpacing: "-2.5%" }}
        >
          Wealth & Equity is on a mission to close the racial wealth gap{" "}
          <span className="text-[#FCFF7F]"> in one generation.</span>
        </text>
      </div>
      <div ref={ref} className="w-full py-12">
        <div
          className="flex flex-row items-center"
          style={{ justifyContent: "space-between" }}
        >
          <div>
            {animate && (
              <CountUp
                start={0}
                end={84337}
                duration={1.8}
                separator=","
                className="text-[#FCFF7F] font-halyard"
              />
            )}
            <text className="text-[#FCFF7F] font-halyard">
              {" "}
              FAMILIES EMPOWERED
            </text>
          </div>
          <div>
            <text className="text-[white] font-halyard">
              THE $500 BILLION WEALTH GAP BRIDGE
            </text>{" "}
          </div>
        </div>
        <div className="relative mt-4 w-full h-6 bg-teal-900 rounded-full overflow-hidden">
          <div
            className="absolute left-3 top-1.5 w-4 h-3  rounded-full transition-all duration-150"
            style={{ width: `${sliderValue}%`, backgroundColor: "#E3E572" }}
          />
          <div
            className="absolute top-0.5 left-0  w-5 h-5 bg-yellow-300 rounded-full transition-all duration-150"
            style={{ left: `${sliderValue}%` }}
          />
        </div>
      </div>
      <div className={`${isActive('/coverage-options')? "hidden" : ""} grid grid-cols-1 lg:grid-cols-2 gap-28 md:py-10`}>
        <div
          className="bg-cover bg-center rounded-2xl p-3 md:p-10 relative"
          style={{
            backgroundImage: `url(images/footer.jpeg)`,
            height: "400px",
            width: "100%",
            objectFit: "fill",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        >
          <div className="absolute rounded-b-2xl bottom-0 left-0 w-full h-[12rem] bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="flex flex-col justify-between h-full w-full p-2 relative">
            <div>
              <img src="/images/Exclude.png" className="w-20" />
            </div>
            <div className="flex items-center justify-between gap-10 w-full">
              <p className="text-sm lg:text-md xl:text-xl text-white font-medium ">
                Join us on a new path to financial freedom and generational
                wealth.
              </p>
              <div>
                <button className="p-2 bg-[#FCFF7F] text-[#00262B] text-xs lg:text-md xl:text-lg font-semibold rounded-md  lg:w-[180px] xl:w-[230px]">
                  Start Planning Today
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 align-left ">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col gap-2 py-3">
              <p className="font-semibold text-xl lg:text-lg font-halyard text-[#F9F1EC] mb-5 whitespace-nowrap">
                {link.title}
              </p>
              {link.options.map((option, idx) => (
                <p
                  key={idx}
                  className=" font-light font-halyard text-[#F9F1EC] text-sm mt-1"
                >
                  {option}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="py-5">
        <div className="py-2 border-t-[1px] border-[#569B9B]"></div>
        <div className="flex md:flex-row flex-col items-center justify-between gap-2">
          <div className="flex md:flex-row flex-col text-[#F9F1EC] font-light text-sm">
            <div className="md:mr-3">
              <text className="whitespace-nowrap">
                © 2024 Wealth & Equity. All rights reserved.
              </text>
            </div>
            <div className="flex md:gap-2 whitespace-nowrap">
              <text>Licenses</text>
              <text>.</text>
              <text>Privacy Policy</text>
              <text>.</text>
              <text>Terms Of Service</text>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="opacity-70">
              <FaLinkedinIn color="#F9F1EC" size={24} />
            </div>
            <div className="opacity-70">
              <IoLogoYoutube color="#F9F1EC" size={24} />
            </div>
            <div className="opacity-70">
              <FaFacebook color="#F9F1EC" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
