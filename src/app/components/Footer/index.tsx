"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

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

  return (
    <div className="bg-[#00555A] p-[80px]">
      <div className="">
        <text
          className="text-center text-white font-jubilee text-[42px] lg:text-[88px]"
          style={{ lineHeight: "88px", letterSpacing: "-2.5%" }}
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
              The $500 Billion Wealth Gap Bridge
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
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-[140px] py-10">
        <div
          className="bg-cover bg-center rounded-2xl p-10" 
          style={{
            backgroundImage: `url(images/CTA.png)`,
            height: "400px",
            width: "100%",
          }}
        >
          {/* <div className="flex flex-col justify-between h-full p-2">
            <div>
              <img src="/images/Exclude.png" />
            </div>
            <div className="flex flex-row justify-between w-full">
              <p className="text-sm text-[#F9F1EC]">
                Join us on a new path to financial<br/> freedom and generational wealth.
              </p>
              <button className="p-2 bg-[#FCFF7F] text-[#00262B] text-sm rounded-md">
                Start Now
              </button>
            </div>
          </div> */}
        </div>
        <div className="grid grid-cols-3 gap-10 align-left ">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col gap-2 py-3">
              <p className="font-semibold text-xl font-halyard text-[#F9F1EC] mb-5">{link.title}</p>
              {link.options.map((option, idx) => (
                <p key={idx} className=" font-light font-halyard text-[#F9F1EC] text-md mt-1">
                  {option}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="py-5">
        
        <div className="py-2 border-t-[1px] border-[#569B9B]"></div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex text-[#F9F1EC] font-light">
            <div className="mr-3">
              <text>© 2024 Wealth & Equity. All rights reserved.</text>
            </div>
            <div className="flex gap-2">
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
