import React from 'react'

const BlogPage = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

  console.log(posts);

  return (
    <div>
      This is the blog page <br />
    </div>
  )
}

export default BlogPage
