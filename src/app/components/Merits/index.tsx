'use client';

import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import MarqueeComponent from './components/marquee'
const data = [
  "Downpayments for homes",
  "College and trade school educations finished",
  "Businesses started and supported",
  "Retirements supplemented",
  "Living benefits for terminal, critical, or chronic illness",
  "Living benefits for critical injury",
  "Bank deposits",
  "Church tithing",
  "Charitable giving",
  "Institutional and organizational endowments",
  "Downpayments for homes",
  "College and trade school educations finished",
  "Businesses started and supported"
];

const Merits: React.FC = () => {
  const [items, setItems] = useState<string[]>(data);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center px-2 lg:px-10  lg:mt-0  md:h-[85rem] lg:h-[100vh]">
      <div className="w-full mx-8 flex justify-center items-center ">
        <div className="bg-[#FDFFBF] text-[#00262B] mt-12 md:my-12 aspect-square md:aspect-square rounded-full flex flex-col items-center justify-center text-center p-12 lg:p-6  flex-wrap"
        >
          <p className="flex flex-wrap items-center justify-center text-[12px] lg:text-xs xl:text-[16px] lg:mb-4 font-halyard px-6 md:px-12">
            <span className='font-bold'>OUR SOLUTION: </span>THE $500 BILLION WEALTH GAP BRIDGE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-0 md:gap-8 lg:gap-1 xl:gap-4 lg:mb-4">
            <div className="text-center">
              <p
                className="text-[14px] md:text-4xl lg:text-3xl xl:text-[46px] leading-6 lg:leading-2 xl:leading-10 2xl:leading-[56px] font-jubilee"
                style={{ letterSpacing: "-1.5%" }}
              >
                1M
              </p>
              <p className='text-[14px] md:text-base font-medium'>Families</p>
            </div>
            <div className="md:text-4xl lg:text-[25px] xl:text-[40px] font-bold mx-2">x</div>
            <div className="text-center">
              <p
                className=" text-[14px] md:text-4xl lg:text-3xl xl:text-[46px] leading-6 lg:leading-2 xl:leading-10 2xl:leading-[56px] font-jubilee"
                style={{ letterSpacing: "-1.5%" }}
              >
                $500K
              </p>
              <p className='text-[14px] md:text-base font-medium'>Life Insurance</p>
            </div>
            <div className="md:text-4xl lg:text-3xl xl:text-[40px] font-bold mx-2">=</div>
            <div className="text-center">
              <p
                className="text-[14px] md:text-4xl lg:text-3xl xl:text-[46px] leading-6 lg:leading-2 xl:leading-10 2xl:leading-[56px] font-jubilee"
                style={{ letterSpacing: "-1.5%" }}
              >
                $500B
              </p>
              <p className='text-[14px] md:text-base font-medium'>Future Income</p>
            </div>
          </div>
          <p
            className="text-[20px] md:text-4xl lg:text-[4xl] xl:text-[52px] font-jubilee mt-4 leading-6 lg:leading-10 xl:leading-[56px] lg:px-6 px-2"
            style={{ letterSpacing: "-1.5%" }}
          >
            Think what we could do with $500B of tax-free, transferrable
            wealth:
          </p>
        </div>
      </div>

      <div className="w-full h-[600px] mobile:h-[1000px] md:h-[1500px] lg:h-full mx-4 overflow-hidden z-10">
        <MarqueeComponent />
      </div>
    </div>
  );
};

export default Merits;
