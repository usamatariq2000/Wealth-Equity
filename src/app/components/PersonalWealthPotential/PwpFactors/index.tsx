import Image from "next/image";
import PwpCard from "../PwpCard";

const PwpFacors = () => {
  const PwpCardDara = [
    {
      icon: "/icons/annualincome.svg",
      title: "Annual income",
      description:
        "The earnings you bring home each year, reflecting your financial contribution to your household and loved ones.",
    },
    {
      icon: "/icons/employmentduration.svg",
      title: "Employment duration",
      description:
        "The number of working years left until retirement, i.e. how long you'll continue to earn income.",
    },
    {
      icon: "/icons/expenses&liabilities.svg",
      title: "Expenses & liabilities",
      description:
        "The debts and living costs your family faces, including mortgages, loans, and daily expenses.",
    },
    {
      icon: "/icons/savingsinvestments.svg",
      title: "Savings & investments",
      description:
        "The assets available to support your family, such as savings accounts, stocks, and retirement funds.",
    },
    {
      icon: "/icons/dependentsneeds.svg",
      title: "Dependents’ needs",
      description:
        "The specific financial needs of your dependents, including tuition, healthcare, and lifestyle.",
    },
    {
      icon: "/icons/taxconsiderations.svg",
      title: "Tax considerations",
      description:
        "The impact of taxes on your income and investments, affecting the net financial support available to your family.",
    },
    {
      icon: "/icons/inflationrate.svg",
      title: "Inflation rate",
      description:
        "The expected increase in cost of living over time, which affects future value of earnings and expenses.",
    },
    {
      icon: "/icons/financialgoals.svg",
      title: "Financial goals",
      description:
        "Long-term financial objectives such as college funds, retirement plans, and significant life events.",
    },
  ];
  return (
    <>
      <section className=" x-5 lg:px-16 mb-[100px]  ">
        <div className="bg-[#FCF8F5] rounded-xl  w-full pb-20 ">
          <p className="text-[#00262B] font-halyard text-center pt-28 xxs:text-[10px] sm:text-[16px]">
            PWP Factors
          </p>
          <h1 className="text-[#00262B] font-jubilee font-normal text-center pt-4 xl:text-[64px] xxs:px-6 lg:text-[45px] xxs:text-[26px]">
            How we calculate your Personal Wealth Potential{" "}
          </h1>
          <div className="grid lg:grid-cols-4 mt-10 lg:p-4 md:grid-cols-2 sm:grid-cols-2 xxs:grid-cols-1 sm:p-5 xxs:p-1 lg:gap-y-10 sm:gap-y-8">
            {PwpCardDara.map((item, index) => (
              <PwpCard
                key={index}
                url={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PwpFacors;
