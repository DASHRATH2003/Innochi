import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpiceIntro.css';
import clove from '../assets/Clove.webp';
import starAnise from '../assets/Star Anise.jpeg';
import bayLeaf from '../assets/Bay Leaf.jpg';
import garlic from '../assets/Garlic.webp';
import cardamom from '../assets/cardamom.jpg';
import blackPepper from '../assets/pepper.jpg';
import chili from '../assets/Chili.jpg';
import fennel from '../assets/Fennel.jpeg';
import nutmeg from '../assets/Nutmeg.webp';
import cinnamon from '../assets/Cinnamon.webp';
import paprika from '../assets/paprika.webp';
import mixedPeppercorns from '../assets/pepper.jpg';
import ginger from '../assets/Ganger.jpg';
import coriander from '../assets/coriyande.jpg';
import saffron from '../assets/Saffron.jpg';

const SpiceIntro = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const spices = [
    { name: 'Cloves', image: clove },
    { name: 'Star anise', image: starAnise },
    { name: 'Bay leaf', image: bayLeaf },
    { name: 'Garlic', image: garlic },
    { name: 'Cardamom pods', image: cardamom },
    { name: 'Fragrant Pepper', image: blackPepper },
    { name: 'Chili', image: chili },
    { name: 'Fennel', image: fennel },
    { name: 'Nut meg', image: nutmeg },
    { name: 'Cinnamon', image: cinnamon },
    { name: 'Paprika', image: paprika },
    { name: 'Mix Peppercorns', image: mixedPeppercorns },
    { name: 'Ginger', image: ginger },
    { name: 'Coriander seeds', image: coriander },
    { name: 'Saffron', image: saffron }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  const handleReadMore = () => {
    navigate('/about');
  };

  return (
    <section className="spice-intro" ref={sectionRef}>
      <div className="floating-spices">
        <div className="spice-particle" style={{ '--delay': '0s' }}></div>
        <div className="spice-particle" style={{ '--delay': '2s' }}></div>
        <div className="spice-particle" style={{ '--delay': '4s' }}></div>
        <div className="spice-particle" style={{ '--delay': '6s' }}></div>
      </div>
      <div className="spice-intro-content">
        <div className="spice-intro-text" ref={textRef}>
          <div className="text-content">
            <h2 className="spice-intro-title">
              <span className="highlight">Excellence</span> in Spice and more...
            </h2>
            <h3 className="spice-intro-subtitle animate-text">
              "The business of Spice makes us global."
            </h3>
            <p className="spice-intro-description">
              We believe farm-to-fork quality management is the way forward for Food Industry. 
              We are specialist processors tending to provenance plantations in India, Vietnam, 
              and Turkey through backward integration programs guaranteeing food safety, authenticity, 
              sustainability and traceability from farm to fork. The intrinsic qualities of the real 
              food flavors are preserved and delivered in a variety of packaging formats conforming 
              to the international code of practices of global retail brands.
            </p>
            <button onClick={handleReadMore} className="read-more-btn">
              <span className="btn-text">Read more</span>
              <span className="arrow">→</span>
              <span className="btn-shine"></span>
            </button>
          </div>
        </div>
        <div className="spice-grid" ref={imageRef}>
          {spices.map((spice, index) => (
            <div key={spice.name} className="spice-item" style={{ '--delay': `${index * 0.1}s` }}>
              <div className="spice-circle">
                <img src={spice.image} alt={spice.name} />
              </div>
              <p className="spice-name">{spice.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpiceIntro; 