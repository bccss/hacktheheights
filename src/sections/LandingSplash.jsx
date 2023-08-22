import React from 'react'

import "./LandingSplash.css"

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
        <p className="desktop-date">11.00.2023 ~ 11.00.2023</p>
        <p className="mobile-date">November 00-00</p>
        <button className="register">Register</button>
      </div>
      </div>
    </div>
  )
}

export default LandingSplash