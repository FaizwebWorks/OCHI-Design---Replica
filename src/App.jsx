import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Playfull from "./components/Playfull";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-screen bg-[#f4f4f4]">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Playfull />
        <Footer />
      </div>
    </>
  );
}

export default App;
