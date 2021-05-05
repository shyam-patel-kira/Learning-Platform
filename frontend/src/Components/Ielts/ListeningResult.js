import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
import Error_401 from '../401-Error.jpg';

function ListeningResult(props) {
  const cookies = new Cookies();
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  let ADMIN_TOKEN =
    'sdjkfh8923yhjdforksbfmisa@#(&@!^#&@bhjb2qiuhthisesdadminbhjdsfg839ujkdhfjk';

  const admin_token = jwt.sign(
    {
      userName: 'kira',
      roles: 'ADMIN',
    },
    ADMIN_TOKEN
  );
  let secret = 'JWT '.concat(admin_token);

  let x = window.location.href.split('/');
  let mytest = x[x.length - 1];

  let [params, setParams] = useState({
    bands: '',
    correct: '',
    incorrect: '',
    test_id: '',
    test_type: '',
  });
  let [answerKey, setAnswerKey] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResult() {
      await axios
        .get(
          `http://localhost:8000/ielts/listening-result-display/test/${mytest}`,
          {
            headers: { Authorization: AuthStr },
          }
        )
        .then(res => {
          if (res.data.error) {
            setError(res.data.error);
          } else {
            console.log(res.data);
            setParams({
              bands: res.data.results[0].bands,
              correct: res.data.results[0].correct,
              incorrect: res.data.results[0].incorrect,
              test_id: res.data.results[0].test_id,
              test_type: res.data.results[0].test_type,
            });
          }
        })
        .catch(e => {
          console.log(e.message);
        });
    }
    fetchResult();
  }, []);

  useEffect(() => {
    async function fetchAnswerKey() {
      await axios
        .get(`http://localhost:8000/ielts/listening-answers/test/${mytest}`, {
          headers: { Authorization: secret },
        })
        .then(res => {
          if (res.data.error) {
            setError(res.data.error);
          } else {
            let ans = [];
            for (let i of Object.values(res.data.results[0].answers)) {
              ans.push(i);
            }
            setAnswerKey(ans);
            setLoading(false);
          }
        })
        .catch(e => {
          console.log(e.message);
        });
    }
    fetchAnswerKey();
  }, []);

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

  if (loading === true) {
    return (
      <div>
        <div className='my-64'>
          <h1 className='flex flex-row text-3xl mx-auto my-4 text-customblack font-serif justify-center'>
            Displaying Result...
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
  }
  let cls = 'text-3xl my-3 text-center';

  return (
    <div className='text-lg shadow-2xl flex flex-col bg-custompink font-myfonts w-1/2 mx-auto my-10 text-customblack'>
      <h1 className='text-5xl py-4 text-center'>Scorecard</h1>
      <h1 className={cls}>Bands - {params.bands}</h1>
      <h1 className={cls}>Total Correct Answers - {params.correct}</h1>
      <h1 className={cls}>Total Incorrect Answers - {params.incorrect}</h1>
      <h1 className={cls}>Examination Type - {params.test_type}</h1>
      <h1 className={cls}>Test-Id - {params.test_id}</h1>
      <h1 className={cls}>Answer Key</h1>
      <ul className=''>
        {answerKey &&
          Object.keys(answerKey).map(item => {
            return (
              <li key={item} className='flex my-1 pb-2'>
                <span
                  style={{
                    flex: 3,
                  }}
                  className='text-right'
                >
                  ({Number(item) + 1})&nbsp;
                </span>
                <span style={{ flex: 3.5 }} className='text-left'>
                  &nbsp;{answerKey[item]}
                </span>
              </li>
            );
          })}
      </ul>
      <button
        onClick={e => {
          window.location = '/ielts-listening';
        }}
        className='text-center w-1/3 mb-3 border-2 border-customblack bg-green-500 mx-auto'
      >
        Back to Main Page
      </button>
    </div>
  );
}

export default ListeningResult;
