import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

function ContactArea(props) {
  return (
    <div className="contact-area">
      <div className="container">
        <div className="contact-box">
          <div className="icon">
            <FaEnvelope />
          </div>
          <h3>Mail Here</h3>
          <p>Admin@BasicTheme.com</p>
          <p>Info@Themepur.com</p>
        </div>
        <div className="contact-box">
          <div className="icon">
            {' '}
            <FaMapMarkerAlt />
          </div>

          <h3>Visit Here</h3>
          <p>27 Division St, New York, NY 10002, Jaklina, United Kingpung</p>
        </div>
        <div className="contact-box">
          <div className="icon">
            <FaPhone />
          </div>

          <h3>Call Here</h3>
          <p>+8 (123) 985 789</p>
          <p>+787 878897 87</p>
        </div>
      </div>
    </div>
  )
}

export default ContactArea
