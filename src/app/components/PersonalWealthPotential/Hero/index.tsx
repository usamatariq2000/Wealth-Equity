import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const content = {
    header: "Change your financial future and family legacy",
    subheader: "Protection, Planning, and Inheritance",
    description:
      "Wealth & Equity is a community-driven financial education platform that helps diverse and underserved families achieve financial security, economic mobility, and generational wealth with life insurance.",
    button: "Get Started",
  };

  return (
    <section className="flex flex-col items-center lg:flex-row mb-10 lg:mb-0 text-[#00262B] ">
      <div className="w-full flex flex-col justify-center px-5 lg:px-16 mt-[50px] md:mt-[100px]">
        <b className="tracking-widest font-bold font-halyard leading-14 tracking-tighter text-left text-transform: uppercase my-4 text-[10px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
          {content.subheader}
        </b>
        <h1
          className="text-[45px] lg:text-[42px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
          style={{ letterSpacing: "-2.5%" }}
        >
          Change your financial future and <div className="parallelogram bg-[#FCFF7F] inline-block mr-2"><p className="md:pr-3">family legacy</p></div>
        </h1>
        <p className="text-md lg:text-[14px] xl:text-lg mb-6 font-light-haylard font-bold">{content.description}</p>
        <button className="px-4 py-3 bg-[#00555A] text-[#F9F1EC] font-halyard font-bold rounded-lg w-fit hover:bg-[hover:bg-[#00abb3]] mt-5 font-haylard">
          {content.button}
        </button>
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


