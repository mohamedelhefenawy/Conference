import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Conference from "./Conference/Conference";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function Landing() {
  const [line, useline] = useState("#home");

  return (
    <div className="flex flex-col gap-10 justify-center">
      <Navbar line={line} useline={useline}></Navbar>
      <Home></Home>
      <About></About>
      <Conference></Conference>
      {/* <Ended></Ended> */}
      <Contact></Contact>
      <Footer line={line} useline={useline}></Footer>
    </div>
  );
}

export default Landing;
