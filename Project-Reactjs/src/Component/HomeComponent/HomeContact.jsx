import React from 'react'
import { useForm } from 'react-hook-form'

function HomeContact(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className="homecontact">
      <div className="homecontact-wrapper">
        <div className="homecontact-content">
          <div className="homecontact-left">
            <div className="homecontact-left__icon">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/ecomerces-7cb8c.appspot.com/o/subscribe.png?alt=media&token=0a50ebb0-3de4-43b9-8fce-4e9a208f5afd"
                alt=""
              />
            </div>
            <div className="homecontact-left__text">
              <h2>Newsletter</h2>
              <p>Subsribe here for get every single updates</p>
            </div>
          </div>
          <div className="homecontact-right">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="homecontact-right__box"
            >
              <input
                className="text-input"
                placeholder="Enter your email address"
                {...register('homecontact', { required: true })}
              />
              <input className="btn" value="subscribe now" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeContact
