import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Form1.css';

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      formErrors: {},
    };
    this.initialState = this.state;
  }

  handleChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value,
    });
  };

  handleFormValidation() {
    const { userName, password } = this.state;
    let formErrors = {};
    let formIsValid = true;

    if (!userName) {
      formIsValid = false;
      formErrors['userNameErr'] = 'Username is required.';
    } else if (!userName.trim()) {
      formIsValid = false;
      formErrors['userNameErr'] = 'Username is required';
    }

    if (!password) {
      formIsValid = false;
      formErrors['passwordErr'] = 'Password is required';
    } else if (password.length < 8) {
      formIsValid = false;
      formErrors['passwordErr'] = 'Password needs to be 8 characters or more';
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.handleFormValidation) {
      this.setState(this.initialState);
      const login = {
        userName: this.state.userName,
        password: this.state.password,
      };

      axios
        .post('http://localhost:8000/user/login', login)
        .then(res => console.log(res.data))
        .catch(err => console.log('Error is: ', err));
    }
  };

  render() {
    const { userNameErr, passwordErr } = this.state.formErrors;
    return (
      <div className='form1-content-right'>
        <button className='facebook-button sc-dnqmqq iTCbCQ'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M20 10.0611C20 4.50451 15.5229 0 10 0C4.47715 0 0 4.50451 0 10.0611C0 15.0829 3.65686 19.2452 8.4375 20V12.9694H5.89844V10.0611H8.4375V7.84452C8.4375 5.32296 9.93043 3.93012 12.2146 3.93012C13.3087 3.93012 14.4531 4.12663 14.4531 4.12663V6.60261H13.1921C11.9499 6.60261 11.5625 7.37816 11.5625 8.17381V10.0611H14.3359L13.8926 12.9694H11.5625V20C16.3431 19.2452 20 15.0829 20 10.0611Z'
              fill='#1877F2'
            ></path>
          </svg>
          <span class='text'>Continue with Facebook</span>
        </button>

        <button class='google-button sc-gqjmRU cnCRxi'>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M17.64 9.20443C17.64 8.56625 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20443Z'
              fill='#4285F4'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z'
              fill='#34A853'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M3.96409 10.7101C3.78409 10.1701 3.68182 9.59325 3.68182 9.00007C3.68182 8.40689 3.78409 7.83007 3.96409 7.29007V4.95825H0.957273C0.347727 6.17325 0 7.5478 0 9.00007C0 10.4523 0.347727 11.8269 0.957273 13.0419L3.96409 10.7101Z'
              fill='#FBBC05'
            ></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z'
              fill='#EA4335'
            ></path>
          </svg>
          <span class='text'>Continue with Google</span>
        </button>

        <div className='form-seperator-1'>
          <p>or</p>
        </div>

        <form onSubmit={this.handleSubmit} className='form1' noValidate>
          <div className='form1-inputs'>
            <label className='form1-label'>Email</label>
            <input
              className='form1-input'
              type='text'
              name='userName'
              placeholder='Enter your User Name'
              value={this.state.userName}
              onChange={this.handleChangeUserName}
            />
            {userNameErr && <p>{userNameErr}</p>}
          </div>
          <div className='form1-inputs'>
            <label className='form1-label'>Password</label>
            <input
              className='form1-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            {passwordErr && <p>{passwordErr}</p>}
          </div>
          <button className='form1-input-btn' type='submit'>
            Login
          </button>
          <span className='form1-input-login'>
            Not a member <Link to='/signup'>Sign Up</Link>
          </span>
        </form>
      </div>
    );
  }
}

export default FormLogin;
