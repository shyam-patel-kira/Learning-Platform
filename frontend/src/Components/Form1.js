import React from 'react';
import './Login/Form1.css';
import FormLogin from './Login/FormLogin';
//import FormSuccess from './Login/FormSuccess';
import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Form1 = () => {
  return (
    <div>
      <Navbar />
      <div className='form1-container'>
        <span className='close-btn'>×</span>
        <div className='form1-content-left'>
          <h2>Welcome Back to LMS</h2>
          <h4>Sign In to continue to your Account</h4>
          <div className='seperator'></div>
        </div>
        <FormLogin />
      </div>
      <Footer />
    </div>
  );
};
export default Form1;
