import React from 'react'
import Header from '../Component/HeaderComponent/Header'
import ProductList from '../Component/ProductComponent/ProductList'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Footer from '../Component/Footer/Footer'
import SideAction from '../Component/SideAction/SideAction'

function ProductLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Our Shop" curpage="Shop" />
      <ProductList />
      <Footer checkimg={true} />
    </>
  )
}

export default ProductLayout
