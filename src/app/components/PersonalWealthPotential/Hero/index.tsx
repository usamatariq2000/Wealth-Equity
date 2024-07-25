import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const content = {
    subheader: "Personal Wealth Potential",
    description:
      "Personal Wealth Potential is a calculation that challenges us to know ourselves and our worth. It’s a new way to see ourselves, treat ourselves, treat others, and expect them to treat us.",
    button: "Calculate my Personal Wealth Potential",
    button1: "Learn More",
  };

  return (
    <section className="flex flex-col items-center lg:flex-row mb-10 lg:mb-0 text-[#00262B] ">
      <div className="w-full flex flex-col justify-center px-5 lg:px-16 mt-[50px] md:mt-[100px]">
        <b className="tracking-widest font-bold font-halyard leading-14 text-left text-transform: uppercase my-4 text-[10px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
          {content.subheader}
        </b>
        <h1
          className="text-[45px] lg:text-[42px] text-[#00262B] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
          style={{ letterSpacing: "-2.5%" }}
        >
          Know your worth to achieve{""}
          <div className="parallelogram bg-[#FCFF7F] inline-block ml-3">
            <p> your goals</p>
          </div>
        </h1>
        <p className="text-xl mb-6 font-haylard font-light">
          {content.description}
        </p>
        <div className="flex md:flex-row flex-col md:gap-4">
          <button className="px-4 py-3 bg-[#00555A] text-[#F9F1EC] font-halyard whitespace-nowrap md:text-lg font-500 rounded-lg w-fit hover:bg-[#569B9B] mt-5 font-haylard  transition duration-300 ">
            {content.button}
          </button>
          <button className="md:px-4 px-1 py-3 bg-transparent text-[#00262B] font-halyard whitespace-nowrap md:text-lg font-500 rounded-lg w-fit hover:text-[#569B9B] transition duration-300 mt-5 font-haylard">
            {content.button1}
          </button>
        </div>
      </div>
      <div className="w-full lg:w-full lg:mt-0">
        <div className="relative">
          <div className="hidden lg:block">
            <Image
              src="/images/PersonalPotentialHero.png"
              alt="HeroImg"
              layout="responsive"
              width={240}
              height={240}
            />
          </div>
          {/* <div className="lg:hidden p-10">
            <Image
              src="/images/Photo.png"
              className="rounded-xl"
              alt="Photo"
              layout="responsive"
              width={240}
              height={240}
            />
          </div> */}
          {/* <div className="absolute bottom-20 left-20 font-halyard  lg:left-52 w-[400px] p-6 bg-[#003336] text-white rounded-xl">
            <p className="text-lg mb-4">
              “I realized that getting life insurance for myself, my mom, and my child will create endless opportunities and change our family story forever!”
            </p>
            <div className="flex items-center ">
              <div>
                <p className="font-semibold">Pamela N, 38</p>
                <p className="text-sm">Wealth & Equity customer</p>
              </div>
              <button
                className="absolute bottom-20 right-[-20px] bg-[#FCFF7F] hover:bg-[#f8ffb4] p-3 rounded-full"
              >
                <FaArrowRight size={16} color='black' />
              </button>
            </div>
          </div> */}
        </div>
        {/* <div></div> */}
      </div>
    </section>
  );
};

export default Hero;
