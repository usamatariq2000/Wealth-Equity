"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "“Term life insurance covers a specific time period, making it ideal for short-term needs like paying off a mortgage or funding your kid’s education.”.”",
    name: "Jeremy P",
    location: "Wealth & Equity Advisor",
    image: "images/Jeremy.png",
    profile: "images/Ellipse112.png",
  },
  {
    text: "This service has drastically improved my financial stability and given me confidence in my future investments.",
    name: "Alex J",
    location: "New York, NY",
    image: "images/Jeremy.png",
    profile: "images/Ellipse112.png",
  },
  // Add more testimonials as needed
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("term"); // 'term' or 'permanent'

  const handleNext = () => {
    const nextIndex = (index + 1) % testimonials.length;
    setIndex(nextIndex);
    setActiveButton(nextIndex === 0 ? "term" : "permanent");
  };

  const handleButtonClick = (buttonType: any) => {
    setActiveButton(buttonType);
    setIndex(buttonType === "term" ? 0 : 1);
  };

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:absolute inset-0 flex items-center justify-center"
        >
          <div
            className="bg-cover bg-center bg-no-repeat object-contain w-[38rem] h-[28rem] lg:w-[95%] lg:h-[65%] xl:w-[80%] xl:h-[65%] p-6 rounded-2xl"
            style={{ backgroundImage: `url(${testimonials[index].image})` }}
          >
            <div className="flex w-full justify-between font-light-haylard font-bold gap-2">
              <button
                className={`text-[12px]  lg:text-[11px] xl:text-[14px] 2xl:text-[18px] rounded-lg flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-4 ${
                  activeButton === "term"
                    ? "bg-[#F9F1EC] text-[#00262b]"
                    : "bg-[#7d7976] text-[#F9F1EC] opacity-75"
                }`}
                onClick={() => handleButtonClick("term")}
              >
                <img
                  src="icons/Marker.svg"
                  className={`object-contain ${
                    activeButton !== "term" && "hidden"
                  }`}
                />
                <p className="">Term life insurance</p>
              </button>
              <button
                className={`text-[12px] lg:text-[11px] xl:text-[14px] 2xl:text-[18px] rounded-lg flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-4 ${
                  activeButton === "permanent"
                    ? "bg-[#F9F1EC] text-[#00262b]"
                    : "bg-[#7d7976] text-[#F9F1EC] opacity-75"
                }`}
                onClick={() => handleButtonClick("permanent")}
              >
                <img
                  src="icons/Marker.svg"
                  className={`object-contain ${
                    activeButton !== "permanent" && "hidden"
                  }`}
                />
                <p className="">Permanent life insurance</p>
              </button>
            </div>
          </div>
          <div className="absolute left-0 w-[80%] md:w-[65%] lg:w-[75%] bottom-[-40px] sm:bottom-1 md:bottom-2 lg:bottom-16 xl:bottom-32 lg:left-[-1rem] right-0 p-4 py-6 pr-3 bg-[#003336] text-white rounded-lg">
            <p className="text-[12px] sm:text-[14px] md:text-[18px] mb-4 font-light font-halyard">
              {testimonials[index].text}
            </p>
            <div className="flex items-center">
              <div
                className="w-14 h-14 rounded-full mr-4 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${testimonials[index].profile})`,
                }}
              ></div>
              <div>
                <p className="font-semibold">{testimonials[index].name}</p>
                <p className="text-sm">{testimonials[index].location}</p>
              </div>
              <button
                onClick={handleNext}
                className="absolute bottom-20 right-[-20px] bg-[#FCFF7F] hover:bg-[#f8ffb4] p-3 rounded-full"
              >
                <FaArrowRight size={16} color="black" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
