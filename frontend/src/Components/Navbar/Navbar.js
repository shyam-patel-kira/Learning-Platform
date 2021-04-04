import React, { Component } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
    window.location = '/';
  };

  logoClick = () => {
    window.location = '/';
  };

  render() {
    //  const isLogged = !!sessionStorage.getItem('token_object');
    return (
      <nav className='flex p-3 bg-blue-navbar items-center justify-between'>
        <h1 className='cursor-pointer text-white' onClick={this.logoClick}>
          <i className='fab fa-react mx-2 text-2xl'></i>
          <span className='text-2xl'> LMS</span>
        </h1>
        {/*<div className='hidden' onClick={this.handleClick}>
          <i
            className={
              this.state.clicked
                ? 'fas fa-times text-4xl'
                : 'fas fa-bars text-white'
            }
          ></i>
          </div>*/}
        <ul className='flex items-center flex-grow justify-end'>
          <li>
            <NavLink to='/' className='text-white py-2 px-4'>
              Home
            </NavLink>
          </li>
          <li className='dropdown'>
            <p
              // className='px-4 py-2 text-white'
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
              <Link className='dropdown-item' to='#'>
                GRE
              </Link>
              <Link className='dropdown-item' to='/ieltsmain'>
                IELTS
                {/* if (!isLogged) {
                            <Redirect to="/login" />
                        } */}
              </Link>
            </div>
          </li>
          {/* <script>
                            function myFunction() {
                                alert("Please Login First")
                            }
                        </script> */}

          <li>
            <NavLink to='/' className='text-white px-4 py-2'>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to='/' className='text-white px-4 py-2'>
              Contact Us
            </NavLink>
          </li>

          {/* {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                                
                            </li>
                        )
                    })} */}
        </ul>

        <div>
          <button className='bg-green-400 text-black hover:text-white hover:bg-green-700 transition ease-in duration-300 rounded-sm mx-2 py-2 px-4'>
            <Link className='hover:no-underline hover:text-white' to='/login'>
              Login
            </Link>
          </button>

          <button className='bg-green-400 hover:bg-green-700 transition ease-in duration-300 rounded-sm mx-2 py-2 px-4 text-black hover:text-white'>
            <Link className='hover:no-underline hover:text-white' to='/signup'>
              Sign Up
            </Link>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
