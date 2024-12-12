import React from 'react'
import '../About/About.css'
import about from '../../assets/images/about-img.jpeg'
function About() {
  return (
    <div className='about' id='about'>
        <h1>تعرف <span>علينا</span></h1>
      <div className='talk'>
        <img src={about} alt="" />
        <div className='words'>
            <p>نحن مسئولون عن تنظيم المؤتمرات و الاشتراك فيها </p>
            <button>اشترك الان</button>
        </div>
      </div>
    </div>
  )
}

export default About
