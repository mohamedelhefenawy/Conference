import React from 'react'
import '../Conference/Conference.css'
import photo from  '../../assets/images/blog-1.jpeg'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
function Conference() {

  


  return (
    <div className='conference' id='menu'>
      <h1>المؤتمرات <span>المتاحة</span></h1>

  <div  className='cons'>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <button>احجز الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <button>احجز الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <button>احجز الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <button>احجز الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <button>احجز الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <button>احجز الان</button>
</div>


      </div>
    </div>
  )
}

export default Conference
