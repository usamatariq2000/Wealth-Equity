import React from "react";

const SmallPyramid = () => {
  return (
    <>
      <div className="flex flex-col  items-center gap-1 sm:gap-2 md:gap-2">
        <div
          className="relative w-0 h-0 group
          md:border-l-[17px] border-l-[21px] border-l-transparent
          md:border-b-[32px] border-b-[25px] border-b-[#00555A]
          md:border-r-[17px] border-r-[21px] border-r-transparent
          cursor-pointer hover:border-b-[#FCFF7F]"
        ></div>
        <div
          className="relative md:!w-[72px] sm:!w-[80px] xxs:!w-[125px] h-0 group
        md:border-l-[17px] border-l-[15px] border-l-transparent
         md:border-r-[17px] border-r-[15px] border-r-transparent
        md:border-b-[32px] border-b-[25px] border-b-[#00555A]
        cursor-pointer hover:border-b-[#FCFF7F] 
         "
        ></div>
        <div
          className="relative h-0 group
           md:border-l-[17px] border-l-[15px] border-l-transparent
        md:border-r-[17px] border-r-[15px] border-r-transparent
        md:border-b-[32px] border-b-[25px] border-b-[#00555A]
         cursor-pointer hover:border-b-[#FCFF7F]  group
         md:!w-[110px] sm:!w-[115px] xxs:!w-[165px]
        "
        ></div>
        <div
          className="relative  h-0 group
        border-l-[17px] border-l-transparent
        border-r-[17px] border-r-transparent
        border-b-[32px] border-b-[#00555A]
        cursor-pointer hover:border-b-[#FCFF7F]
        sm:!w-[150px] md:!w-[150px] xxs:!w-[200px]
        "
        ></div>
      </div>
    </>
  );
};

export default SmallPyramid;
