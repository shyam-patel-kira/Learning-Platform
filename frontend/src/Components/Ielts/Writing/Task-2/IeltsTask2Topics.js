import React from 'react';
import { Link } from 'react-router-dom';

function IeltsTask2Topics() {
  //Task-2 Sample Answers
  const handleTask2SamplePractice = event => {
    let x = event.target.name;
    let y = event.target.id;
    window.location = `/ielts-sample-writing-task2/${x}/${y}`;
  };

  //Task-2 Sample Test
  const handleTask2Test = event => {
    let x = event.target.name;
    let y = event.target.id;
    window.location = `/ielts-writing-task-2-practice/${x}/${y}`;
  };

  let x = window.location.href.split('/');
  let keyword = x[x.length - 1];

  //Opinion Essays
  if (keyword === 'opinion') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite'>
          <h1 className='pt-8 text-4xl text-center font-serif my-6'>
            Opinion Based Essay
          </h1>
          <div className='px-8 text-customwhite'>
            <div className='my-6 text-xl'>
              <ul className='list-disc list-inside font-serif leading-relaxed'>
                <li>
                  You should spend at least 5 minutes analyzing the words and
                  ideas in the statement.
                </li>
                <li>
                  Make sure your answer is a complete answer which addresses all
                  parts of the task.
                </li>
                <li>
                  Give a clear opinion and stay true to your opinion throughout
                  the essay.
                </li>
                <li>
                  Give some relevant examples in the essay to support your idea.
                </li>
                <li>
                  Sort out some main points that you are going to write and
                  justify them with proper reasoning.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Sample Answers</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                onClick={handleTask2SamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                onClick={handleTask2SamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                onClick={handleTask2SamplePractice}
                id='3'
              >
                Sample-3
              </button>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Practice Yourself</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                onClick={handleTask2Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                onClick={handleTask2Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                onClick={handleTask2Test}
                id='2'
              >
                Test-3
              </button>
            </div>
          </div>
          <div>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                id='1'
              >
                <Link to='/ielts-writing' className='hover:no-underline hover:text-customwhite'>
                  Go Back
                </Link>
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }

  //Advantage-Disadvantge
  else if (keyword === 'adv-disadv') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite'>
          <h1 className='pt-8 text-4xl text-center font-serif my-6'>
            Advantage-Disadvantage Essay
          </h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside font-serif leading-relaxed'>
                <li>
                  You should spend at least 5 minutes analyzing the words and
                  ideas in the statement.
                </li>
                <li>
                  Read the question properly and understand if you’ve got to
                  give an opinion.
                </li>
                <li>
                  If you’re supposed to give an opinion, make sure you have
                  reasons to support your opinions.
                </li>
                <li>
                  Spend time planning the benefits and drawbacks of the
                  statement given.
                </li>
                <li>
                  Make sure you have relevant supporting points and example to
                  justify your idea.
                </li>
                <li>
                  Put your advantages together in one body paragraph and follow
                  the same for disadvantages.
                </li>
                <li>
                  Write two main points for both merits and demerits and justify
                  them with one example and proper reasonings.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Sample Answers</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='adv-disadv'
                onClick={handleTask2SamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='adv-disadv'
                onClick={handleTask2SamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='adv-disadv'
                onClick={handleTask2SamplePractice}
                id='3'
              >
                Sample-3
              </button>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Practice Yourself</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='adv-disadv'
                onClick={handleTask2Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='adv-disadv'
                onClick={handleTask2Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='adv-disadv'
                onClick={handleTask2Test}
                id='2'
              >
                Test-3
              </button>
            </div>
          </div>
          <div>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                id='1'
              >
                <Link
                  to='/ielts-writing'
                  className='hover:no-underline hover:text-customwhite'
                >
                  Go Back
                </Link>
              </button>
            </div>
          </div>
        </div>

        <br />
      </div>
    );
  }

  //Solution essays
  else if (keyword === 'solution') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite'>
          <h1 className='pt-8 text-4xl text-center font-serif my-6'>
            Solution Based Essay
          </h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside font-serif leading-relaxed'>
                <li>
                  Read the instructions carefully - do you need to give only
                  solutions or both causes and solutions.
                </li>
                <li>
                  Make a list of the problems related to the topic given. 2-3
                  problems can be taken up.
                </li>
                <li>The solutions to these problems should be addressed.</li>
                <li>
                  Construct your paragraphs in such a way that the problems are
                  in one paragraph and solutions in the other (or) paragraphs
                  consisting of a problem and solution.
                </li>
                <li>
                  You should use flexible language of cause and consequences.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Sample Answers</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='solution'
                onClick={handleTask2SamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='solution'
                onClick={handleTask2SamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='solution'
                onClick={handleTask2SamplePractice}
                id='3'
              >
                Sample-3
              </button>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Practice Yourself</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='solution'
                onClick={handleTask2Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='solution'
                onClick={handleTask2Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='solution'
                onClick={handleTask2Test}
                id='3'
              >
                Test-3
              </button>
            </div>
          </div>
          <div>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                id='1'
              >
                <Link
                  to='/ielts-writing'
                  className='hover:no-underline hover:text-customwhite'
                >
                  Go Back
                </Link>
              </button>
            </div>
          </div>
        </div>

        <br />
      </div>
    );
  }

  //Discussion
  else if (keyword === 'discussion') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite'>
          <h1 className='pt-8 text-4xl text-center font-serif my-6'>
            Discussion Essay
          </h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside font-serif leading-relaxed'>
                <li>
                  Read the question properly and understand if you’ve got to
                  give an opinion.
                </li>
                <li>
                  If you don’t have to give opinion, think about the main ideas
                  revolving around both the statements.
                </li>
                <li>
                  If you have to give opinion, think about the opinion and the
                  main ideas linking to that opinion.
                </li>
                <li>
                  Ponder on the supporting points and examples related to the
                  main idea.
                </li>
                <li>Look at the below sample papers to get some more idea.</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Sample Answers</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='discussion'
                onClick={handleTask2SamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='discussion'
                onClick={handleTask2SamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='discussion'
                onClick={handleTask2SamplePractice}
                id='3'
              >
                Sample-3
              </button>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Practice Yourself</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='discussion'
                onClick={handleTask2Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='discussion'
                onClick={handleTask2Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='discussion'
                onClick={handleTask2Test}
                id='3'
              >
                Test-3
              </button>
            </div>
          </div>
          <div>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                id='1'
              >
                <Link
                  to='/ielts-writing'
                  className='hover:no-underline hover:text-customwhite'
                >
                  Go Back
                </Link>
              </button>
            </div>
          </div>
        </div>

        <br />
      </div>
    );
  }

  //Direct essays
  else if (keyword === 'direct') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite'>
          <h1 className='pt-8 text-4xl text-center font-serif my-6'>
            Direct ot Double Questions Essay
          </h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside font-serif leading-relaxed'>
                <li>Read the questions given.</li>
                <li>Focus on each question separately.</li>
                <li>
                  Figure out an answer for each question separately and spend
                  some time for planning the answers.
                </li>
                <li>
                  These answers should have a main point, supporting points to
                  your main point and examples.
                </li>
                <li>
                  Recheck if all the questions are answered before you begin
                  writing the answer.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Sample Answers</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='direct'
                onClick={handleTask2SamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='direct'
                onClick={handleTask2SamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='direct'
                onClick={handleTask2SamplePractice}
                id='3'
              >
                Sample-3
              </button>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center'>Practice Yourself</h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='direct'
                onClick={handleTask2Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='direct'
                onClick={handleTask2Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='direct'
                onClick={handleTask2Test}
                id='3'
              >
                Test-3
              </button>
            </div>
          </div>
          <div>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='opinion'
                id='1'
              >
                <Link
                  to='/ielts-writing'
                  className='hover:no-underline hover:text-customwhite'
                >
                  Go Back
                </Link>
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default IeltsTask2Topics;
