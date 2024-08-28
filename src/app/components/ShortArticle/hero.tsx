import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ShareIcon from "../../../../public/icons/share";

interface HeroProps {
  category: string;
  heading: string;
  createdAt: string;
}

const Hero: React.FC<HeroProps> = ({ category, heading, createdAt }) => {
  return (
    <div className="mt-2 lg:mt-32">
      <div className="bg-[#00262B] md:[450px] lg:h-[500px] xl:h-[588px] px-4 lg:px-24 py-8">
        <p className="text-[#AACDCD] text-xs font-medium font-halyard">
          Blog · {category}
        </p>
        <div className="flex md:flex-row flex-col gap-4 w-full justify-between mt-10 xl:mt-16">
          <div className="flex flex-col text-white md:w-1/2 w-full">
            <div className="my-2 flex">
              <p className="py-1 px-2 text-xs text-[#003336] font-medium font-halyard rounded-sm bg-[#AACDCD] uppercase">
                Guide
              </p>
            </div>
            <h1 className="md: text-3xl lg:text-5xl xl:text-[64px] font-jubilee leading-10 xl:leading-[64px]">
              {heading}
            </h1>
            {/* <p className="text-sm lg:text-base font-halyard font-normal mt-6">
              A Starter Guide to Financial Freedom for African-American Families
            </p> */}
            <div className="flex gap-7 divide-x divide-[#AACDCD] mt-4">
              <div className="flex gap-2 items-center justify-center">
                <Image
                  src="/images/Ellipse 112.png"
                  alt="user image"
                  width={50}
                  height={50}
                  className="rounded-full w-14 h-14"
                />
                <div className="flex flex-col text-sm lg:text-base font-halyard justify-center">
                  <p>Joseph H.</p>
                  <p>Financial Expert</p>
                </div>
              </div>
              <div className="flex flex-col text-sm lg:text-base font-halyard justify-center">
                <p className="ml-5">
                  {new Date(createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p className="ml-5">2 min read</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <div className="opacity-70 bg-[#F9F1EC] rounded-full h-7 w-7 flex items-center justify-center">
                <FaLinkedinIn color="#00262B" size={16} />
              </div>
              <div className="opacity-70 bg-[#F9F1EC] rounded-full h-7 w-7 flex items-center justify-center">
                <FaXTwitter color="#00262B" size={16} />
              </div>
              <div className="opacity-70 bg-[#F9F1EC] rounded-full h-7 w-7 flex items-end justify-center">
                <FaFacebookF color="#00262B" size={22} />
              </div>
              <ShareIcon />
            </div>
          </div>
          <div className=" md:w-1/2 w-full">
            <Image
              src="/images/Rectangle 442.svg"
              width={100}
              height={100}
              alt="hero-img"
              className="w-full object-c h-full xl:h-[428px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
