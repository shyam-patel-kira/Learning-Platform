import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Gremainhero from '../Components/GRE/Hero/Gremain/Gremainhero';
import Footer from '../Components/Footer';

function Gremain() {
  return (
    <div className='bg-custombrown text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Gremainhero />
      </div>
      <Footer />
    </div>
  );
}

export default Gremain;