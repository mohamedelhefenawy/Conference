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
    arrows: false,
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
    <div className="conference my-12 text-center">
      <h1 className="text-2xl font-bold text-green-700">
        المؤتمرات <span className="text-gray-800">المتاحة</span>
      </h1>
      <Slider {...settings}>
        {conferences.map((conference) => (
          <div
            className="w-[90%] mx-auto p-4 cursor-pointer border border-green-400 rounded-2xl transition-all hover:bg-green-400"
            key={conference.id}
          >
            <img
              className="w-fit h-fit rounded-t-2xl"
              src={conference.image}
              alt={conference.title}
            />
            <h4 className="text-lg font-medium text-gray-700 my-4">
              {conference.title}
            </h4>
            <button className="w-32 bg-green-100 hover:bg-green-200 text-gray-800 py-2 rounded transition-all">
              احجز الان
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Conference;
