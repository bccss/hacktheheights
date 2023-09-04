import React from 'react';
import '../stylesheets/LandingSplash.css';

const LandingSplash = () => {

  const handleRegisterClick = () => {
    // Redirects the user to the Google Form
    window.open("https://forms.gle/ZFvwb5QGFTmh6Rf29", "_blank");
  };

  return (
    <div className="landing-splash-container">
      <div className="content-wrapper">
        <div className="year">2023</div>
        <div className="title">
          <span className="hack">Hack</span>
          <span className="the"> the </span>
          <span className="heights">Heights</span>
        </div>
        <div className="info">
          <span className="bc">Boston College</span>
          <span className="date">
            <span className="desktop-date">November 4-5</span>
            <span className="mobile-date">November 4-5</span>
          </span>
        </div>
        <button className="register" onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};

export default LandingSplash;
