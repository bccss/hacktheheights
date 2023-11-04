import React, { useState } from "react";
import "../stylesheets/Events.css";

import converseIcon from '../../assets/icons/converse.png';
import zagaranIcon from '../../assets/icons/zagaran.png';
import githubIcon from '../../assets/icons/github.png';
import swiftIcon from '../../assets/icons/swift.png';
import bobrossIcon from '../../assets/icons/bobross.png';

function Events() {

  const [cards] = useState([
    {
      title: "Workshop: GitHub",
      time: "Nov 4, 1:30 P.M. - 2:45 P.M.",
      text: "Discover how to collaborate on GitHub with hands-on examples; perfect for beginners, but open to all!",
      imgSrc: githubIcon
    },
    {
      title: "Speaker Event: Converse",
      time: "Nov 4, 2:45 P.M. - 3:30 P.M.",
      text: "Hear BC Grad and Converse Product Manager, Talia Kaplanian, dive into her career journey, the ins and outs of product management, and navigating the tech landscape!",
       imgSrc: converseIcon
    },
    {
       title: "Speaker Event: Zagaran",
       time: "Nov 4, 4:15 P.M. - 5:00 P.M.",
       text: "Join senior software engineer Noah Houghton from Zagaran as he shares insights into startup life and the world of software engineering!",
       imgSrc: zagaranIcon
     },
    {
      title: "Workshop: Swift",
      time: "Nov 4, 5:30 P.M. - 6:15 P.M.",
      text: "Dive into iOS development with Swift; tailored for intermediates, but open to all – master your app game!",
      imgSrc: swiftIcon
    },
    {
      title: "Bob Ross Painting",
      time: "Nov 4, 8:00 P.M. - 9:00 P.M.",
      text: "Channel your inner Bob Ross through Windows Paint while watching Bob Ross on Twitch – a hilarious masterpiece in the making!",
      imgSrc: bobrossIcon,
    }
  ]);

  return (
    <>
      <div>
        <section>
          <div className="container" id="Events">
            <h1>EVENTS</h1>
            <div className="cards">
              {/* ...card mapping */}
            </div>
            <div className='schedule-container'>
              {/* Link to the Google Sheets document */}
              <a href="https://docs.google.com/spreadsheets/d/1SGdaSd_EOvHjq_LrMRlpMnCiedcnTcd_mW0Z699jW1U/edit#gid=0" target="_blank" rel="noopener noreferrer" className='schedule-download'>
                View Schedule
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Events;