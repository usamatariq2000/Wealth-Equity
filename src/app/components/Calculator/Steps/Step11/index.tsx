import React from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  answer: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const content = {
  header:
    "How much life insurance do you currently have in place?",
  description:
    "We’re nearly done. To complete your PWP calculation, let us know how much life insurance you currently have, if any.",
};
const Step11: React.FC<QuizStepProps> = ({ answer, onChange }) => (
  <div>
    <div className="">
      <h1
        className="text-[45px] lg:text-[40px] font-normal font-jubilee mb-6"
        style={{ letterSpacing: "-2.5%" }}
      >
        {content.header}
      </h1>
      <p className="text-[20px] text-[#00262B] lg:text-[20px] xl:text-[20px] font-[400] mb-6 font-light-halyard ">
        {content.description}
      </p>
    </div>

    <div className="mt-14  ">
      <div className="flex items-center justify-center gap-5 ">
        <p className="text-[40px] font-halyard text-[#00555A]">$</p>
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

export default Step11;
