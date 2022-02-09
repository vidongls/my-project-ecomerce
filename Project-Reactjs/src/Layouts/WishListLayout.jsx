import React from 'react'
import SideAction from '../Component/SideAction/SideAction'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import WhishList from '../Component/WishListComponent/WhishList'

function WishListLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Wishlist" curpage="Wishlist" />
      <WhishList />
      <Footer checkimg={true} />
    </>
  )
}

export default WishListLayout
