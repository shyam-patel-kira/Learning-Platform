import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function IeltsGraph() {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row'>
        <Sidebar />
        <p className='mx-auto my-auto'>Hello</p>
      </div>
    </div>
  );
}

export default IeltsGraph;
