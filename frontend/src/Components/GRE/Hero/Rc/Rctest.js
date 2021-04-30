import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';

const cookies = new Cookies();

function Rctest() {
  let x = window.location.href.split('/');
  let test_id = x[x.length - 1];
  let test_type = 'rc';
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  let ADMIN_TOKEN =
    'sdjkfh8923yhjdforksbfmisa@#(&@!^#&@bhjb2qiuhthisesdadminbhjdsfg839ujkdhfjk';
  //signing ADMIN TOKEN for answerkey
  const admin_token = jwt.sign(
    {
      userName: 'kira',
      roles: 'ADMIN',
    },
    ADMIN_TOKEN
  );
  let secret = 'JWT '.concat(admin_token);

  const [error, setError] = useState('');
  const [ans, setAns] = useState(new Array(7));
  const [loading, setLoading] = useState(true);
  const [submitLoading,setSubmitLoading] = useState(false)
  const [question, setQuestion] = useState({
    id: '',
    test_type: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    img6: '',
    img7: '',
  });

  useEffect(() => {
    async function fetchTest() {
      await axios
        .get(
          `http://localhost:7545/gre/verbal/practice/${test_type}&${test_id}`,
          {
            headers: { Authorization: AuthStr },
          }
        )
        .then(res => {
          if (res.data.error) {
            setError({ error: res.data.error });
          } else {
            console.log(res.data);
            setQuestion({
              id: res.data.results[0].test_id,
              test_type: res.data.results[0].test_type,
              img1: res.data.results[0].passage_1,
              img2: res.data.results[0].passage_2,
              img3: res.data.results[0].passage_3,
              img4: res.data.results[0].passage_4,
              img5: res.data.results[0].passage_5,
              img6: res.data.results[0].passage_6,
              img7: res.data.results[0].passage_7,
            });
            setLoading(false);
          }
        })
        .catch(e => {
          console.log(e.message);
        });
    }
    fetchTest();
  }, []);

  const handleSubmit = async e => {
    console.log('hi');
  };

  let text = [];
  for (let i = 1; i <= 7; i++) {
    text.push(
      <label className='mx-2 px-3 text-right text-black'>
        {i + '  '}
        <input
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            this.handleChange(e);
          }}
        />
      </label>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className='text-5xl text-center text-red-500 my-28'>{error}</h1>
      </div>
    );
  }

  if (loading === true) {
    return (
      <div>
        <div className='my-64'>
          <h1 className='flex flex-row text-3xl mx-auto my-4 text-customblack font-serif justify-center'>
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
    return (
      <div className='leading-relaxed font-serif'>
        <h1 className='text-3xl text-center my-4'>Test - {question.id}</h1>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_1} alt='' />
          </div>
          <div className='flex flex-col items-center border-black border-2 w-1/2 my-4 mx-6'>
            {text}
          </div>
        </div>
        <div className='border-black border-2 w-1/2 my-4 mx-6'>
          <img src={question.img_2} alt='' />
        </div>
        <div className='border-black border-2 w-1/2 my-4 mx-6'>
          <img src={question.img_3} alt='' />
        </div>
        <div className='border-black border-2 w-1/2 my-4 mx-6'>
          <img src={question.img_4} alt='' />
        </div>
        <div className='border-black border-2 w-1/2 my-4 mx-6'>
          <img src={question.img_5} alt='' />
        </div>
        <div className='border-black border-2 w-1/2 my-4 mx-6'>
          <img src={question.img_6} alt='' />
        </div>

        <div className='border-black border-2 w-1/2 my-4 mx-6'>
          <img src={question.img_7} alt='' />
        </div>
        <button
          className='w-32 text-center rounded-md h-10 box-border font-bold text-customwhite bg-customblack border-2 border-customblack '
          type='submit'
          onClick={e => {
            this.handleSubmit(e);
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
    );
  }
}

export default Rctest;
