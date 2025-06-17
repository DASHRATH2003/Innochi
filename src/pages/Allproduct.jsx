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
      description: 'Our Premium Black Pepper is sourced from the finest farms in South India, known for producing some of the world\'s most pungent and flavorful peppercorns.'
    },
    {
      id: 4,
      name: "Bird's Eye Chilli",
      image: birdsEyeChilli,
      category: 'spices',
      description: 'Our Bird\'s Eye Chilli is one of the spiciest naturally grown chillies, prized for its intense heat, vibrant red color, and fiery kick.'
    },
    {
      id: 5,
      name: 'Capsicum',
      image: capsicum,
      category: 'herbs',
      description: 'Our fresh capsicum is known for its crisp texture and sweet flavor, perfect for adding color and crunch to any dish.'
    },
    {
      id: 6,
      name: 'Red Chilli',
      image: chilli,
      category: 'spices',
      description: 'Our Premium Quality Red Chilli is cultivated in the fertile lands of India, renowned for producing some of the world\'s most vibrant and flavorful chilli varieties.'
    },
    {
      id: 7,
      name: 'Paprika',
      image: paprika,
      category: 'spices',
      description: 'Our Rich and Colorful Paprika is finely ground from premium, sun-ripened red peppers grown in nutrient-rich Indian soil.'
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
      description: 'Our Fresh Coriander Leaves (also known as cilantro or dhaniya) are hand-picked from lush green farms and delivered within hours of harvest to ensure optimal freshness.'
    },
    {
      id: 11,
      name: 'Cumin Seeds',
      image: cumin,
      category: 'seeds',
      description: 'Our Premium Cumin Seeds are sourced from the finest farms of Rajasthan and Gujarat, India - regions globally recognized for producing high-oil content, uniform color.'
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
      name: 'Fenugreek',
      image: fenugreek,
      category: 'spices',
      description: 'Fenugreek seeds, known as methi in India, are small, golden-yellow seeds with a distinctive bitter-sweet flavor and a strong aromatic presence.'
    },
    {
      id: 14,
      name: 'Celery',
      image: celery,
      category: 'spices',
      description: 'Celery seeds, derived from the wild celery plant, are small, brown seeds known for their strong, earthy, and slightly bitter flavor.'
    },
    {
      id: 15,
      name: 'Aniseed',
      image: aniseed,
      category: 'spices',
      description: 'Aniseed, commonly known as saunf in India, is a sweet and aromatic spice known for its delicate licorice-like flavor.'
    },
    {
      id: 16,
      name: 'Ajowan',
      image: ajowan,
      category: 'spices',
      description: 'Ajowan seeds, also known as Ajwain or carom seeds, are small, oval-shaped seeds with a strong, thyme-like aroma and a pungent, slightly bitter taste.'
    },
    {
      id: 17,
      name: 'Caraway',
      image: caraway,
      category: 'spices',
      description: 'Caraway seeds, also known as Shahi Jeera or Persian Cumin, are aromatic seeds with a warm, sweet, and slightly peppery flavor.'
    },
    {
      id: 18,
      name: 'Dill',
      image: dill,
      category: 'spices',
      description: 'Dill seeds, known as Suva or Sowa in India, are flat, oval-shaped seeds with a warm, slightly bitter flavor and a strong aromatic scent similar to caraway.'
    },
    {
      id: 19,
      name: 'Cinnamon',
      image: cinnamon,
      category: 'spices',
      description: 'Our premium cinnamon is known for its sweet, woody flavor and intense aroma, perfect for both sweet and savory dishes.'
    },
    {
      id: 20,
      name: 'Cassia',
      image: cassia,
      category: 'spices',
      description: 'Cassia, often referred to as Chinese Cinnamon, is a robust and flavorful spice obtained from the bark of the Cinnamomum cassia tree.'
    },
    {
      id: 21,
      name: 'Garlic',
      image: garlic,
      category: 'herbs',
      description: 'Our premium garlic is known for its pungent flavor and aroma, essential for countless culinary applications.'
    },
    {
      id: 22,
      name: 'Curry Leaf',
      image: curry,
      category: 'herbs',
      description: 'Our fresh curry leaves add an authentic touch to Indian dishes with their unique aroma and flavor.'
    },
    {
      id: 23,
      name: 'Kokam',
      image: kokam,
      category: 'spices',
      description: 'Kokum, a unique spice from Western India, adds a pleasant sourness to dishes and is known for its cooling properties.'
    },
    {
      id: 24,
      name: 'Mint',
      image: mint,
      category: 'herbs',
      description: 'Our fresh mint leaves are known for their cooling effect and refreshing flavor, perfect for beverages and culinary uses.'
    },
    {
      id: 25,
      name: 'Mustard Seeds',
      image: mustard,
      category: 'seeds',
      description: 'Our premium mustard seeds are known for their pungent flavor and are essential in Indian tempering.'
    },
    {
      id: 26,
      name: 'Parsley',
      image: parsley,
      category: 'herbs',
      description: 'Our fresh parsley adds a bright, clean flavor and beautiful green color to any dish.'
    },
    {
      id: 27,
      name: 'Pomegranate Seeds',
      image: pomegranate,
      category: 'seeds',
      description: 'Our dried pomegranate seeds add a tangy sweetness and beautiful color to dishes.'
    },
    {
      id: 28,
      name: 'Saffron',
      image: saffron,
      category: 'spices',
      description: 'Our premium saffron threads are known for their intense color, aroma, and flavor.'
    },
    {
      id: 29,
      name: 'Vanilla',
      image: vanilla,
      category: 'spices',
      description: 'Our premium vanilla beans are rich in flavor and aroma, perfect for desserts and baking.'
    },
    {
      id: 30,
      name: 'Tejpat',
      image: tejpat,
      category: 'herbs',
      description: 'Our Indian bay leaves (Tejpat) add a distinct aroma to Indian dishes.'
    },
    {
      id: 31,
      name: 'Long Pepper',
      image: longPepper,
      category: 'spices',
      description: 'Long pepper, known as Pippali, has a unique spicy flavor different from black pepper.'
    },
    {
      id: 32,
      name: 'Star Anise',
      image: starAnise,
      category: 'spices',
      description: 'Our star anise has a distinct licorice-like flavor, essential in many Asian dishes.'
    },
    {
      id: 33,
      name: 'Sweet Flag',
      image: sweetFlag,
      category: 'herbs',
      description: 'Sweet flag, or Vacha, is known for its aromatic properties and traditional uses.'
    },
    {
      id: 34,
      name: 'Greater Galangal',
      image: greaterGalangal,
      category: 'spices',
      description: 'Greater galangal adds a unique pine-like flavor to Asian dishes.'
    },
    {
      id: 35,
      name: 'Horseradish',
      image: horseradish,
      category: 'spices',
      description: 'Our horseradish root is known for its pungent heat and strong flavor.'
    },
    {
      id: 36,
      name: 'Capers',
      image: caper,
      category: 'herbs',
      description: 'Our capers add a tangy, briny flavor to Mediterranean dishes.'
    },
    {
      id: 37,
      name: 'Cloves',
      image: clove,
      category: 'spices',
      description: 'Our premium cloves are known for their intense aroma and warm, sweet flavor.'
    },
    {
      id: 38,
      name: 'Asafoetida',
      image: asafoetida,
      category: 'spices',
      description: 'Asafoetida (Hing) adds a unique flavor to Indian dishes and aids in digestion.'
    },
    {
      id: 39,
      name: 'Camboge',
      image: camboge,
      category: 'spices',
      description: 'Camboge (Kokum) is known for its sour taste and is used in Indian coastal cuisine.'
    },
    {
      id: 40,
      name: 'Hyssop',
      image: hyssop,
      category: 'herbs',
      description: 'Hyssop has a bitter-minty flavor and is used in both culinary and medicinal applications.'
    },
    {
      id: 41,
      name: 'Juniper Berries',
      image: juniper,
      category: 'spices',
      description: 'Our juniper berries add a pine-like flavor to dishes and are essential in gin production.'
    },
    {
      id: 42,
      name: 'Bay Leaf',
      image: bayLeaf,
      category: 'herbs',
      description: 'Our bay leaves add a subtle flavor to soups, stews, and sauces.'
    },
    {
      id: 43,
      name: 'Lovage',
      image: lovage,
      category: 'herbs',
      description: 'Lovage has a celery-like flavor and is used in European cuisine.'
    },
    {
      id: 44,
      name: 'Marjoram',
      image: marjoram,
      category: 'herbs',
      description: 'Marjoram has a sweet, oregano-like flavor perfect for Mediterranean dishes.'
    },
    {
      id: 45,
      name: 'Nutmeg',
      image: nutmeg,
      category: 'spices',
      description: 'Our whole nutmeg adds warm, sweet notes to both sweet and savory dishes.'
    },
    {
      id: 46,
      name: 'Mace',
      image: mace,
      category: 'spices',
      description: 'Mace, the outer covering of nutmeg, has a more delicate and complex flavor.'
    },
    {
      id: 47,
      name: 'Basil',
      image: basil,
      category: 'herbs',
      description: 'Our fresh basil is aromatic and flavorful, perfect for Italian and Thai cuisine.'
    },
    {
      id: 48,
      name: 'Poppy Seeds',
      image: poppy,
      category: 'seeds',
      description: 'Our poppy seeds add texture and nutty flavor to baked goods and savory dishes.'
    },
    {
      id: 49,
      name: 'Allspice',
      image: allspice,
      category: 'spices',
      description: 'Allspice combines flavors of cinnamon, nutmeg, and cloves in one unique spice.'
    },
    {
      id: 50,
      name: 'Rosemary',
      image: rosemary,
      category: 'herbs',
      description: 'Our fresh rosemary has a pine-like aroma and is perfect for Mediterranean dishes.'
    },
    {
      id: 51,
      name: 'Sage',
      image: sage,
      category: 'herbs',
      description: 'Our sage has an earthy, slightly peppery flavor perfect for poultry and stuffing.'
    },
    {
      id: 52,
      name: 'Savory',
      image: savory,
      category: 'herbs',
      description: 'Savory has a peppery thyme-like flavor and is used in European cuisine.'
    }
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'spices', name: 'Spices' },
    { id: 'herbs', name: 'Herbs' },
    { id: 'seeds', name: 'Seeds' }
  ];

  const handleQuit = () => {
    window.close();
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
            {filteredProducts.map((product, index) => (
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