import React from 'react';
import Ieltsreadingherocards from './Ieltsreadingherocards';
import Ieltsreadingherocards1 from './Ieltsreadingherocards1';
import Simplereadingcard from './Simplereadingcard';
import Simplereadingcard1 from './Simplereadingcard1';
import Simplereadingcard2 from './Simplereadingcard2';
import Simplereadingcard3 from './Simplereadingcard3';
import Button from 'react-bootstrap/Button';
import './Ieltsreadinghero.css';

class Ieltsreadinghero extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleTest = event => {
    var x = event.target.id;
    window.location = `/ielts-reading-test/${x}`;
  };

  render() {
    return (
      <div className='ielts-reading-hero-container'>
        <h1 className='pt-6 mt-2 text-4xl'>Reading</h1>
        <div className='ielts-reading-hero-wrapper'>
          <ul className='cards__items'>
            <Ieltsreadingherocards />
            <Ieltsreadingherocards1 />
          </ul>

          <ul className='cards__items'>
            <Simplereadingcard />
            <Simplereadingcard1 />
            <Simplereadingcard2 />
          </ul>

          <ul className='cards__items'>
            <Simplereadingcard3 />
          </ul>
        </div>
        <div>
          <h1
            className='text-5xl mb-4 justify-evenly font-serif list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased text-left mt-0'
          >
            Give Test
          </h1>
          <div className='flex flex-row space-x-6'>
            <Button
              className='bg-green-customBorder hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => this.handleTest(e)}
              id='1'
            >
              Test 1
            </Button>
            <br />
            <Button
              className='bg-green-customBorder hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => this.handleTest(e)}
              id='2'
            >
              Test 2
            </Button>
            <br />
            <Button
              className='bg-green-customBorder hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => this.handleTest(e)}
              id='3'
            >
              Test 3
            </Button>
            <br />
            <Button
              className='bg-green-customBorder hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => this.handleTest(e)}
              id='4'
            >
              Test 4
            </Button>
            <br />
            <Button
              className='bg-green-customBorder hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={e => this.handleTest(e)}
              id='5'
            >
              Test 5
            </Button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Ieltsreadinghero;
