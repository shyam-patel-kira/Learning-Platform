import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Ieltslisteninghero from '../Components/Hero/Listening/Ieltslisteninghero';
import Footer from '../Components/Footer';

function Ieltslistening() {
  return (
    <div className='bg-customwhite text-customblack'>
      <Navbar />
      <div className='font-myfonts flex items-start justify-between'>
        <Sidebar />
        <Ieltslisteninghero />
      </div>
      <Footer />
    </div>
  );
}

export default Ieltslistening;
