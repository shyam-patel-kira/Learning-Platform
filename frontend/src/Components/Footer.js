import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      author: '',
      content: '',
      email: '',
    };
  }

  onChangeAuthor = event => {
    this.setState({
      author: event.target.value,
    });
  };

  onChangeSubject = event => {
    this.setState({
      subject: event.target.value,
    });
  };

  onChangeContent = event => {
    this.setState({
      content: event.target.value,
    });
  };

  onChangeEmail = event => {
    this.setState({
      email: event.target.value,
    });
  };

  feedBackSubmit = async e => {
    e.preventDefault();
    const feedback = {
      subject: this.state.subject,
      author: this.state.author,
      content: this.state.content,
      email: this.state.email,
    };
    console.log(feedback);

    await axios
      .post('http://localhost:8000/feedback', feedback)
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <div className='flex max-h-screen justify-between bg-customblack'>
        <div className='flex flex-col w-full divide-y-2 divide-white justify-center items-center bg-customblack'>
          <div className='flex items-center text-4xl w-3/4 justify-between'>
            <Link to='/' className='inline hover:no-underline'>
              <i className='fab fa-typo3 text-customwhite' />
              <p className='text-customwhite hover:no-underline'>LMS</p>
            </Link>
            <div className='flex text-4xl'>
              <Link
                className='m-4 text-customwhite'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='m-4 text-customwhite'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
            </div>
          </div>

          <div className='flex flex-col w-3/4 justify-stretch'>
            <Link
              className='my-4 text-customwhite no-underline bg-scroll hover:underline hover:text-customwhite'
              to='/'
            >
              Home
            </Link>
            <Link
              className='my-4 text-customwhite no-underline hover:underline hover:text-customwhite'
              to='/about'
            >
              About
            </Link>
          </div>

          <div className='flex items-center w-3/4 justify-between'>
            <div className='my-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                />
              </svg>
              <p className='inline'> +91-8469975929</p>
            </div>
            <div className='my-4 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
              <p className='inline'> lms@gmail.com</p>
            </div>
          </div>
        </div>

        <form className='flex flex-col w-3/5 items-center justify-center'>
          <h1 className='my-2 text-2xl text-customwhite'>Feedback</h1>

          <div className='my-2 flex flex-col w-5/6'>
            <label htmlFor='author' className=''></label>
            <input
              id='author'
              type='text'
              name='author'
              required
              className='rounded-xl'
              placeholder='Enter your Name'
              value={this.state.author}
              onChange={this.onChangeAuthor}
            />
          </div>

          <div className='my-2 flex flex-col w-5/6'>
            <label htmlFor='subject' className=''></label>
            <input
              id='subject'
              type='text'
              name='subject'
              required
              className='rounded-xl'
              placeholder='Subject'
              value={this.state.subject}
              onChange={this.onChangeSubject}
            />
          </div>

          <div className='my-2 w-5/6 flex flex-col'>
            <label htmlFor='email' className=''></label>
            <input
              id='email'
              type='email'
              name='email'
              required
              className='rounded-xl'
              placeholder='Enter your Email'
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className='my-2 w-5/6 flex flex-col'>
            <label htmlFor='content' className=''></label>
            <textarea
              id='content'
              type='text'
              name='content'
              required
              className='rounded-xl h-24'
              placeholder='Your Feedback or Query'
              value={this.state.content}
              onChange={this.onChangeContent}
            />
          </div>

          <button
            className=' inline my-3 bg-log hover:text-customwhite hover:bg-loghover transition-all ease-in duration-300 rounded-sm w-1/3 p-2 text-white text-lg'
            type='submit'
            onClick={this.feedBackSubmit}
          >
            Submit
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='mx-2 my-1 h-6 w-6 inline'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

export default Footer;

