import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Greverbalhero from '../Components/GRE/Hero/Greverbal/Greverbalhero';
import Footer from '../Components/Footer';

function Greverbal() {
  return (
    <div className='bg-custombrown text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Greverbalhero />
      </div>
      <Footer />
    </div>
  );
}

export default Greverbal;