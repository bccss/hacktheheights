import React, { useState } from "react";
import "../stylesheets/FAQ.css";

const dataCollection = [
  {
    question: "Do I need to know how to code?",
    answer:
      "Nope! Hack-the-Heights welcomes participants with all levels of experience, from complete beginners to experienced coders. There will be workshops and mentors available throughout the weekend to help you learn and build.",
  },
  {
    question: "How do I and or my team qualify?",
    answer:
      "Any student at Boston College or the Boston area is welcome to join us! Teams can have a maximum of four people. You can either register with your team using the form or create one during the event!",
  },
  {
    question: "Will there be food provided?",
    answer:
      "Absolutely! Meals and snacks will be provided throughout the weekend to keep you energized and ready to hack!",
  },
  {
    question: "Where do I sleep?",
    answer:
      "While coding can be fun, we want you to get some rest when needed! Feel free to go back to your dorm/apartment to sleep or you have can stay overnight in Schiller if you're feeling hardcore.",
  },
  {
    question: "What project should I make?",
    answer:
      "We have exciting themes for your projects, and the top three teams will win a prize. Don't feel any pressure to make a perfect project, submission is totally optional!",
  },
  {
    question: "Are there going to be prizes?",
    answer:
      "You bet!",
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
      <div className="container" id="FAQ">
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
