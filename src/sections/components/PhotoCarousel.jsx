import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import "../stylesheets/PhotoCarousel.css";

const PhotoCarousel = () => {
  const [slide, setSlide] = useState(0);

  const slides = [
    { "src": "/images/IMG_5235.jpg", "alt": "Image 1" },
    { "src": "/images/IMG_5235.jpg", "alt": "Image 2" },
    { "src": "/images/IMG_5251.jpg", "alt": "Image 3" },
    { "src": "/images/IMG_5258.jpg", "alt": "Image 4" },
    { "src": "/images/IMG_5270.jpg", "alt": "Image 5" },
    { "src": "/images/IMG_5279.jpg", "alt": "Image 6" }
  ];

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel-container" id="Past Events">
      <h2 className="title">PAST EVENTS</h2> 
      <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
        {slides.map((item, idx) => {
          return (
            <img src={process.env.PUBLIC_URL + item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slide-hidden"} />
          );
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
        <span className="indicators">
          {slides.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={slide === idx ? "indicator" : "indicator-inactive"}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default PhotoCarousel;
