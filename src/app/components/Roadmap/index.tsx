"use client";
import React, { useState } from "react";
import Image from "next/image";
import Pyramid from "../Pyramid";

interface Content {
  subheader: string;
  header: string;
  description: string;
  button: string;
}

interface DropdownItem {
  title: string;
  description: string;
}

const Roadmap: React.FC = () => {
  // Define content object for textual content
  const content: Content = {
    subheader: "HOW W&E WORKS",
    header: "A ‘Roadmap-for Life’ to protect you and those you love",
    description:
      "As you look to turn your lifetime income into wealth, consider taking just 1% of your earnings today to protect your income stream for the next 20 years. Yes, life insurance is a critically underutilized tool to protect your income, grow your wealth, provide benefits, and build a lasting legacy.",
    button: "Discover your Personal Wealth Potential",
  };

  const dropdown: DropdownItem[] = [
    {
      title: "Build a plan, don’t just buy a policy",
      description:
        "Use our format to create an insurance plan that moves your wealth ascension from the base to the tip of the W&E Personal Wealth Pyramid-- to Protect, Plan, Preserve, then Pass Along your wealth. ",
    },
    {
      title: "Get tailored insurance coverage",
      description:
        "Based on your Personal Wealth Potential, Wealth & Equity matches you with trusted insurers that have the solutions for your unique needs. Speak to our financial experts for additional ongoing support.",
    },
    {
      title: "Close the racial wealth gap",
      description:
        "Centuries of discrimination have held back our families, communities, businesses, and institutions from the wealth accumulation we deserve. We`re on a mission to end that ",
    },
  ];

  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});

  const handleToggle = (section: string) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [section]: !prevOpen[section],
    }));
  };

  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 p-3 lg:p-12 gap-6 mt-[20rem] sm:mt-[22rem] md:mt-[20rem] lg:mt-0 lg:gap-10 min-h-screen text-[#00262B] ">
      <div className="p-6 lg:p-10 hidden md:flex flex justify-center relative items-center w-full md:h-full">
        <div
          className="flex justify-center items-center w-full h-full "
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: '15px',
          }}
        >
          <div
            className="absolute  hidden lg:block inset-0 rounded-[inherit]"
            style={{
              backgroundImage: 'url("/images/pyramidbg.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: 'brightness(0.8)'
            }}
          />
          <Pyramid />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 lg:gap-[32px] p-6 lg:p-10">
        <div className="flex flex-col gap-4 lg:gap-[16px]">
          <p className="font-medium font-halyard leading-7 lg:leading-1 text-left">
            {content.subheader}
          </p>
          <h1 className="text-3xl lg:text-[60px] tracking-[2px] lg:tracking-[2px] lg:leading-[60px] leading-[30px] font-jubilee">{content.header}</h1>
        </div>
        <div className="flex flex-col">
          {dropdown.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-b border-[#C7C1BD]"
            >
              <button
                className="text-left text-xl lg:text-2xl py-4 lg:py-5 font-bold font-light-haylard hover:text-[#092a2c] text-[#00555A]"
                onClick={() => handleToggle(item.title)}
              >
                {item.title}
              </button>
              <div
                className={`overflow-hidden font-light-haylard text-lg font-base transition-all duration-700 ease-in-out ${isOpen[item.title] ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                style={{
                  maxHeight: isOpen[item.title] ? "100vh" : "0",
                }}
              >
                <div className="mb-5">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Roadmap;
