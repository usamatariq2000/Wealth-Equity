'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Content {
  header: string;
  subheader: string;
  description: string;
  button: string;
}

interface Stat {
  value: string;
  height: string;
  bgColor: string;
  txtColor: string;
}

const Consumer: React.FC = () => {
  const content: Content = {
    header: "The typical White family holds about five to six times the wealth of the typical Black or Hispanic family.",
    subheader: "From the 2022 Survey of Consumer Finances ",
    description: "Wealth & Equity is ready to help every family close these wealth gaps using life insurance.",
    button: "Read more"
  };

  const stats: Stat[] = [
    { value: "$45,000", height: "50px", bgColor: "#FDFFBF", txtColor: "#00272c" },
    { value: "$66,000", height: "70px", bgColor: "#FCFF7F", txtColor: "#00272c" },
    { value: "$287,000", height: "400px", bgColor: "#569B9B", txtColor: "#faf1ec" }
  ];

  const statVariants = {
    hidden: { height: 0, transformOrigin: 'bottom' },
    visible: (custom: string) => ({
      height: custom,
      transformOrigin: 'bottom',
      transition: { duration: 1 }
    })
  };

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation should trigger only once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  return (
    <div ref={ref} className='h-full mx-4 md:mx-16 rounded-[24px] bg-[#00555A]'>
      <div className='flex flex-col h-full lg:flex-row items-end justify-between'>
        <div className='p-4 lg:p-10 flex-1'>
          <div className="w-full flex flex-col justify-center">
            <p className="text-white uppercase font-halyard font-light tracking-wider leading-14 py-2 tracking-tighter text-left text-xs md:text-[14px] ">
              {content.subheader}
            </p>
            <h1 className="text-3xl md:text-[56px] font-jubilee text-[white] leading-[40px] lg:leading-[65px] tracking-[5px]" style={{ lineHeight: '65px', letterSpacing: '-1.5px' }} >
              The typical White family holds about  <div className="parallelogram1 bg-[#FCFF7F] inline-block"><p className="md:mr-2 text-[#00171a]">five to six times</p></div> the wealth of the typical Black or Hispanic family.
            </h1>
            <p className="text-lg mb-6 font-light font-light-haylard text-white mt-3">
              {content.description}
            </p>
            <button className="px-4 py-3 font-halyard font-bold mt-3 bg-[#FCFF7F] text-[#00262B] rounded-lg w-fit hover:bg-white">
              {content.button}
            </button>
          </div>
        </div>
        <div className='flex-1 w-full h-full flex items-end'>
          <div className='flex w-full justify-between items-end gap-5 p-10 h-full'>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className='w-1/3 rounded-lg flex flex-col items-center overflow-hidden px-2'
                custom={stat.height}
                initial={{ height: 0, opacity: 0 }} // Start with height 0 and opacity 0
                animate={inView ? { height: stat.height, opacity: 1 } : { height: 0, opacity: 0 }} // Animate to height and full opacity
                transition={{ duration: 1, ease: "linear" }} // Linear transition
                style={{ backgroundColor: stat.bgColor }}
              >
                <div className='flex items-center justify-center w-full mt-3'>
                  <p className='font-bold text-[12px] lg:text-base md:text-xl font-halyard' style={{ color: stat.txtColor }}>{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumer;

