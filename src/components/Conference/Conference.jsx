import  { useRef, useState ,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../../assets/images/conference.jpg";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from 'axios'

gsap.registerPlugin(ScrollTrigger);


export default function Conference({ title, subtitle, conferences, openPopup }) {
  const sliderRef = useRef(null);
  const componentref = useRef(null);

  useEffect(()=>{
    gsap.fromTo(
      componentref.current,
      {opacity:0,y:50},
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          scrollTrigger: {
            trigger: componentref.current,
            start: "top 80%", 
            toggleActions: "play none none none",
          },
      }
    )
  },[])

  // Array of conference data



  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows as we are using custom arrows
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
    <div ref={componentref} style={{opacity:0}} className="relative text-center z-10 py-10" id="menu">
      <h1 className="text-[#166a45] font-bold my-10 text-4xl ">
        {title} <span className="text-[#111927]">{subtitle}</span>
      </h1>

      {/* Custom Left Arrow */}
      <div className="absolute top-[50%] left-1 z-10 text-2xl text-green-600 cursor-pointer">
        <button
          onClick={() => sliderRef.current.slickPrev()} // Use the slickPrev method directly
        >
          <ArrowCircleLeft size={28} />
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {conferences.map((conference) => (
          <div className="flex justify-center w-full z-10" key={conference.id}>
            <div className="w-[80%] flex flex-col mx-auto p-4 cursor-pointer border border-green-400 rounded-2xl transition-all hover:bg-green-400">
              <img
                className="w-full h-auto rounded-xl"
                src={conference.image}
                alt={conference.title}
                loading = 'lazy'
              />
              <div className="my-10 self-end">
                <h4 className="text-lg font-medium text-gray-700 my-4 bg-green-400 rounded-2xl p-1">
                  {conference.title}
                </h4>
                <button
                  onClick={() => openPopup(conference)} // Open the popup when clicked
                  className="w-32 bg-green-100 hover:bg-green-200 text-gray-800 py-2 rounded transition-all"
                >
                  عرض التفاصيل
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Right Arrow */}
      <div className="absolute top-[50%] right-1 z-10 text-2xl text-green-600 cursor-pointer">
        <button
          onClick={() => sliderRef.current.slickNext()} // Use the slickNext method directly
        >
          <ArrowCircleRight size={28} />
        </button>
      </div>    
    </div>
  );
}
