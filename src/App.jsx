import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Shop from "./Pages/Shop";

const App = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop" element={<Shop />} />
        {/* <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/Residential" element={<Projects type="Residential" />} />
        <Route path="/Projects/Commercial" element={<Projects type="Commercial" />} /> */}
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
