import React from 'react'
// import { Button } from './Button'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Footer.css'

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            subject:"",
            author:"",
            content:"",
            email:""
        }
    }

    onChangeAuthor = (event) => {
        this.setState({
            author:event.target.value
        })
    }

    onChangeSubject = (event) => {
        this.setState({
            subject:event.target.value
        })
    }

    onChangeContent = (event) => {
        this.setState({
            content:event.target.value
        })
    }

    onChangeEmail = (event) => {
        this.setState({
            email:event.target.value
        })
    }

    feedBackSubmit = (event) => {
        event.preventDefault();
        const feedback = {
            subject: this.state.subject,
            author: this.state.author,
            content: this.state.content,
            email: this.state.email
        }
        console.log(feedback)

        axios.post('http://localhost:8000/feedback',feedback)
            .then(res => console.log(res.data))

    }

render() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            LMS <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    
                    <div className='social-icons'>
                        <Link 
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' /> 
                        </Link>
                        <Link 
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' /> 
                        </Link>
                    </div>
                </div>
            </section>
            <section className='footer-feedback-form'>
                <form>
                <h1>Give Your Feedback</h1> 
                <div className='form-inputs-1'>
                    <label htmlFor='author' className='form-label'>
                    </label>
                    <input 
                        id='author'
                        type='text'
                        name='author'
                        required
                        className='form-input'
                        placeholder='Enter your Name'
                        value={this.state.author}
                        onChange={this.onChangeAuthor}
                    />
                </div>

                <div className='form-inputs-1'>
                    <label htmlFor='subject' className='form-label'>
                    </label>
                    <input
                        id='subject'
                        type='text'
                        name='subject'
                        required
                        className='form-input'
                        placeholder='Subject'
                        value={this.state.subject}
                        onChange={this.onChangeSubject}
                    />
                </div>


                <div className='form-inputs-1'>
                    <label htmlFor='email' className='form-label'>
                    </label>
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        required
                        className='form-input'
                        placeholder='Enter your Email'
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                    />
                </div>

                <div className='form-inputs-1'>
                    <label htmlFor='content' className='form-label'>
                    </label>
                    <textarea 
                        id='content'
                        type='text'
                        name='content'
                        style={{height:"100px"}}
                        required
                        className='form-input'
                        placeholder='Your Feedback or Query'
                        value={this.state.content}
                        onChange={this.onChangeContent}

                    />
                </div>

                <button className='form-input-btn-1'
                        type='submit'
                        onClick={this.feedBackSubmit}
                >
                    Submit
                        </button>
                </form>
                {/* <Button variant="Default" href='/' style={{color:"#fff", background:"#00ff84", margin: "0.5%", boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)"}}>Submit</Button> */}
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <Link to='/'>Home</Link>
                        <Link to='/'>About Us</Link>
                        {/* <a href={"mailto:" + this.props.email}>email</a> */}
                    </div>
                </div>
            </div>
            <small className='website-rights'>LMS ©️ 2021. All rights reserved</small>
        </div>
    )
}
}

export default Footer