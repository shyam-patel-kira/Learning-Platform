import React from 'react';
import { Link } from 'react-router-dom';

// function Grequantitativeherocards(props) {
//   return (
//     <li
//       className='cards__item font-serif text-lg list-disc md:list-disc
//        leading-relaxed tracking-normal text antialiased 
//        sm:subpixel-antialiased md:antialiased'
//     >
//       {props.children}
//     </li>
//   );
// }

function Rc() {
  return (
    <div className='bg-customblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
      <h1 className='pt-8 text-4xl text-center'>READING COMPREHENSION</h1>
      <div className='px-8 my-10 text-customwhite'>
        <div className='px-1 justify-items-start'>
            <p className=' px-6 pt-8 text-2xl text-left'>
            Reading Comprehension questions are designed to test a wide range of abilities
            required to read and understand the kinds of prose commonly encountered in
            graduate school. Those abilities include:
            </p>
            <br />
            <div className='px-12 text-xl justify-items-start'>
                <li>
                understanding the meaning of individual words
                </li>
                <li>
                understanding the meaning of individual sentences
                </li>
                <li>
                understanding the meaning of paragraphs and larger bodies of text
                </li>
                <li>
                distinguishing between minor and major points
                </li>
                <li>
                drawing conclusions from the information provided
                </li>
                <li>
                reasoning from incomplete data, inferring missing information
                </li>
                <li>
                understanding the structure of a text, how the parts relate to one another
                </li>
                <li>
                identifying the author’s perspective
                </li>
                <li>
                identifying the author’s assumptions
                </li>
                <li>
                analyzing a text and reaching conclusions about it
                </li>
                <li>
                identifying strengths and weaknesses
                </li>
                <li>
                developing and considering alternative explanations
                </li>
            </div>
        </div>
        <br />
        <br />
        {/* <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Give Test
          </h1> */}

        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
            >
              <Link
                className='hover:no-underline hover:text-customwhite'
                to='/verbal-rc'
              >
                Sample Test 1
              </Link>
            </button>

            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
            >
              <Link
                className='hover:no-underline hover:text-customwhite'
                to='/verbal-rc'
              >
                Sample Test 2
              </Link>
            </button>

          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Rc;
