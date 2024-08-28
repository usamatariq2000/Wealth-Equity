import Image from "next/image";

const Value = () => {
    return (
        <section className="flex justify-between items-end flex-col items-center lg:flex-row mb-10 text-[#00262B] bg-[#00555A] lg:px-[100px] lg:gap-[50px] gap-4">
            <div className="w-2/3 h-full flex flex-col lg:pt-[100px] pb-0 rounded-lg w-full">
                <Image
                    src="/images/Rectangle 42432.png"
                    alt="HeroImg"
                    layout="responsive"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex flex-col rounded-lg w-full p-6">
                <div className="w-full flex flex-col justify-center mt-[50px] md:mt-[100px] text-[#F9F1EC]">
                    <b className="tracking-widest font-bold font-halyard leading-14 tracking-tighter text-left text-transform: uppercase my-4 text-[10px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                        Our Unique Value
                    </b>
                    <h1
                        className="text-[45px] lg:text-[42px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
                        style={{ letterSpacing: "-2.5%" }}
                    >
                        Addressing the emotional stresses, myths, and negative traditions of Black and Latino families
                    </h1>
                    <p className="text-md lg:text-[14px] xl:text-lg mb-6 font-light-haylard font-bold">
                        Decades of discrimination in the life insurance industry have left Black and Latino communities with significantly less coverage compared to White Americans. These practices have fueled emotional stress, harmful myths, and cultural barriers, keeping many families underinsured or without coverage.<br /><br />
                        At W&E, we understand these challenges. With years of experience, we are committed to being a trusted, culturally competent resource for families, financial professionals, and insurance organizations. Our goal is to bridge the coverage gap and provide the support needed to secure a better future.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Value;


