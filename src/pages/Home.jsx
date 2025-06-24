import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import FutureProducts from '../components/FutureProducts';
import SpiceIntro from '../components/SpiceIntro';
import GlobalNetwork from '../components/GlobalNetwork';
import QualityStandards from '../components/QualityStandards';
import CompanyValues from '../components/CompanyValues';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <ImageCarousel />
      <FutureProducts />
      <SpiceIntro />
      <GlobalNetwork />
      <QualityStandards />
      <CompanyValues />
    </div>
  );
};

export default Home;