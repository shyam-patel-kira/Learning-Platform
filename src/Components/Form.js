import React, { useState } from 'react';
import './Signup/Form.css'
import FormSignup from './Signup/FormSignup';
import FormSuccess from './Signup/FormSuccess';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <Navbar />
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
            <h1>Join LMS for Free</h1> 
            <h2>Begin Your Journey</h2>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>

      <Footer />
    </>
  );
};

export default Form;