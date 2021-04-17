import React from 'react';

function IeltsSpeakingQuestions(props) {
  return (
    <div>
      <h1 className='text-5xl text-center my-4 leading-relaxed font-semibold'>
        Test - {props.id}
      </h1>
      <p className='font-serif leading-relaxed text-xl text-center'>
        {props.detail}
      </p>

      <h1 className='font-serif leading-relaxed font-semibold text-2xl mx-20 my-2'>
        {props.topic1}
      </h1>
      <ul className='list-inside list-disc text-lg font-serif leading-relaxed mx-20'>
        <li>{props.q1}</li>
        <li>{props.q2}</li>
        <li>{props.q3}</li>
        <li>{props.q4}</li>
        <li>{props.q5}</li>
        <li>{props.q6}</li>
      </ul>

      <h1 className='font-serif leading-relaxed font-semibold text-2xl mx-20 my-2'>
        {props.topic2}
      </h1>
      <ul className='list-inside list-disc font-serif leading-relaxed text-lg mx-20'>
        <li>{props.q7}</li>
      </ul>

      <h1 className='font-serif leading-relaxed font-semibold text-2xl mx-20 my-2'>
        {props.topic3}
      </h1>
      <ul className='list-inside list-disc font-serif leading-relaxed mx-20 text-lg'>
        <li>{props.q7}</li>
        <li>{props.q8}</li>
        <li>{props.q9}</li>
        <li>{props.q10}</li>
      </ul>
    </div>
  );
}

export default IeltsSpeakingQuestions;
