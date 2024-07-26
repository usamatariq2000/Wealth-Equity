import Image from "next/image";
import ImageCarousel from "./component/ImageCarousel";

const UnlockPotential = () => {
  const content = {
    subheader: "WHAT IS IT?",
    header: "Learn the number that unlocks your potential",
    description:
      "Life insurance comes in two primary types: term life and permanent life. While both types offer protection for you and your loved ones, they differ in terms of coverage duration and financial flexibility. W&E encourages you to own BOTH types of policies as you build your personalized life insurance plan.",
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] lg:gap-[40px] px-5 lg:px-[160px] text-[#00262B] mt-[30px] lg:mb-[50px] sm:mb-[70px] xxs:mb-[80px] min-h-screen">
      <div className="flex flex-col justify-center items-start w-full lg:order-2">
        <p className="text-sm font-medium leading-14 tracking-[1px] text-left font-haylard mt-5 mb-5">
          {content.subheader}
        </p>
        <h1
          className="text-[45px] lg:text-[42px] text-[#00262B] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
          style={{
            letterSpacing: "-1.5%",
          }}
        >
          {content.header}
        </h1>
        <p
          className="text-xl mb-6 font-haylard mt-5 font-light"
          style={{ lineHeight: "32px", letterSpacing: "-1%" }}
        >
          <span className="text-[#00262B] font-semibold ">
            Personal Wealth Potential (PWP){" "}
          </span>
          is the total financial contribution you’re expected to make to your
          family over your working life. If something were to happen to you,
          life insurance based on your PWP provides loved ones with funds they
          need to cover daily expenses, pay off debts, and pursue their dreams.
        </p>
        <button className="bg-[#00555A] hover:bg-[#569B9B] px-3 py-4 rounded-lg transition duration-300">
          <p className="text-lg text-white font-halyard">Get started</p>
        </button>
      </div>
      <div className="w-full h-full relative lg:order-1">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default UnlockPotential;
