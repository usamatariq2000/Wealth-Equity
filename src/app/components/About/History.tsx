import Image from "next/image";
import Link from "next/link";

const History = () => {
    const content = {
        header: "The $50 Billion Empowerment Plan",
        subheader: "OUR HISTORY OF SUCCESS",
        description:
            "We created and completed a 50-billion-dollar life insurance face-amount campaign at New York Life Insurance Company over 6½ years, leading 1,500 Black life insurance agents. We provided knowledge to families about the value of life insurance, guiding 200,000 clients to purchase $250,000 in coverage for protection and tax- free future income. Since launching the campaign in 2011, over $1 billion has been paid out in death claims on those policies, including the creation of multiple millionaire Black families.",
        button: "Get Started",
    };
    return (
        <section className="flex flex-col items-center lg:flex-row mb-10 lg:mb-[100px] text-[#00262B]">
            <div className="flex flex-col justify-center px-5 lg:px-16 ">
                <b className="tracking-widest font-bold font-halyard leading-14 tracking-tighter text-left text-transform: uppercase my-4 text-[10px] md:text-[12px] lg:text-[12px] xl:text-[16px]">
                    {content.subheader}
                </b>
                <h1
                    className="text-[45px] lg:text-[42px] xl:text-[64px] leading-[50px] lg-leading-[53px] xl:leading-[72px] font-jubilee mb-6"
                    style={{ letterSpacing: "-2.5%" }}
                >
                    {content.header}
                </h1>
                <p className="text-md lg:text-[14px] xl:text-lg mb-6 font-light-haylard font-bold">
                    We created and completed a 50-billion-dollar life insurance face-amount campaign at New York Life Insurance Company over 6½ years, leading 1,500 Black life insurance agents.<br /><br />
                    We provided knowledge to families about the value of life insurance, guiding 200,000 clients to purchase $250,000 in coverage for protection and tax- free future income.<br /><br />
                    Since launching the campaign in 2011, over $1 billion has been paid out in death claims on those policies, including the creation of multiple millionaire Black families.
                </p>
                <p className="text-md lg:text-[14px] xl:text-lg mb-6 font-haylard">W&E now aims to do the same for all underserved families.</p>
                <Link href="/personal-wealth-potential"><button className="px-4 py-3 bg-[#00555A] text-[#F9F1EC] font-halyard font-bold rounded-lg w-fit hover:bg-[hover:bg-[#00abb3]] mt-5 font-haylard">
                    {content.button}
                </button></Link>
            </div>
            <div className="w-full flex flex-col justify-center px-5 lg:px-16 mt-[50px] md:mt-[100px] gap-y-10">
                <Image
                    src="/images/50 years.png"
                    alt="HeroImg"
                    layout="responsive"
                    width={240}
                    height={240}
                    className="rounded-xl"
                />
                <Image
                    src="/images/50B on TV1 with Roland Martin.png"
                    alt="HeroImg"
                    layout="responsive"
                    width={240}
                    height={240}
                    className="rounded-xl"
                />
            </div>
        </section>
    );
}

export default History;
