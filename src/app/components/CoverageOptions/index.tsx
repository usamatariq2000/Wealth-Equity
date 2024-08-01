import React from "react";
import CoverageOptionCard from "../CoverageOptionCard";
import Image from "next/image";

const coverageOptions = [
  {
    title: "Nationwide 10 Year Level Convertible Term",
    url: "/logos/InsurerLogo.svg",
    time_period: "40 yrs",
    price: "425.20",
  },
  {
    title: "National Life Group 10 Year Level Non-Convertible Term",
    url: "/logos/InsurerLogo1.svg",
    time_period: "40 yrs",
    price: "473.36",
  },
  {
    title: "AIG Direct 10 Year Level Level Non-Convertible Term",
    url: "/logos/InsurerLogo2.svg",
    time_period: "40 yrs",
    price: "481.86",
  },
  {
    title: "SwiftTerm Instant Issue",
    url: "/logos/InsurerLogo3.svg",
    time_period: "40 yrs",
    price: "521.28",
  },
];

const CoverageOptions = () => {
  return (
    <div className="h-full py-20 lg:py-48 xxs:mx-3 lg:mx-[20%]">
      <div className="flex justify-between items-baseline xxs:mb-12 lg:mb-10 w-full">
        <h1 className="text-2xl md:text-[40px] text-halyard text-[#00262B]">
          Your life coverage options
        </h1>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-[#00262B] hover:text-[#569B9B] transition-all duration-700 ease-in-out">
            <Image
              src="/icons/sort.svg"
              alt="sort"
              width={5}
              height={5}
              className="w-5 h-5"
            />
            <p>sort</p>
          </div>
          <div className="flex items-center gap-2 text-[#00262B] hover:text-[#569B9B] transition-all duration-700 ease-in-out">
            <Image
              src="/icons/filter.svg"
              alt="sort"
              width={5}
              height={5}
              className="w-5 h-5"
            />
            <p>filter</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center">
        {coverageOptions.map((option, index) => (
          <CoverageOptionCard
            key={index}
            title={option.title}
            url={option.url}
            time_period={option.time_period}
            price={option.price}
          />
        ))}
      </div>
    </div>
  );
};

export default CoverageOptions;
