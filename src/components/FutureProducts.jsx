import React, { useEffect, useRef } from 'react';
import './FutureProducts.css';
import cardamom from '../assets/cardamom.jpg';
import turmeric from '../assets/turemeric.jpg';
import pepper from '../assets/pepper.jpg';
import cinnamon from '../assets/Cinnamon.webp';
import clove from '../assets/Clove.webp';
import cumin from '../assets/Cumin.jpg';

const FutureProducts = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.2 });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const products = [
    {
      image: cardamom,
      name: "Premium Cardamom",
      description: "Organic green cardamom, carefully harvested for maximum flavor",
      features: ["Organic Certified", "Premium Grade", "Hand-Picked"]
    },
    {
      image: turmeric,
      name: "Golden Turmeric",
      description: "High-curcumin turmeric powder from selected farms",
      features: ["High Curcumin", "Lab Tested", "100% Pure"]
    },
    {
      image: pepper,
      name: "Black Pepper Supreme",
      description: "Single-origin black pepper with intense aroma",
      features: ["Single Origin", "Bold Flavor", "Premium Quality"]
    }
  ];

  const futureInitiatives = [
    {
      icon: "🌱",
      title: "Sustainable Farming",
      description: "Partnering with farmers for sustainable spice cultivation"
    },
    {
      icon: "🔬",
      title: "Quality Innovation",
      description: "Advanced testing facilities for superior quality assurance"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Expanding to new international markets with premium products"
    }
  ];

  return (
    <section className="future-products-section">
      <div className="section-header fade-in">
        <h2>Future of Spice Excellence</h2>
        <p>Innovating the future of global spice trade with premium quality and sustainability</p>
      </div>

      <div className="products-showcase">
        {products.map((product, index) => (
          <div key={index} className="product-card fade-in">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} />
              <div className="product-overlay">
                <span className="coming-soon">Coming Soon</span>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-features">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">{feature}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      

      <div className="quality-commitment fade-in">
        <div className="commitment-content">
          <h3>Our Commitment to Excellence</h3>
          <p>We're constantly innovating to bring you the finest quality spices while ensuring sustainable practices and supporting local farming communities.</p>
          <div className="commitment-stats">
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality Assured</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Partner Farms</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureProducts; 