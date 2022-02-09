import React from 'react'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import BlogDetail from '../Component/BlogComponent/BlogDetail'
import SideAction from '../Component/SideAction/SideAction'
function BlogDetailLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Blog" curpage="Details" />
      <BlogDetail />
      <Footer />
    </>
  )
}

export default BlogDetailLayout
