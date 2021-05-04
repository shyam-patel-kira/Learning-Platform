import React from 'react';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';

function IeltsQuestions() {
  return (
    <div className='my-10 font-myfonts text-customblack'>
      <div className='p-16 mx-auto flex flex-row'>
        <div className='flex flex-col'>
          <img className='w-1/6 mx-44 my-4' src={img4} alt='' />
          <div className='w-64 mx-20 my-3'>
            <h1 className='text-center text-3xl'>IELTS for study</h1>
            <p className='text-center'>
              Ielts is recognised by more than 10,000 education and training
              providers worldwide.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <img className='w-1/6 mx-44 my-2' src={img5} alt='' />
          <div className='w-64 mx-24'>
            <h1 className='text-center mt-4 text-3xl'>IELTS for migration</h1>
            <p className='text-center'>
              Take IELTS to migrate to Canada,Austrailia,New Zealand and UK.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <img className='w-1/6 mx-44 my-2' src={img6} alt='' />
          <div className='w-64 mx-20'>
            <h1 className='text-center mt-10 text-3xl'>IELTS for work</h1>
            <p className='text-center'>
              Organisations around the world rely on IELTS to help them select
              the right people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IeltsQuestions;
