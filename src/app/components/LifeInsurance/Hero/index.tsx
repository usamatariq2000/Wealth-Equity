import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const content = {
    header: "Secure a new future and narrative for your family ",
    subheader: "LIFE INSURANCE",
    description:
      "Learn how life insurance can provide vital financial protection, help you navigate the “What ifs...?” of life, build lasting wealth, and transform diverse and underserved communities.",
    button: "Start Planning",
  };

  return (
    <section className="flex flex-col items-center lg:flex-row  lg:mb-0 text-[#00262B] ">
      <div className="w-full flex flex-col justify-center px-5 lg:px-16 mt-[50px] md:mt-[100px]">
        <b className="tracking-widest font-bold font-halyard leading-14 tracking-tighter text-left text-transform: uppercase my-4 text-[10px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
          {content.subheader}
        </b>
        <h1
          className="text-[45px] lg:text-[45px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
          style={{ letterSpacing: "-2.5%" }}
        >
          Secure a{" "}
          <div className="parallelogram bg-[#FCFF7F] inline-block mr-2">
            <p className="md:pr-3 ">new future</p>
          </div>
          and narrative for your family{" "}
        </h1>
        <p className="text-md lg:text-[14px] xl:text-lg mb-6 font-light-haylard font-bold">
          {content.description}
        </p>
        <button className="px-4 py-3 bg-[#00555A] text-[#F9F1EC] font-halyard font-bold rounded-lg w-fit hover:bg-[hover:bg-[#00abb3]] mt-5 font-haylard">
          {content.button}
        </button>
      </div>
      <div className="w-full lg:w-full lg:mt-0">
        <div className="relative">
          <div className="hidden lg:block">
            <Image
              src="/images/Hero-Slice2.png"
              alt="HeroImg"
              layout="responsive"
              width={240}
              height={240}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
