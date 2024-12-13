import React from 'react'
import Slider from "react-slick";
import '../Conference/Conference.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from '../../assets/images/blog-1.jpeg'

function Conference() {
  const language = 'ar'
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    centerMode: false,
    arrows: false,
    rtl: language === "ar" ? true : false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='conference'>
      <h1>المؤتمرات <span>المتاحة</span></h1>
      <Slider {...settings}>
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
    </Slider>
      
    </div>
  )
}

export default Conference
