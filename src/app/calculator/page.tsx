"use client";
import { ChangeEvent, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Header from "../components/Calculator/Header";
import Slider from "../components/Calculator/Slider";
import Step1 from "../components/Calculator/Steps/Step1";
import Step2 from "../components/Calculator/Steps/Step2";
import Step3 from "../components/Calculator/Steps/Step3";
import Step4 from "../components/Calculator/Steps/Step4";
import Step5 from "../components/Calculator/Steps/Step5";
import Step6 from "../components/Calculator/Steps/Step6";
import Step7 from "../components/Calculator/Steps/Step7";
import Step8 from "../components/Calculator/Steps/Step8";
import Step9 from "../components/Calculator/Steps/Step9";
import Step10 from "../components/Calculator/Steps/Step10";
import Step11 from "../components/Calculator/Steps/Step11";
import Step12 from "../components/Calculator/Steps/Step12";
import Step13 from "../components/Calculator/Steps/Step13";
import Card1 from "../components/Calculator/Cards/Card1";
import Card2 from "../components/Calculator/Cards/Card2";
import Card3 from "../components/Calculator/Cards/Card3";
import Card4 from "../components/Calculator/Cards/Card4";
import Card5 from "../components/Calculator/Cards/Card5";
import Card6 from "../components/Calculator/Cards/Card6";
import Card7 from "../components/Calculator/Cards/Card7";
import Card8 from "../components/Calculator/Cards/Card8";
import Card9 from "../components/Calculator/Cards/Card9";
import Card10 from "../components/Calculator/Cards/Card10";
import Card11 from "../components/Calculator/Cards/Card11";
import Card12 from "../components/Calculator/Cards/Card12";
import Card13 from "../components/Calculator/Cards/Card13";

import LoaderHeader from "../components/Calculator/LoaderHeader";
import { useRouter } from "next/navigation";


export default function LifeInsurance() {
  interface Child {
    age: string;
    schoolType: string;
  }

  interface QuizResponse {
    firstName: string;
    email: string;
    age: string;
    gender: string;
    annualIncome: string;
    percentToProvide: string;
    yearsToProvide: string;
    eliminateDebt: string;
    childcare: string;
    extendedHealthcare: string;
    emergencyFund: string;
    lifeInsurance: string;
    personalOrEmployer: string;
    typeOfInsurance: string;
    children: Child[];
  }

  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(8);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState<QuizResponse>({
    firstName: "",
    email: "",
    age: "18-24", // Default value for step2
    gender: "",
    annualIncome: "",
    percentToProvide: "",
    yearsToProvide: "",
    eliminateDebt: "",
    childcare: "",
    extendedHealthcare: "",
    emergencyFund: "",
    lifeInsurance: "",
    personalOrEmployer: "",
    typeOfInsurance: "",
    children: [],
  });

  const [ageRange, setAgeRange] = useState<any>({ min: 18, max: 24 });

  const handleChange =
    (step: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setResponses({
        ...responses,
        [`${step}` as keyof QuizResponse]: e.target.value,
      });
    };

  const handlePlusClick = () => {
    if (ageRange.max < 65) {
      if (ageRange.max === 24) {
        setAgeRange({ min: 25, max: 34 });
        setResponses({ ...responses, age: "25-34" });
      } else if (ageRange.max === 34) {
        setAgeRange({ min: 35, max: 44 });
        setResponses({ ...responses, age: "35-44" });
      } else if (ageRange.max === 44) {
        setAgeRange({ min: 45, max: 54 });
        setResponses({ ...responses, age: "45-54" });
      } else if (ageRange.max === 54) {
        setAgeRange({ min: 55, max: 64 });
        setResponses({ ...responses, age: "55-64" });
      } else if (ageRange.max === 64) {
        setAgeRange({ min: 65, max: "+" });
        setResponses({ ...responses, age: "65+" });
      }
    }
  };

  const handleMinusClick = () => {
    if (ageRange.min > 18) {
      if (ageRange.min === 25) {
        setAgeRange({ min: 18, max: 24 });
        setResponses({ ...responses, age: "18-24" });
      } else if (ageRange.min === 35) {
        setAgeRange({ min: 25, max: 34 });
        setResponses({ ...responses, age: "25-34" });
      } else if (ageRange.min === 45) {
        setAgeRange({ min: 35, max: 44 });
        setResponses({ ...responses, age: "35-44" });
      } else if (ageRange.min === 55) {
        setAgeRange({ min: 45, max: 54 });
        setResponses({ ...responses, age: "45-54" });
      } else if (ageRange.min === 65) {
        setAgeRange({ min: 55, max: 64 });
        setResponses({ ...responses, age: "55-64" });
      }
    }
  };

  const handleGenderChange = (gender: string) => {
    setResponses({ ...responses, gender: gender });
  };

  const handlePersonalOrEmployer = (personalOrEmployer: string) => {
    setResponses({ ...responses, personalOrEmployer: personalOrEmployer });
  };

  const handleTypeOfInsurance = (typeOfInsurance: string) => {
    setResponses({ ...responses, typeOfInsurance: typeOfInsurance });
  };

  const handleAddChild = (child: Child) => {
    setResponses({
      ...responses,
      children: [...responses.children, child],
    });
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <Step1
            answer1={responses.firstName}
            onChange1={handleChange("firstName")}
            answer2={responses.email}
            onChange2={handleChange("email")}
          />
        );
      case 2:
        return (
          <Step2
            handleMinusClick={handleMinusClick}
            handlePlusClick={handlePlusClick}
            ageRange={ageRange}
          />
        );
      case 3:
        return (
          <Step3 onGenderChange={handleGenderChange} data={responses.gender} />
        );
      case 4:
        return (
          <Step4
            answer1={responses.annualIncome}
            onChange1={handleChange("annualIncome")}
            answer2={responses.percentToProvide}
            onChange2={handleChange("percentToProvide")}
          />
        );
      case 5:
        return (
          <Step5
            answer={responses.yearsToProvide}
            onChange={handleChange("yearsToProvide")}
          />
        );
      case 6:
        return (
          <Step6
            answer={responses.eliminateDebt}
            onChange={handleChange("eliminateDebt")}
          />
        );
      case 7:
        return (
          <Step7
            answer={responses.childcare}
            onChange={handleChange("childcare")}
          />
        );
      case 8:
        return (
          <Step8
            answer={responses.extendedHealthcare}
            onChange={handleChange("extendedHealthcare")}
          />
        );
      case 9:
        return (
          <Step9
            childrenData={responses.children}
            onAddChild={handleAddChild}
          />
        );
      case 10:
        return (
          <Step10
            answer={responses.emergencyFund}
            onChange={handleChange("emergencyFund")}
          />
        );
      case 11:
        return (
          <Step11
            answer={responses.lifeInsurance}
            onChange={handleChange("lifeInsurance")}
          />
        );
      case 12:
        return (
          <Step12
            onTypeChange={handlePersonalOrEmployer}
            data={responses.personalOrEmployer}
          />
        );
      case 13:
        return (
          <Step13
            onTypeChange={handleTypeOfInsurance}
            data={responses.typeOfInsurance}
          />
        );

      default:
        return null;
    }
  };

  const renderCard = (step: number) => {
    switch (step) {
      case 1:
        return (
          <Card1/>
        );
      case 2:
        return (
          <Card2/>
        );
      case 3:
        return (
          <Card3/>
        );
      case 4:
        return (
          <Card4/>
        );
      case 5:
        return (
          <Card5/>
        );
      case 6:
        return (
          <Card6/>
        );
      case 7:
        return (
          <Card7/>
        );
      case 8:
        return (
          <Card8/>
        );
      case 9:
        return (
          <Card9/>
        );
      case 10:
        return (
          <Card10/>
        );
      case 11:
        return (
          <Card11/>
        );
      case 12:
        return (
          <Card12/>
        );
      case 13:
        return (
          <Card13/>
        );

      default:
        return null;
    }
  };

  const handleButtonClick = () => {
    if (step < 13) {
      setStep(step + 1);
      setSliderValue((prev) => (prev <= 100 ? prev + 7.4 : 100));
    } else {
      setLoading(true);
      // Simulate an API call with a delay
      setTimeout(() => {
        
        router.push('/calculator-results'); // Navigate to calculator-results route
      }, 3000); // 3 seconds delay
    }
  };

  const handleBackButtonClick = () => {
    if (step > 1) setStep(step - 1);
    setSliderValue((prev) => (prev > 7.4 ? prev - 7.4 : 7.4)); // Increase slider value by 10% each click
  };

  console.log(responses);

  return (
    <div>
      {loading ? (
        <>
          <LoaderHeader />
          <div className="h-screen flex items-center justify-center w-full bg-[#00262B]">
            {" "}
            <div className="flex flex-col items-center text-center">
              <p className="font-halyard text-lg text-[#E3E572]">
                FINALIZAING CALCULATIONS
              </p>
              <p className="font-jubilee text-8xl text-[#F9F1EC]">
                Eugene’s Personal Wealth Potential
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <section className="flex flex-col h-screen  lg:flex-row mb-10 lg:mb-0 text-[#00262B] ">
            <div className="w-full flex flex-col mt-[20px] lg:mt-[140px] relative px-5  xl:px-[80px]">
              <Slider sliderValue={sliderValue} />

              <div
                className={`transition-opacity duration-500 text-[#00262B] ease-in-out mt-[40px] inset-0 opacity-100`}
              >
                {renderStep(step)}
              </div>
              <div className="xl:absolute mt-[50px] xl:bottom-20 2xl:bottom-24 text-[18px] gap-[20px] left-0 right-0 mx-auto flex justify-center">
                <button
                  className={`px-[34px] py-[12px]  rounded-lg ${
                    step > 1
                      ? "border border-[#00555A] text-[#00555A]"
                      : "bg-[#C7C1BD] text-[#7D7976]"
                  }`}
                  onClick={handleBackButtonClick}
                  disabled={step === 1}
                >
                  Back
                </button>
                {step < 13 ? (
                  <button
                    className="px-[34px] py-[12px] rounded-lg bg-[#00555A] text-white ml-2"
                    onClick={handleButtonClick}
                  >
                    {step === 1 ? "Start" : "Next"}
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
            <div className="w-full lg:w-full h-full lg:mt-0 lg:block hidden">
              {/* <div className="relative w-full h-screen">
                <div className="relative hidden lg:block w-full h-screen shadow-overlay">
                  <Image
                    src="/images/Family.jpg"
                    alt="HeroImg"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 flex items-end mb-20 justify-center">
                  <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 lg:p-8 bg-[#003336] text-white rounded-xl">
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl mb-4">
                      “I realized that getting life insurance for myself, my
                      mom, and my child will create endless opportunities and
                      change our family story forever!”
                    </p>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-sm sm:text-base lg:text-lg">
                          Pamela N, 38
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base">
                          Wealth & Equity customer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {renderCard(step)}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
