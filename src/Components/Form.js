import React, { useState } from 'react';
import './Signup/Form.css'
import FormSignup from './Signup/FormSignup';
import FormSuccess from './Signup/FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
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
    </>
  );
};

export default Form;