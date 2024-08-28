// components/hero.js
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const content = {
    header:
      "The typical White family holds about five to six times the wealth of the typical Black or Hispanic family.",
    subheader: "From the 2022 Survey of Blog Finances ",
    description:
      "Wealth & Equity is ready to help every family close these wealth gaps using life insurance.",
    button: "Read more",
  };

  // const stats = ['45,000', '66,000', '287']

  const blogs = [
    {
      category: "ARTICLE",
      title: "Knowledge is power.",
      subitle:
        "For Life: A Starter Guide to Financial Freedom for New Families",
      description:
        "We need practical steps to build and maintain generational wealth. From smart investing to effective estate planning, here are a few actionable strategies for your family to get started.",
      image: "images/Rectangle 442.svg",
      author: {
        name: "Hasnat Raza",
        designation: "Financial Tutor",
        image: "images/Photo.png",
      },
    },
    {
      category: "ARTICLE",
      title: "Knowledge is power.",
      subitle: "Financial Literacy 101: Tips for Young Black Professionals",
      description:
        "We need practical steps to build and maintain generational wealth. From smart investing to effective estate planning, here are a few actionable strategies for your family to get started.",
      image: "/images/Blog.png",
      author: {
        name: "Hasnat Raza",
        designation: "Financial Tutor",
        image: "/images/Blog.png",
      },
    },
    {
      category: "GUIDE",
      title: "Knowledge is power.",
      subitle: "How Personal Wealth Potential Transforms Starting a Family",
      description:
        "We need practical steps to build and maintain generational wealth. From smart investing to effective estate planning, here are a few actionable strategies for your family to get started.",
      image: "/images/Rectangle 442.svg",
      author: {
        name: "Hasnat Raza",
        designation: "Financial Tutor",
        image: "/images/blog2.png",
      },
    },
    {
      category: "GUIDE",
      title: "Knowledge is power.",
      subitle: "Interview: Jamie Logan on Business Succession Planning",
      description:
        "We need practical steps to build and maintain generational wealth. From smart investing to effective estate planning, here are a few actionable strategies for your family to get started.",
      image: "/images/Blog.png",
      author: {
        name: "Hasnat Raza",
        designation: "Financial Tutor",
        image: "/images/blog3.png",
      },
    },
  ];

  return (
    <>
      <div className=" mb-10 mt-10 rounded-[24px] lg:h-auto">
        <div className="flex flex-col lg:flex-row h-full gap-10 ">
          <div className=" w-full font-halyard">
            <div className="text-[#00262B]">
              <p>Insights & Resources</p>
              <p
                className="text-[50px] md:text-[64px] font-jubilee mt-4 mb-7"
                style={{ lineHeight: "64px", letterSpacing: "-1.5%" }}
              >
                {blogs[0].title}
              </p>
              <div className="md:grid grid-cols-2 gap-10">
                <div>
                  <Image
                    src="/images/Blog.png"
                    alt="Icon"
                    layout="responsive"
                    width={300}
                    height={240}
                    className="mt-4 mb-4"
                  />
                </div>
                <div className="font-light-haylard">
                  <div>
                    <div className="mt-2 flex">
                      <p className="py-1 px-2 text-[12px] rounded-sm mt-5 bg-[#AACDCD]">
                        {blogs[0].category}
                      </p>
                    </div>
                  </div>
                  <p className="text-[30px] md:text-[38px] lg:text-[44px] font-[600] leading-tight tracking-tighter mt-2">
                    {blogs[0].subitle}
                  </p>
                  <p className="font-semibold mt-5">{blogs[0].description}</p>
                  <div className="flex items-center">
                    <Image
                      src="/images/Photo.png"
                      alt="Icon"
                      width={40}
                      height={40}
                      className="mt-2 rounded-full"
                    />
                    <div className="p-3 flex-col justify-center font-halyard items-center w-full mt-2">
                      <p>{blogs[0].author.name}</p>
                      <p className="font-light">
                        {blogs[0].author.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="p-4 h-full w-full">
            <div className="w-full flex justify-end">
              <button className="px-4 font-semibold font-halyard py-3 bg-none border border-solid border-[#00262B] text-[#00262B] rounded-lg w-fit hover:bg-[#00262B] hover:text-white justify-end">
                Read more on our blog
              </button>
            </div>
            <div className="flex flex-col justify-between h-full py-10">
              {blogs.map((blog, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col md:flex-row font-halyard gap-5 my-4"
                  >
                    <Image
                      src={blog.image}
                      alt="Icon"
                      width={200}
                      height={200}
                      className="mt-2  rounded-md"
                    />
                    <div>
                      <div>
                        <div className="my-2 flex">
                          <p className="py-1 px-2 text-[12px] text-[#7E8040] text-bold rounded-sm bg-[#FDFFA5]">
                            {blog.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-[20px] font-semibold text-[#00262B]">
                        {blog.subitle}
                      </p>
                      <p className="text-[14px] font-semibold text-[#00262B] mt-2">
                        By {blog.author.name}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
