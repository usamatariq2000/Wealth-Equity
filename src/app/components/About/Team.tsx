import Image from "next/image";

const Team = () => {
    return (
        <section className="flex flex-col lg:flex-row text-[#00262B] bg-[#00555A] lg:px-[100px] lg:gap-[100px] gap-8 py-[100px]">
            <div className="flex flex-col rounded-lg w-full p-6">
                <div className="w-1/4">
                    <Image
                        src="/images/Ellipse 1.svg"
                        alt="HeroImg"
                        layout="responsive"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-full flex flex-col justify-center text-[#F9F1EC]">
                    <p className="text-[#FCFF7F] text-[32px] lg:text-[36px] xl:text-[48px] lg-leading-[53px] xl:leading-[72px] font-jubilee mt-3">
                        Eugene Mitchell, MBA
                    </p>
                    <b className="tracking-widest font-bold font-halyard tracking-tighter text-left text-transform: uppercase mb-8 text-[8px] md:text-[10px] lg:text-[10px] xl:text-[14px]">
                        CEO & Co-Founder
                    </b>
                    <p className="leading-loose text-md lg:text-[14px] xl:text-[16px] mb-6 font-light-haylard">
                        Nationally known as The Man with the $50 Billion Plan, Eugene successfully lead the campaign at New York Life Insurance Company to generate over $50 billion of insurance coverage as a generational wealth stream for the Black community. He is also author of the award-winning book, <i>Closing the Racial Wealth Gap—7 Untold Rules for Black Prosperity and Legacy.</i>
                    </p>
                </div>

            </div>
            <div className="flex flex-col rounded-lg w-full p-6">
                <div className="w-1/4">
                    <Image
                        src="/images/imageantaun.svg"
                        alt="HeroImg"
                        layout="responsive"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="w-full flex flex-col justify-center text-[#F9F1EC]">
                    <p className="text-[#FCFF7F] text-[32px] lg:text-[36px] xl:text-[48px] lg-leading-[53px] xl:leading-[72px] font-jubilee mt-3">
                        Antaun C.L. Barnett, MBA
                    </p>
                    <b className="tracking-widest font-bold font-halyard tracking-tighter text-left text-transform: uppercase mb-8 text-[8px] md:text-[10px] lg:text-[10px] xl:text-[14px]">
                        COO & Co-Founder
                    </b>
                    <p className="leading-loose text-md lg:text-[14px] xl:text-[16px] mb-6 font-light-haylard">
                        Over the last 20 years, Antaun has spearheaded multimillion-dollar life insurance sales, distribution, strategy, and operations units across the U.S. He also provides insurance business optimization, sales enablement, road mapping, and execution strategies in the IMO, FMO, and Private Equity marketplace.

                    </p>
                </div>

            </div>
        </section>
    );
};

export default Team;


