import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Se from '../Components/GRE/Hero/Se/Se';
import Footer from '../Components/Footer';

function Semain() {
  return (
    <div className='bg-customwhite text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Se />
      </div>
      <Footer />
    </div>
  );
}

export default Semain;