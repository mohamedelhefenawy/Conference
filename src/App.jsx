import { Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Login from "./components/Login/Login";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [line, useline] = useState("#home");

  const [popSearch, setPopSearch] = useState(false);

  const openPopupSearch = () => {
    setPopSearch(true);
  };

  // Close the popup
  const closePopupSearch = () => {
    setPopSearch(false);
  };

  return (
    <div>
      <Navbar
        line={line}
        useline={useline}
        openPopupSearch={openPopupSearch}
      ></Navbar>
      <Routes>
        {/* Auth Pages */}
        <Route path={`/login`} element={<Login />} />
        <Route
          path={`/`}
          element={
            <Landing
              closePopupSearch={closePopupSearch}
              popSearch={popSearch}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
