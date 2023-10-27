import React, { useState } from "react";
import "../stylesheets/Events.css";

import googleIcon from '../../assets/icons/google.png';
import amazonIcon from '../../assets/icons/amazon.png';
import githubIcon from '../../assets/icons/github.png';
import swiftIcon from '../../assets/icons/swift.png';
import loadingIcon from '../../assets/icons/loading.png';

function Events() {

  const [cards] = useState([
    // {
    //   title: "Speaker: Amazon",
    //   time: "Nov 4, 00:00 A.M.",
    //   text: "Join the speaker event with Ellen Jue, recruiter at Amazon Music on job opportunities and how to prepare for internships!",
    //   imgSrc: amazonIcon
    // },
    // {
    //   title: "Speaker Event: Google",
    //   time: "Nov 4, 00:00 A.M.",
    //   text: "Join the speaker event with the representative from Google!",
    //   imgSrc: googleIcon
    // },
    {
      title: "Workshop: GitHub",
      time: "Nov 4, 1:45 P.M.",
      text: "Learn how to use GitHub to collaborate with others with examples. This workshop is aimed for beginner programmers but everyone is welcome.",
      imgSrc: githubIcon
    },
    {
      title: "Workshop: Swift",
      time: "Nov 4, 3:45 P.M.",
      text: "Learn how to develop iOS applications with Swift. This workshop is aimed for intermediate programmers but everyone is welcome.",
      imgSrc: swiftIcon
    },
    {
      title: "More Events To Be Announced!",
      time: "",
      text: "",
      imgSrc: loadingIcon,
    }
  ]);

  return (
    <>
      <div>
        <section>
          <div className="container" id="Events">
            <h1>EVENTS</h1>
            <div className="cards">
              {cards.map((card, index) => (
                <div key={index} className="card">
                  <div className="card-header">
                    <div className="card-details">
                      <h3>{card.title}</h3>
                      <p>{card.time}</p>
                    </div>
                    <div className="card-image">
                      <img src={card?.imgSrc} alt={card.title} />
                    </div>
                  </div>
                  <div className="card-content">
                    <p></p>
                    <p>{card.text}</p>
                  </div>
                  {/*{<button className="btn">Learn More</button>}*/}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Events;