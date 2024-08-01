import Image from "next/image";
import React from "react";

interface CoverageOptionCardProps {
  title: string;
  url: string;
  time_period: string;
  price: string;
}

const CoverageOptionCard: React.FC<CoverageOptionCardProps> = ({
  title,
  url,
  time_period,
  price,
}) => {
  return (
    <div className="flex w-full gap-2 md:gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#E0D9D4] hover:bg-[#FCF8F5]">
          <Image src="/icons/pencil.svg" alt="filter" width={10} height={10} />
        </div>
        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#E0D9D4] hover:bg-[#FCF8F5]">
          <Image src="/icons/thunder.svg" alt="filter" width={10} height={10} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col bg-[#FCF8F5] sm:p-8 xxs:px-6 xxs:py-3 rounded-2xl justify-between w-full md:gap-0 gap-4">
        <div className="flex items-center  gap-8 md:w-[60%]">
          <Image
            src={url}
            alt="insurer-logo"
            width={80}
            height={80}
            className="w-20 h-20 rounded-lg"
          />
          <div className="flex flex-col">
            <p className="text-lg sm:text-2xl text-halyard text-[#004448]">
              {title}
            </p>
            <div className="flex sm:flex-row flex-col gap-1 text-base text-halyard text-[#7D7976]">
              <p className="text-sm sm:text-base whitespace-nowrap">
                Preferred Non-Tobacco
              </p>
              <p className="sm:block hidden">.</p>
              <p className="text-sm sm:text-base whitespace-nowrap">
                {time_period} old
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-halyard text-[#004448] text-xl">${price} / year</p>
        </div>
      </div>
    </div>
  );
};
export default CoverageOptionCard;
