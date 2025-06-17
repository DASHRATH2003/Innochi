import React, { useEffect, useState } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from "react-router-dom";

import spice1 from "../assets/Basil.jpg";
import spice2 from "../assets/Cassia.webp";
import spice3 from "../assets/Cumin.jpg";
import spice4 from "../assets/Caraway.webp";
import spice6 from "../assets/Mace.webp";
import spice7 from "../assets/Mint.jpg";

import sliderImage1 from "../assets/exportimport2.webp";
import sliderImage2 from "../assets/exportimport3.jpg";
import sliderImage3 from "../assets/allimport.jpg";
import freshAllImage from "../assets/freshallimage.jpg";

// Add certification image imports
import mcaLogo from "../assets/ministryofcorporetion.webp";
import commerceLogo from "../assets/depertmentofcommerce.webp";
import taxLogo from "../assets/incometexdepartment.webp";
import dgftLogo from "../assets/Directorgeneraforeation.webp";
import icegateLogo from "../assets/icegate.webp";
import spiceboardLogo from "../assets/spiceboard.webp";
import fssaiLogo from "../assets/fssai.webp";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 3;

  // Slider Settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true,
    appendDots: (dots) => (
      <div style={{ position: "absolute", top: "20px", width: "100%" }}>
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
  };

  const reviewsSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Data
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      company: "Global Foods Ltd.",
      rating: 5,
      text: "Exceptional quality products and reliable service. The spices we imported were of premium quality and met all international standards.",
      location: "United Kingdom",
    },
    {
      id: 2,
      name: "Maria Garcia",
      company: "Authentic Imports Co.",
      rating: 5,
      text: "Outstanding customer service and timely delivery. Their team was very helpful throughout the import process.",
      location: "Spain",
    },
    {
      id: 3,
      name: "David Chen",
      company: "Asian Market Chain",
      rating: 5,
      text: "Great experience working with Inochi International. Their products are consistently high quality and delivery is always on time.",
      location: "Singapore",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      company: "Organic Foods Inc.",
      rating: 5,
      text: "The quality of their organic products is exceptional. Very professional team and excellent communication.",
      location: "Canada",
    },
  ];

  const productDetails = [
    {
      id: 1,
      title: "Basil",
      shortDesc:
        "Organic processed Jaggery available in various packing sizes.",
      image: spice1,
      details: {
        description:
          "Our premium quality jaggery is made from organically grown sugarcane, processed using traditional methods to preserve its natural goodness.",
        features: [
          "100% organic and natural",
          "Available in various forms: Powder, Solid, Liquid",
          "Multiple packaging options: 250g to 25kg",
          "Rich in iron and minerals",
          "No chemical additives",
        ],
        specifications: {
          origin: "India",
          shelfLife: "24 months",
          packaging: "Food-grade, moisture-proof packaging",
          certifications: "FSSAI, Organic, ISO 22000",
        },
      },
    },
    {
      id: 2,
      title: "Cassia",
      shortDesc:
        "100% Whole Wheat Sharbati Atta made using traditional methods.",
      image: spice2,
      details: {
        description:
          "Premium quality wheat flour made from carefully selected Sharbati wheat, ground using traditional chakki method to retain nutrients.",
        features: [
          "Stone-ground whole wheat flour",
          "High protein content",
          "Perfect for chapatis and bread",
          "No artificial additives",
          "Vacuum sealed packaging",
        ],
        specifications: {
          origin: "Central India",
          shelfLife: "6 months",
          packaging: "Moisture-proof, multi-layer packaging",
          certifications: "FSSAI, ISO 22000",
        },
      },
    },
    {
      id: 3,
      title: "Cumin",
      shortDesc: "Premium quality spices known for authentic flavor and aroma.",
      image: spice3,
      details: {
        description:
          "Carefully selected and processed Indian spices that bring authentic flavors to your dishes. Each spice is cleaned, processed, and packed under strict quality control.",
        features: [
          "Whole and ground spices available",
          "Premium quality selection",
          "Natural color and aroma",
          "Multiple packaging options",
          "Strict quality control",
        ],
        specifications: {
          origin: "Various regions of India",
          shelfLife: "24 months",
          packaging: "Airtight, moisture-proof packaging",
          certifications: "FSSAI, ISO 22000, HACCP",
        },
      },
    },
    {
      id: 4,
      title: "Caraway",
      shortDesc: "Premium long-grain Basmati rice with authentic aroma.",
      image: spice4,
      details: {
        description:
          "Premium aged Basmati rice known for its exceptional length, aroma, and taste. Sourced from the finest paddy fields of India.",
        features: [
          "Extra-long grain",
          "Natural aging process",
          "Rich aroma",
          "Non-sticky after cooking",
          "Multiple grades available",
        ],
        specifications: {
          origin: "Northern India",
          shelfLife: "24 months",
          packaging: "Premium quality bags/pouches",
          certifications: "FSSAI, ISO 22000",
        },
      },
    },
    {
      id: 5,
      title: "Mace",
      shortDesc: "High-quality pulses sourced from selected farms.",
      image: spice6,
      details: {
        description:
          "Premium quality pulses sourced directly from selected farms. Cleaned, processed, and packed under strict quality control measures.",
        features: [
          "Wide variety available",
          "Carefully selected and sorted",
          "High protein content",
          "Clean and hygienic processing",
          "Premium packaging",
        ],
        specifications: {
          origin: "Various regions of India",
          shelfLife: "12 months",
          packaging: "Food-grade packaging",
          certifications: "FSSAI, ISO 22000",
        },
      },
    },
    {
      id: 6,
      title: "Mint",
      shortDesc: "Premium quality tea leaves from the finest gardens.",
      image: spice7,
      details: {
        description:
          "Fine quality tea leaves from selected tea gardens, processed and packed to preserve their natural flavor and aroma.",
        features: [
          "Various grades available",
          "CTC and Orthodox varieties",
          "Rich in antioxidants",
          "Premium packaging",
          "Consistent quality",
        ],
        specifications: {
          origin: "Assam and Darjeeling",
          shelfLife: "24 months",
          packaging: "Aluminum foil packaging",
          certifications: "FSSAI, ISO 22000, Tea Board",
        },
      },
    },
    {
      id: 7,
      title: "Dry Fruits",
      shortDesc: "Premium quality dry fruits and nuts from selected regions.",
      image: sliderImage1,
      details: {
        description:
          "Premium quality dry fruits and nuts sourced from the finest growing regions. Processed and packed under hygienic conditions.",
        features: [
          "Wide variety available",
          "Premium quality selection",
          "Carefully processed",
          "Hygienically packed",
          "Various pack sizes",
        ],
        specifications: {
          origin: "Various regions",
          shelfLife: "12 months",
          packaging: "Vacuum sealed packaging",
          certifications: "FSSAI, ISO 22000",
        },
      },
    },
    {
      id: 8,
      title: "Organic Products",
      shortDesc: "Certified organic products for health-conscious consumers.",
      image: sliderImage2,
      details: {
        description:
          "Certified organic products carefully grown without the use of chemical fertilizers and pesticides. Processed and packed under strict organic standards.",
        features: [
          "100% organic certified",
          "No chemical fertilizers",
          "No pesticides",
          "Eco-friendly packaging",
          "Sustainably sourced",
        ],
        specifications: {
          origin: "Organic farms across India",
          shelfLife: "Varies by product",
          packaging: "Eco-friendly packaging",
          certifications: "Organic, FSSAI, ISO 22000",
        },
      },
    },
  ];

  const totalPages = Math.ceil(productDetails.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProducts = () => {
    const start = currentPage * productsPerPage;
    return productDetails.slice(start, start + productsPerPage);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      company: "",
      product: "",
      quantity: "",
      message: "",
    });
    alert("Thank you for your inquiry. We will get back to you soon!");
  };

  const handleQuoteRequest = () => {
    // Scroll to the inquiry form
    const inquirySection = document.querySelector(".inquiry-section");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSampleRequest = () => {
    // Show sample request message
    alert(
      'Thank you for your interest in our samples. Please fill out the inquiry form and mention "Sample Request" in the message field. Our team will get back to you shortly.'
    );
    // Scroll to the inquiry form
    const inquirySection = document.querySelector(".inquiry-section");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSolutionClick = (type) => {
    // Handle solution card clicks
    console.log(`Selected solution: ${type}`);
  };

  const handlePackagingRequest = () => {
    // Handle packaging request
    console.log("Requesting custom packaging solution");
  };

  const handleShippingQuote = () => {
    // Handle shipping quote request
    console.log("Requesting shipping quote");
  };

  const handleImageClick = (id) => {
    setSelectedImage(selectedImage === id ? null : id);
  };

  // Close modal when clicking outside
  const handleModalClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setSelectedProduct(null);
    }
  };

  useEffect(() => {
    // Initialize Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe all elements with scroll-animate class
    document.querySelectorAll(".scroll-animate").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    if (location.state?.scrollToCertificates) {
      const certificatesSection = document.getElementById(
        "certificates-section"
      );
      if (certificatesSection) {
        certificatesSection.scrollIntoView();
        // Clear the state after scrolling
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  const backgroundStyle = {
    backgroundColor: "#f8f9fa",
    width: "100%",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.9,
  };

  return (
    <div className="home">
      <div style={backgroundStyle}></div>
      <div className="content">
        {/* Hero Section */}
        <section id="home-section" className="hero-slider">
          <Slider {...sliderSettings}>
            <div className="slider-item">
              <div className="slider-image">
                <img src={sliderImage1} alt="Export Import Services" />
                <div className="slider-overlay"></div>
                <div className="slider-content">
                  <div className="slider-text-content">
                    <h1>Global Trade Excellence</h1>
                    <p className="slider-description">
                      Your trusted partner in international trade and
                      export-import solutions.
                    </p>
                    <button className="slider-button">
                      Learn More <span className="button-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-image">
                <img src={sliderImage2} alt="Quality Products" />
                <div className="slider-overlay"></div>
                <div className="slider-content">
                  <div className="slider-text-content">
                    <h1>Premium Quality Products</h1>
                    <p className="slider-description">
                      Delivering excellence through carefully selected and
                      certified products.
                    </p>
                    <button className="slider-button">
                      Explore Products <span className="button-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-item">
              <div className="slider-image">
                <img src={sliderImage3} alt="Global Network" />
                <div className="slider-overlay"></div>
                <div className="slider-content">
                  <div className="slider-text-content">
                    <h1>Worldwide Network</h1>
                    <p className="slider-description">
                      Connected globally, delivering locally with expertise and
                      reliability.
                    </p>
                    <button className="slider-button">
                      Contact Us <span className="button-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </section>

        {/* Organic Products Section */}
      

        {/* Spices Section */}
        

        {/* Company Introduction Section */}
        <section className="vision-section">
  <div className="vision-container">
    <div className="vision-wrapper">
      <div className="vision-content">
        <h2 className="vision-title">Welcome To Inochi International</h2>
        <div className="vision-text">
          <p>
            Welcome to Inochi International Pvt. Ltd, a Bangalore-based exporter of the finest Indian spices and premium basmati rice.
            Established in 2023 and headquartered in Doddanekundi (Postal Code: 560037), we bring the vibrant flavors of India directly to 
            discerning customers in Japan and beyond.
          </p>
          <button
            className="vision-button"
            onClick={() => navigate("/about")}
          >
            Learn More <span className="vision-arrow">→</span>
          </button>
        </div>
      </div>
      <div className="vision-image">
        <img src={freshAllImage} alt="Inochi International Overview" />
      </div>
    </div>
  </div>
</section>



        {/* Reviews Section */}

        {/* Services Section */}

        {/* Featured Products Section */}
        <section className="featured-products-section">
          <div className="featured-products-container">
            <h2 className="section-title">Featured Products</h2>
            <div className="product-navigation">
              <button
                className="nav-button prev"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
              >
                ←
              </button>
              <div className="product-grid">
                {getCurrentProducts().map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product-content">
                      <div>
                        <h3>{product.title}</h3>
                        <p>{product.shortDesc}</p>
                      </div>
                      <button
                        className="read-more-button"
                        onClick={() => setSelectedProduct(product)}
                      >
                        Read More <span className="arrow">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="nav-button next"
                onClick={handleNextPage}
                disabled={currentPage === totalPages - 1}
              >
                →
              </button>
            </div>
            <div className="view-all-container">
              <button
                className="view-all-button"
                onClick={() => navigate("/products")}
              >
                View All Products <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}

        {/* Certifications Section */}
        <section id="certificates-section" className="certifications-section">
          <div className="certifications-container">
            <h2 className="section-title">Our Certifications</h2>
            <div className="certificates-grid">
              <div className="certificate-item">
                <img src={mcaLogo} alt="Ministry of Corporate Affairs" />
              </div>
              <div className="certificate-item">
                <img src={commerceLogo} alt="Department of Commerce" />
              </div>
              <div className="certificate-item">
                <img src={taxLogo} alt="Income Tax Department" />
              </div>
              <div className="certificate-item">
                <img src={dgftLogo} alt="DGFT" />
              </div>
              <div className="certificate-item">
                <img src={icegateLogo} alt="ICEGATE" />
              </div>
              <div className="certificate-item">
                <img src={spiceboardLogo} alt="Spices Board" />
              </div>
              <div className="certificate-item">
                <img src={fssaiLogo} alt="FSSAI" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="contact-section">
          <div className="contact-container">
            {/* ... existing contact content ... */}
          </div>
        </section>

        <section className="reviews-section">
          <div className="reviews-container">
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="reviews-slider">
              <Slider {...reviewsSliderSettings}>
                {reviews.map((review) => (
                  <div key={review.id} className="review-slide">
                    <div className="review-card">
                      <div className="review-content">
                        <div className="review-stars">
                          {[...Array(review.rating)].map((_, index) => (
                            <i key={index} className="fas fa-star"></i>
                          ))}
                        </div>
                        <p className="review-text">{review.text}</p>
                        <div className="reviewer-info">
                          <h3 className="reviewer-name">{review.name}</h3>
                          <p className="reviewer-title">{review.company}</p>
                          <p className="reviewer-location">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* Product Details Modal */}
        {selectedProduct && (
          <div className="modal-overlay" onClick={handleModalClick}>
            <div className="modal-content">
              <button
                className="modal-close"
                onClick={() => setSelectedProduct(null)}
              >
                ×
              </button>
              <div className="modal-header">
                <h2>{selectedProduct.title}</h2>
              </div>
              <div className="modal-body">
                <div className="modal-image">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                </div>
                <div className="product-details">
                  <p className="detail-description">
                    {selectedProduct.details.description}
                  </p>
                  <div className="detail-section">
                    <h3>Key Features</h3>
                    <ul className="feature-list">
                      {selectedProduct.details.features.map(
                        (feature, index) => (
                          <li key={index}>{feature}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="detail-section">
                    <h3>Specifications</h3>
                    <div className="specs-grid">
                      {Object.entries(
                        selectedProduct.details.specifications
                      ).map(([key, value]) => (
                        <div key={key} className="spec-item">
                          <span className="spec-label">{key}:</span>
                          <span className="spec-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
