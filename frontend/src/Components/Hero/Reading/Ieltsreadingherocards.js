import React from 'react';

function Ieltsreadingherocards(props) {
  return (
    <>
      <li
        className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
      >
        <div className='cards__item__info'>
          <li>
            IELTS Reading section consists of three passages and a total of 40
            questions.
          </li>
          <br />
          <li>
            The difficulty of passages increases as one moves from passage-1 to
            passage-3.
          </li>
          <br />
          <li>
            The duration of examination is 1 hour and all the answers should be
            attempted by the candidates as there is no negative marking.
          </li>
          <br />
          <li>
            It is advised that candidates should spend 15mins for passage-1,
            20mins for passage-2 and 25mins for passage-3.
          </li>
          <br />
          <li>
            There is no extra time given to candidates for transferring the
            answers to the answer sheet.
          </li>
          <br />
          <li>
            IELTS Reading academic passages are generally taken from magazines,
            books and newspapers. Passages often contain complicated language,
            academic vocabulary and complex grammar.
          </li>
        </div>
      </li>
    </>
  );
}

export default Ieltsreadingherocards;
