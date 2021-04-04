import React from 'react';

export default function SimpleReadingCard(props) {
  return (
    <p className='border-2 p-2 w-5/6 border-black bg-green-cardColor font-serif text-lg text-white transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110'>
      <b className='underline'>{props.title}</b>
      <p>{props.content}</p>
    </p>
  );
}
