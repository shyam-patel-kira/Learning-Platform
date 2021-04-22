import React, { useState } from 'react';
import { Data } from './Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div>
      <h1 className='text-center my-6 text-6xl text-customdarkblue'>
        Frequently Asked Questions
      </h1>
      <IconContext.Provider value={{ color: '#00FF89', size: '20px' }}>
        <div className='flex flex-col bg-metal relative justify-center items-center h-screen'>
          <div className='shadow-xl absolute'>
            {Data.map((item, index) => {
              return (
                <>
                  <div
                    className='flex justify-between items-center h-24 w-full text-center cursor-pointer bg-custompink text-customdarkblue'
                    onClick={() => toggle(index)}
                    key={index}
                  >
                    <h1 className='p-8 text-2xl'>{item.question}</h1>
                    <span className='mr-6'>
                      {clicked === index ? <FiMinus className='bg-customdarkblue'/> : <FiPlus className='bg-customdarkblue' />}
                    </span>
                  </div>
                  {clicked === index ? (
                    <div className='w-full h-24 flex flex-col justify-center items-center bg-custompink text-customdarkblue'>
                      <p className='p-8 text-2xl'>{item.answer}</p>
                    </div>
                  ) : null}
                </>
              );
            })}
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Accordion;
