import React from 'react'
import '../Conference/Conference.css'
import photo from  '../../assets/images/menu-1.png'
function Conference() {
  return (
    <div className='conference'>
      <h1>المؤتمرات <span>المتاحة</span></h1>
      <div className='cons'>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <h4>30 ر.س</h4>
  <button>اشترك الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <h4> 30 ر.س </h4>
  <button>اشترك الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <h4>30 ر.س</h4>
  <button>اشترك الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <h4>30 ر.س</h4>
  <button>اشترك الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <h4>30 ر.س</h4>
  <button>اشترك الان</button>
</div>
<div className='con'>
  <img src={photo} alt="" />
  <h4>مؤتمر الجمعية</h4>
  <h4>30 ر.س</h4>
  <button>اشترك الان</button>
</div>


      </div>
    </div>
  )
}

export default Conference
