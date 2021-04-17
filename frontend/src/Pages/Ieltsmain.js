import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Footer from '../Components/Footer';
import Ieltsmainhero from '../Components/Hero/Ieltsmain/Ieltsmainhero';

function Ieltsmain() {
  return (
    <div className='bg-metal text-customblack'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />
        <Ieltsmainhero />
      </div>
      <Footer />
    </div>
  );
}

export default Ieltsmain;
