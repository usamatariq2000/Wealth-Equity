import React from "react";
import Image from "next/image";

const PwpCard = ({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col  xl:px-10 lg:px-5  md:px-5 lg:pb-0 md:pb-10 sm:px-10  xxs:px-5 ">
      <div className="flex items-center justify-center w-20 h-20 bg-[#00555A] rounded-lg">
        <Image
          src={url}
          alt="HeroImg"
          width={10}
          height={10}
          className="w-10 h-10"
        />
      </div>
      <p className="lg:text-[22px]  font-medium text-Vault-Teal mt-5  h-[35px] overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </p>
      <p className="lg:text-base font-light text-[#00262B] mt-3  h-[100px]">
        {description}
      </p>
    </div>
  );
};

export default PwpCard;
