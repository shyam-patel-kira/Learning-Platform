import React from 'react'

const FormFeedback = () => {
    return (
        <div className='form-content-right'>
            <form className='form'>
                <h1>Give your Feedback Here</h1> 
                <div className='form-inputs'>
                    <label htmlFor='firstname' className='form-label'>
                    </label>
                    <input 
                        id='firstname'
                        type='text'
                        name='firstname'
                        className='form-input'
                        placeholder='Enter your Firstname'
                    />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='lastname' className='form-label'>
                    </label>
                    <input 
                        id='lastname'
                        type='text'
                        name='lastname'
                        className='form-input'
                        placeholder='Enter your Lastname'
                    />
                </div>


                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
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
                    <label htmlFor='query' className='form-label'>
                    </label>
                    <input 
                        id='query'
                        type='text'
                        name='query'
                        className='form-input'
                        placeholder='Feedback/query'
                    />
                </div>

                <button className='form-input-btn'
                        type='submit'>
                            submit
                        </button>
            </form>
        </div>


    )
}

export default FormFeedback
