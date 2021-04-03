import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Ieltsreadinghero from '../Components/Hero/Reading/Ieltsreadinghero';

function Ieltsreading() {
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
            <div className='mt-0'>
              <Ieltsreadinghero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ieltsreading;
