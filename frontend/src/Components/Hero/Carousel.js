import React,{useState} from 'react';



function Carousel(props) {
  const [count, setCount] = useState(0);

  let x = [];
  if (props.src !== undefined) {
    for (let [i, v] of props.src?.entries()) {
      x.push(
        <figure
          key={i.toString()}
          className={`${
            count !== i ? 'hidden' : ''
          } flex items-center justify-center w-full`}
        >
          <img src={v} className='flex h-screen w-screen' alt='' />
        </figure>
      );
    }
  }

  return (
    <div className='flex items-center w-full mx-auto justify-center'>
      <svg
        onClick={() => {
          setCount(count === 0 ? x.length - 1 : count - 1);
        }}
        xmlns='https://www.w3.org/2000/svg'
        className='h-20 w-8 cursor-pointer'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
          clipRule='evenodd'
        />
      </svg>
      {x}
      <svg
        onClick={() => {
          setCount(count === x.length - 1 ? 0 : count + 1);
        }}
        xmlns='https://www.w3.org/2000/svg'
        className='h-20 w-8 cursor-pointer'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path
          fillRule='evenodd'
          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  );
}

export default Carousel