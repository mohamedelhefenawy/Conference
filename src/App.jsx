import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <Routes>
        {/* Auth Pages */}
        <Route
          path={`/login`}
          // element={<Login />}
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
