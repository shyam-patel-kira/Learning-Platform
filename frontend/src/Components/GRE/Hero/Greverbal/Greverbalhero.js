import React from 'react';

function Greverbalherocards(props) {
  return (
    <li
      className='cards__item font-myfonts text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
    >
      {props.children}
    </li>
  );
}

function Greverbalhero() {
  return (
    <div className='bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite font-myfonts'>
      <h1 className='pt-8 text-4xl text-center'>VERBAL REASONING</h1>
      <div className='px-8 my-10 text-customwhite'>
        <ul className='grid grid-cols-2 gap-4'>
          <Greverbalherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl'>Measure of Paper</h1>
              <br />
              <ul className='list-disc list-inside'>
                <li>
                  <strong>Number of Questions:</strong> 20 per section
                </li>
                <li>
                  <strong>Alloted Time:</strong> 35 minutes per section
                </li>
                <br />
                <li>
                  The Verbal Reasoning sections may appear anytime in the test
                  after section 1. The directions at the beginning of each
                  Verbal Reasoning section specify the total number of questions
                  in the section and the time allowed for the section.
                </li>
                <br />
                <li>
                  The Verbal Reasoning measure of the computer-delivered GRE
                  revised General Test is section-level adaptive. This means the
                  computer selects the second section of a measure based on your
                  performance on the first section.
                </li>
                <br />
                <li>
                  The advanced adaptive design also means you can freely move
                  forward and backward throughout an entire section. Specific
                  features include:
                  <li>Preview and review capabilities within a section.</li>
                  <li>
                    “Mark” and “Review” features to tag questions, so you can
                    skip them and return later if you have time remaining in the
                    section.
                  </li>
                  <li>The ability to change/edit answers within a section.</li>
                </li>
                <br />
                <li>
                  You are free to move to any question within the section.
                </li>
              </ul>
            </div>
          </Greverbalherocards>

          <Greverbalherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl'>
                How Verbal Reasoning is Scored?
              </h1>
              <br />
              <ul className='list-inside list-disc'>
                <li>
                  Scoring of the Verbal Reasoning measure is essentially a
                  two-step process.
                </li>
                <br />
                <li>First a raw score is computed.</li>
                <br />
                <li>
                  The raw score is the number of questions answered correctly in
                  the two sections for the measure.
                </li>
                <br />
                <li>
                  The raw score is then converted to a scaled score through a
                  process known as equating.
                </li>
                <br />
                <li>
                  The equating process accounts for minor variations in
                  difficulty among the different test editions.
                </li>
                <br />
                <li>
                  Thus a given scaled score reflects the same level of
                  performance regardless of which edition of the test was taken.
                </li>
              </ul>
            </div>
          </Greverbalherocards>
        </ul>

        <div className='px-10 justify-items-center'>
          <h1 className='pt-8 text-4xl text-center'>
            Verbal Reasoning Question Types:
          </h1>
          <br />
          <div className='px-8 mx-80 text-xl justify-items-center'>
            <li>Reading Comprehension</li>
            <li>Text Completion</li>
            <li>Sentence Equivalence</li>
          </div>
        </div>
        <br />
        <br />
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => (window.location = '/verbal-rc')}
            >
              RC
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => (window.location = '/verbal-tc')}
            >
              TC
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => (window.location = '/verbal-se')}
            >
              SE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greverbalhero;
