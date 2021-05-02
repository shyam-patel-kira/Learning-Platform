import React from 'react';
import './Signup/Form.css';
import FormSignup from './Signup/FormSignup';
//import FormSuccess from './Signup/FormSuccess';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Form = () => {
  return (
    <>
      <Navbar />
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='font-myfonts form-content-left'>
          <h2 className='font-myfonts'>Join LMS for Free</h2>
          <h4 className='font-myfonts'>Begin Your Journey</h4>
          <div className='seperator'></div>
        </div>
        <FormSignup />
      </div>
      <Footer />
    </>
  );
};

export default Form;
