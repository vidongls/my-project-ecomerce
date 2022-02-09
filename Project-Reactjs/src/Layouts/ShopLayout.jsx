import React from 'react'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import ShopContainer from '../Component/ShopComponent/ShopContainer'
import SideAction from '../Component/SideAction/SideAction'

function ShopLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Our Shop" curpage="Shop" />
      <ShopContainer />
      <Footer checkimg={true} />
    </>
  )
}

export default ShopLayout
