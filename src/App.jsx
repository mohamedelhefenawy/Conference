import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login/Login";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [line, useline] = useState("#home");

  return (
    <div>
      <Navbar line={line} useline={useline}></Navbar>
      <Routes>
        {/* Auth Pages */}
        <Route path={`/login`} element={<Login />} />
        <Route path={`/`} element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
