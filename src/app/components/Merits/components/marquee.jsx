import React from 'react'

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
const marquee = () => {
  return (
    <div className="relative h-full">
      <div className="marquee-content">
        {data.map((item, index) => (
          <div key={index} className="marquee-item text-3xl md:text-4xl lg:text-5xl">{item}</div>
        ))}
        {data.map((item, index) => (
          <div key={`dup-${index}`} className="marquee-item text-3xl md:text-4xl lg:text-5xl">{item}</div>
        ))}
      </div>
    </div>
  );
};


export default marquee
