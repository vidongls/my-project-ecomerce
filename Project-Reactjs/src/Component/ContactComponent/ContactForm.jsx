import { React } from 'react'
import { useForm } from 'react-hook-form'
import TextareaAutosize from '@mui/material/TextareaAutosize'

import { FaUserAlt, FaEnvelope, FaPhone, FaHandPointUp } from 'react-icons/fa'

function ContactForm(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="contact-form">
      <div className="container">
        <div className="contact-form__title">
          <p> Anything On your Mind</p>
          <h2>Estimate Your Idea</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="box-first">
            <div style={{ position: 'relative', width: '100%' }}>
              <span>
                <FaUserAlt />
              </span>
              <input
                placeholder="Your Name"
                {...register('yourName', { required: true })}
              />
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
              <span>
                <FaEnvelope />
              </span>
              <input
                placeholder="Your Mail"
                {...register('yourMail', { required: true })}
              />
            </div>
          </div>
          <div className="box-first">
            <div style={{ position: 'relative', width: '100%' }}>
              <span>
                <FaPhone />
              </span>
              <input
                placeholder="Your Phone"
                {...register('yourPhone', { required: true })}
              />
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
              <span>
                <FaHandPointUp />
              </span>
              <input
                placeholder="Your Subject"
                {...register('yourSubject', { required: true })}
              />
            </div>
          </div>

          <TextareaAutosize
            // placeholder="Your Message"
            minRows={12}
            {...register('message', { required: true })}
          />
          <input className="btn" value="Get Action" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default ContactForm
