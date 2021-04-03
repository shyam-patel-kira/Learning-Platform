import React from 'react';

function Ieltslisteningherocards(props) {
  return (
    <>
      <li
        className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
      >
        <div className='cards__item__info'>
          <li>The listening test lasts for 40 minutes.</li>
          <br />
          <li>
            The audio will be heard by the candidates for only 30 minutes and
            the last 10 minutes of the exam will be given to the candidates for
            transferring the answers from question paper to answer sheet.
          </li>
          <br />
          <li>
            There are 4 parts in the listening test and a total of 40 questions
            where each part consists of 10 questions.
          </li>
          <br />
          <ol>
            <b>Part-1:</b> It consists of the conversation between two people
            particularly on a social context topic.
          </ol>
          <br />
          <ol>
            <b>Part-2:</b> A speech is given by only one person in this part and
            again the topic might be related to the social context.
          </ol>
          <br />
          <ol>
            <b>Part-3:</b> Here the conversation might happen between three to
            four people in an educational context.
          </ol>
          <br />
          <ol>
            <b>Part-4:</b> Here the talk is given by one person on an academic
            subject.
          </ol>
        </div>
      </li>
    </>
  );
}

export default Ieltslisteningherocards;
