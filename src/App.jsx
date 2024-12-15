import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth Pages */}
        <Route
          path={`/login`}
          element={<Login />}
        />
        <Route
          path={`/`}
          element={<Landing />}
        />
        
      </Routes>
    </div>
  );
}

export default App;
