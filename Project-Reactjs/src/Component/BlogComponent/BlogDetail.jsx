import { React } from 'react'

import BlogDetailContent from './BlogDetailContent'
import BlogSideBar from './BlogSideBar'

function BlogDetail(props) {
  return (
    <div className="blog">
      <div className="container">
        <BlogDetailContent />
        <BlogSideBar />
      </div>
    </div>
  )
}

export default BlogDetail
