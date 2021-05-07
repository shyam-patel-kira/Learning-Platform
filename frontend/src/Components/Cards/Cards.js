import React from 'react';
import CardItems from './CardItems';
import Aus from './australia.png';
import Can from './canada.png';
import Newz from './newz.png'
import Usa from './usa.png'

function Cards() {
  return (
    <div className='p-8 mt-20'>
      <h1 className='text-center text-5xl text-customdarkblue font-myfonts underline'>
        This is where GRE and IELTS can take you!
      </h1>
      <div className='cards__container font-myfonts'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src={Usa}
              text='Achieve your goals to go to USA with IELTS and GRE'
              path='/'
            />
            <CardItems
              src={Can}
              text='Achieve your dreams to go to Canada with IELTS'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src={Aus}
              text='Achieve your dreams to go to Australia with IELTS'
              path='/'
            />
            <CardItems
              src={Newz}
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
