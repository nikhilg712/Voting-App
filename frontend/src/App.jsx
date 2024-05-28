import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import VotingPortal from "./components/VotingPortal";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ce9922] to-[#960404] flex flex-col gap-10">
      <Header />
      <div className="flex items-center justify-center">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/casteyourvote" element={<VotingPortal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
