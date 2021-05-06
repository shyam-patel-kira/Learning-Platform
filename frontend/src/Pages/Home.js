import React from 'react';
import HeroSection from '../Components/Hero/HeroSection';
import Cards from '../Components/Cards/Cards';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import Accordion from '../Components/Faq/Accordion';
import IeltsCards from '../Components/IELTS-Cards/IeltsCards';
import IeltsQuestions from '../Components/IELTS-Cards/IeltsQuestions';
import GreCards from '../Components/GRE-Cards/GreCards';

function Home() {
  return (
    <div className='bg-customwhite'>
      <Navbar />
      <HeroSection />
      <Cards />
      <Accordion />
      <IeltsCards />
      <IeltsQuestions />
      <GreCards />
      <Footer />
    </div>
  );
}

export default Home;
