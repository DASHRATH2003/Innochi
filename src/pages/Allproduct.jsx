// src/pages/AllProducts.jsx
import React, { useState, useEffect } from 'react';
import './Allproduct.css';
import '../styles/animations.css';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Import all spice images
import cardamomSmall from '../assets/cardamom.jpg';
import cardamomLarge from '../assets/cardamomlarge.webp';
import pepper from '../assets/pepper.jpg';
import birdsEyeChilli from '../assets/Chili.jpg';
import capsicum from '../assets/Capsicum.webp';
import chilli from '../assets/chilli.webp';
import paprika from '../assets/paprika.webp';
import ginger from '../assets/Ganger.jpg';
import turmeric from '../assets/turemeric.jpg';
import coriander from '../assets/coriyande.jpg';
import cumin from '../assets/Cumin.jpg';
import fennel from '../assets/Fennel.jpeg';
import fenugreek from '../assets/Fenugreek.webp';
import celery from '../assets/Celery.jpg';
import aniseed from '../assets/Aniseed.webp';
import ajowan from '../assets/Ajowan (Ajwain).jpg';
import caraway from '../assets/Caraway.webp';
import dill from '../assets/Dill.jpg';
import cinnamon from '../assets/Cinnamon.webp';
import cassia from '../assets/Cassia.webp';
import garlic from '../assets/Garlic.webp';
import curry from '../assets/Curry Leaf.jpeg';
import kokam from '../assets/Kokam.jpg';
import mint from '../assets/Mint.jpg';
import mustard from '../assets/Mustard.png';
import parsley from '../assets/Parsley.webp';
import pomegranate from '../assets/Pomegranate Seed.jpg';
import saffron from '../assets/Saffron.jpg';
import vanilla from '../assets/Vanilla.jpg';
import tejpat from '../assets/Tejpat (Indian Bay Leaf).jpg';
import longPepper from '../assets/Long Pepper.jpg';
import starAnise from '../assets/Star Anise.jpeg';
import sweetFlag from '../assets/Sweet Flag.jpg';
import greaterGalangal from '../assets/Greater Galangal.jpg';
import horseradish from '../assets/Horseradish.jpg';
import caper from '../assets/Caper.jpeg';
import clove from '../assets/Clove.webp';
import asafoetida from '../assets/Asafoetida.webp';
import camboge from '../assets/Camboge (Kokum).jpg';
import hyssop from '../assets/Hyssop.jpg';
import juniper from '../assets/Juniper Berry.jpg';
import bayLeaf from '../assets/Bay Leaf.jpg';
import lovage from '../assets/Lovage.jpeg';
import marjoram from '../assets/Marjoram.jpeg';
import nutmeg from '../assets/Nutmeg.webp';
import mace from '../assets/Mace.webp';
import basil from '../assets/Basil.jpg';
import poppy from '../assets/Poppy Seed.jpg';
import allspice from '../assets/Allspice.webp';
import rosemary from '../assets/Rosemary.jpg';
import sage from '../assets/Sage.webp';
import savory from '../assets/Savory.webp';

