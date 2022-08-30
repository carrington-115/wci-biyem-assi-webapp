import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Aboutus from "./components/pages/Aboutus";
import Contactus from "./components/pages/Contact";
import Store from "./components/pages/Store";
import Announcements from "./components/pages/Announcements";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path="home" index />
          <Route element={<Aboutus />} path="about-us" />
          <Route element={<Announcements />} path="announcements" />
          <Route element={<Contactus />} path="contact-us" />
          <Route element={<Store />} path="store" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
