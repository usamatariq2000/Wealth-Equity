import Image from "next/image";

const Association = () => {
    return (
        <section className="flex justify-start items-start flex-col items-center lg:flex-row text-[#00262B] bg-[#004448] lg:px-[100px] py-[70px]">
            <div className="flex flex-col rounded-lg w-full p-6 pr-1">
                <div className="w-2/3">
                    <Image
                        src="/images/image 1.svg"
                        alt="HeroImg"
                        layout="responsive"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className="w-full">
                <p className="lg:ml-[-100px] font-bold font-halyard-text md:text-[44px] text-[24px] text-[#F9F1EC] p-6 md:p-0 ">A special thanks to our partners and their commitment to our mission.</p>
            </div>
        </section>
    );
};

export default Association;


