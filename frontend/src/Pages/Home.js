import React from 'react';
import HeroSection from '../Components/Hero/HeroSection';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Accordion from '../Components/Faq/Accordion';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards />
      <Accordion />
      <Footer />
    </>
  );
}

export default Home;
