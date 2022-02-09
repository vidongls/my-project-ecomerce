import React from 'react'
import CartComponent from '../Component/CartComponent/CartComponent'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/HeaderComponent/Header'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import SideAction from '../Component/SideAction/SideAction'

function CartLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Cart" curpage="Cart" />
      <CartComponent />
      <Footer />
    </>
  )
}

export default CartLayout
