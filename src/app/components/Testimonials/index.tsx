"use client";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import VideoCard from "./components/VideoCard";


const Testimonials = () => {
  const stories = [
    {
      name: "Veronica L.",
      quote:
        "My parents didn’t have life insurance, and I saw firsthand the strain it put on our family. I didn’t want my children to go through the same thing. My new policy not only covers final expenses, but also leaves a legacy for my kids.",
      city: "Miami",
      state: "FL",
      img: "/images/veronica.png",
    },
    {
      name: "Diane B.",
      quote:
        "As parents of three small children, my husband and I always worried about how we’d manage if something happened to one of us. W&E was a lifesaver, and set us up with a comprehensive policy that covered all our bases.",
      city: "Houston",
      state: "TX",
      img: "/images/diane.png",
    },
    {
      name: "Corey T.",
      quote:
        "I run a small business, and Wealth & Equity helped me understand how life insurance can help protect what I’ve built. My policy covers my business debts and ensures my hard work will support the people I love for years to come.",
      city: "Brooklyn",
      state: "NY",
      img: "/images/Shawn.png",
    },
    {
      name: "James L.",
      quote:
        "After we lost our beloved pet, we realized that Wealth & Equity insurance could help our family in ways we hadn’t even imagined.",
      city: "Los Angeles",
      state: "CA",
      img: "/images/veronica.png",
    },
    {
      name: "Emily W.",
      quote:
        "Wealth & Equity helped us create a safety net for our family, so we can focus on living life to the fullest.",
      city: "Chicago",
      state: "IL",
      img: "/images/corey.png",
    },
    {
      name: "Michael T.",
      quote:
        "I was hesitant to buy life insurance, but Wealth & Equity made it easy and affordable. Now I can rest easy knowing my family is protected.",
      city: "San Francisco",
      state: "CA",
      img: "/images/diane.png",
    },
    {
      name: "Sarah K.",
      quote:
        "Wealth & Equity’s customer service is top-notch. They helped me find the perfect policy for my needs and budget.",
      city: "Denver",
      state: "CO",
      img: "/images/veronica.png",
    },
    {
      name: "John D.",
      quote:
        "I was surprised by how easy it was to get life insurance through Wealth & Equity. The process was quick and painless.",
      city: "Seattle",
      state: "WA",
      img: "/images/corey.png",
    },
  ];

  const sliderRef = useRef<any>(null);

  const settings = {
    slidesToShow: 4, // Show 4 items
    slidesToScroll: 4, // Scroll 4 items at a time
    arrows:false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className=" mt-20 h-auto mb-10">
      <div className="w-full flex items-center justify-between px-6 md:px-16">
        <div className="text-left mb-12 text-[#00262B]">
          <p className="text-[16px] mb-3 font-bold font-halyard">Family Stories</p>
          <h2 className="text-5xl font-jubilee text-[#003336]">
            Hear from Wealth & Equity customers
            <br /> about how{" "}
            <div className="parallelogram bg-[#FCFF7F] inline-block mr-2">
              <p className="md:pr-3">life insurance changes lives</p>
            </div>
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#FCFF7F] p-2 rounded-full" onClick={handlePrev}>
            <GoArrowLeft size={30} />
          </button>
          <button className="bg-[#FCFF7F] p-2 rounded-full" onClick={handleNext}>
            <GoArrowRight size={30} />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} >
        {stories.map((story, index) => (
          <div key={index} className="mx-10 flex gap-10 ">
          <VideoCard story={story} />
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

