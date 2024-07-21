import React from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  handleMinusClick: any;
  handlePlusClick: any;
  ageRange: any;
}

const content = {
  header: "What is your age?",
  description:
    "This helps us estimate how long you'll be providing for your family and planning for future needs and potential growth.",
};
const Step2: React.FC<QuizStepProps> = ({
  handleMinusClick,
  handlePlusClick,
  ageRange,
}) => (
  <div className="space-y-20">
    <div className="">
      <h1
        className="text-[45px] text-[#00262B] lg:text-[40px] font-normal font-jubilee mb-6"
        style={{ letterSpacing: "-2.5%" }}
      >
        {content.header}
      </h1>
      <p className="text-md text-[#00262B] lg:text-[20px] font-[400] mb-6 font-haylard ">
        {content.description}
      </p>
    </div>

    <div className="flex justify-center items-center gap-4">
      <button
        className={` text-gray-700 flex items-center justify-center text-[28px] font-light rounded-full w-12 h-12 ${
          ageRange.min === 18 ? "bg-[#C7C1BD] cursor-not-allowed" : "bg-[#FCFF7F] hover:bg-[#feffb4]"
        }`}
        onClick={handleMinusClick}
        disabled={ageRange.min === 18}
      >
        <p>-</p>
      </button>
      <span className="text-5xl font-halyard text-[#00555A]">{`${ageRange.min}${
        ageRange.max === "+" ? "+" : `-${ageRange.max}`
      }`}</span>

      <button
        className={` text-gray-700 flex items-center justify-center  text-[28px] font-light rounded-full w-12 h-12 ${
          ageRange.max === "+" ? "bg-[#C7C1BD] cursor-not-allowed" : "bg-[#FCFF7F] hover:bg-[#feffb4]"
        }`}
        onClick={handlePlusClick}
        disabled={ageRange.max === "+"}
      >
        <p>+</p>
      </button>
    </div>
  </div>
);

export default Step2;
