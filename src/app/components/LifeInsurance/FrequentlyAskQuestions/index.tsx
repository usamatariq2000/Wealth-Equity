"use client";
import React, { useState } from "react";


const FrequentlyAskQuestions = () => {
  const dropdown2 = [
    {
      title: "What is life insurance?",
      description:
        "LIke purchasing insurance coverage on your car, house and phone to protect their values if lost or damaged, life insurance coverage should be purchased to protect the economic value of your life and your ability to work, in case you die unexpectedly, or fall ill. Considering that you will probably earn millions of dollars in your lifetime, this protection could be the most important financial product you'll ever buy.",
    },
    {
      title: "Why is life insurance important?",
      description:
        "Based on your Personal Wealth Potential, Wealth & Equity matches you with trusted insurers that have the solutions for your unique needs. Speak to our financial experts for additional ongoing support.",
    },
    {
      title: "Do I need coverage?",
      description:
        "Centuries of discrimination have held back our families, communities, businesses, and institutions from the wealth accumulation we deserve. We`re on a mission to end that ",
    },
    {
        title: "When should I get coverage?",
        description:
          "Centuries of discrimination have held back our families, communities, businesses, and institutions from the wealth accumulation we deserve. We`re on a mission to end that ",
      },
      {
        title: "What are different types of life insurance policies?",
        description:
          "Centuries of discrimination have held back our families, communities, businesses, and institutions from the wealth accumulation we deserve. We`re on a mission to end that ",
      },
      {
        title: "How much coverage should I have?",
        description:
          "Centuries of discrimination have held back our families, communities, businesses, and institutions from the wealth accumulation we deserve. We`re on a mission to end that ",
      },
  ];

  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});

  const handleToggle = (section: string) => {
    console.log(isOpen,"previous")
    setIsOpen((prevOpen :any) => ({
      ...prevOpen,
      [section]: !prevOpen[section],
    }));
  };
  return (
    <>
      <section className=" px-5 mb-10 lg:px-16 mt-[120px] min-h-screen text-center">
        <div className="flex sm:mx-[20%] xxs:mx-[10%] justify-between items-center">
          <h1 className="2xl:text-[64px] xl:text-[44px] md:text-[34px] sm:text-[24px] font-jubilee font-normal text-[#00262B] font-Ot-Jubilee ">
            Frequently asked
          </h1>
          <button className="md:w-[139px] font-halyard md:h-[48px] xxs:w-[100px] xxs:h-[48px] xxs:text-[12px] md:text-[16px] bg-[#00555A] rounded-md text-white ">
            View Full FAQ
          </button>
        </div>

        <div className="flex flex-col justify-center items-center w-[100%]">
          {dropdown2?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-center justify-center font-halyard cursor-pointer sm:w-[60%] xxs:w-[80%]  bg-[#FCF8F5] my-3 rounded-lg p-4 hover:bg-black/5 hover:transition-all hover:duration-300  hover:ease-in-out"
              onClick={() => handleToggle(item?.title)}
            >
              <button
                className="text-left sm:text-2xl xxs:text-sm flex justify-between items-center   cursor-pointer font-medium text-[#00555A]"
                
              >
                {item?.title}  <span className="bg-[#F9F1EC]  w-10 h-10 flex justify-center items-center rounded-md text-[#00555A] hover:bg-black/5"> { isOpen[item?.title] ? 'x' :'+'}</span>
              </button>
              <div
                className={`overflow-hidden text-lg font-base text-left transition-all duration-300  ease-in-out 
                ${
                 isOpen[item?.title]
                    ? "max-h-[1000px] opacity-100 pt-4"
                    : "max-h-0 opacity-0"
                }`}
                style={{
                  maxHeight:  isOpen[item?.title] ? "100vh" : "0",
                }}
              >
                <div>
                  <p>{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FrequentlyAskQuestions;
