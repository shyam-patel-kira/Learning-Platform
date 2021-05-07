import React from 'react';

function Rc() {
  const handleTest = event => {
    let x = event.target.id;
    window.location = `/gre-rc-test/${x}`;
  };

  return (
    <div className='bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite font-myfonts'>
      <h1 className='pt-8 text-4xl text-center'>READING COMPREHENSION</h1>
      <div className='px-8 my-10 text-customwhite'>
        <div className='px-1 justify-items-start'>
          <p className=' px-6 pt-8 text-2xl text-left'>
            Reading Comprehension questions are designed to test a wide range of
            abilities required to read and understand the kinds of prose
            commonly encountered in graduate school. Those abilities include:
          </p>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <li>Understanding the meaning of individual words</li>
            <li>Understanding the meaning of individual sentences</li>
            <li>
              Understanding the meaning of paragraphs and larger bodies of text
            </li>
            <li>Distinguishing between minor and major points</li>
            <li>Drawing conclusions from the information provided</li>
            <li>
              Reasoning from incomplete data, inferring missing information
            </li>
            <li>
              Understanding the structure of a text, how the parts relate to one
              another
            </li>
            <li>Identifying the author’s perspective</li>
            <li>Identifying the author’s assumptions</li>
            <li>Analyzing a text and reaching conclusions about it</li>
            <li>Identifying strengths and weaknesses</li>
            <li>Developing and considering alternative explanations</li>
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
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={handleTest}
              id='1'
            >
              Test 1
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={handleTest}
              id='2'
            >
              Test 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rc;
