import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import axios from 'axios'

class FormSignup extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userName:"",
      email:"",
      password:"",
      confpassword:"",
      formErrors:{}
    }
    this.initialState = this.state;
  }

  handleChangeUsername = (event) => {
    this.setState({
      userName:event.target.value
    })
  }

  handleChangeEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  }

  handleChangeConfirmPassword = (event) => {
    this.setState({
      confpassword:event.target.value
    })
  }

  handleFormValidation(){
    const { userName, email, password, confpassword } = this.state;
    let formErrors = {};    
    let formIsValid = true; 

    if (!userName) {    
      formIsValid = false  
      formErrors["userNameErr"] = "Username is required."   
    }  
    else if (!userName.trim()) {
      formIsValid = false
      formErrors["userNameErr"] = 'Username is required'
    }

    if(!email){
      formIsValid = false
      formErrors["emailErr"] = 'Email required'
    }
    else if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))) {    
      formIsValid = false    
      formErrors["emailErr"] = "Invalid email id."   
    } 
    if (!password) {
      formIsValid = false;
      formErrors["passwordErr"] = 'Password is required';
    } 
    else if (password.length < 8) {
      formIsValid = false;
      formErrors["passwordErr"] = 'Password needs to be 8 characters or more'
    }
    if (!confpassword) {
      formIsValid = false;
      formErrors["confpassErr"] = 'Password is required'
    } 
    else if (confpassword !== password) {
      formIsValid = false;
      formErrors["confpassErr"] = 'Passwords do not match'
    }

    this.setState({ formErrors: formErrors });    
    return formIsValid;   
  }

  handleSubmit = (event) => {    
    event.preventDefault();    
    if (this.handleFormValidation()) {    
            
        this.setState(this.initialState)
        const signup = {
          userName: this.state.userName,
          password: this.state.password,
          email: this.state.email,
        }

        axios.post('http://localhost:8000/user/register',signup)
          .then(res => console.log(res.data))
          .catch(err => console.log("Error is: ",err))
        // if status code == 200 than post login api simultaneously and get token
    }    
}    

  render(){
    const { userNameErr, emailErr, passwordErr,confpassErr } = this.state.formErrors;
    return(
        <div className='form-content-right'>
        <form onSubmit={this.handleSubmit} className='form' noValidate>
          <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
              className='form-input'
              type='text'
              name='userName'
              placeholder='Enter your Name'
              value={this.state.userName}
              onChange={this.handleChangeUsername}
            />
            {userNameErr && <p>{userNameErr}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Email</label>
            <input
              className='form-input'
              type='email'
              name='email'
              placeholder='Enter your Email Address'
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            {emailErr && <p>{emailErr}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
              className='form-input'
              type='password'
              name='password'
              placeholder='Enter your password'
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
            {passwordErr && <p>{passwordErr}</p>}
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Confirm Password</label>
            <input
              className='form-input'
              type='password'
              name='password2'
              placeholder='Confirm your password'
              value={this.state.confpassword}
              onChange={this.handleChangeConfirmPassword}
            />
            {confpassErr && <p>{confpassErr}</p>}
          </div>
          <button className='form-input-btn' type='submit'>
            Sign up
          </button>
          <span className='form-input-login'>
            Already a member  <Link to='/login'>Login</Link>
          </span>
        </form>
      </div>
      )
  }
}

export default FormSignup;