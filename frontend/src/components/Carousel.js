import React, { useState } from 'react';
import '../App.css';

//send the images array from homepage whete this is called 

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(nextIndex);
  };

  const previousSlide = () => {
    const prevIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(prevIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={previousSlide}>
        Previous
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
