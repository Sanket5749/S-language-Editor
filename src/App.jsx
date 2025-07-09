import Ide from "./components/Ide";
import Basics from "./components/Basics";
import Course from "./components/Course";
import Navbar from "./components/Navbar";
import ChallengeList from "./components/ChallengeList";
import SolveChallenge from "./components/SolveChallenge";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ide />} />
        <Route path="/challenges" element={<ChallengeList />} />
        <Route path="/challenge/:level" element={<SolveChallenge />} />
        <Route path="/basics" element={<Basics />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
