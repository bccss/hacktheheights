import React from "react";
import { FaRegLightbulb, FaHandshake, FaLaptopCode } from "react-icons/fa";
import "../stylesheets/About.css";

function About() {
  return (
    <div className="about-container" id="About">
      <h1 className="about-heading">ABOUT</h1>
      <p className="about-description">
      Hack-the-Heights is Boston College's premier annual hackathon, a 24-hour event where participants collaborate to develop innovative software or hardware projects, each centered around a theme of social good. Whether you're an experienced coder or just embarking on your tech journey, Hack-the-Heights is a unique opportunity to enhance your technical skills, bring creative ideas to life, secure exciting prizes, and build enduring connections in the tech community. Join us on November 3rd to 4th, and immerse yourself in a weekend of learning, innovation, and exploration! 
      </p>
      <div className="icon-container">
        <div className="icon-card">
          <FaRegLightbulb size={50} color="white" />
          <p className="icon-text">Innovation</p>
        </div>
        <div className="icon-card">
          <FaHandshake size={50} color="white" />
          <p className="icon-text">Community</p>
        </div>
        <div className="icon-card">
          <FaLaptopCode size={50} color="white" />
          <p className="icon-text">Learning</p>
        </div>
      </div>
    </div>
  );
}

export default About;
