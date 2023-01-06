import React, { useRef } from "react";
import "./Navbar.css";
const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <header className="flex-row">
      <div className="logo">
        <h1>logo</h1>
      </div>
      <div className="navLinks flex-row">
        <ul ref={navRef} className="flex-row">
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Skills</a>
          </li>
          <li>
            <a href="/#">Service</a>
          </li>
          <li>
            <a href="/#">Portfolio</a>
          </li>
          <li>
            <a href="/#">Client</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navIcon"  onClick={showNavbar}>
        <span className="first-line"></span>
        <span className="second-line"></span>
        <span className="third-line"></span>
      </div>
    </header>
  );
};

export default Navbar;