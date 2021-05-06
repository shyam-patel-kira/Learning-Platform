import React from 'react';
import './Signup/Form.css';
import FormSignup from './Signup/FormSignup';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Form = () => {
  return (
    <div className='bg-customwhite'>
      <Navbar />
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='font-myfonts form-content-left bg-customnewblue'>
          <h2 className='font-myfonts mt-12 text-customblack'>Join LMS for Free</h2>
          <h4 className='font-myfonts mt-12 text-customblack'>Begin Your Journey</h4>
          <div className='seperator'></div>
        </div>
        <FormSignup />
      </div>

      <Footer />
    </div>
  );
};

export default Form;
