"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";

interface QuizStepProps {
  onTypeChange: (gender: string) => void;
  data:any,
}

const content = {
  header: "Is your life coverage personally owned, or purchased through your employer?",
  
};

export default function Step12(props: QuizStepProps) {
  const [type, setType] = useState<any>(String);
  const handleClick = (type: string) => {
    setType(type);
    props.onTypeChange(type);
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
      </div>

      <div className="mt-14 w-full flex justify-center items-center gap-14 text-4xl font-bold font-halyard-text text-[#C7C1BD]">
        <button
          className={`${props.data === "Personal" ? "bg-[#f2ff73] text-[#004649] px-2" : ""}`}
          onClick={() => handleClick("Personal")}
        >
          Personal
        </button>
        <button
          className={`${props.data === "Employer" ? "bg-[#f2ff73] text-[#004649] px-2" : ""}`}
          onClick={() => handleClick("Employer")}
        >
          Employer
        </button>
      </div>
    </div>
  );
}
