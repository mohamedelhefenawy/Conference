import photo from '../../assets/images/menu-1.png'
import { useRef } from 'react';
import {
    ArrowCircleLeft,
    ArrowCircleRight,
    ArrowLeft,
    ArrowRight,
  } from "@phosphor-icons/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Comment() {

    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false, // Disable default arrows as we are using custom arrows
       
      };


      const comments = [
        {comment:'بقدر ما تُشير الحقائق الرياضية للواقع بقدر ما تكون غير مؤكدة، وبقدر ما تكون مؤكدةً بقدر ما تكون غير واقعية.' , author :'ألبيرت أينشتاين',job_author:'مؤسس علم الفيزياء' , photo},
        {comment:'بقدر ما تُشير الحقائق الرياضية للواقع بقدر ما تكون غير مؤكدة، وبقدر ما تكون مؤكدةً بقدر ما تكون غير واقعية.' , author :'ألبيرت أينشتاين',job_author:'مؤسس علم الفيزياء' , photo},
        {comment:'بقدر ما تُشير الحقائق الرياضية للواقع بقدر ما تكون غير مؤكدة، وبقدر ما تكون مؤكدةً بقدر ما تكون غير واقعية.' , author :'ألبيرت أينشتاين',job_author:'مؤسس علم الفيزياء' , photo}
      ]
    

  return (
    <div className="relative text-center z-[1]" id="menu">

        <div className="absolute top-[50%] left-1 md:left-10 z-10 text-2xl text-green-600 cursor-pointer">
                <button
                onClick={() => sliderRef.current.slickPrev()} // Use the slickPrev method directly
                >
                <ArrowCircleLeft size={28} />
                </button>
      </div>
    <Slider ref={sliderRef} {...settings}>
    {comments.map((comment ,index) =>(<div key={index} className='w-3/4'>
    <div className="flex flex-col items-center text-xl gap-8 justify-center border-4 border-green-700 shadow-lg  w-3/4 mx-auto p-6 rounded-2xl bg-gradient-to-r from-green-200 to-green-50 " >
  <h1 className="text-center text-gray-800 font-semibold text-lg md:text-xl leading-relaxed">
    {comment.comment}
  </h1>

  <div className="flex justify-center items-center gap-8 mt-6">
    <div className="text-center">
      <h3 className="text-gray-800 text-xl font-bold">{comment.author}</h3>
      <p className="text-gray-600 text-md mt-2">{comment.job_author}</p>
    </div>
    <img src={comment.photo} alt="Albert Einstein" className="w-24 h-24 " />
  </div>
</div>

</div>))}
</Slider>

<div className="absolute top-[50%] right-1 md:right-10 z-10 text-2xl text-green-600 cursor-pointer">
        <button
          onClick={() => sliderRef.current.slickNext()} // Use the slickNext method directly
        >
          <ArrowCircleRight size={28} />
        </button>
      </div>
</div>
  )
}
