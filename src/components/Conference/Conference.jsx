import  { useRef, useState } from "react";
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

export default function Conference({title , subtitle , conferences }) {
  const sliderRef = useRef(null);

  // Array of conference data


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

  const navigate = useNavigate()

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

      {/* Popup Modal */}
      {pop &&  (
  <div className="fixed z-[9999] inset-0 bg-black bg-opacity-[50%] flex justify-center items-center">
    <div className="bg-white p-8 rounded-lg z-10 w-fit">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        تفاصيل المؤتمر
      </h2>
      <div className="grid grid-cols-2 gap-6 items-center relative">
        {/* Conference Details */}
        <div className="flex flex-col gap-6 items-center w-fit">
          <h4 className="text-lg text-gray-700 font-bold flex mx-auto absolute top-0 ">
            {selectedConference.title}
          </h4>
          <div className="self-start flex flex-col gap-6">
          <p className="text-gray-600 flex gap-3">
            موعد بداية المؤتمر : <span>{selectedConference.start}</span>
          </p>
          <p className="text-gray-600 flex gap-3">
            موعد نهاية المؤتمر : <span>{selectedConference.end}</span>
          </p>
          <p className="flex gap-3">المكان : <span>{selectedConference.location}</span></p>

          <div className="flex  gap-3 mt-6">
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-green-300 text-black font-medium hover:text-white py-2 rounded-lg hover:bg-green-500 transition"
        >
          حجز
        </button>
        <button
          onClick={closePopup}
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
        >
          إغلاق
        </button>
      </div>
          </div>
        </div>
        {/* Conference Image */}
        <div>
          <img
            className="w-full h-96 rounded-xl"
            src={selectedConference.image}
            alt={selectedConference.title}
          />
        </div> 
      </div>

      {/* Action Buttons */}
     
    </div>
  </div>
)}

    </div>
  );
}


