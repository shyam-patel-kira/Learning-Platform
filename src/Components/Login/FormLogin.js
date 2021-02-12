import React from 'react';
import validate from './validationInfo';
import useForm from './useForm';
import './Form1.css';

const FormLogin = ({ submitForm1 }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(submitForm1, validate);

  return (
    <div className='form1-content-right'>
      <form onSubmit={handleSubmit} className='form1' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          inForm1ation below.
        </h1>
        {/* <div className='Form1-inputs'>
          <label className='Form1-label'>Username</label>
          <input
            className='Form1-input'
            type='text'
            name='username'
            placeholder='Enter your Name'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div> */}
        <div className='form1-inputs'>
          <label className='form1-label'>Email</label>
          <input
            className='form1-input'
            type='email'
            name='email'
            placeholder='Enter your Email Address'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form1-inputs'>
          <label className='form1-label'>Password</label>
          <input
            className='form1-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        {/* <div className='Form1-inputs'>
          <label className='Form1-label'>Confirm Password</label>
          <input
            className='Form1-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div> */}
        <button className='form1-input-btn' type='submit'>
          Login
        </button>
        {/* <span className='Form1-input-login'>
          Already a member  <a href='#'>Login</a>
        </span> */}
      </form>
    </div>
  );
};

export default FormLogin;