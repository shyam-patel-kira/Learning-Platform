import React from 'react';
import img1 from './landing-page-g animated.svg';

function HeroSection() {
  return (

    <div className='flex flex-row pb-10'>
      <h1 className='text-7xl text-center font-myfonts mt-28 ml-52 mr-36 leading-relaxed'>A Learning Curve is Essential to <strong>"Growth"</strong></h1>
      <img className='h-96 ml-74 my-12' src={img1} alt=''></img>
    </div>
  );
}

export default HeroSection;
