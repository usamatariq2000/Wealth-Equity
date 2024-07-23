"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SmallPyramid from "./components/small-pyramid";
import { FaChevronRight } from "react-icons/fa";
import BarChart from "../BarChart";

export const items = [
  { id: 1, label: "Income Replacement", amount: "$300,000" },
  { id: 2, label: "Debt Elimination", amount: "$150,000" },
  { id: 3, label: "Childcare", amount: "$100,000" },
  { id: 4, label: "Extended Healthcare", amount: "$100,000" },
  { id: 5, label: "Education Fund", amount: "$300,000" },
  { id: 6, label: "Emergency Fund", amount: "$150,000" },
  { id: 7, label: "Final Expenses", amount: "$30,000" },
];

const CalculatorResults = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [animate, setAnimate] = useState(false);

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

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen w-full">
      <div className="w-full flex items-start justify-center bg-[#00555A] lg:pt-44 py-16">
        <div className="w-[80%] flex flex-col gap-2.5 md:gap-4">
          <p className="text-[#F9F1EC] font-jubilee font-normal text-3xl md:text-5xl">
            Eugene, here’s your Personal Wealth Potential:
          </p>
          <p className="text-[80px] md:text-[140px] text-[#FCFF7F] font-jubilee">
            $1.13M
          </p>
          <p className="text-halyard text-base md:text-xl text-[#F9F1EC]">
            Your life insurance coverage is currently{" "}
            <span className="text-[#FCFF7F]">$150K</span> , which means you’re
            leaving{" "}
            <span className="text-[#FCFF7F]">$980K of unprotected wealth </span>
            on the table.
          </p>
          <p className="text-halyard text-base md:text-xl text-[#F9F1EC]">
            {"<<"} Please note: you should consider purchasing additional
            coverage today in case anything happens to you {">>"}
          </p>
          <div className="flex gap-4">
            <button className="bg-[#FCFF7F] md:px-3 md:py-4 p-2 rounded-lg">
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

      <div className="w-full flex justify-center items-start bg-[#F9F1EC] lg:overflow-y-auto lg:pt-44 py-16">
        <div className="w-[80%] flex flex-col gap-5">
          <p className="uppercase text-halyard text-md font-semibold">
            Recommended Life Avenue
          </p>
          <div className="flex md:flex-row flex-col bg-[#003336] items-center md:items-start rounded-lg gap-2 p-6">
            <div className="w-[30%]">
              <SmallPyramid />
            </div>
            <div className="flex flex-col gap-4 w-[70%] text-[#F9F1EC]">
              <p className="md:text-5xl text-2xl font-jubliee font-normal">
                Protect
              </p>
              <p className="font-halyard font-light text-xs md:text-base">
                Build your financial foundations. Cover what you earn, what you
                own, and what you owe to protect those you love the most.
              </p>
            </div>
          </div>
          <p className="uppercase text-halyard text-sm font-semibold mt-10">
            Gap Analysis
          </p>
          <p className="text-halyard text-sm md:text-base font-light">
            Based on your selected financial goals and wealth bridge needs,
            let’s see how you stack up—using group comparisons.
          </p>
          <p className="font-bold text-5xl">
            <BarChart />
          </p>

          <p className="uppercase text-halyard text-sm font-semibold mt-10">
            Your PwP Breakdown
          </p>
          <p className="text-halyard text-sm md:text-base font-light">
            You can edit the values you entered below. See how your long-term
            financial roadmap can change based on different adjustments.
          </p>
          <div className="h-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#FCF8F5] flex rounded-lg p-4 justify-between items-center mb-2"
              >
                <div className="flex gap-4">
                  {/* <FaChevronRight className="text-[#7D7976]" /> */}
                  <FaChevronRight className="text-[#00555A]" />
                  <p className="text-sm md:text-base text-[#00555A] font-500 font-halyard">
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
