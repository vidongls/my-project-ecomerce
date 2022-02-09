import React from 'react'
import SideAction from '../Component/SideAction/SideAction'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import CheckOut from '../Component/CheckOutComponent/CheckOut'

function CheckOutLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Checkout" curpage="Checkout" />
      <CheckOut />
      <Footer checkimg={true} />
    </>
  )
}

export default CheckOutLayout
