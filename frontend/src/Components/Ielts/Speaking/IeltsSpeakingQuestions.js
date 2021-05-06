import React from 'react';

function IeltsSpeakingQuestions(props) {
  return (
    <div className='font-myfonts bg-gray-100 mx-auto mb-4 my-4 w-5/6 shadow-lg'>
      <h1 className='text-customblack text-5xl text-center my-4 leading-relaxed font-semibold'>
        Test - {props.id}
      </h1>
      <p className='leading-relaxed text-xl text-center'>{props.detail}</p>

      <h1 className='text-customblack leading-relaxed font-semibold text-2xl mx-20 my-2'>
        {props.topic1}
      </h1>
      <ul className='list-inside list-disc text-lg leading-relaxed mx-20'>
        <li>{props.q1}</li>
        <li>{props.q2}</li>
        <li>{props.q3}</li>
        <li>{props.q4}</li>
        <li>{props.q5}</li>
        <li>{props.q6}</li>
      </ul>

      <h1 className='text-customblack leading-relaxed font-semibold text-2xl mx-20 my-2'>
        {props.topic2}
      </h1>
      <ul className='list-inside list-disc leading-relaxed text-lg mx-20'>
        <li>{props.q7}</li>
      </ul>

      <h1 className='text-customblack leading-relaxed font-semibold text-2xl mx-20 my-2'>
        {props.topic3}
      </h1>
      <ul className='list-inside list-disc pb-4 leading-relaxed mx-20 text-lg'>
        <li>{props.q8}</li>
        <li>{props.q9}</li>
        <li>{props.q10}</li>
        <li>{props.q11}</li>
      </ul>
    </div>
  );
}

export default IeltsSpeakingQuestions;
