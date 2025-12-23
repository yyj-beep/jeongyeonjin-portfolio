import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import NamooActors from "./pages/works/NamooActors";
import DogShelter from "./pages/works/DogShelter";
import WeatherWear from "./pages/works/WeatherWear";
import Toreta from "./pages/works/Toreta";
import ZeroWaste from "./pages/works/ZeroWaste";
import ToretaVideo from "./pages/works/ToretaVideo";
import AboutDetail from "./pages/AboutDetail";

function AppContent() {
  const location = useLocation();
  const isWorkDetail =
  location.pathname.startsWith("/works/") ||
  location.pathname === "/toreta-video";

    // 🔥 기본값 하나 만들어주기
  const activeSection = "home";

  return (
    <>
      {!isWorkDetail && null}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/namooactors" element={<NamooActors />} />
        <Route path="/works/dog-shelter" element={<DogShelter />} />
        <Route path="/works/weather-wear" element={<WeatherWear />} />
        <Route path="/works/toreta" element={<Toreta />} />
        <Route path="/works/zero-waste" element={<ZeroWaste />} />
        <Route path="/toreta-video" element={<ToretaVideo />} />
        <Route path="/aboutdetail" element={<AboutDetail />} />

      </Routes>

      {!isWorkDetail && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
