import React, { Suspense } from 'react'
import { NewsSkeletonLoader } from '../_components/news/NewsSkeletonLoader';
import PremiumNewsList from '../_components/news/PremiumNewsList';

const PremiumNewsPage = () => {
  return (
    <div className= " mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="z-10 max-w-lg text-center mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Premium News</h1>
        <p className="text-muted-foreground">
          Welcome to the premium news section! Here, you'll find exclusive content and insights that are available only to our premium members. Stay informed with the latest updates and in-depth analysis on a variety of topics.
        </p>
      </div>

      <Suspense fallback={<NewsSkeletonLoader />}>
        <PremiumNewsList />
      </Suspense>
    </div>
  )
}

export default PremiumNewsPage
