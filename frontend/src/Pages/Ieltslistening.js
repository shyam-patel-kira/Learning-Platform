import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Ieltslisteninghero from '../Components/Hero/Listening/Ieltslisteninghero';

function Ieltslistening() {
  return (
    <div className=''>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='mt-8'>
              <Sidebar />
            </div>
          </div>
          <div className='col-md-8'>
            <div className='mt-14'>
              <Ieltslisteninghero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ieltslistening;
