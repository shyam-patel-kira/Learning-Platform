/*import React, { useState } from 'react';
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
    <div id='faq' className='font-myfonts'>
      <h1 className='text-center my-6 text-6xl text-customdarkblue underline'>
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
                    <h1 className='p-8 text-2xl font-myfonts'>
                      {item.question}
                    </h1>
                    <span className='mr-6'>
                      {clicked === index ? (
                        <FiMinus className='bg-customdarkblue' />
                      ) : (
                        <FiPlus className='bg-customdarkblue' />
                      )}
                    </span>
                  </div>
                  {clicked === index ? (
                    <div className='w-full h-24 flex flex-col justify-center items-center bg-custompink text-customdarkblue'>
                      <p className='p-8 text-2xl font-myfonts'>{item.answer}</p>
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
*/

import React, { useState } from 'react';
import img1 from './img1.JPG';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='m-4'>
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className='accordion-content'>{children}</div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div id='faq' className='font-myfonts py-6'>
      <h1 className='text-6xl text-center text-customdarkblue underline my-4'>
        Frequently Asked Questions
      </h1>

      <div className='wrapper'>
        <Accordion title='How can I prepare for the GRE Test?'>
          ETS offers a variety of free and low-cost tools to help you prepare
          for the GRE General Test so you can feel more confident on test day.
        </Accordion>
        <Accordion title='How long is GRE General Test?'>
          The total testing time for the GRE General Test is around three hours
          and 45 minutes, plus short breaks.
        </Accordion>
        <Accordion title='When will my official scores be reported after testing?'>
          Your official scores will be available in your ETS account and sent to
          the institutions you designated approximately 10–15 days after your
          test date.
        </Accordion>
        <Accordion title='Which organisations accept IELTS?'>
          IELTS is accepted by more than 10,000 organisations worldwide. These
          include universities, immigration departments, government agencies,
          professional bodies and multinational companies.
        </Accordion>
        <Accordion title='When can I take IELTS?'>
          IELTS is available on 48 fixed dates a year up to four times a month,
          depending on local demand.
        </Accordion>
        <Accordion title='How much does IELTS cost?'>
          IELTS has a set fee for its test. The Academic and General Training
          tests are the same cost. When you apply online, you will be told the
          fee.
        </Accordion>
      </div>
    </div>
  );
}
