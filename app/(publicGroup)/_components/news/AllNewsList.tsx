"use server"

import { NewsItem } from "@/lib/types";
import getAllPosts from "../../_actions/getAllPosts";
import { NewsCard } from "./NewsCard";

const AllNewsList = async () => {
  const result = await getAllPosts();
  const premiumNews = Array.isArray(result?.data)
    ? result.data
    : Array.isArray(result?.data?.data)
      ? result.data.data
      : [];

  if (premiumNews.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No premium news available at the moment. Please check back later for
        exclusive content and insights.
      </p>
    );
  }

  return (

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {premiumNews.map((news: NewsItem) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  )
};

export default AllNewsList;
