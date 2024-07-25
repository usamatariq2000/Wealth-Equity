"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  onGenderChange: (gender: string) => void;
  data:any,
}

const content = {
  header: "What is your sex at birth?",
  description:
    "This helps in calculating life expectancy and other risk factors to determine adequate coverage.",
};

export default function Step3(props: QuizStepProps) {
  const [gender, setGender] = useState<any>(String);
  const handleGenderClick = (gender: string) => {
    setGender(gender);
    props.onGenderChange(gender);
  };

  return (
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

      <div className="mt-14 w-full flex justify-center items-center gap-14 text-4xl font-bold font-halyard-text text-[#C7C1BD]">
        <button
          className={`${props.data === "Female" ? "bg-[#f2ff73] text-[#004649] px-2" : ""}`}
          onClick={() => handleGenderClick("Female")}
        >
          Female
        </button>
        <button
          className={`${props.data  === "Male" ? "bg-[#f2ff73] text-[#004649] px-2" : ""}`}
          onClick={() => handleGenderClick("Male")}
        >
          Male
        </button>
      </div>
    </div>
  );
}
