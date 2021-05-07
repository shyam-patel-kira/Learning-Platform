import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/GRE/Sidebar/Sidebar.js';
import Rc from '../Components/GRE/Hero/Rc/Rc';
import Footer from '../Components/Footer';

function Rcmain() {
  return (
    <div className='bg-customwhite text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Rc />
      </div>
      <Footer />
    </div>
  );
}

export default Rcmain;
