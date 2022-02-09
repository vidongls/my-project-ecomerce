import React from 'react'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Register from '../Component/RegisterComponent/Register'

function RegisterLayout(props) {
  return (
    <>
      <HeaderDetail check={false} title="Register" curpage="Register" />
      <Register />
    </>
  )
}

export default RegisterLayout
