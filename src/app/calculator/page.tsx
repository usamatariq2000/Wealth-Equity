"use client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
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
import Card14 from "../components/Calculator/Cards/Card14";
import LoaderHeader from "../components/Calculator/LoaderHeader";
import { useRouter } from "next/navigation";
import Step14 from "../components/Calculator/Steps/Step14";
import api from "../services/api";
import AuthContext from "../context/AuthContext";
import { stringify } from "querystring";

export default function LifeInsurance() {
  interface Child {
    age: string;
    schoolType: string;
    amount: string;
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
    finalExpense: string;
    children: Child[];
  }

  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(8);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [userString, setUserString] = useState<any>("");
  const [responses, setResponses] = useState<QuizResponse>({
    firstName: "",
    email: "",
    age: "18-24",
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
    finalExpense: "",
    children: [],
  });

  const isStepValid = () => {
    if (step === 1) {
      return responses.firstName !== "" && responses.email !== "";
    }
    if (step === 3) {
      return responses.gender !== "";
    }
    if (step === 4) {
      return responses.annualIncome !== "" && responses.percentToProvide !== "";
    }
    if (step === 5) {
      return responses.yearsToProvide !== "";
    }
    if (step === 6) {
      return responses.eliminateDebt !== "";
    }
    if (step === 7) {
      return responses.childcare !== "";
    }
    if (step === 8) {
      return responses.extendedHealthcare !== "";
    }
    if (step === 10) {
      return responses.emergencyFund !== "";
    }
    if (step === 11) {
      return responses.lifeInsurance !== "";
    }
    if (step === 12) {
      return responses.finalExpense !== "";
    }
    if (step === 13) {
      return responses.personalOrEmployer !== "";
    }
    if (step === 14) {
      return responses.typeOfInsurance !== "";
    }

    return true;
  };

  const [ageRange, setAgeRange] = useState<any>({ min: 18, max: 24 });

  useEffect(() => {
    let user: any = localStorage.getItem("user");

    setUserString(JSON.parse(user))
  }, []);

  console.log('user',userString)


  // const user = JSON?.parse(userString);

  const handleChange =
    (step: keyof QuizResponse) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // Email validation
      if (step === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setEmailError("Please enter a valid email address.");
        } else {
          setEmailError("");
        }
      }

      setResponses((prevResponses) => ({
        ...prevResponses,
        [step]: value,
      }));
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
            emailError={emailError}
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
          <Step14
            answer={responses.finalExpense}
            onChange={handleChange("finalExpense")}
          />
        );
      case 13:
        return (
          <Step12
            onTypeChange={handlePersonalOrEmployer}
            data={responses.personalOrEmployer}
          />
        );
      case 14:
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
        return <Card1 />;
      case 2:
        return <Card2 />;
      case 3:
        return <Card3 />;
      case 4:
        return <Card4 />;
      case 5:
        return <Card5 />;
      case 6:
        return <Card6 />;
      case 7:
        return <Card7 />;
      case 8:
        return <Card8 />;
      case 9:
        return <Card9 />;
      case 10:
        return <Card10 />;
      case 11:
        return <Card11 />;
      case 12:
        return <Card14 />;
      case 13:
        return <Card12 />;
      case 14:
        return <Card13 />;

      default:
        return null;
    }
  };

  const handleButtonClick = async () => {
    if (step < 14) {
      setStep(step + 1);
      setSliderValue((prev) => (prev <= 100 ? prev + 6.8 : 100));
    } else {
      setLoading(true);
      try {
        if (userString) {
          const checkResponse = await api.post("/calculate/check-result", {
            userId: userString?.id
          });

          if (checkResponse.status === 200) {
            // Result exists, update the existing result
            const updateResponse = await api.post("/calculate/update-result", {
              userId: userString?.id,
              quizResponses: responses,
            });

            if (updateResponse.status === 200) {
              router.push("/calculator-results");
            } else {
              console.error(updateResponse.data.error);
            }
          }
        } else {
          const createResponse = await api.post(
            "/auth/createUserAndSaveResults",
            {
              email: responses.email,
              firstName: responses.firstName,
              quizResponses: responses,
            }
          );

          if (createResponse.status === 201) {
            const token = createResponse.data.token;
            if (token) {
              localStorage.setItem("token", token);
              router.push("/calculator-results");
            }
          } else {
            console.error(createResponse.data.error);
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleBackButtonClick = () => {
    if (step > 1) setStep(step - 1);
    setSliderValue((prev) => (prev > 6.8 ? prev - 6.8 : 6.8));
  };

  console.log("Response Console", responses);

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
                {responses.firstName}'s Personal Wealth Potential
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <section className="flex flex-col min-h-screen  lg:flex-row mb-10 lg:mb-0 text-[#00262B] ">
            <div className="w-full flex flex-col mt-[20px] lg:mt-[140px] relative px-5  xl:px-[80px]">
              <Slider sliderValue={sliderValue} />

              <div
                className={`transition-opacity duration-500 min-h-auto text-[#00262B] ease-in-out mt-[40px] inset-0 opacity-100`}
              >
                {renderStep(step)}
              </div>
              <div className="xl:absolute mt-[50px] xl:bottom-14 2xl:bottom-24 text-[18px] gap-[20px] left-0 right-0 mx-auto flex justify-center">
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
                {step < 14 ? (
                  <button
                    className={`px-[34px] py-[12px] rounded-lg ml-2 ${
                      isStepValid()
                        ? "bg-[#00555A] text-white"
                        : "bg-[#00555A] text-white opacity-50 cursor-not-allowed"
                    }`}
                    onClick={handleButtonClick}
                    disabled={!isStepValid()}
                  >
                    {step === 1 ? "Start" : "Next"}
                  </button>
                ) : (
                  <button
                    className={`px-[34px] py-[12px] rounded-lg ml-2 ${
                      isStepValid()
                        ? "bg-[#00555A] text-white"
                        : "bg-[#00555A] text-white opacity-50 cursor-not-allowed"
                    }`}
                    onClick={handleButtonClick}
                    disabled={!isStepValid()}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
            <div className="w-full lg:w-full h-full lg:mt-0 lg:block hidden">
              {renderCard(step)}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
