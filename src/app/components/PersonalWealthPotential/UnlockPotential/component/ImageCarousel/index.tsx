import Image from "next/image";
import React from "react";

const ImageCarousel = () => {
  const testimonials = [
    {
      text: "“I like to remind my clients that PWP isn't just about a number—it's the start of a roadmap for your family's future, even if you’re not there.”",
      name: "Leanne K",
      location: "Wealth & Equity Advisor",
      image: "icons/womenwithlaptop.svg",
      profile: "/icons/avatar1.svg",
    },
  ];

  return (
    <div className="relative h-full">
  <div className="lg:absolute inset-0 flex items-center justify-center">
    <div className="relative flex items-center w-full h-full">
      <img
        src={testimonials[0].image}
        alt={testimonials[0].name}
        className="object-cover w-full h-[70%] rounded-lg "
      />
      <div className="absolute top-0 lg:left-[-100px] xxs:left-0">
        <div className="absolute lg:top-[170px] top-[36px] left-0 space-y-3">
          <div className="flex justify-between items-center xxs:w-56 sm:w-72 bg-[#FCF8F5] xxs:p-3 sm:p-4 rounded-lg custom-shadow">
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/icons/babycarriage.svg"
                alt="childcare"
                width={10}
                height={10}
                className="w-6 h-6"
              />
              <p className="text-base text-[#00555A] font-medium">Childcare</p>
            </div>
            <div>
              <p className="text-base font-normal text-[#569B9B]">$50,000</p>
            </div>
          </div>
        </div>
        <div className="absolute lg:top-[95px] xxs:left-6 sm:left-6 xxs:-top-[25px] sm:-top-[30px] space-y-3">
          <div className="flex justify-between items-center xxs:w-56 sm:w-72 bg-[#FCF8F5] xxs:p-3 sm:p-4 rounded-lg custom-shadow">
            <div className="flex justify-center items-center gap-3">
              <Image
                src="/icons/heartbeat.svg"
                alt="healthcare"
                width={10}
                height={10}
                className="w-6 h-6"
              />
              <p className="text-base text-[#00555A] font-medium">Healthcare</p>
            </div>
            <div>
              <p className="text-base font-normal text-[#569B9B]">$75,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute lg:bottom-20 md:-bottom-8 xxs:bottom-[-20px] lg:left-[-100px] xxs:left-0 xl:w-[450px] lg:w-[350px] md:w-[350px] xxs:w-[300px] right-0 p-4 py-6 pr-3 bg-[#003336] text-white rounded-lg">
        <p className="lg:text-[15px] md:text-[12px] xxs:text-[10px] mb-4 font-light font-halyard">
          {testimonials[0].text}
        </p>
        <div className="flex xl:items-center">
          <img
            src={testimonials[0].profile}
            alt={testimonials[0].name}
            className="lg:w-14 lg:h-14 xxs:w-10 xxs:h-10 rounded-full mr-4"
          />
          <div>
            <p className="font-semibold lg:text-[15px] md:text-[12px] xxs:text-[10px]">
              {testimonials[0].name}
            </p>
            <p className="text-sm lg:text-[15px] md:text-[12px] xxs:text-[10px]">
              {testimonials[0].location}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default ImageCarousel;
