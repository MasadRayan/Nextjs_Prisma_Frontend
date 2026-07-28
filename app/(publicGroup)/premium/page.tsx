import React, { Suspense } from "react";
import { NewsSkeletonLoader } from "../_components/news/NewsSkeletonLoader";
import PremiumNewsList from "../_components/news/PremiumNewsList";
import { NewsSearchBar } from "../_components/news/NewsSearchBar";

const PremiumNewsPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className=" mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex gap-4 flex-col md:flex-row items-center justify-center md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Premium News
          </h1>
          <p className="text-muted-foreground">
            Welcome to the premium news section! 
          </p>
        </div>
        <NewsSearchBar />
      </div>

      <Suspense fallback={<NewsSkeletonLoader />}>
        <PremiumNewsList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default PremiumNewsPage;
