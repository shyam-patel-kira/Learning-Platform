import React from 'react';

function Ieltsmainherocards1(props) {
  return (
    <>
      <li
        className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
      >
        <div className='cards__item__info'>
          <h1 className='pt-6 mb-2 text-4xl'>Exam Types of IELTS</h1>
          <li>
            <p>
              Primarily, IELTS is divided into two sections:
              <ul>
                <p>
                  <b>IELTS General: </b>The result certificate given to the
                  candidate after the exam is used by the people who want to
                  work in foreign countries like Canada, Australia, USA, New
                  Zealand, etc.
                </p>
              </ul>
              <br />
              <ul>
                <b>IELTS Academic: </b>The result certificate given to the
                candidate after the exam is used solely by the people who wish
                to study abroad for their Master’s degree, Postgraduate diploma,
                Bachelor’s degree, etc in various universities or colleges.
              </ul>
              <br />
              <li>
                <p>
                  A specific score of IELTS is required to become eligible for
                  applying in various institutions or universities and it varies
                  according to the different universities or the institution.
                </p>
              </li>
            </p>
          </li>
        </div>
      </li>
    </>
  );
}

export default Ieltsmainherocards1;
