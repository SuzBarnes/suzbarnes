import React from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h3>
        <Link className="contact" to="contact">
          <div>Contact Me</div>
        </Link>
        <Link className="projects" to="projects">
          <div>Projects</div>
        </Link>
        <Link className="blog" to="blog">
          <div>Blog</div>
        </Link>
      </h3>
    </div>
  );
};

export default NavBar;
