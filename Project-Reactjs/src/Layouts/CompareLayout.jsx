import React from 'react'
import SideAction from '../Component/SideAction/SideAction'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Header from '../Component/HeaderComponent/Header'
import Footer from '../Component/Footer/Footer'
import Compare from '../Component/CompareComponent/Compare'

function CompareLayout(props) {
  return (
    <>
      <SideAction />
      <Header />
      <HeaderDetail check={true} title="Compare" curpage="Compare" />
      <Compare />
      <Footer checkimg={true} />
    </>
  )
}

export default CompareLayout
