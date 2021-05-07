import React, { Component } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Accordion from '../Faq/Accordion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { BiUser } from 'react-icons/bi';
import Cookies from 'universal-cookie';
import { FiUsers } from 'react-icons/fi';

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

  handleLogin = () => {
    window.location = '/login';
  };

  handleSignup = () => {
    window.location = '/signup';
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
      <nav className='flex p-3 bg-customgray items-center justify-between'>
        <h1
          className='cursor-pointer text-customwhite'
          onClick={this.logoClick}
        >
          <i className='fab fa-react mx-2 text-2xl text-customblack'></i>
          <span className='text-2xl font-myfonts text-customblack'>
            LearnZilla
          </span>
        </h1>

        <ul className='flex items-center flex-grow justify-end font-myfonts'>
          <li>
            <NavLink
              to='/'
              className='text-customblack py-2 px-4 font-myfonts hover:text-customblack'
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
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              Home
            </NavLink>
          </li>
          <li className='dropdown font-myfonts'>
            <p
              className='justify-center w-full rounded-md px-4 py-2 text-customblack focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
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
              Services
            </p>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <Link className='dropdown-item' to='/gremain'>
                GRE
              </Link>
              <Link className='dropdown-item' to='/ieltsmain'>
                IELTS
              </Link>
              <Link className='dropdown-item' to='/todos'>
                TODO LIST
              </Link>
            </div>
          </li>

          <li className='font-myfonts'>
            <NavLink
              to='/about-us'
              className='text-customblack px-4 py-2 hover:text-customblack'
            >
              <FiUsers className='mx-1 mb-1 h-4 w-4 inline' />
              About Us
            </NavLink>
          </li>
          <li className='font-myfonts'>
            <Link
              to='/'
              className='text-customblack hover:text-customblack px-4 py-2 hover:no-underline '
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
              <AnchorLink
                className='hover:text-customblack font-myfonts'
                href='#faq'
              >
                FAQ
              </AnchorLink>
            </Link>
          </li>
          <li>
            {' '}
            {username ? (
              <div>
                <div className='mb-1 h-4 w-4 inline text-customblack px-4'>
                  <BiUser className='inline mx-1 mb-1' />
                  <h1 className='text-customblack text-md inline py-2 font-myfonts'>
                    Hi, {username}{' '}
                  </h1>
                </div>

                <button
                  onClick={this.handleLogout}
                  className='font-myfonts bg-customnewblue text-customwhite hover:text-customdarkblue hover:bg-customhoverblue transition ease-in duration-300 rounded-sm border-customnewblue mx-2 py-2 px-4'
                >
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={this.handleLogin}
                  className='font-myfonts bg-customnewblue text-customwhite hover:text-customdarkblue hover:bg-customhoverblue transition ease-in duration-300 rounded-sm mx-2 py-2 px-4'
                >
                  Login
                </button>
                <button
                  onClick={this.handleSignup}
                  className='font-myfonts bg-customnewblue text-customwhite hover:text-customdarkblue hover:bg-customhoverblue transition ease-in duration-300 rounded-sm mx-2 py-2 px-4'
                >
                  Sign Up
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
