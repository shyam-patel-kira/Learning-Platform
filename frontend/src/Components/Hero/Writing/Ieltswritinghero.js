import React from 'react';
import Ieltswritingherocards from './Ieltswritingherocards';
import './Ieltswritinghero.css';

class Ieltswritinghero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSamplePractice = event => {
    let x = event.target.name;
    window.location = `/ielts-sample-writing/${x}`;
  };

  handleTest = event => {
    let x = event.target.name;
    window.location = `/ielts-writing-task-1-practice/${x}`;
  };

  render() {
    return (
      <div className='bg-blue-navbar my-6 mr-14 w-3/4 divide-y-2 text-white'>
        <h1 className='pt-8 text-4xl text-center'>Writing</h1>
        <div className='px-8 my-10 text-gray-50'>
          <ul className='cards__items'>
            <Ieltswritingherocards />
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Writing Task-1 Sample Answers
          </h1>
          <div className='flex flex-row justify-evenly w-5/6 px-2'>
            <button
              className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              name='bar-graph'
              onClick={this.handleSamplePractice}
              id='1'
            >
              Bar Graph
            </button>

            <button
              className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              name='pie-chart'
              onClick={this.handleSamplePractice}
              id='2'
            >
              Pie-Chart
            </button>

            <button
              className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              name='line-graph'
              onClick={this.handleSamplePractice}
              id='3'
            >
              Line Graph
            </button>
            <button
              className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              name='table'
              onClick={this.handleSamplePractice}
              id='4'
            >
              Tabular Data
            </button>
            <button
              className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              name='maps'
              onClick={this.handleSamplePractice}
              id='5'
            >
              Maps
            </button>
            <button
              className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              name='diagram'
              onClick={this.handleSamplePractice}
              id='6'
            >
              Diagram
            </button>
          </div>
        </div>

        <div className='flex flex-col my-10 justify-center items-center'>
          <h1 className='text-4xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Writing Task-2 Sample Answers
          </h1>

          <div className='flex flex-col justify-between items-center w-5/6 px-2'>
            <button
              className='my-2 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded w-1/3'
              variant='Default'
              id='7'
            >
              Agree & Disagree
            </button>

            <button
              className='my-2 w-1/3 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              id='8'
            >
              Advantages & Disadvantages
            </button>

            <button
              className='my-2 w-1/3 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              id='9'
            >
              Double Questions
            </button>

            <button
              className='my-2 w-1/3 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              id='10'
            >
              Discussion Essay
            </button>
          </div>
        </div>
        <br />

        <div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
              Practice Yourself !!
            </h1>
            <div className='flex flex-row justify-evenly w-5/6 px-2'>
              <button
                className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                name='bar-graph'
                onClick={this.handleTest}
                id='11'
              >
                Bar Graph
              </button>

              <button
                className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                name='pie-chart'
                onClick={this.handleTest}
                id='12'
              >
                Pie-Chart
              </button>

              <button
                className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                name='line-graph'
                onClick={this.handleTest}
                id='13'
              >
                Line Graph
              </button>
              <button
                className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                name='table'
                onClick={this.handleTest}
                id='14'
              >
                Tabular Data
              </button>
              <button
                className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                name='maps'
                onClick={this.handleTest}
                id='15'
              >
                Maps
              </button>
              <button
                className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                name='diagram'
                onClick={this.handleTest}
                id='16'
              >
                Diagram
              </button>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div>
          <div className='flex flex-col  justify-center items-center'>
            <h1 className='text-4xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
              Practice Yourself !!
            </h1>

            <div className='flex flex-col justify-between items-center w-5/6 px-2'>
              <button
                className='my-2 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded w-1/3'
                variant='Default'
                id='17'
              >
                Agree & Disagree
              </button>

              <button
                className='my-2 w-1/3 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                id='18'
              >
                Advantages & Disadvantages
              </button>

              <button
                className='my-2 w-1/3 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                id='19'
              >
                Double Questions
              </button>

              <button
                className='my-2 w-1/3 bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
                variant='Default'
                id='20'
              >
                Discussion Essay
              </button>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Ieltswritinghero;
