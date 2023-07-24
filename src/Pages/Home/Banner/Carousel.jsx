import React, { useEffect, useState } from 'react';

const Carousel = ({ images, interval = 3000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      }, interval);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [images.length, interval]);
    console.log(images.length);
    
    return (
        <>
         <div className="relative">
      <div className="carousel overflow-hidden relative">
        <div
          className="carousel-inner relative"
          style={{
            transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
            transition: 'transform 0.3s ease-in-out',
            width: `100%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="carousel-slide float-left w-full"
              style={{ width: `${100 / images.length}%` }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                
                style={{ minHeight: '100%', minWidth: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-control prev absolute top-1/2 left-0 transform -translate-y-1/2" onClick={prevSlide}>
        Previous
      </button>
      <button className="carousel-control next absolute top-1/2 right-0 transform -translate-y-1/2" onClick={nextSlide}>
        Next
      </button>
    </div>
        </>
    );
};

export default Carousel;