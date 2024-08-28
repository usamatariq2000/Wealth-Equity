import React from "react";

const tipsData = [
  {
    title: "1. Start Budgeting Now",
    content: `Understanding where your money goes is the first step toward financial stability. 
              Begin by tracking your income and expenses, using tools like budgeting apps or spreadsheets. 
              This will help you identify areas where you can cut back and ensure you’re living within your means. 
              By sticking to a budget, you can avoid unnecessary debt and start building a solid financial foundation early in your career.`,
  },
  {
    title: "2. Save and Invest Early",
    content: `It’s crucial to prioritize saving as soon as you start earning. First, focus on building an emergency fund that can cover 
              three to six months of living expenses. Once that’s in place, begin investing in retirement accounts like a 401(k) or IRA. 
              Starting early allows your investments to grow over time, thanks to the power of compound interest. The sooner you begin, 
              the better positioned you’ll be for financial security.`,
  },
  {
    title: "3. Manage Your Credit",
    content: `Your credit score plays a significant role in your financial future. Make sure to pay your bills on time and keep your 
              credit card balances low to maintain a good score. Regularly check your credit report for errors and address any issues immediately. 
              A strong credit score will make it easier to secure loans, rent an apartment, or even land a job, so it’s important to manage your 
              credit wisely from the start.`,
  },
  {
    title: "4. Educate Yourself",
    content: `Financial literacy is a lifelong journey, and the more you know, the better decisions you can make. 
              Take advantage of the wealth of resources available, from online courses to financial podcasts and books. 
              Focus on learning about topics like investing, saving, and credit management. By educating yourself, 
              you’ll be empowered to take control of your financial future and build the wealth you desire.`,
  },
];

interface TipsProps {
  description: string;
}

const FinancialLiteracyTips: React.FC<TipsProps> = ({description}) => {
  return (
    <div className="flex flex-col md:mx-20 xl:mx-64 p-6 mt-6 md:mt-20 text-[#00262B] font-halyard-text">
      <p> {description} </p>
      {/* <h1 className="text-3xl md:text-[40px] md:leading-[44px] font-bold mb-4">
        Financial Literacy 101: Quick Tips for Young Black Professionals
      </h1>
      <p className="text-base md:text-lg mb-6 font-light">
        Navigating personal finance as a young professional can be tough, but
        these quick tips can help set you on the right path.
      </p>

      <div className="space-y-8">
        {tipsData.map((tip, index) => (
          <div key={index}>
            <h2 className="text-2xl md:text-3xl font-semibold font-halyard-text">
              {tip.title}
            </h2>
            <p className="mt-2 text-base md:text-lg font-light">
              {tip.content}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FinancialLiteracyTips;
