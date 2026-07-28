import { Suspense } from "react";
import AllNewsList from "../_components/news/AllNewsList";
import { NewsSkeletonLoader } from "../_components/news/NewsSkeletonLoader";


const AllNewsPage = () => {
  return (
    <div className= " mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="z-10 max-w-lg text-center mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">All News</h1>
        <p className="text-muted-foreground">
          Welcome to the news section! Here, you'll find a wide range of articles and updates on various topics. Stay informed with the latest news and insights from around the world.
        </p>
      </div>
      <Suspense fallback={<NewsSkeletonLoader />}>
        <AllNewsList />
      </Suspense>
      
    </div>
  )
}

export default AllNewsPage
