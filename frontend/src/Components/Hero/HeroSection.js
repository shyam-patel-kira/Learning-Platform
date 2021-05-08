import React from 'react';
import Carousel from './Carousel';

function HeroSection() {
  return (
    <Carousel
      src={[
        // '/Images/image-1.jpeg',
        '/Images/image1.png',
        '/Images/image-2.png',
        '/Images/image-3.jpeg',
      ]}
    />
  );
}

export default HeroSection;
