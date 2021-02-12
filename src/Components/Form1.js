import React, { useState } from 'react';
import './Login/Form1.css'
import FormLogin from './Login/FormLogin';
import FormSuccess from './Login/FormSuccess';

const Form1 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm1() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form1-container'>
        <span className='close-btn'>×</span>
        <div className='form1-content-left'>
            <h1>Join LMS for Free</h1> 
            <h1>Begin Your Journey</h1>
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm1={submitForm1} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form1;