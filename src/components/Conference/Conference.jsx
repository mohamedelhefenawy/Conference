import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import photo from "../../assets/images/blog-1.jpeg";

function Conference() {
  const sliderRef = useRef(null);

  // Array of conference data
  const conferences = [
    { id: 1, title: "مؤتمر الجمعية", image: photo },
    { id: 2, title: "مؤتمر الجمعية", image: photo },
    { id: 3, title: "مؤتمر الجمعية", image: photo },
    { id: 4, title: "مؤتمر الجمعية", image: photo },
    { id: 5, title: "مؤتمر الجمعية", image: photo },
    { id: 6, title: "مؤتمر الجمعية", image: photo },
  ];

  // State to manage popup visibility
  const [pop, setPop] = useState(false);
  const [selectedConference, setSelectedConference] = useState(null);

  // Open the popup with the selected conference
  const openPopup = (conference) => {
    setSelectedConference(conference);
    setPop(true);
  };

  // Close the popup
  const closePopup = () => {
    setPop(false);
    setSelectedConference(null);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
    <div className="relative text-center z-[1]" id="menu">
      <h1 className="text-[#166a45] font-bold my-10 text-4xl ">
        المؤتمرات <span className="text-[#111927]">المتاحة</span>
      </h1>

      {/* Custom Left Arrow */}
      <div className="absolute top-[50%] left-0 z-[50] text-2xl text-green-600 cursor-pointer">
        <button
          onClick={() => sliderRef.current.slickPrev()} // Use the slickPrev method directly
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#166a45" viewBox="0 0 256 256">
            <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
          </svg>
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {conferences.map((conference) => (
          <div className="flex justify-center w-full z-[1]" key={conference.id}>
            <div className="w-[80%] flex flex-col mx-auto p-4 cursor-pointer border border-green-400 rounded-2xl transition-all hover:bg-green-400  z-[1]">
              <img
                className="w-full h-auto rounded-xl"
                src={conference.image}
                alt={conference.title}
              />
              <div className="my-10 self-end">
                <h4 className="text-lg font-medium text-gray-700 my-4 bg-green-400 rounded-2xl p-1">
                  {conference.title}
                </h4>
                <button
                  onClick={()=> openPopup(conference)} // Open the popup when clicked
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
      <div className="absolute top-[50%] right-0 z-[50] text-2xl text-green-600 cursor-pointer">
        <button
          onClick={() => sliderRef.current.slickNext()} // Use the slickNext method directly
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#166a45" viewBox="0 0 256 256">
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
          </svg>
        </button>
      </div>

      {/* Popup Modal */}
      {pop && (
        <div className="fixed inset-0 bg-black bg-opacity-[50%] flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              تفاصيل المؤتمر
            </h2>
            <img
              className="w-full h-auto rounded-xl mb-4"
              src={selectedConference.image}
              alt={selectedConference.title}
            />
            <h4 className="text-lg text-gray-700 mb-4">{selectedConference.title}</h4>
            <p className="text-gray-600 mb-6">
              تفاصيل إضافية حول المؤتمر يمكن أن تذهب هنا.
            </p>
            <button
              onClick={closePopup}
              className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Conference;
