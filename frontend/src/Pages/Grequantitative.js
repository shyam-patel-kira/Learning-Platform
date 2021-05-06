import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Grequantitativehero from '../Components/GRE/Hero/Grequantitative/Grequantitativehero';
import Footer from '../Components/Footer';

function Grequantitative() {
  return (
    <div className='bg-customwhite text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Grequantitativehero />
      </div>
      <Footer />
    </div>
  );
}

export default Grequantitative;
