import React from 'react';
import "../stylesheets/Affiliations.css"

import auth0Logo from '../../assets/images/auth0-logo.png';
import fidelityInvestmentsLogo from '../../assets/images/fidelity-investments-logo.png';
import goDaddyRegistryLogo from '../../assets/images/godaddy-registry-logo.png';
import googleLogo from '../../assets/images/google-logo.png';
import hederaLogo from '../../assets/images/hedera-logo.png';
import kintoneLogo from '../../assets/images/kintone-logo.png';
import mlhLogo from '../../assets/images/mlh-logo.png';
import mongoDBLogo from '../../assets/images/mongodb-logo.png';
import mysteriousLogo from '../../assets/images/mysterious-logo.png';
import schillerLogo from '../../assets/images/schiller-logo.png';
import starknetLogo from '../../assets/images/starknet-logo.png';

const Affiliations = () => {
  const sponsorList = [
    { name: 'Auth0', logoSrc: auth0Logo },
    { name: 'Fidelity Investments', logoSrc: fidelityInvestmentsLogo },
    { name: 'GoDaddy Registry', logoSrc: goDaddyRegistryLogo },
    { name: 'Google', logoSrc: googleLogo },
    { name: 'Hdera', logoSrc: hederaLogo },
    { name: 'Kintone', logoSrc: kintoneLogo },
    { name: 'Major League Hacking', logoSrc: mlhLogo },
    { name: 'MongoDB', logoSrc: mongoDBLogo },
    { name: 'Mysterious', logoSrc: mysteriousLogo },
    { name: 'Schiller Institute', logoSrc: schillerLogo },
    { name: 'Starknet', logoSrc: starknetLogo },
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
                  <img src={sponsor.logoSrc} alt={`${sponsor.name} Logo`} />
                  {/*<span className="sponsor-names">{sponsor.name}</span>*/}
                </div>
              ))}
            </div>
          </div>
          <p className="description">
            If you'd like to sponsor this event, please contact us at &nbsp;
            <a href="mailto:bccss@gmail.com">
              bccssociety@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Affiliations;