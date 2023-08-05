import React, { useState } from "react";
import "./Events.css";

function Events() {
  const [cards] = useState([
    {
      title: "Student Invovlement Fair",
      text: "Come find our table at the student involvement fair to start getting involved with BCCSS!",
    },
    {
      title: "First General Meeting",
      text: "Join us for our first general meeting! Meet the executive board and other prospective club members. Pizza and good times will be provided",
    },
    {
      title: "Chat-GPT Webdesign",
      text: "Learn how to functional websites and webapps by harnessing the power of ChatGPT! no prior experience necessary",
    },
  ]);

  return (
    <>
      <div>
        <section>
          <div className="container">
            <h1>Upcoming Events</h1>
            <div className="cards">
              {cards.map((card, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <button className="btn">Learn More</button>
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
