import React from 'react';
import Ieltswritingherocards from './Ieltswritingherocards';
import './Ieltswritinghero.css';

class Ieltswritinghero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButton = event => {
    let x = event.target.name;
    window.location = `/ielts-writing-task-1/${x}`;
  };

  handleTask2Button = event => {
    let x = event.target.name;
    window.location = `/ielts-writing-task-2/${x}`;
  };

  render() {
    return (
      <div className='font-myfonts bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
        <h1 className='pt-8 text-4xl text-center'>Writing</h1>
        <div className='px-8 my-10 text-customwhite'>
          <ul className='cards__items'>
            <Ieltswritingherocards />
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-myfonts text-4xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Writing Task-1 Topics
          </h1>
          <div className='flex flex-row justify-evenly w-5/6 px-2'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='bar-graph'
              onClick={this.handleButton}
              id='1'
            >
              Bar Graph
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='pie-chart'
              onClick={this.handleButton}
              id='2'
            >
              Pie-Chart
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='line-graph'
              onClick={this.handleButton}
              id='3'
            >
              Line Graph
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='table'
              onClick={this.handleButton}
              id='4'
            >
              Tabular Data
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='maps'
              onClick={this.handleButton}
              id='5'
            >
              Maps
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='diagram'
              onClick={this.handleButton}
              id='6'
            >
              Diagram
            </button>
          </div>
        </div>

        <div className='flex flex-col my-10 justify-center items-center'>
          <h1 className='text-4xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Writing Task-2 Topics
          </h1>

          <div className='flex flex-col justify-between items-center w-5/6 px-2'>
            <button
              className='my-2 bg-customnewblue hover:bg-customhoverblue transition-all ease-in duration-300 text-customwhite hover:text-customdarkblue font-bold py-2 px-4 rounded w-1/3'
              variant='Default'
              name='opinion'
              onClick={this.handleTask2Button}
              id='7'
            >
              Opinion Essay
            </button>

            <button
              className='my-2 bg-customnewblue hover:bg-customhoverblue transition-all ease-in duration-300 text-customwhite hover:text-customdarkblue font-bold py-2 px-4 rounded w-1/3'
              variant='Default'
              name='adv-disadv'
              onClick={this.handleTask2Button}
              id='8'
            >
              Advantage/Disadvantage Essay
            </button>

            <button
              className='my-2 bg-customnewblue hover:bg-customhoverblue transition-all ease-in duration-300 text-customwhite hover:text-customdarkblue font-bold py-2 px-4 rounded w-1/3'
              variant='Default'
              name='solution'
              onClick={this.handleTask2Button}
              id='9'
            >
              Solution Essay
            </button>

            <button
              className='my-2 bg-customnewblue hover:bg-customhoverblue transition-all ease-in duration-300 text-customwhite hover:text-customdarkblue font-bold py-2 px-4 rounded w-1/3'
              variant='Default'
              name='discussion'
              onClick={this.handleTask2Button}
              id='10'
            >
              Discussion Essay
            </button>
            <button
              className='my-2 bg-customnewblue hover:bg-customhoverblue transition-all ease-in duration-300 text-customwhite hover:text-customdarkblue font-bold py-2 px-4 rounded w-1/3'
              variant='Default'
              name='direct'
              onClick={this.handleTask2Button}
              id='11'
            >
              Direct Questions Essay
            </button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Ieltswritinghero;
