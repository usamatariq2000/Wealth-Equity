"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  answer: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const content = {
  header: "What is your sex at birth?",
  description:
    "This helps in calculating life expectancy and other risk factors to determine adequate coverage.",
};

const [gender, setGender] = useState<any>(String);

const Step3: React.FC<QuizStepProps> = ({ answer, onChange }) => (
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

    <div className="mt-14 w-full flex justify-center items-center gap-14 text-4xl font-medium text-[#C7C1BD]">
      <button onClick={() => {setGender("Female");
        
      }}>Female</button>
      <button onClick={() => setGender("Male")}>Male</button>
    </div>
  </div>
);

export default Step3;
