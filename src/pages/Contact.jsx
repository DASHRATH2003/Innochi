// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';
import '../styles/animations.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero fade-in">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in Touch with Our Expert Team</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-container scale-up">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows="6"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn hover-scale">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card slide-in-left delay-1 hover-lift">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Our Location</h3>
              <p>
                185/1A, 5th Cross Rd, near Raghavendra Swamy Temple Road,<br />
                Gururaja Layout, Doddanekundi,<br />
                Vibhutipura, Bengaluru,<br />
                Karnataka 560037
              </p>
            </div>
            <div className="info-card slide-in-left delay-2 hover-lift">
              <i className="fas fa-phone"></i>
              <h3>Phone Number</h3>
              <p>+91 9535520948</p>
              <p>+91 7892492739</p>
            </div>
            
            <div className="info-card slide-in-left delay-3 hover-lift">
              <i className="fas fa-envelope"></i>
              <h3>Email Address</h3>
              <p>vijaykumar@innochiinternational.com</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Map Section */}
      <section className="map-section fade-in">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8661100540635!2d77.70331427496693!3d12.981669187334669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1145ec24f7f7%3A0x7c3f93a20a4180c8!2s185%2F1A%2C%205th%20Cross%20Rd%2C%20Gururaja%20Layout%2C%20Doddanekundi%2C%20Bengaluru%2C%20Karnataka%20560037!5e0!3m2!1sen!2sin!4v1709799151443!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </section>

      {/* Contact Form Section */}
     
    </div>
  );
};

export default Contact;