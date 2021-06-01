import React from 'react';
import Ieltsreadingherocards from './Ieltsreadingherocards';
import SimpleReadingCard from './Simplereadingcard';

class Ieltsreadinghero extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleTest = event => {
    let x = event.target.id;
    window.location = `/ielts-reading-test/${x}`;
  };

  render() {
    return (
      <div className='bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
        <h1 className='pt-8 text-4xl text-center'>Reading</h1>
        <div className='px-8 my-10 text-customwhite'>
          <ul className='flex font-myfonts'>
            <Ieltsreadingherocards>
              <li>
                IELTS Reading section consists of three passages and a total of
                40 questions.
              </li>
              <br />
              <li>
                The difficulty of passages increases as one moves from passage-1
                to passage-3.
              </li>
              <br />
              <li>
                The duration of examination is 1 hour and all the answers should
                be attempted by the candidates as there is no negative marking.
              </li>
              <br />
              <li>
                It is advised that candidates should spend 15mins for passage-1,
                20mins for passage-2 and 25mins for passage-3.
              </li>
              <br />
              <li>
                There is no extra time given to candidates for transferring the
                answers to the answer sheet.
              </li>
              <br />
              <li>
                IELTS Reading academic passages are generally taken from
                magazines, books and newspapers. Passages often contain
                complicated language, academic vocabulary and complex grammar.
              </li>
            </Ieltsreadingherocards>

            <Ieltsreadingherocards>
              <li className='font-myfonts'>
                <strong>Reading is of two types:</strong>
                <ul>Academic Reading</ul>
                <ul>General Reading</ul>
              </li>
              <br />
              <li className='font-myfonts'>
                The candidate should definitely decide which exam they are going
                to give and if they are confused then they can definitely reach
                out to the British Council or IDP.
              </li>
              <br />
              <li className='font-myfonts'>
                <strong>Types of Questions asked:</strong>
                <ul className='px-3 list-decimal'>
                  <li>Multiple Choice Questions</li>
                  <li>True/False/Not Given</li>
                  <li>Fill in the blanks</li>
                  <li>Match the headings</li>
                  <li>Label the diagram</li>
                  <li>Complete the summary</li>
                  <li>Which paragraph contains which information</li>
                </ul>
              </li>
            </Ieltsreadingherocards>
          </ul>

          <ul className='my-2 justify-items-center grid grid-cols-2 gap-6'>
            <SimpleReadingCard
              title='Skimming'
              content='The candidate should use this technique and it’s main purpose is to look only for the main ideas from the passage instead of giving attention to every single word in the passage.'
            />
            <SimpleReadingCard
              title='Underline'
              content='When one skims over the text, then it becomes important to underline the crucial phrases found in the text.'
            />
            <SimpleReadingCard
              title='Maintain the order'
              content='Any candidate who is appearing in the exam should remember one thing that the questions follow the order of the text in the majority of cases.'
            />
            <SimpleReadingCard
              title='Cross out the wrong answers'
              content='If the candidate doesn’t know what the correct answer is or if the candidate is unable to do so, then they should cancel out the wrong answers especially in matching the list, MCQ’s and matching the paragraphs.'
            />
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Give Test
          </h1>
          <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='01'
            >
              Test 01
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='02'
            >
              Test 02
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='03'
            >
              Test 03
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='04'
            >
              Test 04
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='05'
            >
              Test 05
            </button>
            </div>
            <br />
            <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='06'
            >
              Test 06
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='07'
            >
              Test 07
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='08'
            >
              Test 08
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='09'
            >
              Test 09
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='10'
            >
              Test 10
            </button>
            </div>
            <br />
            <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='11'
            >
              Test 11
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='12'
            >
              Test 12
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='13'
            >
              Test 13
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='14'
            >
              Test 14
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='15'
            >
              Test 15
            </button>
            </div>
            <br />
            <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='16'
            >
              Test 16
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='17'
            >
              Test 17
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='18'
            >
              Test 18
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='19'
            >
              Test 19
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='20'
            >
              Test 20
            </button>
            </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Ieltsreadinghero;
