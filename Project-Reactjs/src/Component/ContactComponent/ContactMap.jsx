import React from 'react'

function ContactMap(props) {
  return (
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15386.842013242822!2d105.83473876418!3d21.028304959069803!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1635694923018!5m2!1svi!2s"
        style={{ width: '100%', height: '670px', border: '0' }}
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default ContactMap
