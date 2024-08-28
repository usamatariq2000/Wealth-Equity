"use client";
import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import api from "@/app/services/api";
import { useRouter } from "next/navigation";

const BlogList = () => {
  const [blogs, setBlogs] = useState<any>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<any>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("All post");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const router = useRouter()

  useEffect(() => {
    console.log("test");
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs/getAllBlogs");
        setBlogs(response?.data?.blogs);
        setFilteredBlogs(response?.data?.blogs);
        console.log(response);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    let filtered = blogs;

    if (selectedFilter !== "All post") {
      filtered = filtered.filter(
        (blog: any) => blog.category === selectedFilter
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (blog: any) =>
          blog.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [selectedFilter, searchQuery, blogs]);

  const filters = [
    { id: 1, name: "All post" },
    { id: 2, name: "Family" },
    { id: 3, name: "Investments" },
    { id: 4, name: "Budgeting" },
    { id: 5, name: "Entrepreneurs" },
  ];

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="p-5 min-h-[300px] md:p-10 mb-20 rounded-[24px] bg-white">
        <div className="flex flex-col lg:flex-row h-full gap-10 ">
          <div className=" h-full w-full">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                {filters.map((filter, index) => (
                  <div key={index}>
                    <Button
                      className="border-[1px] border-[#AACDCD] bg-white hover:bg-[#AACDCD] focus:bg-[#AACDCD] text-[#003336] font-halyard text-sm xl:text-base px-5"
                      onClick={() => handleFilterChange(filter.name)}
                    >
                      {filter.name}
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  classNames={{
                    base: "max-w-full sm:max-w-[25rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                      "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                  }}
                  placeholder="Search"
                  size="sm"
                  startContent={<FaSearch size={18} />}
                  type="search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div className="flex items-center flex-wrap justify-center  w-full h-full">
              {filteredBlogs?.length > 0 ? (
                filteredBlogs.map((blog: any, index: any) => (
                  <div
                    key={index}
                    className="font-halyard flex flex-col gap-5 my-4 w-[450px] cursor-pointer "
                    onClick={() => router.push(`/short-articles/${blog.id}`)}
                  >
                    <img
                      src={blog?.image}
                      alt="Icon"
                      className="w-full h-48 md:w-full md:h-64 lg:w-full lg:h-72 mt-2 rounded-lg object-cover"
                    />
                    <div>
                      <div className="my-2 flex">
                        <p className="py-1 px-2 text-[12px] text-[#7E8040] text-bold rounded-sm bg-[#FDFFA5]">
                          {blog?.category}
                        </p>
                      </div>
                      <p className="text-[20px] font-semibold text-[#00262B]">
                        {blog?.heading}
                      </p>
                      <p className="text-[14px] font-semibold text-[#00262B] mt-2">
                        By {blog?.author}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                
                <text className="text-center mt-28 text-[20px]" > No Blogs Found </text>
          
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
