// src/pages/About.jsx
import React from 'react';
import './About.css';
import '../styles/animations.css';

// Import images
import heroImage from '../assets/qualityansepty.jpeg';
import spicesImage from '../assets/spiceexport.webp';
import qualityImage from '../assets/Basmatirice.jpg';
import reachImage from '../assets/reachimage.jpg';
import certImage from '../assets/certificate1.webp';
import visionImage from '../assets/ourvision.jpeg';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-image">
          <img src={heroImage} alt="Inochi International" />
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>About Us</h1>
            <p>Your Gateway to Premium Indian Exports</p>
          </div>
        </div>
      </section>

      <div className="about-content">
        <section className="about-section intro-section">
          <div className="section-content">
            <div className="text-content">
              <p>
                Welcome to Inochi International Pvt. Ltd, a Bangalore-based exporter of the finest Indian spices 
                and premium basmati rice. Established in 2023 and headquartered in Doddanekundi (Postal Code: 560037), 
                we bring the vibrant flavors of India directly to discerning customers in Japan and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section expertise-section">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Expertise</h2>
              <p>At Inochi International, we specialize in:</p>
              
              <div className="expertise-grid">
                <div className="expertise-item">
                  <div className="expertise-image">
                    <img src={spicesImage} alt="Premium Spices" />
                  </div>
                  <div className="expertise-details">
                    <h3>Spice Exports</h3>
                    <p>
                      From pungent peppercorns to aromatic cardamom, our hand-picked and rigorously sorted spices 
                      are packed in moisture-free, high-grade packaging to ensure maximum freshness and shelf life. 
                      Each batch is numbered by size and grade, guaranteeing consistency from pallet to plate.
                    </p>
                  </div>
                </div>

                <div className="expertise-item reverse">
                  <div className="expertise-image">
                    <img src={qualityImage} alt="Basmati Rice" />
                  </div>
                  <div className="expertise-details">
                    <h3>Basmati Rice</h3>
                    <p>
                      Our branded long-grain basmati rice is cultivated in the fertile plains of India, 
                      processed under strict hygiene protocols, and exported to meet the exacting standards 
                      of top restaurants, five-star hotels, and major supermarkets across Japan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section quality-section">
          <div className="section-content">
            <div className="image-content">
              <img src={heroImage} alt="Quality Control" />
            </div>
            <div className="text-content">
              <h2>Quality & Safety</h2>
              <p>Quality is at the heart of everything we do:</p>
              <ul>
                <li>Premium Selection: Only the finest, hand-picked spices free from dust and pesticide residues.</li>
                <li>Hygienic Processing: State-of-the-art sorting and packing facilities.</li>
                <li>Organic & Conventional: We cater to both organic-certified and non-organic markets.</li>
                <li>Long Shelf Life: Advanced moisture-barrier packaging preserves aroma and flavor during transit.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section reach-section">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Reach & Reputation</h2>
              <p>
                Thanks to our unwavering commitment to excellence, our products are trusted by leading 
                star hotels, top restaurants, major supermarkets, and hypermarkets throughout Japan. 
                We pride ourselves on a growing base of satisfied, repeat customers who consistently 
                award us five-star ratings.
              </p>
            </div>
            <div className="image-content">
              <img src={reachImage} alt="Global Reach" />
            </div>
          </div>
        </section>

        <section className="about-section certifications-section">
          <div className="section-content">
            <div className="image-content">
              <img src={certImage} alt="Certifications" />
            </div>
            <div className="text-content">
              <h2>Certifications & Approvals</h2>
              <p>We adhere to the highest industry standards:</p>
              <ul>
                <li>Spice Board of India (Member)</li>
                <li>Bureau of Indian Standards (BIS)</li>
                <li>Food Safety and Standards Authority of India (FSSAI)</li>
                <li>Directorate General of Foreign Trade (DGFT) – Importer-Exporter Code (IEC) approved</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-section vision-section">
          <div className="section-content">
            <div className="text-content">
              <h2>Our Vision</h2>
              <p>
                Building on our success in Japan, Inochi International is poised to expand its footprint 
                into the Middle East and North America. We remain dedicated to delivering authentic Indian 
                flavors with uncompromising quality, forging long-term partnerships across the globe.
              </p>
            </div>
            <div className="image-content">
              <img src={visionImage} alt="Our Vision" />
            </div>
          </div>
        </section>

        <section className="about-section closing-section">
          <div className="section-content">
            <div className="text-content">
              <p>
                Join us on our journey to bring the taste of India to tables everywhere. 
                At Inochi International, your satisfaction is our promise.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;