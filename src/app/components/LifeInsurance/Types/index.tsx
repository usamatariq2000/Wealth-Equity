import Image from 'next/image';
import ImageCarousel from './component/ImageCarousel';

const TypesOfLifeInsurance = () => {
    // Define content object for textual content
    const content = {
        subheader: "TYPES OF LIFE INSURANCE",
        header: "Grow and safeguard your money, now and into the future",
        description: "Life insurance comes in two primary types: term life and permanent life. While both types offer protection for you and your loved ones, they differ in terms of coverage duration and financial flexibility. W&E encourages you to own BOTH types of policies as you build your personalized life insurance plan.",
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] px-5 lg:px-16 text-[#00262B] mt-[100px] lg:mb-[200px] sm:mb-[100px] xxs:mb-[230px] h-screen">
            <div className="flex flex-col justify-center w-full">
                <b className="text-base font-bold leading-14 tracking-tighter tracking-[1px] text-left font-light-haylard mt-5 mb-5">
                    {content.subheader}
                </b>
                <h1 className="text-[32px] lg:text-[64px]" style={{ fontFamily: 'OTJubileeDiamond', lineHeight: '64px', letterSpacing: '-1.5%' }}>
                    {content.header}
                </h1>
                <p className="text-lg mb-6 font-light-haylard mt-5 font-bold" style={{ lineHeight: '32px', letterSpacing: '-1%' }}>
                    {content.description}
                </p>
            </div>
            <div className="w-full relative">
                <ImageCarousel />
            </div>
        </section>
    );
};

export default TypesOfLifeInsurance;
