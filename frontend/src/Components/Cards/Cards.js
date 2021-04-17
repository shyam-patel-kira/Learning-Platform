import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
  return (
    <div className='p-8'>
      <h1 className='text-center text-5xl text-customwhite'>
        This is where GRE and IELTS can take you!
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src='images/usa.png'
              text='Achieve your goals to go to USA with IELTS and GRE'
              path='/'
            />
            <CardItems
              src='images/canada.png'
              text='Achieve your dreams to go to Canada with IELTS'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src='images/australia.png'
              text='Achieve your dreams to go to Australia with IELTS'
              path='/'
            />
            <CardItems
              src='images/newz.png'
              text='Journey to New Zealand begins with IELTS'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
