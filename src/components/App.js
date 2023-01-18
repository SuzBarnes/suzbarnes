import React from "react";
import "../styling/app.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Blog from "./Blog";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
