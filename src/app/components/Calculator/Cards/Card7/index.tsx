import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Card7: React.FC<any> = () => {
  const content = {
    name: "Ayanna J",
    title: "Wealth & Equity Advisor",
    description:
    "I realized that getting life insurance for myself, my mom, and my child will create endless opportunities and change our family story forever",
  };

  return (
    <div className="relative w-full h-screen">
      <div className="relative hidden lg:block w-full h-screen shadow-overlay">
        <Image
          src="/images/cardImage6.png"
          alt="HeroImg"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 flex items-end mb-20 justify-center">
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 lg:p-8 bg-[#003336] text-white rounded-xl">
        <p className="text-sm sm:text-base lg:text-lg font-halyard-text xl:text-lg tracking-[1px] font-bold mb-4">
          “Childcare may cost more than you think. We can help you estimate the costs and see trends in your area. <span className="text-[#FCFF7F] inline-block">What state do you live in?”</span>
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
          <select className="px-4 mt-4 py-2 w-full font-halyard border text-black text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]">
            <option value="" disabled selected>
              Select your state
            </option>
            <option value="New York">New York</option>
          </select>
        </div>

      </div>
    </div>
  );
};

export default Card7;
