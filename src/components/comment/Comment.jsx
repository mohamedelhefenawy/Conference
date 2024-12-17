import photo1 from "../../assets/images/pic-1.png";
import photo2 from "../../assets/images/pic-2.png";
import photo3 from "../../assets/images/pic-3.png";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import  { useRef, useState ,useEffect } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Comment() {

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

  const comments = [
    {
      comment:
        "مؤتمر كان تجربة مثرية، ركز على تطبيقات الذكاء الاصطناعي والأتمتة في المكتبات لتحسين تجربة المستخدم. النقاشات والورش قدمت حلولًا عملية للتحول الرقمي وتطوير الكوادر البشرية.",
      author: "سارة محمد",
      job_author: "مؤتمر مستقبل المكتبات الذكية",
      photo: photo2,
    },
    {
      comment:
        "مؤتمر كان تجربة مثرية، ركز على تطبيقات الذكاء الاصطناعي والأتمتة في المكتبات لتحسين تجربة المستخدم. النقاشات والورش قدمت حلولًا عملية للتحول الرقمي وتطوير الكوادر البشرية.",
      author: "إبراهيم",
      job_author: "المؤتمرات والندوات",
      photo: photo1,
    },
    {
      comment:
        "مؤتمر كان تجربة مثرية، ركز على تطبيقات الذكاء الاصطناعي والأتمتة في المكتبات لتحسين تجربة المستخدم. النقاشات والورش قدمت حلولًا عملية للتحول الرقمي وتطوير الكوادر البشرية.",
      author: "محمد علي",
      job_author: "تطوير المكتبات الرقمية",
      photo: photo3,
    },
  ];

  return (
    <div className="relative text-center z-[1]" id="menu" ref={componentref}>
      <h1 className="text-4xl font-bold text-center text-[#166a45]">
        آراء <span className="text-[#111927]">العملاء</span>
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10 md:px-20">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-xl gap-4 justify-center border-2 border-gray-300 shadow-md w-full mx-auto p-6 rounded-xl bg-white"
          >
            {/* محتوى التعليق */}
            <p className="text-center text-gray-800 font-medium leading-relaxed text-lg">
              {comment.comment}
            </p>

            {/* صورة المستخدم واسم الكاتب */}
            <div className="flex flex-col items-center mt-4">
              <img
                src={comment.photo}
                alt={comment.author}
                className="w-20 h-20 rounded-full mb-2 object-cover"
              />
              <h3 className="text-gray-800 text-lg font-bold">
                {comment.author}
              </h3>
              <p className="text-gray-600 text-sm">{comment.job_author}</p>
            </div>

            {/* التقييم (نجوم) */}
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, starIndex) => (
                <span
                  key={starIndex}
                  className={`text-yellow-500 ${
                    starIndex + 1 <= comment.rating
                      ? "fill-current"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
