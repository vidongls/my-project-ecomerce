import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoginAction } from '../../Slice/LoginSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { FaArrowLeft } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack'
import { useHistory } from 'react-router-dom'

const schema = yup.object().shape({
  password: yup.string().required('Vui lòng nhập mật khẩu'),
  email: yup.string().required('Không được bỏ trống'),
})

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    }

    const action = LoginAction(userData)
    const resultAction = await dispatch(action)
    let user = unwrapResult(resultAction)
    console.log(resultAction);
    if (user.length !== 0) {
      enqueueSnackbar('Đăng nhập thành công', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 3000,
        variant: 'success',
      })
      history.push(`/home`)
    } else {
      enqueueSnackbar('Đăng nhập thất bại', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        autoHideDuration: 3000,
        variant: 'error',
      })
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="login-basic">
          <h3>Login From Here</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4>
              Email <span>*</span>
            </h4>
            <input
              id="email"
              placeholder="Enter email..."
              {...register('email', { required: true })}
            />
            {errors.email && (
              <div className="error">Please provide your email</div>
            )}
            <h4>
              Password <span>*</span>
            </h4>
            <input
              type="password"
              id="password"
              placeholder="Enter password..."
              {...register('password', { required: true })}
            />
            {errors.password && (
              <div className="error">Please provide a password</div>
            )}
            <div className="login-action">
              <span className="check">
                <input id="remember" type="checkbox" />
                <label htmlFor="remember">Remember me!</label>
              </span>
              <span>Lost your password?</span>
            </div>

            <input type="submit" className="btn" value="Login Now" />
          </form>
          <div className="login-divide">
            <span>or</span>
          </div>
          <Link to="/register" className="login-btnregis btn">
            Register Now
          </Link>
          <Link to="/home" className="back-home">
            <FaArrowLeft /> Back
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
