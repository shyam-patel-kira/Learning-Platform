import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const IeltsSampleTestContentstyle = props => {
  const [answer, setAnswer] = useState('');
  let x = window.location.href.split('/');
  let keyword = x[x.length - 2];
  const handleChange = event => {
    setAnswer(event.target.value);
  };

  const handleWritingTest = event => {
    axios.post('').then().catch();
  };

  return (
    <div className='bg-custombrown '>
      <br />
      <br />
      <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite'>
        <h1 className='pt-8 text-4xl text-center font-serif'>{props.title}</h1>
        <div className='px-8 my-10 text-customwhite'>
          <div className='my-10 text-xl font-serif leading-relaxed'>
            <strong className='underline'>{props.question}</strong>
            <br />
            {props.question_heading}
            <img
              src={props.img}
              alt=''
              className='object-contain h-96 w-full my-8'
            />
          </div>
          <br />
        </div>
        <div>
          <h1 className='text-center text-3xl my-6 font-serif leading-relaxed'>
            Write your answer below and then press submit!!
          </h1>
          <textarea
            id={props.id}
            type='text'
            name={props.title}
            required
            value={answer}
            onChange={handleChange}
            className='rounded-lg h-96 text-customblack w-4/5 mx-28'
          />
        </div>

        <div>
          <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite py-2 px-4 font-bold my-2 rounded'
              variant='Default'
              id='1'
            >
              <Link
                to={`/ielts-writing-task-1/${keyword}`}
                className='no-underline'
              >
                Go Back
              </Link>
            </button>
            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite py-2 px-4 font-bold my-2 rounded'
              variant='Default'
              name='test'
              onClick={handleWritingTest}
            >
              Submit
            </button>
          </div>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
};

export default IeltsSampleTestContentstyle;
