import Link from 'next/link';
import Image from 'next/image';

const Stats = () => {
    return (
        <section className="bg-[#00555A] p-10 px-20 w-full text-white font-jubilee ">
            <div className=" text-left  w-full" >
                <h1 className='text-[#FFFFFF] text-[36px] text-medium mb-5'>Consider this important foundational use of life insurance: Protect your income</h1>
                <div className="flex w-full gap-10 items-center justify-center flex-col lg:flex-row flex-wrap" >
                    <div className="lg:border-t-2 w-full  items-center justify-center flex flex-col  flex-1 border-[#FBF6F34D] text-left">
                        <h2 className="text-[120px]  text-[#FCFF7F] ">$50K</h2>
                        <p className='text-[#E7F5F5] mt-[-25px] font-halyard'>Annual income for a Black/Latino person in U.S.</p>
                    </div>
                    <text className='text-[120px]  text-[#FCFF7F]' >x</text>
                    <div className="lg:border-t-2 w-full  items-center justify-center flex flex-col  flex-1 border-[#FBF6F34D] text-left">
                        <h2 className="text-[120px]  text-[#FCFF7F]"> 20</h2>
                        <p className='text-[#E7F5F5] mt-[-25px]  font-halyard'>Times twenty years of working</p>
                    </div>
                    <text className='text-[120px] font-bold text-[#FCFF7F]' >=</text>
                    <div className="lg:border-t-2  w-full  items-center justify-center flex flex-col  flex-1 border-[#FBF6F34D] text-left">
                        <h2 className="text-[120px]  text-[#FCFF7F]  ">$1M</h2>
                        <p className='text-[#E7F5F5] mt-[-25px]  font-halyard'>Equals one million dollars of earned income </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Stats;
