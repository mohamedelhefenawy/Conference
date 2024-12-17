import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Conference from "./Conference/Conference";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Ended from "./Ended/Ended";
import Allcons from "./allcons/Allcons";
import photo from '../assets/images/conference.jpg'
function Landing() {
  const [line, useline] = useState("#home");

  const conferenceData = [
    { id: 1, title: "مؤتمر الجمعية", image: photo ,start:'15/12/2024' ,end: '1/2/2025'  ,location:'جدة'},
    { id: 2, title: "مؤتمر الجمعية", image: photo ,start:'15/12/2024' ,end: '1/2/2025' ,location:'جدة'},
    { id: 3, title: "مؤتمر الجمعية", image: photo ,start:'15/12/2024' ,end: '1/2/2025' ,location:'جدة' },
    { id: 4, title: "مؤتمر الجمعية", image: photo ,start:'15/12/2024' ,end: '1/2/2025' ,location:'جدة' },
    { id: 5, title: "مؤتمر الجمعية", image: photo  ,start:'15/12/2024' ,end: '1/2/2025' ,location:'جدة'},
    { id: 6, title: "مؤتمر الجمعية", image: photo ,start: '15/12/2024',end: '1/2/2025' ,location:'جدة' },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center">
      <Navbar line={line} useline={useline}></Navbar>
      <Home></Home>
      <About></About>
      {/* <Allcons></Allcons>
      <Conference></Conference>
      <Ended></Ended> */}
<Conference title="جميع" subtitle="المؤتمرات" conferences={conferenceData} />
<Conference title="المؤتمرات" subtitle="المتاحة" conferences={conferenceData} />
<Conference title="المؤتمرات" subtitle="المنتهية" conferences={conferenceData} />

<Contact></Contact>
      <Footer line={line} useline={useline}></Footer>
    </div>
  );
}

export default Landing;
