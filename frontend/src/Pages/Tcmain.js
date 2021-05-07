import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Tc from '../Components/GRE/Hero/Tc/Tc';
import Footer from '../Components/Footer';

function Tcmain() {
  return (
    <div className='bg-customwhite text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Tc />
      </div>
      <Footer />
    </div>
  );
}

export default Tcmain;
