import React from 'react'
import '../Contact/Contact.css'
function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1>تواصل <span>معنا</span></h1>
      <div className='row'>
      <iframe
  className="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  title="Google Maps Embed"
/>


    <div className='name'>
        <h2>تواصل</h2>
        <input type="text" placeholder='الاسم'/>
        <input type="text" placeholder='الايميل' />
        <input type="text" placeholder='الهاتف' />
        <button>تواصل الان</button>

    </div>
      </div>
    </div>
  )
}

export default Contact
