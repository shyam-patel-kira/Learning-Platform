import React from 'react';

export default function SimpleReadingCard(props) {
  return (
    <div className='font-myfonts border-2 p-2 w-5/6 border-customblack bg-customblack font-serif text-lg text-customwhite transition duration-500 ease-in-out hover:bg-customblack transform hover:-translate-y-1 hover:scale-110'>
      <b className='font-myfonts underline'>{props.title}</b>
      <p className='font-myfonts'>{props.content}</p>
    </div>
  );
}
