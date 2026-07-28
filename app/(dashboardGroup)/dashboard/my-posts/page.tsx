import React, { Suspense } from "react";
import MyPostSkeleton from "../../_components/myPostComponent/MyPostSkeleton";
import PostFromDialog from "../../_components/myPostComponent/PostFromDialog";
import { MyPostsList } from "../../_components/myPostComponent/MyPostList";

const userMyPostPage = () => {
  return (
    <div className=" mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="z-10 text-center mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl text-left lg:text-5xl font-semibold mb-4">
            My Posts
          </h1>
          <p className="text-muted-foreground mb-4">
            Create and manage your posts in one place.
          </p>
        </div>
        <div>
          <PostFromDialog mode="create"></PostFromDialog>
        </div>
      </div>

      <Suspense fallback={<MyPostSkeleton />}>
        <MyPostsList />
      </Suspense>
    </div>
  );
};

export default userMyPostPage;
