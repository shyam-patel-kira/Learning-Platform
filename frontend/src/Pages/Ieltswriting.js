import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Ieltswritinghero from '../Components/Hero/Writing/Ieltswritinghero';
import Footer from '../Components/Footer';

function Ieltswriting() {
  return (
    <div className='bg-green-500 text-black'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />

        <Ieltswritinghero />
      </div>
      <Footer />
    </div>
  );
}

export default Ieltswriting;
