"use client";

import { Button, Pagination } from "@nextui-org/react";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";

const Blogs = () => {
  const content = {
    header:
      "The typical White family holds about five to six times the wealth of the typical Black or Hispanic family.",
    subheader: "From the 2022 Survey of Blog Finances ",
    description:
      "Wealth & Equity is ready to help every family close these wealth gaps using life insurance.",
    button: "Read more",
  };

  const blogs = [
    {
      category: "ARTICLE",
      title: "Knowledge is power.",
      subitle: "Financial Literacy 101: Tips for Young Black Professionals",
      description:
        "We need practical steps to build and maintain generational wealth. From smart investing to effective estate planning, here are a few actionable strategies for your family to get started.",
      image: "/images/Rectangle 442.svg",
      author: {
        name: "Joseph H.",
        designation: "Financial Tutor",
        image: "/images/Blog.png",
      },
    },
    {
      category: "ARTICLE",
      title: "Knowledge is power.",
      subitle: "Financial Literacy 101: Tips for Young Black Professionals",
      description:
        "We need practical steps to build and maintain generational wealth. From smart investing to effective estate planning, here are a few actionable strategies for your family to get started.",
      image: "/images/Rectangle 442.svg",
      author: {
        name: "Joseph H.",
        designation: "Financial Tutor",
        image: "/images/Blog.png",
      },
    },
    {
      category: "ARTICLE",
      title: "Knowledge is power.",
      subitle: "How Personal Wealth Potential Transforms Starting a Family",
      description:
        "We need practical steps to build and maintain generational wealth. From smart investing to effective estate planning, here are a few actionable strategies for your family to get started.",
      image: "/images/Rectangle 442.svg",
      author: {
        name: "Joseph H.",
        designation: "Financial Tutor",
        image: "/images/blog2.png",
      },
    },
  ];

  return (
    <>
      <div className="lg:py-28 px-2 py-6 lg:px-14 my-20 mx-2 lg:mx-20 rounded-[24px] bg-[#FCF8F5] text-[#00262B]">
        <div className="flex flex-col lg:flex-row h-full gap-10 ">
          <div className=" h-full w-full">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-sm font-haylard font-medium">
                RELATED ARTICLES
              </p>
              <p className="md:text-3xl lg:text-5xl xl:text-[64px] font-jubilee leading-10 xl:leading-[64px]">
                Explore more on the Wealth & Equity blog
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="font-halyard flex flex-col gap-5 my-4"
                >
                  <img
                    src={blog.image}
                    alt="Icon"
                    className="w-full h-48 md:w-full md:h-64 lg:w-full lg:h-72 mt-2 rounded-lg object-cover"
                  />
                  <div>
                    <div className="my-2 flex">
                      <p className="py-1 px-2 text-[12px] text-[#7E8040] text-bold rounded-sm bg-[#FDFFA5]">
                        {blog.category}
                      </p>
                    </div>
                    <p className="text-[20px] font-semibold text-[#00262B]">
                      {blog.subitle}
                    </p>
                    <p className="text-[14px] font-semibold text-[#00262B] mt-2">
                      By {blog.author.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
