"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SmallPyramid from "./components/small-pyramid";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import BarChart from "../BarChart";
import api from "@/app/services/api";

const CalculatorResults = () => {
  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [result, setResult] = useState<any>([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
      const interval = setInterval(() => {
        setSliderValue((prev) => (prev < 15 ? prev + 1 : 15));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [inView]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await api.get("/calculate/results");
        console.log(response.data);
        setResult(response.data.results);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };

    fetchResults();
  }, []);

  const items = [
    {
      id: 1,
      icon: "/images/Vector.svg",
      label: "Income Replacement",
      amount: `$${(
        Number(result[0]?.annualIncome) *
        Number(result[0]?.percentToProvide) *
        Number(result[0]?.yearsToProvide)
      ).toLocaleString()}`,
    },
    {
      id: 2,
      icon: "/images/Vector (1).svg",
      label: "Debt Elimination",
      amount: `$${Number(result[0]?.eliminateDebt)?.toLocaleString()}`,
    },
    {
      id: 3,
      icon: "/images/Vector (2).svg",
      label: "Childcare",
      amount: `$${Number(result[0]?.childcare)?.toLocaleString()}`,
    },
    {
      id: 4,
      icon: "/images/Vector (3).svg",
      label: "Extended Healthcare",
      amount: `$${Number(result[0]?.extendedHealthcare)?.toLocaleString()}`,
    },
    {
      id: 5,
      icon: "/images/Vector (4).svg",
      label: "Education Fund",
      amount: `$${Number(result[0]?.emergencyFund)?.toLocaleString()}`,
    },
    {
      id: 6,
      icon: "/images/Vector (5).svg",
      label: "Emergency Fund",
      amount: `$${(
        result[0]?.children?.reduce(
          (sum:any, child:any) => sum + Number(child.amount),
          0
        )
      )?.toLocaleString()}`, // Inline sum and format
    },
    {
      id: 7,
      icon: "/images/Vector (7).svg",
      label: "Final Expenses",
      amount: `$${Number(result[0]?.finalExpense)?.toLocaleString()}`,
    },
  ];
  

  const handleButtonClick = () => {
    router.push("/personal-information");
  };

  const totalSum = items.reduce((total, item) => {
    // Extract numerical values from the amount strings
    const amountValue = Number(item?.amount.replace(/[^0-9.-]+/g, '')); // Remove non-numeric characters
    return total + amountValue;
  }, 0);
  
  // Subtract from lifeInsurance
  const lifeInsurance = Number(result[0]?.lifeInsurance?.replace(/[^0-9.-]+/g, '')) || 0;
  const finalAmount = totalSum - lifeInsurance;
  
  // Format the total sum for display
  const formatNumber = (num:any) => {
    if (num >= 1_000_000) {
      return `$${(num / 1_000_000).toFixed(2)}M`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };
  const formatInsuranceAndSum = (num:any) => {
    if (num >= 1_000_000) {
      return `$${(num / 1_000_000).toFixed(1)}m`;
    } else if (num >= 1_000) {
      return `$${(num / 1_000).toFixed(0)}k`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };
  
  const formattedTotal = formatNumber(finalAmount);
  const formattedLifeInsurance = formatInsuranceAndSum(lifeInsurance);
  const formattedSum = formatInsuranceAndSum(totalSum);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen w-full">
      <div className="w-full flex items-start justify-center bg-[#00555A] lg:pt-44 pt-16">
        <div className="w-[80%] flex flex-col gap-2.5 md:gap-4">
          <p className="text-[#F9F1EC] font-jubilee font-normal text-3xl md:text-6xl mb-4">
            {result[0]?.firstName}, here’s your Personal Wealth Potential:
          </p>
          <p className="text-[80px] md:text-[160px] text-[#FCFF7F] font-jubilee leading-none mb-4">
            {formattedTotal}
          </p>
          <p className="text-halyard text-base md:text-xl text-[#F9F1EC]">
            Your life insurance coverage is currently{" "}
            <span className="text-[#FCFF7F]">{formattedLifeInsurance}</span> , which means you’re
            leaving{" "}
            <span className="text-[#FCFF7F]">{formattedSum} of unprotected wealth </span>
            on the table.
          </p>

          <p className="text-halyard text-base md:text-xl mt-5 text-[#F9F1EC]">
            {"<<"} Please note: you should consider purchasing additional
            coverage today in case anything happens to you {">>"}
          </p>
          <div className="flex gap-4 mt-3">
            <button
              className="bg-[#FCFF7F] md:px-3 md:py-4 p-2 rounded-lg"
              onClick={handleButtonClick}
            >
              <p className="font-halard text-[#00262B] text-base md:text-lg font-medium">
                Explore quotes
              </p>
            </button>
            <button className="bg-transparent px-3 py-4 rounded-lg">
              <p className="font-halard text-[#F9F1EC] text-base md:text-lg font-medium transition-colors duration-300 hover:text-[#f9f1ec83]">
                Send email or text
              </p>
            </button>
          </div>
          <div ref={ref} className="w-full py-12">
            <div
              className="flex flex-row items-center"
              style={{ justifyContent: "space-between" }}
            >
              <div>
                <text className="text-[#FCFF7F] text-sm font-halyard uppercase">
                  {" "}
                  You are here
                </text>
              </div>
              <div>
                <text className="text-[white] text-sm font-halyard uppercase">
                  Your Total PwP
                </text>{" "}
              </div>
            </div>
            <div className="relative mt-4 w-full h-6 bg-teal-900 rounded-full overflow-hidden">
              <div
                className="absolute left-3 top-1.5 w-4 h-3  rounded-full transition-all duration-150"
                style={{ width: `${sliderValue}%`, backgroundColor: "#E3E572" }}
              />
              <div
                className="absolute top-0.5 left-0  w-5 h-5 bg-yellow-300 rounded-full transition-all duration-150"
                style={{ left: `${sliderValue}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-start bg-[#F9F1EC] lg:overflow-y-auto scrollbar-hide lg:pt-44 py-16">
        <div className="w-[80%] flex flex-col gap-5">
          <p className="uppercase text-[#00262B] font-halyard-text text-[17px] font-bold">
            Recommended Life Avenue
          </p>
          <div className="flex md:flex-row flex-col bg-[#003336] items-center md:items-start rounded-lg gap-1 p-6">
            <div className="w-[30%] hidden lg:block">
              <SmallPyramid />
            </div>
            <div className="flex flex-col gap-4 lg:w-[70%] text-[#F9F1EC]">
              <p className="md:text-6xl text-4xl font-jubilee  font-normal">
                Protect
              </p>
              <p className="font-halyard-text text-sm md:text-[18px] text-[#F9F1EC] font-medium">
                Build your financial foundations. Cover what you earn, what you
                own, and what you owe to protect those you love the most.
              </p>
            </div>
          </div>
          <p className="uppercase text-[#00262B] font-halyard-text text-[17px] mt-7 font-bold">
            Gap Analysis
          </p>
          <p className="font-halyard-text text-sm md:text-[17px] text-[#00262B] font-medium">
            Based on your selected financial goals and wealth bridge needs,
            let’s see how you stack up—using group comparisons.
          </p>
          <p className="font-bold text-5xl bg-[#FCF8F5] p-4 rounded-lg">
            <BarChart />
          </p>

          <p className="uppercase text-[#00262B] font-halyard-text text-[17px] mt-7 font-bold">
            Your PwP Breakdown
          </p>
          <p className="font-halyard-text text-sm md:text-[17px] text-[#00262B] font-medium">
            You can edit the values you entered below. See how your long-term
            financial roadmap can change based on different adjustments.
          </p>
          <div className="h-auto mt-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#FCF8F5] flex rounded-lg p-4 px-5 justify-between items-center mb-6 "
              >
                <div className="flex items-center gap-4 ">
                  <img
                    src={"/images/Vector (6).svg"}
                    alt={"chevron"}
                    className=" w-2 "
                  />
                  <img src={item.icon} alt={"card 1"} className="w-7 ml-2" />

                  <p className="text-sm md:text-base text-[#00555A] font-500 font-halyard-text font-bold">
                    {item.label}
                  </p>
                </div>
                <div>
                  <p className="text-sm md:text-base text-[#00555A]">
                    {item.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorResults;
