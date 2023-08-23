import React from 'react'

import "../stylesheets/LandingSplash.css"

const LandingSplash = () => {
  return (
    <div className="landing-splash-container">
      <div className="landing-splash-content">
      <div className="year">
        <p>2023</p>
      </div>
      <div className="title">
        <p className="hack">Hack</p>
        <p className="the"> the </p>
        <p className="heights">Heights</p>
      </div>
      <div className="info">
        <p className="bc">Boston College </p>
        <p className="desktop-date">11/4/2023 - 11/5/2023</p>
        <p className="mobile-date">November 4-5</p>
        <button className="register">Register</button>
      </div>
      </div>
    </div>
  )
}

export default LandingSplash