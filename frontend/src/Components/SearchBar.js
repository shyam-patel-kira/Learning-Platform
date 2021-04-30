import React, { useState } from 'react';

const SearchBar = props => {
  const [term, setTerm] = useState('');

  const handleInput = event => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className='bg-black'>
      <form className='' onSubmit={handleFormSubmit}>
        <div className='flex flex-col'>
          <div className='mx-auto'>
            <label className='text-white font-serif text-xl my-4'>
              Search for your favourite video here!!
            </label>
          </div>
          <div className='mx-auto'>
            <input
              className='w-96 mb-16'
              type='text'
              value={term}
              onChange={handleInput}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
