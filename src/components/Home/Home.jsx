import React from 'react';
import home from '../../assets/images/home-img.jpeg'; // Ensure the correct path to your image
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_2 from '../../assets/images/home-2.jpeg'




function Home() {

  const images = [
    {id:1,image:home_2,title :'بوابة المؤتمرات والأنشطة القافية' ,sub_title :'وجهة للتعلم والنمو تقدم فعاليات تعزز المعرفة وتوفر فرصا للتطوير الشخصي والمهني'},
    {
    id:2 , image:home , title :'تبدا فعاليات المؤتمر منذ الان' ,sub_title:'الساعة الان السابعة صباحا'
    }
  ]

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    
  };

  return (
    <Slider {...settings}>
    {images.map((home) => (
      <div
      className="home mt-12 w-full h-[90vh] relative flex justify-center items-center"
      id='home'
      key={home.id}
    >
      {/* Background Image */}
      <img
        src={home.image}
        alt="Home Background"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
    
      {/* Centered Content */}
      <div className="text-center text-white space-y-5 z-10 h-full flex flex-col  justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">{home.title}</h1>
        <p className="text-lg md:text-xl">{home.sub_title}</p>
        <button className="w-24 text-[#472400] bg-[#dff6e7] py-2 cursor-pointer rounded self-center">
          احجز الان
        </button>
      </div>
    </div>
    
    ))}
  </Slider>
  
  );
}

export default Home;
