import React from 'react';

function Ieltsmainherocards3(props) {
  return (
    <>
      <li
        className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
      >
        <div className='cards__item__info'>
          <h1 className='pt-6 mb-2 text-4xl'>Modes of giving IELTS</h1>
          <li>
            <p>IELTS can be given through two modes: Online and Offline.</p>
          </li>
          <br />
          <li>
            <p>
              <b>Offline Mode:</b>{' '}
              <p>
                Primarily, the IELTS candidate have to book the test through
                British Council or IDP and pay the fees for the exam. The
                candidate has to select the preferable exam location and before
                approximately one week of exam the exact address of the
                examination centre will be declared.
              </p>
              <br />
              <p>
                Listening, Reading and Writing exam are given by the candidates
                in one sitting and overall the test lasts for 2 hours 45
                minutes. The candidate has the right to choose any available day
                of exam as IELTS offline exam happens 4 times in a month.
              </p>
              <br />
              <p>
                The Speaking examination is selected by the candidate and it can
                happen on the same day as of the Listening, Reading and Writing
                or it can happen after or before one week of the Listening,
                Reading and Writing.
              </p>
            </p>
          </li>
          <br />
          <li>
            <p>
              <b>Online Mode:</b>
              <p>
                The procedure to select exam location is same as of the Offline
                mode. But the only difference is that candidate has to give
                Listening,Reading and Writing through Computer whereas the
                Speaking exam is given in the same way as of offline mode.
              </p>
              <br />
              In online mode of examination, all days are available to give
              exams and hence the candidate can select the appropriate available
              date for the examination.
            </p>
          </li>
        </div>
      </li>
    </>
  );
}

export default Ieltsmainherocards3;
