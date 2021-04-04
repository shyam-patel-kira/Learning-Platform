import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Ieltsspeakinghero from '../Components/Hero/Speaking/Ieltsspeakinghero';
import Footer from '../Components/Footer';

function Ieltsspeaking() {
  return (
    <div className='bg-green-500 text-black'>
      <Navbar />
      <div className='flex items-start justify-between'>
        <Sidebar />

        <Ieltsspeakinghero />
      </div>
      <Footer />
    </div>
  );
}

export default Ieltsspeaking;
