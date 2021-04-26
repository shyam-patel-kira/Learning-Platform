import axios from 'axios';
import React, { useState, useEffect } from 'react';
import IeltsSpeakingQuestions from './IeltsSpeakingQuestions';
import IeltsSpeakingTestStyle from './IeltsSpeakingTestStyle';
import Cookies from 'universal-cookie';
import Loader from 'react-loader-spinner'

function IeltsSpeakingTest() {
  let x = window.location.href.split('/');
  let mytest = x[x.length - 1];
  const cookies = new Cookies();
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)
  const [question, setQuestion] = useState({
    id: '',
    detail: '',
    topic1: '',
    topic2: '',
    topic3: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/ielts/speaking/test/${mytest}`, {
        mode: 'cors',
        headers: { Authorization: AuthStr },
      })
      .then(res => {
        console.log(res.data);
        if (res.data.error) {
          setError({ error: res.data.error });
        } else {
          setQuestion({
            id: res.data.results[0].test_id,
            detail: res.data.results[0].detail,
            topic1: res.data.results[0].topic1,
            topic2: res.data.results[0].topic2,
            topic3: res.data.results[0].topic3,
            q1: res.data.results[0].q1,
            q2: res.data.results[0].q2,
            q3: res.data.results[0].q3,
            q4: res.data.results[0].q4,
            q5: res.data.results[0].q5,
            q6: res.data.results[0].q6,
            q7: res.data.results[0].q7,
            q8: res.data.results[0].q8,
            q9: res.data.results[0].q9,
            q10: res.data.results[0].q10,
            q11: res.data.results[0].q11,
          });
          setLoading(false)
        }
      })
      .catch(e => {
        console.log(e.message);
      });
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
  }
else{
return (
  <div>
    <IeltsSpeakingQuestions
      id={question.id}
      detail={question.detail}
      topic1={question.topic1}
      q1={question.q1}
      q2={question.q2}
      q3={question.q3}
      q4={question.q4}
      q5={question.q5}
      q6={question.q6}
      topic2={question.topic2}
      q7={question.q7}
      topic3={question.topic3}
      q8={question.q8}
      q9={question.q9}
      q10={question.q10}
      q11={question.q11}
    />
    <IeltsSpeakingTestStyle />
  </div>
);
}
  
}
export default IeltsSpeakingTest;
