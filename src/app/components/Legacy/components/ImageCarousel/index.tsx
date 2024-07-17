'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "The strategic shift in my insurance provides peace of mind, knowing my financial decisions today are securing a prosperous future for my kids.",
    name: "Shawn S",
    location: "Atlanta, GA",
    image: "images/Shawn.png",
    profile: "/images/Ellipse 11.png"
  },
  {
    text: "This service has drastically improved my financial stability and given me confidence in my future investments.",
    name: "Alex J",
    location: "New York, NY",
    image: "images/Shawn.png",
    profile: "/images/Ellipse 11.png"
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
            className=" object-contain" // Fixed height and width, prevent overflow
          />
          <div className="absolute bottom-20 left-0 w-[400px] right-0 p-4 bg-[#003336] text-white rounded-xl">
            <p className="text-lg mb-4">
              {testimonials[index].text}
            </p>
            <div className="flex items-center">
              <img src={testimonials[index].profile} alt={testimonials[index].name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-semibold">{testimonials[index].name}</p>
                <p className="text-sm">{testimonials[index].location}</p>
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

