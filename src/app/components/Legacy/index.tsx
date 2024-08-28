'use client'

import Image from 'next/image';
import ImageCarousel from './components/ImageCarousel';
import { useRouter } from 'next/navigation';

const Legacy = () => {
    // Define content object for textual content
    const content = {
        subheader: "YOUR $1 MILLION LEGACY",
        header: "It’s time to think of yourself as a million dollar asset",
        description: "As you look to turn your lifetime income into wealth, consider taking just 1% of your earnings today to protect your income stream for the next 20 years. Yes, life insurance is a critically underutilized tool to protect your income, grow your wealth, provide benefits, and build a lasting legacy.",
        button: "Discover your Personal Wealth Potential"
    };

    const router = useRouter()

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-[100px] px-4 md:px-16 text-[#00262B] mt-[50px] h-screen">
            <div className="flex flex-col justify-center w-full">
                <b className="text-base font-bold leading-14 tracking-tighter tracking-[1px] text-left  font-light-haylard mt-5 mb-5">
                    {content.subheader}
                </b>
                <h1 className="text-[32px] lg:text-[64px] leading-[45px] lg:leading-[64px]" style={{ fontFamily: 'OTJubileeDiamond', letterSpacing: '-1.5%' }}>
                    {content.header}
                </h1>
                <p className="lg:text-lg text-md  mb-6 font-light-haylard mt-5 font-bold" style={{ lineHeight: '32px', letterSpacing: '-1%' }}>
                    {content.description}
                </p>
                <button onClick={() => router.push('/calculator')} className="px-4 py-3 bg-[#00555A] text-[#F9F1EC] font-halyard rounded-lg w-fit font-bold hover:bg-[#00abb3] text-sm md:text-sm lg:text-md xl:text-lg">
                    {content.button}
                </button>
            </div>
            <div className="w-full relative">
                <ImageCarousel />
            </div>
        </section>
    );
};

export default Legacy;
