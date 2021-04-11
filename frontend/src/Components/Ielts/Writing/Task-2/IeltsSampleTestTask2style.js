import React, { useState } from 'react';
import axios from 'axios';

const IeltsSampleTestTask2style = props => {
  const [answer, setAnswer] = useState('');

  const handleChange = event => {
    setAnswer(event.target.value);
  };

  const handleWritingTest = event => {
    axios.post('').then().catch();
  };
  return (
    <div className='bg-green-600 '>
      <br />
      <br />
      <div className='bg-blue-navbar mx-auto w-3/4 divide-y-2 text-white'>
        <h1 className='pt-8 text-4xl text-center font-serif'>{props.title}</h1>
        <div className='px-8 my-10 text-gray-50'>
          <div className='my-10 text-xl leading-relaxed font-serif'>
            <strong className='underline'>{props.question}</strong>
            <br />
            {props.question_heading}
          </div>
          <br />
        </div>
        <div>
          <h1 className='text-center text-3xl my-6 font-serif'>
            Write your answer below and then press submit!!
          </h1>
          <textarea
            id={props.id}
            type='text'
            name={props.title}
            required
            value={answer}
            onChange={handleChange}
            className='rounded-lg h-96 text-black w-4/5 mx-28'
          />
        </div>
        <br />
        <br />

       
        <button
          className='flex flex-wrap content-center justify-around bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
          variant='Default'
          name='test'
          onClick={handleWritingTest}
        >
          Submit
        </button>
        <br />
      </div>
      <br />
    </div>
  );
};

export default IeltsSampleTestTask2style;
