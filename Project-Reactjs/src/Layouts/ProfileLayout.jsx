import React from 'react'
import SideAction from '../Component/SideAction/SideAction'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import Profile from '../Component/ProfileComponent/Profile'

function ProfileLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Profile" curpage="Profile" />
      <Profile />
      <Footer checkimg={true} />
    </>
  )
}

export default ProfileLayout
