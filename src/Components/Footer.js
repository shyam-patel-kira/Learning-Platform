import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
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
                    <input type="text" name="name" placeholder="Your Name" className='feedback-form-input'/>
                    <input type="email" name="email" placeholder="Your Email ID" className='feedback-form-input'/>
                    <input type="text" name="query" placeholder="Your Feedback/Query" className='feedback-form-input'/>
                </form>
                <Button>SUBMIT</Button>
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
            <small className='website-rights'>LMS © 2021. All rights reserved</small>
        </div>
    )
}

export default Footer 
