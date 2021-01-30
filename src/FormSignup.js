import React from 'react'

const FormSignup = () => {
    return (
        <div className='form-content-right'>
            <form className='form'>
                <h1>Create your Account</h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input 
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter your Username'
                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your Email'
                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input 
                        id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your Password'
                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'>
                        Confirm Password
                    </label>
                    <input 
                        id='passwrod2'
                        type='passwrod2'
                        name='password2'
                        className='form-input'
                        placeholder='Enter your Password again'
                    />
                </div>

                <button className='form-input-btn'
                        type='submit'>
                            Sign Up
                        </button>
            </form>
        </div>

    )
}

export default FormSignup

