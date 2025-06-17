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
      description: 'Premium quality small cardamom, carefully handpicked from the finest Indian plantations. Known for its intense aroma and distinctive flavor. Perfect for both sweet and savory dishes.'
    },
    {
      id: 2,
      name: 'Cardamom (Large)',
      image: cardamomLarge,
      category: 'spices',
      description: 'High-grade large cardamom sourced from the Himalayan foothills. Features a unique bold and smoky flavor profile. Essential for authentic Indian and Middle Eastern cuisine.'
    },
    {
      id: 3,
      name: 'Black Pepper',
      image: pepper,
      category: 'spices',
      description: 'Premium black peppercorns from South Indian farms. Known for exceptional pungency and rich flavor. A versatile spice that enhances any dish.'
    },
    {
      id: 4,
      name: "Bird's Eye Chilli",
      image: birdsEyeChilli,
      category: 'spices',
      description: 'One of the spiciest natural chili varieties. Prized for its intense heat and vibrant red color. Adds a powerful kick to any dish.'
    },
    {
      id: 5,
      name: 'Capsicum',
      image: capsicum,
      category: 'herbs',
      description: 'Fresh and crispy capsicum with vibrant colors. Perfect for salads and cooking applications. Adds natural sweetness and crunch to dishes.'
    },
    {
      id: 6,
      name: 'Red Chilli',
      image: chilli,
      category: 'spices',
      description: 'Premium quality red chilies from Indian farms. Known for balanced heat and rich flavor. Essential for authentic Indian cuisine.'
    },
    {
      id: 7,
      name: 'Paprika',
      image: paprika,
      category: 'spices',
      description: 'Rich and colorful paprika ground from premium peppers. Adds beautiful color and mild heat to dishes. Perfect for garnishing and cooking.'
    },
    {
      id: 8,
      name: 'Ginger',
      image: ginger,
      category: 'herbs',
      description: 'Fresh and aromatic ginger from premium farms. Features a bold, spicy-sweet flavor profile. Essential for both culinary and medicinal uses.'
    },
    {
      id: 9,
      name: 'Turmeric',
      image: turmeric,
      category: 'spices',
      description: 'Pure and natural turmeric with high curcumin content. Known for its vibrant color and earthy aroma. A staple in Indian cuisine and Ayurvedic medicine.'
    },
    {
      id: 10,
      name: 'Coriander',
      image: coriander,
      category: 'herbs',
      description: 'Fresh coriander leaves harvested daily from local farms. Known for its distinctive aroma and flavor. Essential herb in Asian and Mexican cuisine.'
    },
    {
      id: 11,
      name: 'Cumin Seeds',
      image: cumin,
      category: 'seeds',
      description: 'Premium cumin seeds from Rajasthan and Gujarat. Known for high oil content and uniform color. Essential spice in Indian and Middle Eastern cuisine.'
    },
    {
      id: 12,
      name: 'Fennel Seeds',
      image: fennel,
      category: 'seeds',
      description: 'High-quality fennel seeds from Indian farms. Features a sweet, licorice-like flavor profile. Perfect for both culinary and digestive purposes.'
    },
    {
      id: 13,
      name: 'Fenugreek',
      image: fenugreek,
      category: 'spices',
      description: 'Traditional fenugreek seeds known as methi. Features a distinctive bitter-sweet flavor profile. Valued for both culinary and medicinal properties.'
    },
    {
      id: 14,
      name: 'Celery',
      image: celery,
      category: 'spices',
      description: 'Premium celery seeds with strong aroma. Known for their earthy and slightly bitter taste. Adds depth to soups, stews, and pickles.'
    },
    {
      id: 15,
      name: 'Aniseed',
      image: aniseed,
      category: 'spices',
      description: 'Sweet and aromatic aniseed (saunf). Features a delicate licorice-like flavor. Popular in both culinary and confectionery applications.'
    },
    {
      id: 16,
      name: 'Ajowan',
      image: ajowan,
      category: 'spices',
      description: 'Traditional Indian ajowan (carom) seeds. Features a strong thyme-like aroma. Known for its digestive and medicinal properties.'
    },
    {
      id: 17,
      name: 'Caraway',
      image: caraway,
      category: 'spices',
      description: 'Premium caraway seeds (shahi jeera). Features warm and sweet peppery notes. Essential in European and Middle Eastern dishes.'
    },
    {
      id: 18,
      name: 'Dill',
      image: dill,
      category: 'spices',
      description: 'Fresh dill seeds with intense aroma. Known for their unique flavor profile. Perfect for pickling and seasoning.'
    },
    {
      id: 19,
      name: 'Cinnamon',
      image: cinnamon,
      category: 'spices',
      description: 'Premium quality Ceylon cinnamon. Features sweet and woody flavor notes. Essential spice for both sweet and savory dishes.'
    },
    {
      id: 20,
      name: 'Cassia',
      image: cassia,
      category: 'spices',
      description: 'High-quality Chinese cinnamon (cassia). Known for its robust and intense flavor. Perfect for traditional Asian cuisine.'
    },
    {
      id: 21,
      name: 'Garlic',
      image: garlic,
      category: 'herbs',
      description: 'Premium quality fresh garlic bulbs. Known for intense flavor and aroma. Essential ingredient in cuisines worldwide.'
    },
    {
      id: 22,
      name: 'Curry Leaf',
      image: curry,
      category: 'herbs',
      description: 'Fresh and aromatic curry leaves. Adds authentic flavor to Indian dishes. Essential in South Indian cuisine Essential in South Indian cuisine..'
    },
    {
      id: 23,
      name: 'Kokam',
      image: kokam,
      category: 'spices',
      description: 'Traditional Indian kokum spice. Features unique cooling properties. Adds pleasant sourness to dishes Adds pleasant sourness to dishes.'
    },
    {
      id: 24,
      name: 'Mint',
      image: mint,
      category: 'herbs',
      description: 'Fresh and cooling mint leaves. Perfect for beverages and garnishing. Essential herb in global cuisine. Perfect for beverages and garnishing'
    },
    {
      id: 25,
      name: 'Mustard Seeds',
      image: mustard,
      category: 'seeds',
      description: 'Premium quality mustard seeds. Essential in Indian tempering. Adds pungent flavor to dishes. Adds pungent flavor to dishes.'
    },
    {
      id: 26,
      name: 'Parsley',
      image: parsley,
      category: 'herbs',
      description: 'Fresh and vibrant parsley leaves. Adds bright flavor and color.  Perfect for garnishing and seasoning. Perfect for garnishing and seasoning'
    },
    {
      id: 27,
      name: 'Pomegranate Seeds',
      image: pomegranate,
      category: 'seeds',
      description: 'Premium dried pomegranate seeds. Adds tangy sweetness to dishes. Perfect for garnishing and flavoring.'
    },
    {
      id: 28,
      name: 'Saffron',
      image: saffron,
      category: 'spices',
      description: 'Premium quality saffron threads. Known for intense color and aroma. Adds luxury to special dishes Known for intense color and aroma.'
    },
    {
      id: 29,
      name: 'Vanilla',
      image: vanilla,
      category: 'spices',
      description: 'Premium Madagascar vanilla beans. Rich in flavor and aroma. Essential in baking and desserts. Premium Madagascar vanilla beans'
    },
    {
      id: 30,
      name: 'Tejpat',
      image: tejpat,
      category: 'herbs',
      description: 'Traditional Indian bay leaves. Features distinct aromatic profile. Essential in North Indian cuisine. Essential in North Indian cuisine'
    },
    {
      id: 31,
      name: 'Long Pepper',
      image: longPepper,
      category: 'spices',
      description: 'Traditional Indian long pepper (pippali). Features unique spicy flavor profile. Used in both cuisine and Ayurveda.'
    },
    {
      id: 32,
      name: 'Star Anise',
      image: starAnise,
      category: 'spices',
      description: 'Premium quality star anise. Features distinct licorice flavor. Essential in Asian cuisine. Features distinct licorice flavor'
    },
    {
      id: 33,
      name: 'Sweet Flag',
      image: sweetFlag,
      category: 'herbs',
      description: 'Traditional sweet flag (vacha). Known for aromatic properties. Used in traditional medicine. Used in traditional medicine'
    },
    {
      id: 34,
      name: 'Greater Galangal',
      image: greaterGalangal,
      category: 'spices',
      description: 'Fresh greater galangal root. Features unique pine-like flavor. Essential in Southeast Asian cuisine  Essential in Southeast Asian cuisine.'
    },
    {
      id: 35,
      name: 'Horseradish',
      image: horseradish,
      category: 'spices',
      description: 'Fresh horseradish root. Known for pungent heat. Perfect for sauces and condiments Known for pungent heat.'
    },
    {
      id: 36,
      name: 'Capers',
      image: caper,
      category: 'herbs',
      description: 'Premium quality capers. Adds tangy, briny flavor. Essential in Mediterranean dishes Essential in Mediterranean dishes.'
    },
    {
      id: 37,
      name: 'Cloves',
      image: clove,
      category: 'spices',
      description: 'Premium whole cloves. Features intense aroma and warmth. Essential in global cuisine Essential in global cuisine.'
    },
    {
      id: 38,
      name: 'Asafoetida',
      image: asafoetida,
      category: 'spices',
      description: 'Pure asafoetida (hing). Known for unique savory flavor. Essential in Indian vegetarian cooking.  Essential in Indian vegetarian cooking.'
    },
    {
      id: 39,
      name: 'Camboge',
      image: camboge,
      category: 'spices',
      description: 'Traditional camboge (kokum). Features pleasant sour taste. Popular in coastal Indian cuisine. Features pleasant sour taste.'
    },
    {
      id: 40,
      name: 'Hyssop',
      image: hyssop,
      category: 'herbs',
      description: 'Fresh hyssop herb. Features bitter-minty flavor. Used in culinary and medicinal applications Used in culinary and medicinal applications.'
    },
    {
      id: 41,
      name: 'Juniper Berries',
      image: juniper,
      category: 'spices',
      description: 'Premium juniper berries. Features pine-like flavor. Essential in European cuisine and gin Essential in European cuisine and gin.'
    },
    {
      id: 42,
      name: 'Bay Leaf',
      image: bayLeaf,
      category: 'herbs',
      description: 'Premium dried bay leaves. Adds subtle depth to dishes. Perfect for soups and stews.Perfect for soups and stews.'
    },
    {
      id: 43,
      name: 'Lovage',
      image: lovage,
      category: 'herbs',
      description: 'Fresh lovage herb. Features celery-like flavor. Popular in European cuisine Popular in European cuisine. Popular in European cuisine'
    },
    {
      id: 44,
      name: 'Marjoram',
      image: marjoram,
      category: 'herbs',
      description: 'Fresh marjoram leaves. Sweet oregano-like flavor. Perfect for Mediterranean dishes Sweet oregano-like flavor. Perfect for Mediterranean dishes.'
    }, 
    {
      id: 45,
      name: 'Nutmeg',
      image: nutmeg,
      category: 'spices',
      description: 'Premium whole nutmeg. Features warm, sweet notes. Perfect for sweet and savory dishes  Features warm, sweet notes. Perfect for sweet and savory dishes.'
    },
    {
      id: 46,
      name: 'Mace',
      image: mace,
      category: 'spices',
      description: 'Premium quality mace. Delicate nutmeg-like flavor. Adds complexity to dishes  Delicate nutmeg-like flavor. Adds complexity to dishes.'
    },
    {
      id: 47,
      name: 'Basil',
      image: basil,
      category: 'herbs',
      description: 'Fresh aromatic basil leaves. Perfect for Italian cuisine. Essential in pesto and garnishing Essential in pesto and garnishing.'
    },
    {
      id: 48,
      name: 'Poppy Seeds',
      image: poppy,
      category: 'seeds',
      description: 'Premium quality poppy seeds. Adds nutty texture and flavor. Perfect for baking and cooking Perfect for baking and cooking.'
    },
    {
      id: 49,
      name: 'Allspice',
      image: allspice,
      category: 'spices',
      description: 'Premium allspice berries. Combines multiple spice flavors. Essential in Caribbean cuisine. Combines multiple spice flavors. Essential in Caribbean cuisine.'
    },
    {
      id: 50,
      name: 'Rosemary',
      image: rosemary,
      category: 'herbs',
      description: 'Fresh rosemary sprigs. Features pine-like aroma. Perfect for Mediterranean dishes  Features pine-like aroma. Perfect for Mediterranean dishes.'
    },
    {
      id: 51,
      name: 'Sage',
      image: sage,
      category: 'herbs',
      description: 'Fresh sage leaves. Earthy, peppery flavor. Perfect for poultry and stuffing. peppery flavor. Perfect for poultry and stuffing.'
    },
    {
      id: 52,
      name: 'Savory',
      image: savory,
      category: 'herbs',
      description: 'Fresh savory herb. Peppery thyme-like flavor. Popular in European cuisine. Fresh savory herb. Peppery thyme-like flavor. Popular in European cuisine' 
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
                  <button className="inquiry-btn hover-scale" onClick={handleInquiry}>Send Enquiry</button>
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