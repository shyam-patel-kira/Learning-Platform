import React from 'react';

function Ieltsmainherocards(props) {
  return (
    <>
      <li
        className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
      >
        <div className='cards__item__info'>
          <h1 className='pt-6 mb-2 text-4xl'>What is Ielts?</h1>
          <li>
            <p>
              IELTS is an International English Language Testing System where a
              person is tested efficiently for their English skills.
            </p>
            <br />
            <li>
              <p>
                The exam is designed for the people whose primary language is
                not English.
              </p>
            </li>
            <br />
            <li>
              The IELTS exam is given majorly by the students who want to study
              abroad in overseas countries like Canada, U.S.A, Australia, etc as
              well as people who want to immigrate and settle in foreign
              countries where the first language spoken is English.
            </li>
            <br />
            <li>
              IELTS is jointly owned by British Council(Cambridge English) and
              IDP(IELTS Australia).
            </li>
            <br />
            <li>
              IELTS has more than 500 test centres and locations over 140
              countries across the world.
            </li>
          </li>
        </div>
      </li>
    </>
  );
}

export default Ieltsmainherocards;
