"use server"

import React from "react";
import { NewsCard } from "./NewsCard";

const PremiumNewsList = async () => {
  const result = {
    data: [
      {
        id: "f0c7278e-9c52-478d-a4f9-c91619ee7b36",
        title: "My Fourth Post",
        content: "Content of the post goes here.",
        thumbnail: "https://i.ibb.co/4RQHr9ST/download-3.jpg",
        isFeatured: true,
        status: "PUBLISHED",
        tags: ["typescript", "prisma", "express"],
        views: 0,
        createdAt: "2026-07-01T05:38:20.898Z",
        updatedAt: "2026-07-01T05:38:20.898Z",
        isPremium: false,
        authorId: "79cc13bf-bd95-4730-9c95-3ca1ca368eb3",
        author: {
          id: "79cc13bf-bd95-4730-9c95-3ca1ca368eb3",
          name: "Masad Rayan",
          email: "masad9@gmail.com",
          activeStatus: "ACTIVE",
          role: "ADMIN",
          createdAt: "2026-06-25T18:26:11.500Z",
          updatedAt: "2026-06-25T18:26:11.500Z",
        },
        comments: [],
        _count: {
          comments: 0,
        },
      },
    ],
  };

  if (!result.data || result.data.length === 0) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        No premium news available at the moment. Please check back later for
        exclusive content and insights.
      </p>
    );
  }

  return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.data?.map((news : any) => (
              <NewsCard key={news.id} news={news} />
            ))}
        </div>
  )
};

export default PremiumNewsList;
