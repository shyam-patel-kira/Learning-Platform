import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Ieltsreadinghero from '../Components/Hero/Reading/Ieltsreadinghero';
import Footer from '../Components/Footer';

function Ieltsreading() {
  return (
    <div className='bg-custombrown text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />

        <Ieltsreadinghero />
      </div>
      <Footer />
    </div>
  );
}

export default Ieltsreading;