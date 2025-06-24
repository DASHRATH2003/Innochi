import React, { useEffect, useRef } from 'react';
import './GlobalNetwork.css';

const GlobalNetwork = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

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
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const exports = [
    'Srilanka',
    'Malaysia',
    'Bangladesh',
    'UAE',
    'Singapore',
    'Russia',
    'Djibouti',
    'Benin',
    'Afghanistan'
  ];

  const imports = [
    'Canada',
    'Australia',
    'Myanmar',
    'Tanzania'
  ];

  return (
    <section className="global-network" ref={sectionRef}>
      <div className="network-bg-overlay"></div>
      <div className="floating-elements">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index} 
            className="floating-element"
            style={{ '--delay': `${index * 2}s` }}
          ></div>
        ))}
      </div>
      
      <div className="global-network-content" ref={contentRef}>
        <div className="network-header">
          <h3 className="why-choose">WHY CHOOSE US?</h3>
          <h2 className="network-title">
            <span className="highlight">Exports</span> / <span className="highlight">Imports</span>
          </h2>
          <p className="network-description">
            Our network is spread all over the world including India. The countries in 
            which we deal are inclusive of ...
          </p>
        </div>

        <div className="trade-container">
          <div className="trade-column exports-column">
            <h3 className="trade-title">Exports</h3>
            <ul className="trade-list">
              {exports.map((country, index) => (
                <li 
                  key={country} 
                  className="trade-item"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="checkmark">✓</span>
                  {country}
                </li>
              ))}
            </ul>
          </div>

          <div className="trade-column imports-column">
            <h3 className="trade-title">Imports</h3>
            <ul className="trade-list">
              {imports.map((country, index) => (
                <li 
                  key={country} 
                  className="trade-item"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <span className="checkmark">✓</span>
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork; 