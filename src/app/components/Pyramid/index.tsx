import { FC } from "react";

const Pyramid: FC = () => {
  return (
    <div className="relative flex flex-col gap-5 items-center mt-8 hidden lg:flex">
      <div
        className="relative w-0 h-0 group
    border-l-[50px] border-l-transparent
    border-b-[100px] border-b-[#00555A]
    border-r-[50px] border-r-transparent
    cursor-pointer hover:border-b-[#FCFF7F]   "
      >
        <div className=" flex items-center justify-center">
          <p
            className="text-center text-white font-halyard group-hover:text-[#00262B] "
            style={{ transform: "translateY(50px)", fontSize: "14px" }}
          >
            PASS ALONG
          </p>
          <div className="absolute font-halyard left-7 top-0 w-[250px] mb-2 hidden group-hover:block text-xs text-white bg-[#00262B] p-4 pr-0 rounded">
            Your priority at this stage is focusing on what your desired distrubution is.
          </div>
        </div>
      </div>

      <div
        className="relative md:!w-[220px] sm:!w-[220px]  xxs:!w-[180px] h-0 group
        border-l-[50px] border-l-transparent
        border-r-[50px] border-r-transparent
        border-b-[85px] border-b-[#00555A]
            cursor-pointer hover:border-b-[#FCFF7F] 
        
        "
      >
        <div className="absolute top-10 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-center text-white font-halyard group-hover:text-[#00262B] md:text-[16px] sm:text-[12px]">
            PRESERVE
          </p>
          <div className="absolute font-halyard w-[250px] left-32  bottom-full w-[200px] mb-2 hidden group-hover:block text-xs text-white bg-[#00262B] p-1 rounded p-4">
            Your priority at this stage is focusing on maximization, overcoming inflation, and diversifiying risk.
          </div>
        </div>
      </div>

      <div
        className="relative h-0 group
        border-l-[50px] border-l-transparent
        border-r-[50px] border-r-transparent
        border-b-[85px] border-b-[#00555A]
         cursor-pointer hover:border-b-[#FCFF7F]  group
         md:!w-[340px] sm:!w-[320px] xxs:!w-[220px]
        "
      >
        <div className="absolute top-10 left-0 right-0 bottom-0 flex items-center justify-center ">
          <p className="text-center text-white font-halyard group-hover:text-black">
            PLAN
          </p>
          <div className="absolute font-halyard w-[250px] left-60 bottom-full w-[200px] mb-2 hidden group-hover:block text-xs text-white bg-[#00262B] p-1 rounded p-4">
            Your priority at this stage is focusing on what you earn, what you
            owe, what you own, and those you love.
          </div>
        </div>
      </div>

      <div
        className="relative  h-0 group
        border-l-[50px] border-l-transparent
        border-r-[50px] border-r-transparent
        border-b-[85px] border-b-[#00555A]
        cursor-pointer hover:border-b-[#FCFF7F]
        sm:!w-[420px] md:!w-[460px] xxs:!w-[335px]
        "
      >
        <div className="absolute top-10 left-0 right-0 bottom-0 flex items-center justify-center">
          <p className="text-center text-white text-[14px] font-halyard group-hover:text-[#00262B]">
            PROTECT
          </p>
          <div className="absolute font-halyard w-[250px] left-80 bottom-full w-[200px] mb-2 hidden group-hover:block text-xs text-white bg-[#00262B] p-1 rounded p-4">
            Your priority at this stage is focusing on what you earn, what you
            owe, what you own, and those you love.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pyramid;
