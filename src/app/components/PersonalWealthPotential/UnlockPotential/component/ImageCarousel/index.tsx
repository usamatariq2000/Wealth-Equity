'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "“Term life insurance covers a specific time period, making it ideal for short-term needs like paying off a mortgage or funding your kid’s education.”.”",
    name: "Jeremy P",
    location: "Wealth & Equity Advisor ",
    image: "images/Jeremy.png",
    profile: "/images/Ellipse 112.png"
  },
  {
    text: "This service has drastically improved my financial stability and given me confidence in my future investments.",
    name: "Alex J",
    location: "New York, NY",
    image: "images/Jeremy.png",
    profile: "/images/Ellipse 112.png"
  },
  // Add more testimonials as needed
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative h-full">
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:absolute inset-0 flex items-center justify-center" // Center the image
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            className=" lg:!w-full md:w-[400px] xxs:w-[350px]" // Fixed height and width, prevent overflow
          />
          <div className="absolute lg:bottom-20 md:bottom-1 xxs:bottom-[-20px] lg:left-[-100px] md:left-20 sm:left-20 xxs:left-[-10px]  xl:w-[450px] lg:w-[350px] md:w-[350px]  xxs:w-[300px]  right-0 p-4 py-6 pr-3 bg-[#003336] text-white rounded-lg">
            <p className="lg:text-[15px] md:text-[12px] xxs:text-[10px] mb-4 font-light font-halyard">
              {testimonials[index].text}
            </p>
            <div className="flex items-center">
              <img src={testimonials[index].profile} alt={testimonials[index].name} className="lg:w-14 lg:h-14 xxs:w-10 xxs:h-10 rounded-full mr-4" />
              <div>
                <p className="font-semibold lg:text-[15px] md:text-[12px] xxs:text-[10px]">{testimonials[index].name}</p>
                <p className="text-sm lg:text-[15px] md:text-[12px] xxs:text-[10px]">{testimonials[index].location}</p>
              </div>
              <button
                onClick={handleNext}
                className="absolute bottom-20 right-[-20px] bg-[#FCFF7F] hover:bg-[#f8ffb4] p-3 rounded-full"
              >
                <FaArrowRight size={16} color='black' />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;

