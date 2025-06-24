import React, { useState, useEffect } from 'react';
import spiceImage1 from '../assets/Spicesimage1hd.jpg';
import spiceImage2 from '../assets/spiceimage2hd.png';
import spiceImage3 from '../assets/spiceimage3hd.jpg';
import cardamom from '../assets/cardamom.jpg';
import turmeric from '../assets/turemeric.jpg';
import pepper from '../assets/pepper.jpg';
import cinnamon from '../assets/Cinnamon.webp';
import clove from '../assets/Clove.webp';
import cumin from '../assets/Cumin.jpg';
import chili from '../assets/Chili.jpg';
import fennel from '../assets/Fennel.jpeg';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arcSlides, setArcSlides] = useState([0, 0, 0, 0]);
  const images = [spiceImage1, spiceImage2, spiceImage3];
  
  // Create unique sequences for each position
  const arcImages = [
    [cardamom, clove, cumin, chili],      // First position
    [turmeric, fennel, cardamom, clove],  // Second position
    [pepper, chili, fennel, turmeric],    // Third position
    [cinnamon, cumin, pepper, fennel]      // Fourth position
  ];

  useEffect(() => {
    // Main carousel rotation
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    // Arc images rotation with different timings
    const arcTimers = arcSlides.map((_, index) => {
      return setInterval(() => {
        setArcSlides(prev => {
          const newSlides = [...prev];
          newSlides[index] = (newSlides[index] + 1) % arcImages[index].length;
          return newSlides;
        });
      }, 3000 + (index * 500)); // Staggered timing: 3s, 3.5s, 4s, 4.5s
    });

    return () => {
      clearInterval(timer);
      arcTimers.forEach(timer => clearInterval(timer));
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="company-name">Inochi International</h1>
        <p className="company-tagline">
          Excellence in Global Spice Trade. Delivering the finest quality spices
          sourced directly from trusted farms. Our mission is to bring authentic
          Indian flavors to the world.
        </p>
        <button className="explore-button">Explore Our Products</button>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="vertical-carousel">
          {[0, 1, 2, 3].map((position) => (
            <div key={position} className="vertical-slide-container">
              <div className="vertical-slide">
                <img 
                  src={arcImages[position][arcSlides[position]]} 
                  alt={`Arc Slide ${position + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-button prev" onClick={prevSlide}>
          
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel; 