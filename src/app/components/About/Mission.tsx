import Image from "next/image";
import Link from "next/link";

const Mission = () => {
    return (
        <section className="flex justify-between flex-col items-center lg:flex-row lg:mb-[10px] text-[#00262B] bg-[#00555A] lg:p-[100px] p-8 lg:gap-[100px] gap-8">
            <div className="flex flex-col bg-[#004448] lg:p-10 p-5 rounded-lg w-full">
                <div className="bg-[#003336] w-[80px] h-[100px] rounded-t-full p-3">
                    <Image
                        src="/images/ion_arrow-up-circle-outline.svg"
                        alt="HeroImg"
                        layout="responsive"
                        width={240}
                        height={240}
                    />
                </div>
                <p className="text-[#FCFF7F] text-[45px] lg:text-[42px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mt-7">
                    Our Mission
                </p>
                <p className="text-white font-haylard text-[16px] mt-7">
                    To help diverse and underserved individuals and families each create their own customized Financial Protection and Inheritance Plan using life insurance.
                </p>
            </div>
            <div className="flex flex-col bg-[#004448] lg:p-10 p-5 rounded-lg w-full">
                <div className="bg-[#003336] w-[80px] h-[100px] rounded-t-full p-3">
                    <Image
                        src="/images/ion_eye-outline.svg"
                        alt="HeroImg"
                        layout="responsive"
                        width={240}
                        height={240}
                    />
                </div>
                <p className="text-[#FCFF7F] text-[45px] lg:text-[42px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mt-7">
                    Our Vision
                </p>
                <p className="text-white font-haylard text-[16px] mt-7">
                    To help 1 million families to purchase $500,000 in life insurance coverage to create a $500B Wealth Gap Bridge, cycling every 5 years.

                </p>
            </div>
        </section>
    );
};

export default Mission;


