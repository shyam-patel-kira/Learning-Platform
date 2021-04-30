import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import Loader from 'react-loader-spinner';

function RcResult(props) {
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
  let test_id = x[x.length - 1];

  let [params, setParams] = useState({
    score: '',
    // correct: '',
    incorrect: '',
    test_id: '',
    test_type: '',
    incorrectAnswers: [],
    answerKey: [],
  });
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResult() {
        const test_type = 'rc';
      await axios
        .get(
          `http://localhost:7545/gre/verbal-result-display/test/${test_type}&${test_id}`,
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
              score: res.data.results[0].score,
            //   correct: res.data.results[0].correct,
              incorrect: res.data.results[0].incorrect,
              test_id: res.data.results[0].test_id,
              test_type: res.data.results[0].test_type,
              incorrectAnswers: res.data.results[0].incorrectAnswers,
            });
            console.log('hi');
            setLoading(false);
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
        const test_type = 'rc';
      await axios
        .get(`http://localhost:7545/gre/verbal-answers/test/${test_type}&${test_id}`, {
          headers: { Authorization: secret },
        })
        .then(res => {
          if (res.data.error) {
            setError(res.data.error);
          } else {
            let ans = [];
            //(Object.values(res.data.results[0].answers)
            for (let i of Object.values(res.data.results[0].answers)) {
              ans.push(i);
            }
            setParams({
              answerKey: ans,
            });
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
            Calculating Result...
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
      <div className='text-2xl text-customblack font-serif'>
        <h1>Score - {params.score}</h1>
        {/* <h1>Total Correct Answers - {params.correct}</h1> */}
        <h1>Total Incorrect Answers - {params.incorrect}</h1>
        <h1>Examination Type - {params.test_type}</h1>
        <h1>Test-Id - {params.test_id}</h1>
        <h1>Incorrect Answer Number - {params.incorrectAnswers}</h1>
        <h1>
          Answer Key-{' '}
          {params.answerKey &&
            params.answerKey.map(item => {
              return <p>{item}</p>;
            })}
        </h1>
      </div>
    );
  }
}

export default RcResult;