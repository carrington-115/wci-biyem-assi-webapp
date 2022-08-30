import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contact";
import Store from "./components/pages/Store";
import Announcements from "./components/pages/Announcements";
import Programs from "./components/pages/Programs";
import "./App.css";
import CarouselHeader from "./components/CarouselHeader";
import HeaderComponent from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route element={<Home />} path="/" index />
          <Route element={<Aboutus />} path="about-us" />
          <Route element={<Announcements />} path="announcements" />
          <Route element={<Contactus />} path="contact-us" />
          <Route element={<Store />} path="store" />
          <Route element={<Programs />} path="programs" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
