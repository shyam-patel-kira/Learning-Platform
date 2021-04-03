import React, { Component } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
      <nav className='NavbarItems'>
        <h1 className='navbar-logo' onClick={this.logoClick}>
          <i className='fab fa-react'></i>
          <text className='text-2xl'> LMS</text>
        </h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          <NavLink
            to='/'
            activeStyle={{ color: 'white', padding: '0.5rem 1rem' }}
          >
            Home
          </NavLink>

          <div class='dropdown'>
            <button
              class='btn btn-default dropdown-toggle'
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Courses
            </button>
            <div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <Link class='dropdown-item' to='#'>
                GRE
              </Link>
              <Link class='dropdown-item' to='/ieltsmain'>
                IELTS
                {/* if (!isLogged) {
                            <Redirect to="/login" />
                        } */}
              </Link>
            </div>
          </div>
          {/* <script>
                            function myFunction() {
                                alert("Please Login First")
                            }
                        </script> */}

          <NavLink
            to='/'
            activeStyle={{
              color: 'white',
              padding: '0.5rem 1rem',
              marginTop: '1.5%',
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to='/'
            activeStyle={{
              color: 'white',
              padding: '0.5rem 1rem',
              marginTop: '1.5%',
            }}
          >
            Contact Us
          </NavLink>

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

        <Button
          variant='Default'
          href='/login'
          style={{
            color: '#fff',
            background: '#00ff84',
            margin: '0.5%',
            boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
            padding: '0.5rem 1rem',
          }}
        >
          Login
        </Button>

        <Button
          variant='Default'
          href='/signup'
          style={{
            color: '#fff',
            background: '#00ff84',
            margin: '0.5%',
            boxShadow: '5px 5px 3px rgba(46, 46, 46, 0.62)',
            padding: '0.5rem 1rem',
          }}
        >
          Sign Up
        </Button>
      </nav>
    );
  }
}

export default Navbar;
