import React from 'react';

function Ieltsreadingherocards(props) {
  return (
    <ul className='font-myfonts text-lg p-8 list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased'>
      {props.children}
    </ul>
  );
}

export default Ieltsreadingherocards;
