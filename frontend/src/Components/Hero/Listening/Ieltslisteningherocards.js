import React from 'react'

function Ieltslisteningherocards(props) {
  return (
    <li
      className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
    >
      {props.children}
    </li>
  );
}

export default Ieltslisteningherocards