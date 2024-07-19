import Image from "next/image";

const PersonalizedInsurancePlan = () => {
  const arr2=[
    {
        heading1:"What if I die too soon?",
        description:"Start with term life insurance to protect your Personal Wealth Potential, ensuring your loved ones’ financial needs are met.",
        image:"/images/image1.png"
    },
    {
        heading1:"What if I get sick and can’t work?",
        description:"Term life insurance with living benefits allows you to access your payout should you fall critically ill, providing support for medical care.",
        image:"/images/image2.png"
    },
    {
        heading1:"What if I need more cash?",
        description:"Secure a permanent life insurance policy for     tax-deferred growth and tax-free access to cash through policy loans. Create your own bank.",
        image:"/images/image3.png"
    },
    {
        heading1:"What if I want to fund my own inheritance?",
        description:"Consider taking out life insurance plans on parents or grandparents and coming together with other family members to pay the cost.",
        image:"/images/image4.png"
    },
    {
        heading1:"What if I want financial freedom for my children?",
        description:"Purchasing life insurance on your child can lock in their insurability, and provide funds for education, a new business, or home purchase.",
        image:"/images/image5.png"
    },
    {
        heading1:"What if I want to leave a meaningful legacy behind?",
        description:"Life insurance can be used to provide inheritance to your family, and donations to a church, HBCU, or a treasured organization.",
        image:"/images/image6.png"
    }

  ]
  return (
    <>
      <section className=" px-5 lg:px-16 mt-[20px] ">
        <div className="bg-[#FCF8F5] rounded-xl  w-full pb-20 ">
          <p className="text-[#00262B] font-halyard text-center pt-28 xxs:text-[10px] sm:text-[16px]">
            Build your personalized insurance plan called: A Roadmap-For Life
          </p>
          <h1 className="text-[#00262B] font-jubilee text-center pt-5 2xl:text-[64px] xxs:px-6 lg:text-[45px] xxs:text-[26px]">
            Address these “What ifs...?” that may arise in life
          </h1>
          <div className="grid lg:grid-cols-3 mt-10   lg:p-4  md:grid-cols-2 xxs:grid-cols-1 sm:p-5 xxs:p-1  lg:gap-y-10  ">
            
            {arr2.map((item,index) => (
              <div className="flex flex-col  xl:px-10 lg:px-5  md:px-5 lg:pb-0 md:pb-10 sm:px-10  xxs:px-5 " key={`${index}+ ${item?.heading1}`}>
                <Image
                  src={item?.image}
                  alt="HeroImg"
                  layout="responsive"
                  width={10}
                  height={10}
                  className="flex justify-center items-center !w-full"
                />
                <p className="lg:text-[22px]  font-medium text-Vault-Teal mt-5  h-[35px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {item?.heading1}
                </p>
                <p className="lg:text-[16px] font-light text-Vault-Teal mt-3  h-[100px]">
                    {item?.description}
                </p>

                <button className="w-[115px] h-[48px] p-1 bg-[#00555A] rounded-lg text-white mt-5 md:mb-0 xxs:mb-5">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalizedInsurancePlan;
