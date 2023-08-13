import React from "react";
import { FaCode, FaCoffee, FaLaptopCode } from "react-icons/fa";
import "./About.css"; // assuming styles.css is in the same directory

function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">ABOUT</h1>
      <p className="about-description">
        Dive into a weekend of code, innovation, and creativity! Join us for an
        unforgettable experience.
      </p>
      <div className="icon-container">
        <div className="icon-card">
          <FaCode size={50} />
          <p className="icon-text">Code Challenges</p>
        </div>
        <div className="icon-card">
          <FaCoffee size={50} />
          <p className="icon-text">Endless Coffee</p>
        </div>
        <div className="icon-card">
          <FaLaptopCode size={50} />
          <p className="icon-text">Collaborative Environment</p>
        </div>
      </div>
    </div>
  );
}

export default About;
