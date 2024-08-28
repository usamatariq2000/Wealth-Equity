import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    const content = {
        header: "To close the racial wealth gap in one generation, with life insurance",
        subheader: "About Us",
        description:
            "Entire communities are missing out on trillions of dollars in wealth creation by owning only a fraction of the insurance industry’s total life insurance coverage amount, and the subsequent benefits received.",
        button: "Get Started",
    };

    return (
        <section className="flex flex-col items-center lg:flex-row mb-10 lg:mb-[100px] text-[#00262B] mt-[100px]">
            <div className="w-2/3 flex flex-col justify-center px-5 lg:px-16 mt-[50px] md:mt-[100px]">
                <b className="tracking-widest font-bold font-halyard leading-14 tracking-tighter text-left text-transform: uppercase my-4 text-[10px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                    {content.subheader}
                </b>
                <h1
                    className="text-[45px] lg:text-[42px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
                    style={{ letterSpacing: "-2.5%" }}
                >
                    {content.header}
                </h1>
            </div>
            <div className="w-full flex flex-col justify-center px-5 lg:px-16 mt-[50px] md:mt-[100px]">
                <b className="text-md lg:text-[28px] xl:text-[24px] mb-6 font-halyard font-bold">Wealth & Equity (W&E) is a financial education platform and ecosystem that helps diverse and underserved families achieve financial security, economic mobility, and generational wealth through life insurance.</b>
                <br></br>
                <p className="text-md lg:text-[14px] xl:text-lg mb-6 font-light-haylard font-bold">{content.description}</p>
            </div>
        </section>
    );
};

export default Hero;


