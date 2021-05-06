import React from 'react';
import { Link } from 'react-router-dom';

function Greawahero() {
  return (
    <div className='font-myfonts bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
      <h1 className='pt-8 text-4xl text-center'>Analytical Writing</h1>
      <div className='px-8 my-10 text-customwhite'>
        <div className='px-1 justify-items-start'>
          <h1 className='text-4xl ml-2 mt-4'>Question Structure</h1>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <li>Passage composed of one to five sentences.</li>
            <li>One to three blanks.</li>
            <li>
              Three answer choices per blank (five answer choices in the case of
              a single blank)
            </li>
            <li>
              The answer choices for different blanks function independently;
              that is, selecting one answer choice for one blank does not affect
              what answer choices you can select for another blank.
            </li>
            <li>
              Single correct answer, consisting of one choice for each blank; no
              credit for partially correct answers.
            </li>
          </div>
        </div>

        <div className='px-1 justify-items-start'>
          <h1 className='text-4xl ml-2 mt-10'>Tips for Answering</h1>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <li>Read through the passage to get an overall sense of it.</li>
            <li>
              Identify words or phrases that seem particularly significant.
            </li>
            <li>Think up your own words for the blanks.</li>
            <li>
              Do not assume that the first blank is the one that should be
              filled first.
            </li>
            <li>Double-check your answers.</li>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Greawahero;
