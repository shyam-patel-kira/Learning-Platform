import React from 'react';
import section_1 from './Test-1/Section-1.mp3';
//import section_2 from './Test-1/Section-2.mp3'
//import section_3 from './Test-1/Section-3.mp3'
//import section_4 from './Test-1/Section-4.mp3'

import sec_1_1 from './Test-1/sec-1_1.JPG';
import sec_1_2 from './Test-1/sec1_2.JPG';

function Ieltslisteningtest(props) {
  let x = window.location.href.split('/');
  let test_id = x[x.length - 1];

  let text1 = [];
  for (let i = 1; i <= 10; i++) {
    text1.push(
      <label className='mx-4 px-3 my-2 text-right text-black'>
        {i + '  '}
        <input
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            this.handleChange(e);
          }}
        />
      </label>
    );
  }

  if (test_id === '1') {
    return (
      <div className='leading-relaxed font-serif'>
        <h1 className='text-3xl text-center my-4'>Test - {test_id}</h1>
        <h1 className='text-2xl text-center my-4'>Section-1</h1>
        <audio controls className='mx-auto'>
          <source src={section_1} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={sec_1_1} alt='' />
            <img src={sec_1_2} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
          {text1}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Ieltslisteningtest;
