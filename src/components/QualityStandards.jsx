import React, { useEffect, useRef, useState } from 'react';
import './QualityStandards.css';
import certificate1 from '../assets/fssai.webp';
import certificate2 from '../assets/icegate.webp';
import certificate3 from '../assets/depertmentofcommerce.webp';
import certificate4 from '../assets/ministryofcorporetion.webp';
import spiceboardLogo from '../assets/spiceboard.webp';
import dgftLogo from '../assets/Directorgeneraforeation.webp';
import CertificateModal from './CertificateModal';

const QualityStandards = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const certificatesRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const standards = [
    {
      title: "Quality Assurance",
      description: "Our rigorous quality control processes ensure that every product meets international standards.",
      icon: "🏆"
    },
    {
      title: "Food Safety",
      description: "HACCP certified facilities maintaining highest levels of food safety and hygiene.",
      icon: "✔️"
    },
    {
      title: "Traceability",
      description: "Complete farm-to-fork traceability for all our products ensuring authenticity.",
      icon: "🔍"
    },
    {
      title: "Sustainability",
      description: "Committed to sustainable farming practices and environmental responsibility.",
      icon: "🌱"
    }
  ];

  const certificates = [
    {
      name: "FSSAI Certification",
      image: certificate1,
      description: "Food Safety and Standards Authority of India"
    },
    {
      name: "ICEGATE Registration",
      image: certificate2,
      description: "Indian Customs EDI Gateway"
    },
    {
      name: "Department of Commerce",
      image: certificate3,
      description: "Government of India"
    },
    {
      name: "Ministry of Corporate Affairs",
      image: certificate4,
      description: "Government of India"
    },
    {
      name: "Spices Board India",
      image: spiceboardLogo,
      description: "Ministry of Commerce & Industry"
    },
    {
      name: "DGFT Registration",
      image: dgftLogo,
      description: "Directorate General of Foreign Trade"
    }
  ];

  // Duplicate certificates for seamless loop
  const allCertificates = [...certificates, ...certificates];

  return (
    <section className="quality-standards" ref={sectionRef}>
      <div className={`quality-content ${isVisible ? 'animate-in' : ''}`}>
        <div className="quality-header">
          <h2 className="quality-title">
            Commitment to <span className="highlight">Excellence</span>
          </h2>
          <p className="quality-subtitle">
            Setting the highest standards in the spice industry through rigorous quality control
            and sustainable practices
          </p>
        </div>

        <div className="standards-grid">
          {standards.map((standard, index) => (
            <div 
              key={standard.title} 
              className="standard-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="standard-icon">{standard.icon}</div>
              <h3>{standard.title}</h3>
              <p>{standard.description}</p>
            </div>
          ))}
        </div>

        <div className="certificates-section">
          <h3 className="certificates-title">Our Certifications & Registrations</h3>
          <div 
            className="certificates-slider"
            ref={certificatesRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`certificates-track ${isHovered ? 'paused' : ''}`}>
              {allCertificates.map((cert, index) => (
                <div 
                  key={`${cert.name}-${index}`}
                  className="certificate-card"
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="certificate-image-container">
                    <img src={cert.image} alt={cert.name} />
                    <button 
                      className="view-details-btn-overlay"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      View Details
                    </button>
                  </div>
                  <div className="certificate-info">
                    <h4>{cert.name}</h4>
                    <p className="certificate-description">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="quality-stats">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Quality Assured</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Quality Tests</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <CertificateModal 
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
};

export default QualityStandards; 