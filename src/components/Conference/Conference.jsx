import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../../assets/images/blog-1.jpeg";

function Conference() {
  // Array of conference data
  const conferences = [
    { id: 1, title: "مؤتمر الجمعية", image: photo },
    { id: 2, title: "مؤتمر الجمعية", image: photo },
    { id: 3, title: "مؤتمر الجمعية", image: photo },
    { id: 4, title: "مؤتمر الجمعية", image: photo },
    { id: 5, title: "مؤتمر الجمعية", image: photo },
    { id: 6, title: "مؤتمر الجمعية", image: photo },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows since we will add custom ones
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
    <div className="text-center z-[1]" id="menu">
      <h1 className="text-[#166a45] font-bold my-10 text-4xl ">
        المؤتمرات <span className="text-[#111927]">المتاحة</span>
      </h1>
      <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#166a45" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg>
      {/* Slider Component */}
      <Slider {...settings}>
        {conferences.map((conference) => (
          <div className="flex justify-center w-full z-[1]" key={conference.id}>
            <div className="w-[90%] mx-auto p-4 cursor-pointer border border-green-400 rounded-2xl transition-all hover:bg-green-400 z-[1]">
              <img
                className="w-full h-auto rounded-xl"
                src={conference.image}
                alt={conference.title}
              />
              <div className="my-10">
                <h4 className="text-lg font-medium text-gray-700 my-4">
                  {conference.title}
                </h4>
                <button className="w-32 bg-green-100 hover:bg-green-200 text-gray-800 py-2 rounded transition-all">
                  احجز الان
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#166a45" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg>

      </div>

  
    </div>
  );
}

export default Conference;
