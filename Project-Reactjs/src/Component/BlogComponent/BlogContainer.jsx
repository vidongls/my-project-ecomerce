import React from 'react'
import BlogContent from './BlogContent'
import BlogSideBar from './BlogSideBar'

function BlogContainer(props) {
  return (
    <div className="blog">
      <div className="container">
        <BlogContent />
        <BlogSideBar />
      </div>
    </div>
  )
}

export default BlogContainer
