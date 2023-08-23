import React from 'react';
import "../stylesheets/Sponsors.css"

const Sponsors = () => {
  const sponsorList = [
    { name: 'EY', logoSrc: 'sponsors/ey_logo.png' },
    // { name: 'Google', logoSrc: 'sponsors/google_logo.png' },
    // { name: 'Microsoft', logoSrc: 'sponsors/microsoft_logo.png' },
    // ... add more sponsors when we get them lol
  ];

  //TODO: eventually make this into MUI
  return (
    <div className="section" id="Sponsors">
      <div className="sponsors-container">
        <div className="row-sponsor">
          <h1 id="sponsor-header">SPONSORS</h1>
          <div className="container">
            <div id="sponsor-logos">
              {sponsorList.map(sponsor => (
                <div key={sponsor.name} className="sponsor-logo-container">
                  <img src={sponsor.logoSrc} alt={`${sponsor.name} Logo`} />
                </div>
              ))}
            </div>
          </div>
          <p className="description" style={{ marginTop: '20px', textAlign: 'center', color: '#33396F' }}>
            If you'd like to sponsor this event, please contact us at &nbsp;
            <a href="mailto:bccss@gmail.com" style={{ color: '#5b6dbc' }}>
              hacktheheights@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
