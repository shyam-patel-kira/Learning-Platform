import React from 'react';
import Carousel from './Carousel';

function HeroSection() {
  return (
    <Carousel
      src={[
        '/Images/image-1.jpg',
        '/Images/image-2.jpg',
        '/Images/image-3.jpg',
      ]}
    />
  );
}

export default HeroSection;
