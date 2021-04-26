import React, { useState, useEffect } from 'react';
import IeltsSampleWritingTask2style from './IeltsSampleWritingTask2style';
import axios from 'axios';
import Loader from 'react-loader-spinner';

function IeltsSampleWritingTask2(props) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({
    title: '',
    question_heading: '',
    para1: '',
    para2: '',
    para3: '',
    para4: '',
  });

  let x = window.location.href.split('/');
  let id = x[x.length - 1];
  let keyword = x[x.length - 2];

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `http://localhost:8000/ielts/writing-task-2-sample/${id}&${keyword}`,
          {
            mode: 'cors',
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.error) {
            setError({ error: res.data.error });
          } else {
            setParams({
              title: res.data.results[0].title,
              question_heading: res.data.results[0].question_heading,
              para1: res.data.results[0].para1,
              para2: res.data.results[0].para2,
              para3: res.data.results[0].para3,
              para4: res.data.results[0].para4,
            });
            setLoading(false);
          }
        })
        .catch(e => console.log(e.message));
    }
    fetchData();
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
            Fetching Sample Content...
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
      <div>
        <IeltsSampleWritingTask2style
          title={params.title}
          question='Question:'
          question_heading={params.question_heading}
          answer='Answers'
          para1={params.para1}
          para2={params.para2}
          para3={params.para3}
          para4={params.para4}
        />
      </div>
    );
  }
}

export default IeltsSampleWritingTask2;
