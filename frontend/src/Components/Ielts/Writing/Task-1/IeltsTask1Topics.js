import React from 'react';
import { Link } from 'react-router-dom';

function IeltsTask1Topics(props) {
  const handleSamplePractice = event => {
    let x = event.target.name;
    let y = event.target.id;
    window.location = `/ielts-sample-writing-task-1/${x}/${y}`;
  };

  const handleTask1Test = event => {
    let x = event.target.name;
    let y = event.target.id;
    window.location = `/ielts-writing-task-1-practice/${x}/${y}`;
  };

  let x = window.location.href.split('/');
  let keyword = x[x.length - 1];

  //Bar-Graph

  if (keyword === 'bar-graph') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite'>
          <h1 className='pt-8 text-4xl text-center my-6 font-serif'>
            Bar Graph
          </h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl font-serif leading-relaxed'>
              <ul className='list-disc list-inside font-serif'>
                <li>Spend only 20 minutes on this question.</li>
                <li>
                  Look at the trends in the graph and use some rich vocabulary
                  in order to explain the trends.
                </li>
                <li>
                  Write atleast 150 words and report out the main points from
                  the graph.
                </li>
                <li>
                  Use some proper connectives to link the sentence so that the
                  sentence can become logical and structural.
                </li>
                <li>
                  Avoid writing more than 220 words, however it is not the upper
                  limit of words.
                </li>
                <li>
                  Writing more than some amount of words can elevate the chances
                  of grammatical errors.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center font-serif leading-relaxed'>
              Sample Answers
            </h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='bar-graph'
                onClick={handleSamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='bar-graph'
                onClick={handleSamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='bar-graph'
                onClick={handleSamplePractice}
                id='3'
              >
                Sample-3
              </button>
            </div>
          </div>
          <div>
            <h1 className='my-8 text-3xl text-center font-serif leading-relaxed'>
              Practice Yourself
            </h1>
            <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='bar-graph'
                onClick={handleTask1Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='bar-graph'
                onClick={handleTask1Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='bar-graph'
                onClick={handleTask1Test}
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

  //Pie-Chart
  else if (keyword === 'pie-chart') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite font-serif leading-relaxed'>
          <h1 className='pt-8 text-4xl my-6 text-center'>Pie Chart</h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside'>
                <li>Spend only 20 minutes on this question.</li>
                <li>
                  Look at the percentage proportion of different categories in
                  the chart and use some rich vocabulary in order to explain.
                </li>
                <li>
                  Write atleast 150 words and report out the main points from
                  the chart.
                </li>
                <li>
                  Use some proper connectives to link the sentence so that the
                  sentence can become logical and structural.
                </li>
                <li>
                  Avoid writing more than 220 words, however it is not the upper
                  limit of words.
                </li>
                <li>
                  Writing more than some amount of words can elevate the chances
                  of grammatical errors.
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
                name='pie-chart'
                onClick={handleSamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='pie-chart'
                onClick={handleSamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='pie-chart'
                onClick={handleSamplePractice}
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
                name='pie-chart'
                onClick={handleTask1Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='pie-chart'
                onClick={handleTask1Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='pie-chart'
                onClick={handleTask1Test}
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

  //Line-Graph
  else if (keyword === 'line-graph') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite font-serif leading-relaxed'>
          <h1 className='pt-8 text-4xl my-6 text-center'>Line Graph</h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside'>
                <li>Spend only 20 minutes on this question.</li>
                <li>
                  Look at the trends in the graph and use some rich vocabulary
                  in order to explain the trends.
                </li>
                <li>
                  Write atleast 150 words and report out the main points from
                  the graph.
                </li>
                <li>
                  Use some proper connectives to link the sentence so that the
                  sentence can become logical and structural.
                </li>
                <li>
                  Avoid writing more than 220 words, however it is not the upper
                  limit of words.
                </li>
                <li>
                  Writing more than some amount of words can elevate the chances
                  of grammatical errors.
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
                name='line-graph'
                onClick={handleSamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='line-graph'
                onClick={handleSamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='line-graph'
                onClick={handleSamplePractice}
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
                name='line-graph'
                onClick={handleTask1Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='line-graph'
                onClick={handleTask1Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='line-graph'
                onClick={handleTask1Test}
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

  //Maps
  else if (keyword === 'maps') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite font-serif leading-relaxed'>
          <h1 className='pt-8 text-4xl my-6 text-center'>Maps</h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside'>
                <li>Spend only 20 minutes on this question.</li>
                <li>
                  Look at the differences in the maps and use some rich
                  vocabulary in order to explain.
                </li>
                <li>
                  Write atleast 150 words and report out the main points from
                  the map.
                </li>
                <li>
                  Use some proper connectives to link the sentence so that the
                  sentence can become logical and structural.
                </li>
                <li>
                  Avoid writing more than 220 words, however it is not the upper
                  limit of words.
                </li>
                <li>
                  Writing more than some amount of words can elevate the chances
                  of grammatical errors.
                </li>
                <li>
                  Write the answer in proper tense as it is extremely vital to
                  not to deduct bands.
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
                name='maps'
                onClick={handleSamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='maps'
                onClick={handleSamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='maps'
                onClick={handleSamplePractice}
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
                name='maps'
                onClick={handleTask1Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='maps'
                onClick={handleTask1Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='maps'
                onClick={handleTask1Test}
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

  //Tabular Data
  else if (keyword === 'table') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite font-serif leading-relaxed'>
          <h1 className='pt-8 text-4xl my-6 text-center'>Table</h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside'>
                <li>Spend only 20 minutes on this question.</li>
                <li>
                  Look at the different values in the table and use some rich
                  vocabulary in order to explain the changes in value.
                </li>
                <li>
                  Write atleast 150 words and report out the main points from
                  the table.
                </li>
                <li>
                  Use some proper connectives to link the sentence so that the
                  sentence can become logical and structural.
                </li>
                <li>
                  Avoid writing more than 220 words, however it is not the upper
                  limit of words.
                </li>
                <li>
                  Writing more than some amount of words can elevate the chances
                  of grammatical errors.
                </li>
                <li>
                  Write the answer in proper tense as it is extremely vital to
                  not to deduct bands.
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
                name='table'
                onClick={handleSamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='table'
                onClick={handleSamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='table'
                onClick={handleSamplePractice}
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
                name='table'
                onClick={handleTask1Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='table'
                onClick={handleTask1Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='table'
                onClick={handleTask1Test}
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

  //Diagram
  else if (keyword === 'diagram') {
    return (
      <div className='bg-custombrown'>
        <br />
        <br />
        <div className='bg-customblue mx-auto w-3/4 divide-y-2 text-customwhite leading-relaxed font-serif'>
          <h1 className='pt-8 text-4xl  my-6 text-center'>Diagram</h1>
          <div className='px-8 text-customwhite'>
            <div className='my-10 text-xl'>
              <ul className='list-disc list-inside'>
                <li>Spend only 20 minutes on this question.</li>
                <li>
                  Look at the flow of diagram and check whether the whole
                  process diagram is reversible or irreversible.
                </li>
                <li>
                  Write atleast 150 words and report out the main points from
                  the table.
                </li>
                <li>
                  Use some proper connectives to link the sentence so that the
                  sentence can become logical and structural.
                </li>
                <li>
                  Avoid writing more than 220 words, however it is not the upper
                  limit of words.
                </li>
                <li>
                  Writing more than some amount of words can elevate the chances
                  of grammatical errors.
                </li>
                <li>
                  Write the answer in proper tense as it is extremely vital to
                  not to deduct bands.
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
                name='diagram'
                onClick={handleSamplePractice}
                id='1'
              >
                Sample-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='diagram'
                onClick={handleSamplePractice}
                id='2'
              >
                Sample-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='diagram'
                onClick={handleSamplePractice}
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
                name='diagram'
                onClick={handleTask1Test}
                id='1'
              >
                Test-1
              </button>

              <button
                className='bg-customblack hover:bg-custombrown-700 transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='diagram'
                onClick={handleTask1Test}
                id='2'
              >
                Test-2
              </button>
              <button
                className='bg-customblack hover:bg-custombrown-700 transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
                variant='Default'
                name='diagram'
                onClick={handleTask1Test}
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

export default IeltsTask1Topics;
