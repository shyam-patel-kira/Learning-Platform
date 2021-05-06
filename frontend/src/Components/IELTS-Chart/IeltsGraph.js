import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import Error_401 from '../401-Error.jpg';
import { Bar } from 'react-chartjs-2';

const cookies = new Cookies();

function IeltsGraph() {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(false);
  const [testType, setTestType] = useState('Reading');
  const [msg, setMsg] = useState('');
  const [msgLoader, setMsgLoader] = useState(false);
  const [bool, setBool] = useState(false);
  const [barChartData, setBarChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});

  const handleChange = event => {
    setTestType(event.target.value);
  };

  const handleSubmit = async event => {
    setSubmitLoading(true);
    setBool(false);
    setMsgLoader(false);
    const test_type = testType;
    let USER_TOKEN = cookies.get('token');
    let AuthStr = 'JWT '.concat(USER_TOKEN);
    let bands = [];
    let test_id = [];
    let correct = [];
    let incorrect = [];

    //Calling the API for collecting data of graph
    await axios
      .get(`http://localhost:8000/ielts/result-visual/${test_type}`, {
        headers: { Authorization: AuthStr },
      })
      .then(res => {
        if (res.data.error) {
          setError(res.data.error);
          setSubmitLoading(false);
        } else {
          setMsg('');
          if (res.data.results.length <= 0) {
            setMsgLoader(true);
            setMsg('Unfortunately, you have not given any test !!');
            setSubmitLoading(false);
          } else {
            for (const dataObj of res.data.results) {
              bands.push(dataObj.bands);
              test_id.push(parseInt(dataObj.test_id));
              correct.push(parseInt(dataObj.correct));
              incorrect.push(parseInt(dataObj.incorrect));
            }
            setBarChartData({
              labels: test_id,
              datasets: [
                {
                  label: 'Bands Scored',
                  data: bands,
                  backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                  borderColor: ['rgb(255, 99, 132)'],
                  borderWidth: 1,
                  barPercentage: 0.3,
                },
              ],
            });
            setSubmitLoading(false);
            setBool(true);
          }
        }
      })
      .catch(e => {
        console.log(e.message);
        setSubmitLoading(false);
      });
  };

  if (error) {
    return (
      <div className='flex flex-row'>
        <div>
          <img className='' src={Error_401} alt='' />
        </div>
        <div className='bg-custompink shadow-2xl w-1/2 my-40 mx-auto mr-4 border-2 '>
          <h1 className='text-5xl text-center text-customblack mt-6 font-myfonts'>
            {error}
          </h1>
          <p className='text-2xl text-center text-customblack my-3'>
            Please{' '}
            <Link className='text-blue-500' to='/login'>
              Login
            </Link>{' '}
            first.
          </p>
        </div>
      </div>
    );
  }

  if (msg && msgLoader) {
    return (
      <div className='font-myfonts'>
        <Navbar />
        <div className='flex flex-row'>
          <Sidebar />
          <div className='flex flex-col'>
            <p className='mx-44 my-4 text-3xl'>
              Please select the below option to get the visualization of your
              marks.
            </p>
            <div className='flex flex-row'>
              <select
                value={testType}
                onChange={handleChange}
                className='ml-96 mr-4 w-40'
              >
                <option value='Reading'>Reading</option>
                <option value='Listening'>Listening</option>
              </select>

              <button
                className='cursor-pointer font-bold py-2 px-4 rounded bg-customdarkblue text-white text-center '
                type='submit'
                onClick={handleSubmit}
                disabled={submitLoading}
              >
                {submitLoading && (
                  <div className='flex flex-row'>
                    <svg
                      xmlns='https://www.w3.org/2000/svg'
                      className='animate-spin h-6 w-6 ml-2'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                      />
                    </svg>
                    <div className='ml-4'>Displaying...</div>
                  </div>
                )}
                {!submitLoading && <div>Display</div>}
              </button>
            </div>
            <div className='mx-44 my-20 w-2/3 shadow-2xl bg-custompink h-32'>
              <h1 className='p-10 pl-28 text-3xl'>{msg}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (bool) {
      return (
        <div className='font-myfonts'>
          <Navbar />
          <div className='flex flex-row'>
            <Sidebar />
            <div className='flex flex-col'>
              <p className='mx-44 my-4 text-3xl'>
                Please select the below option to get the visualization of your
                marks.
              </p>
              <div className='flex flex-row'>
                <select
                  value={testType}
                  onChange={handleChange}
                  className='ml-96 mr-4 w-40'
                >
                  <option value='Reading'>Reading</option>
                  <option value='Listening'>Listening</option>
                </select>

                <button
                  className='cursor-pointer font-bold py-2 px-4 rounded bg-customdarkblue text-white text-center '
                  type='submit'
                  onClick={handleSubmit}
                  disabled={submitLoading}
                >
                  {submitLoading && (
                    <div className='flex flex-row'>
                      <svg
                        xmlns='https://www.w3.org/2000/svg'
                        className='animate-spin h-6 w-6 ml-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      <div className='ml-4'> Displaying...</div>
                    </div>
                  )}
                  {!submitLoading && <div>Display</div>}
                </button>
              </div>
              <div className='mx-44 my-20 w-1/2'>
                <Bar
                  data={barChartData}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: 'Bands Scored vs Test-ID',
                      },
                    },
                    responsive: true,
                    scales: {
                      y: {
                        ticks: {
                          autoSkip: true,
                          maxTicksLimit: 10,
                          beginAtZero: true,
                        },
                        title: {
                          color: 'red',
                          display: true,
                          text: 'Bands Scored',
                        },
                      },
                      x: {
                        grid: {
                          tickColor: 'red',
                        },
                        ticks: {
                          color: 'blue',
                        },
                        title: {
                          color: 'red',
                          display: true,
                          text: 'Test-ID',
                        },
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='font-myfonts'>
          <Navbar />
          <div className='flex flex-row'>
            <Sidebar />
            <div className='flex flex-col'>
              <p className='mx-44 my-4 text-3xl'>
                Please select the below option to get the visualization of your
                marks.
              </p>
              <div className='flex flex-row'>
                <select
                  value={testType}
                  onChange={handleChange}
                  className='ml-96 mr-4 w-40'
                >
                  <option value='Reading'>Reading</option>
                  <option value='Listening'>Listening</option>
                </select>

                <button
                  className='cursor-pointer font-bold py-2 px-4 rounded bg-customdarkblue text-white text-center '
                  type='submit'
                  onClick={handleSubmit}
                  disabled={submitLoading}
                >
                  {submitLoading && (
                    <div className='flex flex-row'>
                      <svg
                        xmlns='https://www.w3.org/2000/svg'
                        className='animate-spin h-6 w-6 ml-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      <div className='ml-4'> Displaying...</div>
                    </div>
                  )}
                  {!submitLoading && <div>Display</div>}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default IeltsGraph;
