import React from 'react';

const IeltsSampleWritingstyle = props => {
  return (
    <div className='bg-green-600 '>
      <br />
      <br />
      <div className='bg-blue-navbar mx-auto w-3/4 divide-y-2 text-white'>
        <h1 className='pt-8 text-4xl text-center font-serif'>{props.title}</h1>
        <div className='px-8 my-10 text-gray-50'>
          <div className='my-10 text-xl font-serif leading-relaxed'>
            <strong className='underline'>{props.question}</strong>
            <br />
            {props.question_heading_1}
            <img
              src={props.img_1}
              alt=''
              className='object-contain h-96 w-full my-8'
            />
          </div>
          <div className='text-xl font-serif leading-relaxed'>
            <p className='underline'>
              <strong>{props.answer}</strong>
            </p>
            <br />
            <p>{props.para1}</p>
            <br />
            <p>{props.para2}</p>
            <br />
            <p>{props.para3}</p>
            <br />
            <p>{props.para4}</p>
            <br />
          </div>
          
        </div>
        
      </div>
      <br />
    </div>
  );
};

export default IeltsSampleWritingstyle;