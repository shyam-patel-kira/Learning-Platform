import React from 'react';

function Ieltsspeakingherocards(props) {
  return (
    <>
      <li
        className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
      >
        <div className='cards__item__info'>
          <li>
            Majority of the examiners find this part of the exam to be the
            toughest as it involves face to face communication. However, it is
            found easy for some candidates who can speak English without any
            hesitation.
          </li>
          <br />
          <li>
            The IELTS Speaking exam lasts for 11 to 14 minutes or maximum 15
            minutes. It is divided into three parts.
            <ol>
              <br />
              <b>Part-1:</b> In the first part of questions basic questions
              related to the hobby of examiners are asked along with general
              discussion on some topics.
            </ol>
            <br />
            <ol>
              <b>Part-2:</b> Here the candidate is given a topic and has to
              speak constant for 2 minutes. The topic is assigned by the
              invigilator and the candidate has 1 minute to prepare the topic
              and can write the bullet points on the paper which he/she wants to
              speak.
            </ol>
            <br />
            <ol>
              <b>Part-3:</b> In this part more questions are asked related to
              the part-2 topic which is asked.
            </ol>
          </li>
        </div>
      </li>
    </>
  );
}

export default Ieltsspeakingherocards;
