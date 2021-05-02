import React from 'react';

function Ieltswritingherocards(props) {
  return (
    <div
      className='cards__item font-myfonts text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
    >
      <div className='font-myfonts cards__item__info'>
        <li>
          IELTS Writing is divided into tasks for both the general and academic
          candidates:
        </li>
        <br />
        <li>
          The candidate has to write a minimum 150 words and 250 words in Task-1
          and Task-2 respectively, else bands will be deducted. However, there
          is no upper limit defined but it is advised to write between 150-180
          words for Task-1 and 250-280 words for Task-2.
        </li>
        <br />
        <li>
          The more one writes then there are chances of making errors also which
          in result leads to getting less bands.
        </li>
        <br />
        <li>
          Task-1 of Writing accounts for 33% of the writing bands result whereas
          Task-2 comprises 67%.
        </li>
        <br />
        <li>
          It is advised to complete Task-1 in 20 minutes and Task-2 in 40
          minutes. The total examination length of writing is exactly 1 hour.
        </li>
        <br />
        <li>
          For IELTS Academic candidates Task-1 includes report writing whereas
          for General students Task-1 consists of Letter Writing. Task-2 of
          IELTS writing is same for both the candidates.
        </li>
      </div>
    </div>
  );
}

export default Ieltswritingherocards;
