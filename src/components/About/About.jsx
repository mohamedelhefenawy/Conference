import React from 'react'
// import '../About/About.css'
import about from '../../assets/images/home.jpeg'
import know from '../../assets/images/know.jpg'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import  { useRef, useState ,useEffect } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function About() {

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

  return (
    <div className="about py-20" id="about" ref={componentref}>
    <h1 className="text-4xl font-bold text-[#166a45] text-center">
        تعرف <span className="text-[#111927]">علينا</span>
    </h1>
    <div className="talk my-8 flex flex-col justify-center gap-5 items-center md:flex-row">
        <img
            src={know}
            alt=""
            className="w-[90%] h-[40vh] max-w-full object-cover rounded-lg md:w-[35%]"
        />
        <div className="words w-[90%] md:w-[35%] h-[40vh] bg-[#b8eacb] flex flex-col justify-center items-center gap-6 p-4 rounded-lg">
            <p className="text-[#4d5671] w-[90%] mx-auto text-center">{`نحن مسئولون عن تنظيم المؤتمرات و الاشتراك فيها`}</p>
            {/* <button className="w-[100px] bg-[#dff6e7] hover:bg-[#cdebd9] text-gray-800 py-2 rounded">
                اشترك الان
            </button> */}
        </div>
    </div>
</div>

  )
}

export default About
