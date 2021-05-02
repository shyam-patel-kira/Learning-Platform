import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Error_401 from '../../401-Error.jpg';

import section_1 from './Test-1/Section-1.mp3';
import section_2 from './Test-1/Section-2.mp3';
import section_3 from './Test-1/Section-3.mp3';
import section_4 from './Test-1/Section-4.mp3';

import section1_2 from './Test-2/Section-1.mp3';
import section2_2 from './Test-2/Section-2.mp3';
import section3_2 from './Test-2/Section-3.mp3';
import section4_2 from './Test-2/Section-4.mp3';

import section1_3 from './Test-3/Section-1.mp3';
import section2_3 from './Test-3/Section-2.mp3';
import section3_3 from './Test-3/Section-3.mp3';
import section4_3 from './Test-3/Section-4.mp3';

import section1_4 from './Test-4/Section-1.mp3';
import section2_4 from './Test-4/Section-2.mp3';
import section3_4 from './Test-4/Section-3.mp3';
import section4_4 from './Test-4/Section-4.mp3';

import section1_5 from './Test-5/Section-1.mp3';
import section2_5 from './Test-5/Section-2.mp3';
import section3_5 from './Test-5/Section-3.mp3';
import section4_5 from './Test-5/Section-4.mp3';

import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function Ieltslisteningtest(props) {
  let x = window.location.href.split('/');
  let test_id = x[x.length - 1];
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);

  const [error, setError] = useState('');
  const [ans, setAns] = useState(new Array(40));
  const [question, setQuestion] = useState({
    id: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    img6: '',
  });
  const [loading, setLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:8000/ielts/listening/test/${test_id}`, {
          headers: { Authorization: AuthStr },
        })
        .then(res => {
          if (res.data.error) {
            setError(res.data.error);
          } else {
            setQuestion({
              id: res.data.results[0].test_id,
              img_1: res.data.results[0].questions.img_1,
              img_2: res.data.results[0].questions.img_2,
              img_3: res.data.results[0].questions.img_3,
              img_4: res.data.results[0].questions.img_4,
              img_5: res.data.results[0].questions.img_5,
              img_6: res.data.results[0].questions.img_6,
            });
            setLoading(false);
          }
        })
        .catch(e => {
          console.log(e.message);
        });
    }
    fetchData();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitLoading(true);
    let x = window.location.href.split('/');
    let test_id = x[x.length - 1];

    let answer = { ...ans };

    for (let i = 1; i <= 40; i++) {
      if (answer[i] === undefined) {
        answer[`ans_${i.toString()}`] = '';
      } else {
        answer[`ans_${i.toString()}`] = ans[i];
      }
    }
    for (let i = 1; i <= 40; i++) {
      delete answer[i];
    }
    let answers = { answers: answer };
    console.log(answers);

    //API Call for storing user answers
    await axios
      .post(
        `http://localhost:8000/ielts/listening/test/user-answers/${test_id}`,
        answers,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          console.log(res);
        }
      })
      .catch(e => {
        console.log(e.message);
      });

    //API Call for comparing answers in result collection
    await axios
      .get(
        `http://localhost:8000/ielts/listening-answer-result/test/${test_id}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          console.log(res.data);
          setSubmitLoading(false);
        }
      })
      .catch(e => {
        console.log(e.message);
      });
    window.location = `/ielts-listening-result/${test_id}`;
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

  let text1 = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= 9) {
      text1.push(
        <label className='mx-4 my-4 text-right text-customwhite'>
          {'0' + i}
          <input
            className='text-customblack'
            type='text'
            id={i.toString()}
            key={i.toString()}
            onChange={e => {
              let a = ans;
              a[i] = e.target.value;
              setAns(a);
            }}
          />
        </label>
      );
    } else {
      text1.push(
        <label className='mx-4 my-4 text-right text-customwhite'>
          {i}
          <input
            className='text-customblack'
            type='text'
            id={i.toString()}
            key={i.toString()}
            onChange={e => {
              let a = ans;
              a[i] = e.target.value;
              setAns(a);
            }}
          />
        </label>
      );
    }
  }

  let text2 = [];
  for (let i = 11; i <= 20; i++) {
    text2.push(
      <label className='mx-4 my-4 text-right text-customwhite'>
        {i + '  '}
        <input
          className='text-customblack'
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
          }}
        />
      </label>
    );
  }

  let text3 = [];
  for (let i = 21; i <= 30; i++) {
    text3.push(
      <label className='mx-4 my-4 text-right text-customwhite'>
        {i + '  '}
        <input
          className='text-customblack'
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
          }}
        />
      </label>
    );
  }

  let text4 = [];
  for (let i = 31; i <= 40; i++) {
    text4.push(
      <label className='mx-4 my-4 text-right text-customwhite'>
        {i + '  '}
        <input
          type='text'
          className='text-customblack'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
          }}
        />
      </label>
    );
  }

  if (loading === true) {
    return (
      <div>
        <div className='my-64'>
          <h1 className='font-myfonts flex flex-row text-3xl mx-auto my-4 text-customblack justify-center'>
            Fetching Test...
          </h1>
          <Loader
            type='BallTriangle'
            color='#00BFFF'
            height={100}
            width={100}
            className='flex flex-row mx-auto my-auto justify-center'
          />
        </div>
      </div>
    );
  } else {
    if (test_id === '1') {
      return (
        <div className='font-myfonts leading-relaxed bg-trialback'>
          <h1 className='text-5xl text-center mb-2 text-customwhite'>
            Test - {question.id}
          </h1>
          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-1
          </h1>

          <audio controls className='mx-auto'>
            <source src={section_1} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite border-2 w-1/2 my-4 mx-6 bg-customwhite'>
              <img src={question.img_1} alt='' />
              <img src={question.img_2} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text1}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-2
          </h1>
          <audio controls className='mx-auto'>
            <source src={section_2} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite border-2 w-1/2 my-4 mx-6 bg-customwhite'>
              <img src={question.img_3} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text2}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-3
          </h1>
          <audio controls className='mx-auto'>
            <source src={section_3} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite border-2 w-1/2 my-4 mx-6 bg-customwhite'>
              <img src={question.img_4} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text3}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-4
          </h1>
          <audio controls className='mx-auto'>
            <source src={section_4} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite border-2 w-1/2 my-4 mx-6 bg-customwhite'>
              <img src={question.img_5} alt='' />
              <img src={question.img_6} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text4}
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <button
              className='w-32 text-center rounded-md mx-24 my-2 h-10 box-border font-bold text-customwhite bg-trialback2 border-2 border-customblack'
              type='submit'
              onClick={e => {
                handleSubmit(e);
                for (let i = 1; i <= 40; i++) {
                  document.getElementById(i.toString()).value = '';
                }
              }}
              disabled={submitLoading}
            >
              {submitLoading && (
                <div className='flex flex-row'>
                  <svg
                    xmlns='https://www.w3.org/2000/svg'
                    className='animate-spin h-6 w-6'
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
                  <div className=''>Submitting...</div>
                </div>
              )}
              {!submitLoading && <span>Submit</span>}
            </button>
          </div>
        </div>
      );
    }
    if (test_id === '2') {
      return (
        <div className='font-myfonts leading-relaxed bg-trialback'>
          <h1 className='text-5xl text-center mb-2 text-customwhite'>
            Test - {question.id}
          </h1>
          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-1
          </h1>
          <audio controls className='mx-auto'>
            <source src={section1_2} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_1} alt='' />
              <img src={question.img_2} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text1}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-2
          </h1>
          <audio controls className='mx-auto'>
            <source src={section2_2} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_3} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text2}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-3
          </h1>
          <audio controls className='mx-auto'>
            <source src={section3_2} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_4} alt='' />
              <img src={question.img_5} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text3}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-4
          </h1>
          <audio controls className='mx-auto'>
            <source src={section4_2} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_6} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text4}
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <button
              className='w-32 text-center rounded-md mx-24 my-2 h-10 box-border font-bold text-customwhite bg-trialback2 border-2 border-customblack'
              type='submit'
              onClick={e => {
                handleSubmit(e);
                for (let i = 1; i <= 40; i++) {
                  document.getElementById(i.toString()).value = '';
                }
              }}
              disabled={submitLoading}
            >
              {submitLoading && (
                <div className='flex flex-row'>
                  <svg
                    xmlns='https://www.w3.org/2000/svg'
                    className='animate-spin h-6 w-6'
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
                  <div className=''>Submitting...</div>
                </div>
              )}
              {!submitLoading && <span>Submit</span>}
            </button>
          </div>
        </div>
      );
    }
    if (test_id === '3') {
      return (
        <div className='leading-relaxed font-myfonts bg-trialback'>
          <h1 className='text-5xl text-center mb-2 text-customwhite'>
            Test - {question.id}
          </h1>
          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-1
          </h1>
          <audio controls className='mx-auto'>
            <source src={section1_3} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_1} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text1}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-2
          </h1>
          <audio controls className='mx-auto'>
            <source src={section2_3} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_2} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text2}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-3
          </h1>
          <audio controls className='mx-auto'>
            <source src={section3_3} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_3} alt='' />
              <img src={question.img_4} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text3}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-4
          </h1>
          <audio controls className='mx-auto'>
            <source src={section4_3} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_5} alt='' />
              <img src={question.img_6} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text4}
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <button
              className='w-32 text-center rounded-md mx-24 my-2 h-10 box-border font-bold text-customwhite bg-trialback2 border-2 border-customblack'
              type='submit'
              onClick={e => {
                handleSubmit(e);
                for (let i = 1; i <= 40; i++) {
                  document.getElementById(i.toString()).value = '';
                }
              }}
              disabled={submitLoading}
            >
              {submitLoading && (
                <div className='flex flex-row'>
                  <svg
                    xmlns='https://www.w3.org/2000/svg'
                    className='animate-spin h-6 w-6'
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
                  <div className=''>Submitting...</div>
                </div>
              )}
              {!submitLoading && <span>Submit</span>}
            </button>
          </div>
        </div>
      );
    }
    if (test_id === '4') {
      return (
        <div className='leading-relaxed font-myfonts bg-trialback'>
          <h1 className='text-5xl text-center mb-2 text-customwhite'>
            Test - {question.id}
          </h1>
          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-1
          </h1>
          <audio controls className='mx-auto'>
            <source src={section1_4} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_1} alt='' />
              <img src={question.img_2} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text1}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-2
          </h1>
          <audio controls className='mx-auto'>
            <source src={section2_4} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_3} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text2}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-3
          </h1>
          <audio controls className='mx-auto'>
            <source src={section3_4} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_4} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text3}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-4
          </h1>
          <audio controls className='mx-auto'>
            <source src={section4_4} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_5} alt='' />
              <img src={question.img_6} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text4}
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <button
              className='w-32 text-center rounded-md mx-24 my-2 h-10 box-border font-bold text-customwhite bg-trialback2 border-2 border-customblack'
              type='submit'
              onClick={e => {
                handleSubmit(e);
                for (let i = 1; i <= 40; i++) {
                  document.getElementById(i.toString()).value = '';
                }
              }}
              disabled={submitLoading}
            >
              {submitLoading && (
                <div className='flex flex-row'>
                  <svg
                    xmlns='https://www.w3.org/2000/svg'
                    className='animate-spin h-6 w-6'
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
                  <div className=''>Submitting...</div>
                </div>
              )}
              {!submitLoading && <span>Submit</span>}
            </button>
          </div>
        </div>
      );
    }
    if (test_id === '5') {
      return (
        <div className='leading-relaxed font-myfonts bg-trialback'>
          <h1 className='text-5xl text-center mb-2 text-customwhite'>
            Test - {question.id}
          </h1>
          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-1
          </h1>
          <audio controls className='mx-auto'>
            <source src={section1_5} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_1} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text1}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-2
          </h1>
          <audio controls className='mx-auto'>
            <source src={section2_5} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_2} alt='' />
              <img src={question.img_3} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text2}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-3
          </h1>
          <audio controls className='mx-auto'>
            <source src={section3_5} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_4} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text3}
            </div>
          </div>

          <h1 className='text-2xl text-center my-4 text-customwhite'>
            Section-4
          </h1>
          <audio controls className='mx-auto'>
            <source src={section4_5} type='audio/mpeg' />
          </audio>
          <div className='flex'>
            <div className='border-customwhite bg-customwhite border-2 w-1/2 my-4 mx-6'>
              <img src={question.img_5} alt='' />
              <img src={question.img_6} alt='' />
            </div>
            <div className='flex flex-col items-center border-customwhite border-2 w-1/2 my-4 mx-6'>
              {text4}
            </div>
          </div>
          <div className='flex flex-row justify-center'>
            <button
              className='w-32 text-center rounded-md mx-24 my-2 h-10 box-border font-bold text-customwhite bg-trialback2 border-2 border-customblack'
              type='submit'
              onClick={e => {
                handleSubmit(e);
                for (let i = 1; i <= 40; i++) {
                  document.getElementById(i.toString()).value = '';
                }
              }}
              disabled={submitLoading}
            >
              {submitLoading && (
                <div className='flex flex-row'>
                  <svg
                    xmlns='https://www.w3.org/2000/svg'
                    className='animate-spin h-6 w-6'
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
                  <div className=''>Submitting...</div>
                </div>
              )}
              {!submitLoading && <span>Submit</span>}
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Ieltslisteningtest;
