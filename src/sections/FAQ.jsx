import React, { useState } from "react";
import "./FAQ.css";

const dataCollection = [
  {
    question: "What is Hack The Heights (HTH)?",
    answer:
      "HTH will be a thrilling 24-hour event held on November 13th, 2023 at Boston College.  Admission is free and includes mentors, workshops, merch, food, and a fun experience!",
  },
  {
    question: "How do I and or my team qualify?",
    answer:
      "Any student at Boston College or the Boston area is welcome to join us! Teams can have a maximum of four people. You can either register with your team using the form or create one during the event!",
  },
  {
    question: "Where do I sleep?",
    answer:
      "While coding can be fun, we want you to get some rest when needed! Sleeping bags will be provided by our HTH students. ",
  },
  {
    question: "Can I volunteer to be a mentor?",
    answer:
      "Yes! We are always looking for mentors to help our hackers. If you are interested, please fill out the form on our website. ",
  },
  {
    question: "What project should I make?",
    answer:
      "We have exciting themes for your projects, and the top three teams will win a prize. Don't feel any pressure to make a perfect project, submission is totally optional!",
  },
];

function FAQ() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div className="container">
        <div>
          <div className="accordion__title">FAQ</div>
        </div>
        <div className="accordion__faq">
          {dataCollection.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>
                  {item.question}
                </h3>
                <div>
                  {accordion === index ? (
                    <span className="verticle">-</span>
                  ) : (
                    <span className="horizental">+</span>
                  )}
                </div>
              </div>
              <div>
                <p className={accordion === index ? "active" : "inactive"}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FAQ;
