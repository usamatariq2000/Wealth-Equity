import Link from 'next/link';
import Image from 'next/image';

const Uses = () => {
    return (
        <section className="bg-[#00555A] py-10 px-5 lg:px-20 w-full h-auto text-white font-jubilee xl:mt-0 xxs:mt-10 ">
            <div className=" text-left  w-full" >
                <h1 className='text-[#FFFFFF] text-[36px] font-normal font-jubilee'>Here are uses to life insurance that most don’t realize, or have not been taught:</h1>
                <div className=" sm:grid sm:grid-cols-3  gap-x-10  " >
                    <div className=" sm:flex sm:flex-col w-full   mt-8 sm:justify-start sm:items-start  xxs:flex xxs:flex-col   xxs:justify-center xxs:items-center ">
                         <div className='w-[80px] h-[80px] bg-[#004448] rounded-xl flex justify-center items-center'>
                                <Image  
                                src="/images/Icon.png"
                                alt='icon'
                                width={40}
                                height={10}
                                />
                         </div>
                        <p className='text-[#E7F5F5] text-[28px] font-semibold mt-7 font-light-haylard'>Protect your loved ones</p>
                        <p className='mt-5 sm:items-start text-[18px] sm:w-full xxs:items-center font-light-haylard xxs:w-[75%]'>In the event of your passing, your family will receive a tax-free payout to replace your income and help with their financial needs.</p>
                    </div>

                    <div className=" sm:flex sm:flex-col w-full   mt-8 sm:justify-start sm:items-start  xxs:flex xxs:flex-col   xxs:justify-center xxs:items-center ">
                         <div className='w-[80px] h-[80px] bg-[#004448] rounded-xl flex justify-center items-center'>
                                <Image  
                                src="/images/Icon2.png"
                                alt='icon'
                                width={40}
                                height={10}
                                />
                         </div>
                        <p className='text-[#E7F5F5] text-[28px] font-semibold mt-7 font-light-haylard'>Protect your loved ones</p>
                        <p className='mt-5 sm:items-start text-[18px] sm:w-full xxs:items-center font-light-haylard  xxs:w-[75%]'>In the event of your passing, your family will receive a tax-free payout to replace your income and help with their financial needs.</p>
                    </div>

                    <div className=" sm:flex sm:flex-col w-full   mt-8 sm:justify-start sm:items-start  xxs:flex xxs:flex-col   xxs:justify-center xxs:items-center ">
                         <div className='w-[80px] h-[80px] bg-[#004448] rounded-xl flex justify-center items-center'>
                                <Image  
                                src="/images/Icon3.png"
                                alt='icon'
                                width={40}
                                height={10}
                                />
                         </div>
                        <p className='text-[#E7F5F5] text-[28px] font-semibold mt-7 font-light-haylard'>Protect your loved ones</p>
                        <p className='mt-5 sm:items-start text-[18px] sm:w-full xxs:items-center font-light-haylard  xxs:w-[75%]'>In the event of your passing, your family will receive a tax-free payout to replace your income and help with their financial needs.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Uses;
