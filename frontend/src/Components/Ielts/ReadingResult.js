import axios from 'axios';
import React, { useState, useEffect } from 'react';

import Cookies from 'universal-cookie';
import Loader from 'react-loader-spinner';

function ReadingResult(props) {
  const cookies = new Cookies();
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);

  let x = window.location.href.split('/');
  let mytest = x[x.length - 1];

  let [params, setParams] = useState({
    bands: '',
    correct: '',
    incorrect: '',
    test_id: '',
    test_type: '',
  });
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResult() {
      await axios
        .get(
          `http://localhost:8000/ielts/reading-result-display/test/${mytest}`,
          {
            headers: { Authorization: AuthStr },
          }
        )
        .then(res => {
          if (res.data.error) {
            console.log('Result display error: ', res.data.error);
          } else {
            console.log(res.data);
            setParams({
              bands: res.data.results[0].bands,
              correct: res.data.results[0].correct,
              incorrect: res.data.results[0].incorrect,
              test_id: res.data.results[0].test_id,
              test_type: res.data.results[0].test_type,
            });
            setLoading(false);
          }
        })
        .catch(e => {
          console.log(e.message);
        });
    }
    fetchResult();
  }, []);

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
  } else {
    return (
      <div className='text-2xl text-customblack font-serif'>
        <h1>Bands - {params.bands}</h1>
        <h1>Total Correct Answers - {params.correct}</h1>
        <h1>Total Incorrect Answers - {params.incorrect}</h1>
        <h1>Examination Type - {params.test_type}</h1>
        <h1>Test-Id - {params.test_id}</h1>
      </div>
    );
  }
}

export default ReadingResult;
