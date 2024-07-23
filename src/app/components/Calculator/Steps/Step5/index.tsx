import React from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  answer: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const content = {
  header:
    "How long do you want to provide an income for your family if you’re no longer there?",
  description:
    "Consider how long your loved ones would need additional income to support their lifestyle.",
};
const Step5: React.FC<QuizStepProps> = ({ answer, onChange }) => (
  <div>
    <div className="">
      <h1
        className="text-[45px] lg:text-[40px] font-normal font-jubilee mb-6"
        style={{ letterSpacing: "-2.5%" }}
      >
        {content.header}
      </h1>
      <p className="text-md lg:text-[20px] font-[400] mb-6 font-halyard-text ">
        {content.description}
      </p>
    </div>

    <div className="mt-14 w-full ">
      <div className="flex items-center justify-center gap-5 ">
        <input
          type="number"
          placeholder="0"
          value={answer}
          onChange={onChange}
          className="custom-input block text-center w-[15%] px-4 py-2  text-[40px] font-halyard-text font-semibold  bg-transparent border-b-3 border-[#E0D9D4] focus:outline-none focus:border-darkgreen"
        />
        <p className="text-[40px] font-halyard text-[#00555A]">years</p>
      </div>
    </div>
  </div>
);

export default Step5;
