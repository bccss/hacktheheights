import React from 'react';
import "../stylesheets/Affiliations.css"

import amazonLogo from '../../assets/images/amazon-logo.png';
import googleLogo from '../../assets/images/google-logo.png';
import mlhLogo from '../../assets/images/mlh-logo.png';
import notionLogo from '../../assets/images/notion-logo.png';
import schillerLogo from '../../assets/images/schiller-logo.png';

const Affiliations = () => {
  const sponsorList = [
    { name: 'Amazon', logoSrc: amazonLogo },
    { name: 'Google', logoSrc: googleLogo },
    { name: 'Major League Hacking', logoSrc: mlhLogo},
    { name: 'Notion', logoSrc: notionLogo},
    { name: 'Schiller Institute', logoSrc: schillerLogo },
    // ... add more sponsors when needed
  ];

  return (
    <div className="section" id="Affiliations">
      <div className="sponsors-container">
        <div className="row-sponsor">
          <h1 id="sponsor-header">AFFILIATIONS</h1>
          <div className="container">
            <div id="sponsor-logos">
              {sponsorList.map(sponsor => (
                <div key={sponsor.name} className="sponsor-logo-container">
                  <img src={sponsor.logoSrc} className="sponsor-logo" alt={`${sponsor.name} Logo`} />
                  <span className="sponsor-names">{sponsor.name}</span> {/* Adding this line for the caption */}
                </div>
              ))}
            </div>
          </div>
          <p className="description">
            If you'd like to sponsor this event, please contact us at &nbsp;
            <a href="mailto:bccss@gmail.com">
              hacktheheights@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Affiliations;