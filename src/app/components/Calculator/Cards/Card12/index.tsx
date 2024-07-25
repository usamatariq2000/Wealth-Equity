import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Card12: React.FC<any> = () => {
  const content = {
    name: "John L",
    title: "Wealth & Equity Advisor",
  };

  return (
    <div className="relative w-full h-screen">
      <div className="relative hidden lg:block w-full h-screen shadow-overlay">
        <Image
          src="/images/card12.jpeg"
          alt="HeroImg"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex items-end mb-20 justify-center">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 lg:p-8 bg-[#003336] text-white rounded-xl">
        <p className="text-sm sm:text-base lg:text-lg font-halyard-text xl:text-lg tracking-[1px] font-bold mb-4">
          “Employer-sponsored life insurance policies usually cover an amount that’s 1-2x your annual salary, but financial experts recommend being covered for <span className="text-[#FCFF7F] inline-block">a minimum of 10x your income.”</span>
          </p>
          <div className="flex items-center">
          <img src={"/images/Ellipse 11.png"} alt={"card 1"} className="w-14 h-14 rounded-full mr-4" />

            <div>
              <p className="font-semibold text-sm sm:text-base lg:text-lg">
                {content.name}
              </p>
              <p className="text-xs sm:text-sm lg:text-base">
                {content.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card12;
