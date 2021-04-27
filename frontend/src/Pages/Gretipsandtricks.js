import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Gretipsandtrickshero from '../Components/GRE/Hero/Gretipsandtricks/Gretipsandtrickshero';
import Footer from '../Components/Footer';

function Gretipsandtricks() {
  return (
    <div className='bg-custombrown text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Gretipsandtrickshero />
      </div>
      <Footer />
    </div>
  );
}

export default Gretipsandtricks;