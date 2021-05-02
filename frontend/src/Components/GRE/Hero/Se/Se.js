import React from 'react';
import { Link } from 'react-router-dom';

function Se() {
  const handleTest = event => {
    let x = event.target.id;
    console.log(x);
    window.location = `/gre-se-test/${x}`;
  };

  return (
    <div className='bg-customblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
      <h1 className='pt-8 text-4xl text-center'>SENTENCE EQIVALENCE</h1>
      <div className='px-8 my-10 text-customwhite'>
        <div className='px-1 justify-items-start'>
          <h1 className='text-4xl ml-2 mt-4'>Question Structure</h1>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <li>Consist of:</li>
            <ul className='ml-16'>A single sentence</ul>
            <ul className='ml-16'>One blank</ul>
            <ul className='ml-16'>Six answer choices</ul>
            <li>
              Requires you to select two of the answer choices; no credit for
              partially correct answers.
            </li>
          </div>
        </div>

        <div className='px-1 justify-items-start'>
          <h1 className='text-4xl ml-2 mt-10'>Tips for Answering</h1>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <li>Read the sentence to get an overall sense of it.</li>
            <li>
              Identify words or phrases that seem particularly significant.
            </li>
            <li>Think up your own words for the blanks.</li>
            <li>Double-check your answers.</li>
          </div>
        </div>
        <br />
        <br />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Give Test
          </h1>

          <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={handleTest}
              id='1'
            >
              Sample Test 1
            </button>

            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={handleTest}
              id='2'
            >
              Sample Test 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Se;
