import React from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  answer: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const content = {
  header:
    "How much do you want to provide for childcare?",
  description:
    "Consider the costs of childcare services in your area and factor how long your family will need those services.",
};
const Step7: React.FC<QuizStepProps> = ({ answer, onChange }) => (
  <div>
    <div className="">
      <h1
        className="text-[45px] lg:text-[40px] font-normal font-jubilee mb-6"
        style={{ letterSpacing: "-2.5%" }}
      >
        {content.header}
      </h1>
      <p className="text-md lg:text-[20px] font-[400] mb-6 font-haylard ">
        {content.description}
      </p>
    </div>

    <div className="mt-14  ">
      <div className="flex items-center justify-center gap-5 ">
        <p className="text-[40px] font-halyard">$</p>
        <input
          type="number"
          placeholder="0.00"
          value={answer}
          onChange={onChange}
          className="custom-input block text-center w-[30%] px-4 py-2  text-[40px] font-light-haylard font-semibold text-black bg-transparent border-b-3 border-[#E0D9D4] focus:outline-none focus:border-darkgreen"
        />
      </div>
    </div>
  </div>
);

export default Step7;