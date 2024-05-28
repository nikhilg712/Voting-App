import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-[#ce9922] to-[#960404] flex items-center justify-center">
      <Routes>
      <Route exact path="/" element={<Login/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
  );
}

export default App;
