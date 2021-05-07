import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import AboutUsHero from '../Components/AboutUsHero';
import Footer from '../Components/Footer';

function Gremain() {
  return (
    <div className='bg-customwhite text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <AboutUsHero />
      </div>
      <Footer />
    </div>
  );
}

export default Gremain;
