import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Greawahero from '../Components/GRE/Hero/Greawa/Greawahero';
import Footer from '../Components/Footer';

function Greawa() {
  return (
    <div className='bg-customwhite text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Greawahero />
      </div>
      <Footer />
    </div>
  );
}

export default Greawa;
