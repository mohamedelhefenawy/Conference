import { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Conference from "../Conference/Conference";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Ended from "../Ended/Ended";
import Allcons from "../allcons/Allcons";
import photo from "../../assets/images/conference.jpg";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import Comment from "../comment/Comment";
import axios from "axios";
import '../landing/Landing.css'

function Landing({ closePopupSearch, popSearch }) {
  const [line, useline] = useState("#home");
  const [conferenceData, setConferenceData] = useState([]);
  const token = "a1efd174703f533044d12a7992e76f949ed84e7f";

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https:events-back.cowdly.com/api/events/",
        {
          headers: {
            accept: "application/json",
            Authorization: `Token ${token}`,
          },
        }
      );
  
      const conferenceDataAll = response.data.map((item) => {
        // Start Date
        const startDate = new Date(item.start_date);
        const dayStart = startDate.toISOString().split("T")[0];
        const hourStart = startDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          
        });
  
        // End Date
        const endDate = new Date(item.end_date);
        const dayEnd = endDate.toISOString().split("T")[0];
        const hourEnd = endDate.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          
        });
  
        return {
          id: item.id,
          title: item.name,
          image: item.image,
          start: dayStart,
          end: dayEnd,
          hour_start: hourStart,
          hour_end: hourEnd,
          location: item.location,
          link: item.link,
          isEnded: item.has_ended,
        };
      });
  
      setConferenceData(conferenceDataAll);
    } catch (error) {
      console.error("Error fetching conference data:", error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [token]);

  


  const [filterconference , setFilterConference] = useState([])
  const handle_search =(query = "")=>{
    event.preventDefault()
    const filteredConferences = conferenceData.filter(
      (conf) => (query && conf.location.includes(query) )|| ( query&& conf.title.includes(query))
    );
    setFilterConference(filteredConferences)
    return filteredConferences;


  }

  const [query , setQuery]=useState('')









  const conferenceDataEnd = [
    {
      id: 1,
      title: "مؤتمر ",
      image: photo,
      start: "15/12/2024",
      end: "1/2/2025",
      hour_start: "12:30 PM",
      hour_end: "5 PM",
      location: "جدة",
      link: "https://maps.app.goo.gl/jo2Ck77Z437EiLUe7",
      isEnded: true,
    },
    {
      id: 2,
      title: "مؤتمر ",
      image: photo,
      start: "01/10/2024",
      end: "01/11/2024",
      hour_start: "12:30 PM",
      hour_end: "5 PM",
      location: "جدة",
      link: "https://maps.app.goo.gl/jo2Ck77Z437EiLUe7",
      isEnded: true,
    },
    {
      id: 3,
      title: "مؤتمر ",
      image: photo,
      start: "01/09/2024",
      end: "01/10/2024",
      hour_start: "12:30 PM",
      hour_end: "5 PM",
      location: "جدة",
      link: "https://maps.app.goo.gl/jo2Ck77Z437EiLUe7",
      isEnded: true,
    },
  ];

  // State to manage popup visibility
  const [pop, setPop] = useState(false);
  const [selectedConference, setSelectedConference] = useState(null);
  // const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const searchRef = useRef(null);

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

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      closePopupSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-10 justify-center">
      <Home></Home>
      <About></About>
      {/* <Allcons></Allcons>
      <Conference></Conference>
      <Ended></Ended> */}
      <Conference
        title="جميع"
        subtitle="الانشطه"
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
        conferences={conferenceDataEnd}
        openPopup={openPopup}
      />

      {pop && (
        <div className="fixed z-20 top-10 inset-0 bg-black bg-opacity-[50%] flex justify-center items-center ">
          <div className="bg-white py-12 px-7 rounded-lg z-20 w-full md:w-2/3 ">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              تفاصيل المؤتمر
            </h2>
            <div className="grid md:grid-cols-2 gap-6 items-center relative">
              <div>
                <img
                  className="w-[25%] h-[25%]  md:w-[75%] md:h-[75%]  rounded-xl"
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
                    <p className="text-gray-600 flex gap-3">
                      موعد البداية: <span>{selectedConference.hour_start}</span>
                    </p>
                    <p className="text-gray-600 flex gap-3">
                      موعد النهاية : <span>{selectedConference.hour_end}</span>
                    </p>
                    <p className="flex gap-3">
                      المكان : <span>{selectedConference.location}</span>
                    </p>
                    <p className="flex gap-3   ">
                      رابط الموقع :{" "}
                      <a
                        className="hover:text-green-600 cursor-pointer"
                        href={selectedConference.link}
                        target="_blank"
                      >
                        الرابط
                      </a>
                    </p>
                  </div>

                  <div className="flex gap-3 mt-6 h-fit">
                    {!selectedConference.isEnded && (
                      <button
                        onClick={() => navigate("/login")}
                        className="w-full bg-green-300 text-black font-medium hover:text-white py-2 rounded-lg hover:bg-green-500 transition"
                      >
                        حجز
                      </button>
                    )}
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
          <form
            className="bg-white p-8 rounded-lg z-10 flex flex-col relative w-[90%] md:w-2/3"
            ref={searchRef}
          >
            {/* زر الإغلاق */}
            <div className="flex justify-between w-full mb-6">
              <h1 className="text-2xl">البحث</h1>
              <XCircle
                size={25}
                className="text-gray-400 cursor-pointer hover:text-gray-800 ease-linear duration-150 hover:scale-105"
                onClick={()=>{closePopupSearch();setQuery('') ;setFilterConference([])}}
              />
            </div>

            {/* البحث */}
            <div className="flex items-center gap-3 mb-6" dir="ltr">
              <button
                type="submit"
                className="bg-green-600 text-white p-3 rounded-l-lg"
                onClick={()=>handle_search(query)}
              >
                <MagnifyingGlass size={20} />
              </button>
              <input
                type="text"
                id="searchInput"
                value={query}
                onChange={(e) => {
    setQuery(e.target.value); 
    handle_search(e.target.value);
  }}
                placeholder="اكتب ما تريد البحث عنه"
                className="border border-gray-300 rounded-r-lg py-2 px-4 w-full outline-none"
                required
                dir="rtl"
              />
            </div>

            {/* اختيار البحث المتقدم */}
            {/* <div
              className="text-green-600 text-lg font-semibold cursor-pointer mb-6 text-right"
              onClick={() => setShowAdvancedSearch((prev) => !prev)} // Toggle البحث المتقدم
            >
              <span>البحث المتقدم</span>
            </div> 

             {showAdvancedSearch && (
              <div className="mb-6">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="الكلمة المفتاحية"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full outline-none"
                    dir="rtl"
                  />
                  <input
                    type="text"
                    placeholder="المكان"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full outline-none"
                    dir="rtl"
                  />
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md py-2 px-4 w-full outline-none"
                  />
                </div>
              </div>
            )} */}

            {query.length>0&&
            <div className="name border-2  rounded-xl flex-col px-5 py-2 mb-2 overflow-scroll md:overflow-auto h-[11rem] md:h-40">
  {filterconference.length > 0 ? (
    filterconference.map((conf) => (
      <div
        key={conf.id}
        className="flex bg-gray-600 text-white hover:text-gray-800  justify-evenly items-center px-4 py-2 rounded-xl hover:bg-green-200 w-full duration-300 ease mb-3"
      >
        <img src={conf.image} alt={conf.title} className="md:w-20 md:h-20 w-10 h-10" />
        <div className="mx-4">
        <h5 className="font-bold mb-4 md:text-xl text-xs">{conf.title}</h5>
        <h5 className="text-xs md:text-lg">{conf.location}</h5>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div className="flex flex-wrap">
          <p className=" text-xs ">البداية  :  </p>
          <p className=" text-xs ">{conf.start}</p>
          </div>
         
        <button onClick={() => navigate("/login")}
      className="md:px-6 px-2 py-1 bg-green-300 text-black font-medium hover:text-white md:py-2 rounded-lg hover:bg-green-500 transition">
        حجز
        </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">لا توجد نتائج مطابقة.</p>
  )}
</div>
}

           
            {/* <div className="border-2 border-green-400 rounded-xl flex-col px-5 py-2 mb-2 overflow-auto h-40	">
             <div className="flex bg-white gap-5  items-center px-4 py-2  rounded-xl hover:bg-green-400 w-fit duration-300 ease mb-3">
               <img src={photo}alt="" className="w-10 h-10" />
               <h5>mohamed</h5>
               <h5>hamed</h5>
             </div>
             <div className="flex bg-white gap-5  items-center px-4 py-2 rounded-xl hover:bg-green-400 w-fit duration-300 ease mb-3">
               <img src={photo}alt="" className="w-10 h-10" />
               <h5>mohamed</h5>
               <h5>hamed</h5>
             </div>
             <div className="flex bg-white gap-5  items-center px-4 py-2 rounded-xl hover:bg-green-400 w-fit duration-300 ease mb-3">
               <img src={photo}alt="" className="w-10 h-10" />
               <h5>mohamed</h5>
               <h5>hamed</h5>
             </div>
             <div className="flex bg-white gap-5  items-center px-4 py-2 rounded-xl hover:bg-green-400 w-fit duration-300 ease mb-3">
               <img src={photo}alt="" className="w-10 h-10" />
               <h5>mohamed</h5>
               <h5>hamed</h5>
             </div>
             <div className="flex bg-white gap-5  items-center px-4 py-2 rounded-xl hover:bg-green-400 w-fit duration-300 ease mb-3">
               <img src={photo}alt="" className="w-10 h-10" />
               <h5>mohamed</h5>
               <h5>hamed</h5>
             </div>
             <div className="flex bg-white gap-5  items-center px-4 py-2 rounded-xl hover:bg-green-400 w-fit duration-300 ease mb-3">
   <img src={photo}alt="" className="w-10 h-10" />
               <h5>mohamed</h5>
               <h5>hamed</h5>
             </div>
             </div> */}

     


            {/* الكلمات الأكثر بحثًا */}
            {query.length ===0 &&
            <div>
              <h3 className="text-xl font-bold text-gray-700 mb-4 text-right">
                الكلمات الأعلى بحثًا
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  سياسة الحكومة الرقمية
                </button>
                <button
                  type="button"
                  className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  معايير الإطار التنظيمي
                </button>
                <button
                  type="button"
                  className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  الإطار التنظيمي
                </button>
                <button
                  type="button"
                  className="bg-gray-100 border border-gray-300 rounded-xl px-4 py-2 text-gray-700 hover:bg-gray-200"
                >
                  المعايير
                </button>
              </div>
            </div>
}
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
