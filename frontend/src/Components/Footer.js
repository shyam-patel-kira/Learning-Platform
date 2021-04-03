import React from 'react';
// import { Button } from './Button'
import Button from 'react-bootstrap/Button'; //eslint-disable-line
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

  feedBackSubmit = event => {
    event.preventDefault();
    const feedback = {
      subject: this.state.subject,
      author: this.state.author,
      content: this.state.content,
      email: this.state.email,
    };
    console.log(feedback);

    axios
      .post('http://localhost:8000/feedback', feedback)
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <div className='flex max-h-screen justify-between bg-blue-navbar'>
        <div className='flex flex-col w-full divide-y-2 divide-white justify-center items-center bg-blue-navbar'>
          <div className='flex items-center text-4xl w-3/4 justify-between'>
            <Link to='/'>
              <i className='fab fa-typo3  text-white' />
              <text className='text-white'>LMS</text>
            </Link>
            <div className='flex text-4xl'>
              <Link
                className='m-4 text-white'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='m-4 text-white'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
            </div>
          </div>

          <div className='flex flex-col w-3/4 justify-stretch'>
            <Link className='my-4 text-white no-underline' to='/'>
              Home
            </Link>
            <Link className='my-4 text-white no-underline' to='/'>
              About
            </Link>
          </div>

          <div className='flex items-center w-3/4 justify-between'>
            <div className='my-4 text-white'>Telephone</div>
            <div className='my-4 text-white'>lms@gmail.com</div>
          </div>
        </div>

        <form className='flex flex-col w-3/5 items-center justify-center'>
          <h1 className='my-2 text-2xl text-white'>Feedback</h1>

          <div className='my-3 flex flex-col w-5/6'>
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

          <div className='my-3 flex flex-col w-5/6'>
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

          <div className='my-3 w-5/6 flex flex-col'>
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

          <div className='my-3 w-5/6 flex flex-col'>
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
            className='my-3 bg-green-submitColor rounded-xl w-1/2 p-2 text-lg'
            type='submit'
            onClick={this.feedBackSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className='footer-container'>
  //       <section className='social-media'>
  //         <div className='social-media-wrap'>
  //           <div className='footer-logo'>
  //             <Link to='/' className='social-logo'>
  //               LMS <i className='fab fa-typo3' />
  //             </Link>
  //           </div>

  //           <div className='social-icons'>
  //             <Link
  //               className='social-icon-link instagram'
  //               to='/'
  //               target='_blank'
  //               aria-label='Instagram'
  //             >
  //               <i className='fab fa-instagram' />
  //             </Link>
  //             <Link
  //               className='social-icon-link twitter'
  //               to='/'
  //               target='_blank'
  //               aria-label='Twitter'
  //             >
  //               <i className='fab fa-twitter' />
  //             </Link>
  //           </div>
  //         </div>
  //       </section>
  //       <section className='footer-feedback-form'>
  //         <form>
  //           <h1>Give Your Feedback</h1>
  //           <div className='form-inputs-1'>
  //             <label htmlFor='author' className='form-label'></label>
  //             <input
  //               id='author'
  //               type='text'
  //               name='author'
  //               required
  //               className='form-input'
  //               placeholder='Enter your Name'
  //               value={this.state.author}
  //               onChange={this.onChangeAuthor}
  //             />
  //           </div>

  //           <div className='form-inputs-1'>
  //             <label htmlFor='subject' className='form-label'></label>
  //             <input
  //               id='subject'
  //               type='text'
  //               name='subject'
  //               required
  //               className='form-input'
  //               placeholder='Subject'
  //               value={this.state.subject}
  //               onChange={this.onChangeSubject}
  //             />
  //           </div>

  //           <div className='form-inputs-1'>
  //             <label htmlFor='email' className='form-label'></label>
  //             <input
  //               id='email'
  //               type='email'
  //               name='email'
  //               required
  //               className='form-input'
  //               placeholder='Enter your Email'
  //               value={this.state.email}
  //               onChange={this.onChangeEmail}
  //             />
  //           </div>

  //           <div className='form-inputs-1'>
  //             <label htmlFor='content' className='form-label'></label>
  //             <textarea
  //               id='content'
  //               type='text'
  //               name='content'
  //               style={{ height: '100px' }}
  //               required
  //               className='form-input'
  //               placeholder='Your Feedback or Query'
  //               value={this.state.content}
  //               onChange={this.onChangeContent}
  //             />
  //           </div>

  //           <button
  //             className='form-input-btn-1'
  //             type='submit'
  //             onClick={this.feedBackSubmit}
  //           >
  //             Submit
  //           </button>
  //         </form>
  //         {/* <Button variant="Default" href='/' style={{color:"#fff", background:"#00ff84", margin: "0.5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}>Submit</Button> */}
  //       </section>
  //       <div className='footer-links'>
  //         <div className='footer-link-wrapper'>
  //           <div className='footer-link-items'>
  //             <Link to='/'>Home</Link>
  //             <Link to='/'>About Us</Link>
  //             {/* <a href={"mailto:" + this.props.email}>email</a> */}
  //           </div>
  //         </div>
  //       </div>
  //       <small className='website-rights'>
  //         LMS ©️ 2021. All rights reserved
  //       </small>
  //     </div>
  //   );
  // }
}

export default Footer;
