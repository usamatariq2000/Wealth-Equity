"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Header from "../components/Calculator/Header";
import Slider from "../components/Calculator/Slider";
import Step1 from "../components/Calculator/Steps/Step1";
import Step2 from "../components/Calculator/Steps/Step2";
import Step3 from "../components/Calculator/Steps/Step3";
import { Button, ButtonGroup } from "@nextui-org/button";

export default function LifeInsurance() {
  interface QuizResponse {
    step1: string;
    step2: string;
    step3: string;
    // Add more fields as needed
    step11: string;
  }

  const [sliderValue, setSliderValue] = useState(10);
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState<QuizResponse>({
    step1: "",
    step2: "18-24", // Default value for step2
    step3: "",
    // Initialize other steps
    step11: "",
  });

  console.log(responses);

  const [ageRange, setAgeRange] = useState<any>({ min: 18, max: 24 });

  const handleChange =
    (step: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setResponses({
        ...responses,
        [`step${step}` as keyof QuizResponse]: e.target.value,
      });
    };

    const handlePlusClick = () => {
      if (ageRange.max < 65) {
        if (ageRange.max === 24) {
          setAgeRange({ min: 25, max: 34 });
          setResponses({...responses, step2: '25-34' });
        } else if (ageRange.max === 34) {
          setAgeRange({ min: 35, max: 44 });
          setResponses({...responses, step2: '35-44' });
        } else if (ageRange.max === 44) {
          setAgeRange({ min: 45, max: 54 });
          setResponses({...responses, step2: '45-54' });
        } else if (ageRange.max === 54) {
          setAgeRange({ min: 55, max: 64 });
          setResponses({...responses, step2: '55-64' });
        } else if (ageRange.max === 64) {
          setAgeRange({ min: 65, max: '+' });
          setResponses({...responses, step2: '65+' });
        }
      }
    };
  
    const handleMinusClick = () => {
      if (ageRange.min > 18) {
        if (ageRange.min === 25) {
          setAgeRange({ min: 18, max: 24 });
          setResponses({...responses, step2: '18-24' });
        } else if (ageRange.min === 35) {
          setAgeRange({ min: 25, max: 34 });
          setResponses({...responses, step2: '25-34' });
        } else if (ageRange.min === 45) {
          setAgeRange({ min: 35, max: 44 });
          setResponses({...responses, step2: '35-44' });
        } else if (ageRange.min === 55) {
          setAgeRange({ min: 45, max: 54 });
          setResponses({...responses, step2: '45-54' });
        } else if (ageRange.min === 65) {
          setAgeRange({ min: 55, max: 64 });
          setResponses({...responses, step2: '55-64' });
        }
      }
    };

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return <Step1 answer={responses.step1} onChange={handleChange(1)} />;
      case 2:
        return <Step2 handleMinusClick={handleMinusClick} handlePlusClick={handlePlusClick} ageRange={ageRange}/>;
      case 3: 
        return <Step3 answer={responses.step3} onChange={handleChange(3)}/>;
      
      case 11:
      // Render QuizStep11 similarly
      default:
        return null;
    }
  };

  const handleButtonClick = () => {
    if (step < 11) setStep(step + 1);
    setSliderValue((prev) => (prev < 100 ? prev + 10 : 100)); // Increase slider value by 10% each click
  };

  const handleBackButtonClick = () => {
    if (step > 1) setStep(step - 1);
    setSliderValue((prev) => (prev > 10 ? prev - 10 : 10)); // Increase slider value by 10% each click
  };

  return (
    <div>
      <Header />
      <section className="flex flex-col h-screen  lg:flex-row mb-10 lg:mb-0 text-[#00262B] ">
        <div className="w-full flex flex-col mt-[140px] relative px-5 lg:px-[80px]">
          <Slider sliderValue={sliderValue} />

          <div
            className={`transition-opacity duration-500  ease-in-out mt-[40px] inset-0 opacity-100`}
          >
            {renderStep(step)}
          </div>
          <div className="absolute bottom-24 text-[18px] gap-[20px] left-0 right-0 mx-auto flex justify-center">
            <button
              className={`px-[34px] py-[12px]  rounded-lg ${
                step > 1
                  ? "border border-gray-300"
                  : "bg-[#C7C1BD] text-[#7D7976]"
              }`}
              onClick={handleBackButtonClick}
              disabled={step === 1}
            >
              Back
            </button>
            {step < 11 ? (
              <button
                className="px-[34px] py-[12px] rounded-lg bg-[#00555A] text-white ml-2"
                onClick={handleButtonClick}
              >
                Start
              </button>
            ) : (
              <button
                className="px-[34px] py-[12px] rounded-lg bg-[#00555A] text-white ml-2"
                onClick={handleButtonClick}
              >
                Submit
              </button>
            )}
          </div>
        </div>
        <div className="w-full lg:w-full h-full lg:mt-0">
          <div className="relative">
            <div className="relative hidden lg:block w-full h-screen shadow-overlay">
              <Image
                src="/images/Family.jpg"
                alt="HeroImg"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="absolute bottom-20 left-20 font-halyard lg:left-52 w-[400px] p-6 bg-[#003336] text-white rounded-xl">
              <p className="text-lg mb-4">
                “I realized that getting life insurance for myself, my mom, and
                my child will create endless opportunities and change our family
                story forever!”
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold">Pamela N, 38</p>
                  <p className="text-sm">Wealth & Equity customer</p>
                </div>
                <button className="absolute bottom-20 right-[-20px] bg-[#FCFF7F] hover:bg-[#f8ffb4] p-3 rounded-full">
                  <FaArrowRight size={16} color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
