
import Feature from "./pages/Feature";
import Form from "./pages/Form";
import Homepage from "./pages/Homepage";
import Navbar from "./pages/Navbar";
import Project from "./pages/Project";
import SEO from "./pages/SEO";
import Services from "./pages/Services";
import SponsorPage from "./pages/Sponsor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeetTheTeam from "./pages/team";
import Home from "./pages/landing";

function App() {
  const navopen = () => {
    const a = document.querySelector(".open");
    if (a) {
      a.classList.toggle("open");
    }
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<MeetTheTeam />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
