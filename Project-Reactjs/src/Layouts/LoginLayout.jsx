import React from 'react'
import HeaderDetail from '../Component/HeaderComponent/HeaderDetail'
import Login from '../Component/LoginComponent/Login'

function LoginLayout(props) {
  return (
    <>
      <HeaderDetail check={false} title="Login" curpage="Login" />
      <Login />
    </>
  )
}

export default LoginLayout
