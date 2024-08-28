"use client";
import { useEffect, useState } from "react";

import Header from "@/app/components/Calculator/Header";
import Footer from "@/app/components/Footer";
import { useParams } from "next/navigation";
import Blogs from "@/app/components/ShortArticle/blogs";
import Hero from "@/app/components/ShortArticle/hero";
import FinancialLiteracyTips from "@/app/components/ShortArticle/tips";
import api from "@/app/services/api";

export default function ShortArticles() {
  const { blog_id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await api.get(`/blogs/getBlogById/${blog_id}`);
        setBlogDetails(response.data.blog);
      } catch (error) {
        console.error("Error fetching results:", error);
      }
    };
    if (blog_id) {
      fetchBlogDetails();
    }
  }, [blog_id]);

  console.log(blogDetails);

  return (
    <div>
      {blogDetails && (
        <>
          <Header />
          <Hero
            heading={blogDetails.heading}
            createdAt={blogDetails.createdAt}
            category={blogDetails.category}
          />
          <FinancialLiteracyTips description={blogDetails.description} />
          <Blogs />
          <Footer />
        </>
      )}
    </div>
  );
}
