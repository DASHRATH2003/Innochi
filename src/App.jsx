// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import AllProducts from './pages/Allproduct';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import LanguageSelector from './components/LanguageSelector';
import TopBar from './components/TopBar';
import ChatBox from './components/ChatBox';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <TopBar />
        <LanguageSelector />
        <Navbar />
        <ChatBox />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/spices" element={<AllProducts category="spices" />} />
          <Route path="/products/herbs" element={<AllProducts category="herbs" />} />
          <Route path="/products/seeds" element={<AllProducts category="seeds" />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;