import React from 'react';
import HeroSection from '../Components/Hero/HeroSection';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
