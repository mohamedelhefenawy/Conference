import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Conference from "./Conference/Conference";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Ended from "./Ended/Ended";
import Allcons from "./allcons/Allcons";
import photo from "../assets/images/conference.jpg";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import Comment from "./comment/Comment";


function Landing({ closePopupSearch, popSearch }) {
  const [line, useline] = useState("#home");

  const conferenceData = [
    {
      id: 1,
      title: "مؤتمر الجمعية",
      image: photo,
      start: "15/12/2024",
      end: "1/2/2025",
      location: "جدة",
    },
    {
      id: 2,
      title: "مؤتمر الجمعية",
      image: photo,
      start: "15/12/2024",
      end: "1/2/2025",
      location: "جدة",
    },
    {
      id: 3,
      title: "مؤتمر الجمعية",
      image: photo,
      start: "15/12/2024",
      end: "1/2/2025",
      location: "جدة",
    },
    {
      id: 4,
      title: "مؤتمر الجمعية",
      image: photo,
      start: "15/12/2024",
      end: "1/2/2025",
      location: "جدة",
    },
    {
      id: 5,
      title: "مؤتمر الجمعية",
      image: photo,
      start: "15/12/2024",
      end: "1/2/2025",
      location: "جدة",
    },
    {
      id: 6,
      title: "مؤتمر الجمعية",
      image: photo,
      start: "15/12/2024",
      end: "1/2/2025",
      location: "جدة",
    },
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

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 justify-center">
      <Home></Home>
      <About></About>
      {/* <Allcons></Allcons>
      <Conference></Conference>
      <Ended></Ended> */}
      <Conference
        title="جميع"
        subtitle="المؤتمرات"
        conferences={conferenceData}
        openPopup={openPopup}
      />
      <Conference
        title="المؤتمرات"
        subtitle="المتاحة"
        conferences={conferenceData}
        openPopup={openPopup}
      />
      <Conference
        title="المؤتمرات"
        subtitle="المنتهية"
        conferences={conferenceData}
        openPopup={openPopup}
      />

      {pop && (
        <div className="fixed z-20 inset-0 bg-black bg-opacity-[50%] flex justify-center items-center">
          <div className="bg-white py-12 px-7 rounded-lg z-20 w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              تفاصيل المؤتمر
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-center relative">
              <div>
                <img
                  className="w-full h-fit rounded-xl"
                  src={selectedConference.image}
                  alt={selectedConference.title}
                />
              </div>
              {/* Conference Details */}
              <div className="flex flex-col gap-6 items-center h-full">
                <h4 className="text-lg text-gray-700 font-bold flex w-full text-right ">
                  {selectedConference.title}
                </h4>
                <div className="flex flex-col gap-6 w-full justify-between h-full">
                  <div className="flex flex-col gap-6 ">
                    <p className="text-gray-600 flex gap-3">
                      موعد بداية المؤتمر :{" "}
                      <span>{selectedConference.start}</span>
                    </p>
                    <p className="text-gray-600 flex gap-3">
                      موعد نهاية المؤتمر : <span>{selectedConference.end}</span>
                    </p>
                    <p className="flex gap-3">
                      المكان : <span>{selectedConference.location}</span>
                    </p>
                  </div>

                  <div className="flex gap-3 mt-6 h-fit">
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
            </div>

            {/* Action Buttons */}
          </div>
        </div>
      )}

      {popSearch && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-[50%] flex justify-center items-center">
          <form className="bg-white p-8 rounded-lg z-10 flex flex-col relative">
            <XCircle
              size={25}
              className="absolute top-5 left-5 text-gray-400 cursor-pointer
              hover:text-gray-800 ease-linear duration-150 hover:scale-105"
              onClick={closePopupSearch}
            />
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              اكتب ما تريد البحث عنه
            </h2>
            <input
              type="text"
              className="border mb-3 border-gray-200 rounded-md py-2 px-2 outline-none"
              required
            />
            <button
              className="p-3 bg-green-300 rounded-xl hover:bg-green-700 
            hover:text-white duration-100 ease-linear flex justify-center items-center gap-3"
            >
              <MagnifyingGlass size={25} />
              بحث
            </button>
          </form>
        </div>
      )}

      <Contact></Contact>
      <Comment></Comment>
      <Footer line={line} useline={useline}></Footer>
    </div>
  );
}

export default Landing;
