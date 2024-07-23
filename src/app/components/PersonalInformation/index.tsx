import Image from "next/image";
import React from "react";
import PersonalInformationForm from "../PersonalInformationForm";

const PersonalInformation = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 h-screen w-full">
      <div className="w-full flex items-start justify-center bg-[#00555A] lg:pt-44 py-16">
        <div className="md:w-[80%] w-[90%] flex flex-col justify-between h-full gap-2.5 md:gap-4">
          <div>
            <p className="text-[#F9F1EC] font-jubilee font-normal text-3xl md:text-[60px] md:leading-[56px]">
              One final step before receiving
              <span className="text-[#FCFF7F]"> your personalized plan</span>
            </p>
            <p className="text-halyard font-light text-base md:text-xl mt-8 text-[#F9F1EC]">
              We just need a few more details. This will help us match you with
              plans from trusted insurers, tailored to your needs.
            </p>
          </div>
          <div className="bg-[#00262B]  p-6 rounded-lg md:mt-20">
            <p className="text-[#F9F1EC]">
              “By understanding your health history and lifestyle, we can offer
              policies that are comprehensive and fairly priced, ensuring you
              and your loved ones receive the best possible protection. We’ll
              show you how{" "}
              <span className="text-[#FCFF7F]">
                purchasing a term policy can complete the first step of your
                Financial Protection and Inheritance Plan.”
              </span>
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div>
                <Image
                  src="/images/Ellipse 11.png"
                  alt="user image"
                  width={10}
                  height={10}
                  className="rounded-full w-10 h-1-"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#F9F1EC] text-base">Jeremy P</p>
                <p className="text-[#F9F1EC] text-base">
                  Wealth & Equity Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-start bg-[#F9F1EC] lg:overflow-y-auto lg:pt-44 md:py-16 py-8">
        <div className="md:w-[80%] w-[90%]">
          <PersonalInformationForm />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
