import React from 'react';
import Carousel from './Carousel';

function HeroSection() {
  return (
    <Carousel
      src={[
        '/Images/image-1.png',
        'https://images.pexels.com/photos/7301521/pexels-photo-7301521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/7140997/pexels-photo-7140997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ]}
    />
  );
}

export default HeroSection;


