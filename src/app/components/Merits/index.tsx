'use client';

import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

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
    <div className="flex flex-col lg:flex-row justify-between items-center px-2 lg:px-10 mt-20 lg:mt-0">
      <div className="w-full lg:w-full px-10">
        <div className="bg-[#FDFFBF] rounded-full flex flex-col items-center justify-center text-center p-10"
          style={{ aspectRatio: '1', height: 'auto', width: '100%' }}>
          <p className="text-[14px] mb-4 font-halyard">
            OUR SOLUTION: THE $500 BILLION WEALTH GAP BRIDGE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 mb-4">
            <div className="text-center">
              <p
                className="text-[25px] lg:text-[56px] font-jubilee"
                style={{ lineHeight: "56px", letterSpacing: "-1.5%" }}
              >
                1M
              </p>
              <p>Families</p>
            </div>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>x</div>
            <div className="text-center">
              <p
                className="text-[25px] lg:text-[56px] font-jubilee"
                style={{ lineHeight: "56px", letterSpacing: "-1.5%" }}
              >
                $500K
              </p>
              <p>Life Insurance</p>
            </div>
            <div style={{ fontSize: '40px', fontWeight: 'bold' }}>=</div>
            <div className="text-center">
              <p
                className="text-[25px] lg:text-[56px] font-jubilee"
                style={{ lineHeight: "56px", letterSpacing: "-1.5%" }}
              >
                $500B
              </p>
              <p>Future Income</p>
            </div>
          </div>
          <p
            className="text-[25px] lg:text-[56px] font-jubilee"
            style={{ lineHeight: "56px", letterSpacing: "-1.5%" }}
          >
            Think what we could do with $500B of tax-free, transferrable
            wealth:
          </p>
        </div>
      </div>

      <div className="w-full h-[90vw] my-10 lg:my-4 lg:h-[45vw] relative">
      <Marquee 
        direction="up" 
        speed={50} 
        // pauseOnHover={true}
        gradient={false} // Disable gradient for a cleaner look
        style={{ height: '100%', width: '100%', overflow:'hidden' }}
      >
        <div className="flex flex-col lg:gap-9"> {/* Adjusted gap for better visual spacing */}
          {data.map((item, index) => (
            <div key={index} className="text-2xl font-halyard text-gray-400">
              {item}
            </div>
          ))}
        </div>
      </Marquee>
    </div>

    </div>
  );
};

export default Merits;
