import React from 'react'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/HeaderComponent/Header'
import HomeContact from '../Component/HomeComponent/HomeContact'
import HomeListItem from '../Component/HomeComponent/HomeListItem'
import HomeNewFeeds from '../Component/HomeComponent/HomeNewFeeds'
import HomeSlider from '../Component/HomeComponent/HomeSlider'
import SideAction from '../Component/SideAction/SideAction'

function HomeLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HomeSlider />
      <HomeListItem row={2} title="Brand New Products" />
      <HomeNewFeeds />
      <HomeContact />
      <Footer checkimg={false} />
    </>
  )
}

export default HomeLayout
