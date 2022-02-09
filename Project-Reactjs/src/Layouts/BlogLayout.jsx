import React from 'react'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import BlogContainer from '../Component/BlogComponent/BlogContainer'
import SideAction from '../Component/SideAction/SideAction'

function BlogLayout(props) {
  return (
    <div>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Blog" curpage="Blog" />
      <BlogContainer />
      <Footer checkimg={true} />
    </div>
  )
}

export default BlogLayout
