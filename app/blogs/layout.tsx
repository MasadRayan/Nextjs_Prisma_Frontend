import React from 'react'

const BlogsLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div>
      This is the blog layout
        {children}
    </div>
  )
}

export default BlogsLayout
