import React from 'react';
import { Link } from 'react-router-dom';

const IeltsSampleWritingstyle = props => {
  let x = window.location.href.split('/');
  let keyword = x[x.length - 2];
  return (
    <div className='font-myfonts bg-customwhite '>
      <br />
      <br />
      <div className='bg-customdarkblue mx-auto w-3/4 divide-y-2 text-customwhite'>
        <h1 className='pt-8 text-4xl text-center font-serif'>{props.title}</h1>
        <div className='px-8 my-10 text-customwhite'>
          <div className='my-10 text-xl font-serif leading-relaxed'>
            <strong className='underline'>{props.question}</strong>
            <br />
            {props.question_heading}
            <img
              src={props.img_url}
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
        <div>
          <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='opinion'
              id='1'
            >
              <Link
                to={`/ielts-writing-task-1/${keyword}`}
                className='hover:no-underline hover:text-customwhite'
              >
                Go Back
              </Link>
            </button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default IeltsSampleWritingstyle;