const AllProducts = ({ category }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 6;

  const allProducts = [
    {
      id: 1,
      name: 'Cardamom (Small)',
      image: cardamomSmall,
      category: 'spices',
      description: 'Our Premium Quality Small Cardamom is carefully handpicked from the finest plantations in India'
    },
    {
      id: 2,
      name: 'Cardamom (Large)',
      image: cardamomLarge,
      category: 'spices',
      description: 'Our High-Grade Large Cardamom is sourced from the lush Himalayan foothills, where the unique climate gives this spice its bold, smoky flavor and rich aroma'
    },
    {
      id: 3,
      name: 'Black Pepper',
      image: pepper,
      category: 'spices',
      description: 'Our Premium Black Pepper is sourced from the finest farms in South India, known for producing some of the world's most pungent and flavorful peppercornsr'
    },
    {
      id: 4,
      name: "Bird's Eye Chilli",
      image: birdsEyeChilli,
      category: 'spices',
      description: 'Our Bird's Eye Chilli is one of the spiciest naturally grown chillies, prized for its intense heat, vibrant red color, and fiery kick. '
    },
    {
      id: 5,
      name: 'Capsicum',
      image: capsicum,
      category: 'herbs',
      description: 'Our Bird's Eye Chilli, also known as Dhani mirch, Thai chilli, or African devil, is a small, slender chilli with an explosive heat level that adds bold character to any cuisine.'
    },
    {
      id: 6,
      name: 'Red Chilli',
      image: chilli,
      category: 'spices',
      description: 'Our Premium Quality Red Chilli is cultivated in the fertile lands of India, renowned for producing some of the world's most vibrant and flavorful chilli varieties.'
    },
    {
      id: 7,
      name: 'Paprika',
      image: paprika,
      category: 'spices',
      description: 'Our Rich and Colorful Paprika is finely ground from premium, sun-ripened red peppers grown in nutrient-rich Indian soil. '
    },
    {
      id: 8,
      name: 'Ginger',
      image: ginger,
      category: 'herbs',
      description: 'Our Fresh and Aromatic Ginger is hand-harvested from premium farms, offering a bold, spicy-sweet flavor, citrusy aroma, and firm, juicy texture.'
    },
    {
      id: 9,
      name: 'Turmeric',
      image: turmeric,
      category: 'spices',
      description: 'Our Pure and Natural Turmeric is sourced from the finest turmeric-growing regions of India, known for producing vibrant golden color, earthy aroma, and potent curcumin levels.'
    },
    {
      id: 10,
      name: 'Coriander',
      image: coriander,
      category: 'herbs',
      description: 'Our Fresh Coriander Leaves (also known as cilantro or dhaniya) are hand-picked from lush green farms and delivered within hours of harvest to ensure optimal freshness..'
    },
    {
      id: 11,
      name: 'Cumin Seeds',
      image: cumin,
      category: 'seeds',
      description: 'Our Premium Cumin Seeds are sourced from the finest farms of Rajasthan and Gujarat, India  regions globally recognized for producing high-oil content, uniform color.'
    },
    {
      id: 12,
      name: 'Fennel Seeds',
      image: fennel,
      category: 'seeds',
      description: 'Our High-Quality Fennel Seeds are carefully harvested from the fertile lands of India and sun-dried to perfection. Known for their sweet, licorice-like flavor.'
    },

    {
      id: 13,
      name: 'fenugreek',
      image: fenugreek,
      category: 'spices',
      description: 'Fenugreek seeds, known as methi in India, are small, golden-yellow seeds with a distinctive bitter-sweet flavor and a strong aromatic presence.'
    },
    {
      id: 14,
      name: 'celery',
      image: celery,
      category: 'spices',
      description: 'Celery seeds, derived from the wild celery plant, are small, brown seeds known for their strong, earthy, and slightly bitter flavor. '
    },
    {
      id: 15,
      name: 'aniseed',
      image: aniseed,
      category: 'spices',
      description: 'Aniseed, commonly known as saunf in India, is a sweet and aromatic spice known for its delicate licorice-like flavor. '
    },
    {
      id: 16,
      name: "ajowan",
      image:ajowan,
      category: 'spices',
      description: 'Ajowan seeds, also known as Ajwain or carom seeds, are small, oval-shaped seeds with a strong, thyme-like aroma and a pungent, slightly bitter taste. '
    },
    {
      id: 17,
      name: 'Capsicum',
      image: aniseed,
      category: 'herbs',
      description: 'Aniseed, also known as saunf in India, is a sweet and aromatic spice with a flavor reminiscent of licorice. It is widely used in culinary, medicinal, and confectionery applications. '
    },
    {
      id: 18,
      name: 'caraway',
      image: caraway,
      category: 'spices',
      description: 'Caraway seeds, also known as Shahi Jeera or Persian Cumin, are aromatic seeds with a warm, sweet, and slightly peppery flavor.'
    },
    {
      id: 19,
      name: 'dill',
      image: dill,
      category: 'spices',
      description: 'Dill seeds, known as Suva or Sowa in India, are flat, oval-shaped seeds with a warm, slightly bitter flavor and a strong aromatic scent similar to caraway. '
    },
    {
      id: 20,
      name: 'cinnamon',
      image: cinnamon,
      category: 'herbs',
      description: 'Cinnamon, known as Dalchini in India, is a highly fragrant and flavorful spice derived from the inner bark of the Cinnamomum tree. .'
    },
    {
      id: 21,
      name: 'cassia',
      image: cassia,
      category: 'spices',
      description: 'Cassia, often referred to as Chinese Cinnamon, is a robust and flavorful spice obtained from the bark of the Cinnamomum cassia tree. I'
    },
    {
      id: 22,
      name: 'garlic',
      image: garlic,
      category: 'herbs',
      description: 'Garlic, known as Lahsun in India, is one of the most widely used culinary and medicinal ingredients across the globe. Recognized for its strong aroma and pungent flavor.'
    },
    {
      id: 23,
      name: 'curry',
      image: curry,
      category: 'seeds',
      description: 'Curry leaves, known as Kadi Patta in India, are aromatic herbs widely used in South Asian cuisine to enhance the flavor of dishes.'
    },
    {
      id: 24,
      name: 'kokam',
      image: kokam,
      category: 'seeds',
      description: 'Kokum, scientifically known as Garcinia Indica, is a tropical fruit native to the Western Ghats of India, especially Maharashtra, Goa, and Karnataka.'
    }
    // Add more products as needed
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === selectedCategory));
    }
    setCurrentPage(0); // Reset to first page when category changes
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProducts = () => {
    const start = currentPage * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  };

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'spices', name: 'Spices' },
    { id: 'herbs', name: 'Herbs' },
    { id: 'seeds', name: 'Seeds' }
  ];

  const handleQuit = () => {
    // You can customize this behavior based on your needs
    window.close();
    // Alternative: window.location.href = '/'; // Navigate to home
  };

  const handleInquiry = () => {
    navigate('/contact');
  };

  return (
    <div className="products-page">
      <button className="quit-button" onClick={handleQuit}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
        Quit
      </button>

      {/* Hero Section */}
      <section className="products-hero fade-in">
        <div className="products-hero-content">
          <h1>Our Complete Spice Collection</h1>
          <p>Discover the Finest Quality Indian Spices</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-grid slide-in-left">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn hover-lift ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {getCurrentProducts().map((product, index) => (
              <div key={product.id} className={`product-card scale-up delay-${index + 1} hover-lift`}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="inquiry-btn hover-scale" onClick={handleInquiry}>Send Inquiry</button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          {/* <div className="products-nav">
            <button 
              className="nav-button prev" 
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
            
            </button>
            <button 
              className="nav-button next" 
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
            >
            
            </button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta fade-in">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Contact us for custom orders and specific requirements</p>
            <button className="cta-button hover-scale" onClick={handleInquiry}>Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProducts;