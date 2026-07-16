import React from 'react'
import { getAllBlogs } from '../utils/getAllBlogs';

const BlogPage = async () => {
  const posts = await getAllBlogs();



  return (
    <div>
      This is the blog page <br />

      {posts.map((post: any) => (
        <div key={post.id} className="my-4 mx-10">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}

    </div>
  )
}

export default BlogPage
