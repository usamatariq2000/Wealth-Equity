import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';

interface SliderProps {
  sliderValue: number;
}

const Slider: React.FC<SliderProps> = ({ sliderValue }) => {
  const content = {
    header: "Change your financial future and family legacy",
    subheader: "Protection, Planning, and Inheritance",
    description:
      "Wealth & Equity is a community-driven financial education platform that helps diverse and underserved families achieve financial security, economic mobility, and generational wealth with life insurance.",
    button: "Get Started",
  };

  return (
    <div className="relative mt-4 w-full h-9 px-3 bg-[#E0D9D4]  rounded-full overflow-hidden">
      <div
        className="absolute  top-1.5 h-2/3  rounded-full transition-all duration-150"
        style={{ width: `${sliderValue}%`, backgroundColor: "#569B9B" }}
      />
      <div
        className="absolute top-1  w-7 h-7 bg-[#00555A] rounded-full transition-all duration-150"
        style={{ left: `calc(${sliderValue}% - 14px)` }}
      />
    </div>
  );
};

export default Slider;



