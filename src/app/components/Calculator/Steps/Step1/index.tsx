import React from "react";
import {Input} from "@nextui-org/react";


interface QuizStepProps {
  answer1: string;
  onChange1: (e: React.ChangeEvent<HTMLInputElement>) => void;
  answer2: string;
  onChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const content = {
    header: "Welcome! Before we get started, what should we call you?",
    description:"You have the option of receiving your personalized results via text or email."
  };
const Step1: React.FC<QuizStepProps> = ({ answer1, onChange1, answer2, onChange2,  }) => (
    
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
    
    <div className="mt-14">
    <input
      type="text"
      placeholder='Your first name'
      value={answer1}
      onChange={onChange1}
      className="custom-input block w-full px-4 py-4 mb-6 text-[28px] font-light-haylard font-semibold text-black bg-transparent border-b-3 border-[#E0D9D4] focus:outline-none focus:border-darkgreen"
    />
    <input
      type="text"
      placeholder='Your email address'
      value={answer2}
      onChange={onChange2}
      className="custom-input block w-full px-4 py-4 mb-6 text-[28px] font-light-haylard font-semibold text-black bg-transparent border-b-3 border-[#E0D9D4] focus:outline-none focus:border-darkgreen"
    />
    </div>
  </div>
);

export default Step1;
