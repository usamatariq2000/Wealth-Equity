import Image from 'next/image';
import ImageCarousel from './components/ImageCarousel';

const Legacy = () => {
    // Define content object for textual content
    const content = {
        subheader: "YOUR $1 MILLION LEGACY",
        header: "It’s time to think of yourself as a million dollar asset",
        description: "As you look to turn your lifetime income into wealth, consider taking just 1% of your earnings today to protect your income stream for the next 20 years. Yes, life insurance is a critically underutilized tool to protect your income, grow your wealth, provide benefits, and build a lasting legacy.",
        button: "Discover your Personal Wealth Potential"
    };

    return (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 lg:px-16 text-[#00262B] mt-[100px] h-screen">
                <div className="flex flex-col justify-center w-full">
                    <p className="text-base font-bold leading-14 tracking-tighter text-left font-halyard mt-5 mb-5">
                        {content.subheader}
                    </p>
                    <h1 className="text-[32px] lg:text-[64px]" style={{ fontFamily: 'OTJubileeDiamond', lineHeight: '64px', letterSpacing: '-1.5%' }}>
                        {content.header}
                    </h1>
                    <p className="text-lg mb-6" style={{ fontFamily: 'HalyardTextRegular', lineHeight: '32px', letterSpacing: '-1%' }}>
                        {content.description}
                    </p>
                    <button className="px-4 py-3 bg-[#00555A] text-[#F9F1EC] rounded-lg w-fit font-bold hover:bg-[#00abb3]">
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
