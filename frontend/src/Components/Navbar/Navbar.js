import React, { Component } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Accordion from '../Faq/Accordion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    window.location = '/';
  };

  handleLogout = () => {
    cookies.remove('token');
    cookies.remove('uname');
    cookies.remove('role');
    alert('User Logged out');
    window.location = '/';
  };

  logoClick = () => {
    window.location = '/';
  };

  faqClick = () => {
    <Accordion />;
  };

  render() {
    const username = cookies.get('uname');
    return (
      <nav className='flex p-3 bg-customdarkblue items-center justify-between'>
        <h1
          className='cursor-pointer text-customwhite'
          onClick={this.logoClick}
        >
          <i className='fab fa-react mx-2 text-2xl'></i>
          <span className='text-2xl'>LMS</span>
        </h1>

        <ul className='flex items-center flex-grow justify-end'>
          <li>
            <NavLink to='/' className='text-white py-2 px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-1 mb-1 h-4 w-4 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              Home
            </NavLink>
          </li>
          <li className='dropdown'>
            <p
              className='justify-center w-full rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Courses
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 inline'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </p>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <Link className='dropdown-item' to='/gremain'>
                GRE
              </Link>
              <Link className='dropdown-item' to='/ieltsmain'>
                IELTS
              </Link>
            </div>
          </li>

          <li>
            <NavLink to='/about' className='text-white px-4 py-2'>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className='text-white px-4 py-2 hover:no-underline'
              onClick={this.faqClick}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mx-1 mb-1 h-4 w-4 inline'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <AnchorLink className='hover: text-white' href="#faq">FAQ</AnchorLink>
            </NavLink>
          </li>
        </ul>

        {username ? (
          <div>
            <h1 className='text-white text-md inline py-2 px-4'>
              Hi, {username}{' '}
            </h1>

            <button
              onClick={this.handleLogout}
              className='bg-custompink text-customred hover:text-customdarkblue hover:bg-onhover transition ease-in duration-300 rounded-sm mx-2 py-2 px-4'
            >
              <Link
                className='hover:no-underline hover:text-onhovertext'
                to='/'
              >
                Logout
              </Link>
            </button>
          </div>
        ) : (
          <div>
            <button className='bg-custompink text-customred hover:text-onhovertext hover:bg-onhover transition ease-in duration-300 rounded-sm mx-2 py-2 px-4'>
              <Link
                className='hover:no-underline hover:text-onhovertext'
                to='/login'
              >
                Login
              </Link>
            </button>
            <button className='bg-custompink text-customred hover:text-onhovertext hover:bg-onhover transition ease-in duration-300 rounded-sm mx-2 py-2 px-4'>
              <Link
                className='hover:no-underline hover:text-onhovertext'
                to='/signup'
              >
                Sign Up
              </Link>
            </button>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;