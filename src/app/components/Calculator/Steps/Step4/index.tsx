import React from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  answer1: string;
  onChange1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  answer2: string;
  onChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const content = {
  header:
    "How much of your income would you want to provide annually if you were no longer there?",
  description:
    "Consider how much your loved ones would need per year for them to be able to take care of their daily living expenses.",
};
const Step4: React.FC<QuizStepProps> = ({ answer1, onChange1, answer2, onChange2 }) => (
  <div className="">
    <div className="">
      <h1
        className="text-[35px] lg:text-[35px] 2xl:text-[45px] text-[#00262B] font-normal font-jubilee mb-6"
        style={{ letterSpacing: "-2.5%" }}
      >
        {content.header}
      </h1>
      <p className="text-[20px] lg:text-[20px] 2xl:text-[22px] text-[#00262B] font-[400] mb-6 font-halyard-text">
        {content.description}
      </p>
    </div>

    <div className="mt-14 space-y-[24px] text-[#00262B]">
      <div className="flex items-center justify-between ">
        <p className="w-[30%] text-[18px] text-[#00262B] font-halyard-text font-[600]">
        YOUR CURRENT ANNUAL INCOME
        </p>{" "}
        <div className="flex items-center gap-5 w-[60%] justify-end">
          <p className="text-[40px] text-[#00555A]">$</p>
          <input
            type="number"
            placeholder="0.00"
            value={answer1}
            onChange={onChange1}
            className="custom-input block text-center w-[60%] px-4 py-2  text-[40px] font-light-haylard font-semibold text-black bg-transparent border-b-3 border-[#E0D9D4] focus:outline-none focus:border-darkgreen"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="w-[30%] text-[18px] font-halyard-text text-[#00262B] font-[600]">PERCENT TO PROVIDE</p>{" "}
        <div className="flex items-center gap-5 w-[60%] justify-end">
          <input
            type="number"
            placeholder="0"
            value={answer2}
            onChange={onChange2}
            className="custom-input block text-center w-[45%]  px-4 py-2  text-[40px] font-light-haylard font-semibold text-black bg-transparent border-b-3 border-[#E0D9D4] focus:outline-none focus:border-darkgreen"
          />
          <p className="text-[40px] text-[#00555A]">%</p>
        </div>
      </div>
    </div>
  </div>
);

export default Step4;
