import React, { useState, useEffect } from 'react';
import IeltsSampleWritingstyle from './IeltsSampleWritingstyle';
import axios from 'axios';
import Loader from 'react-loader-spinner';

function IeltsSampleWritingContent(props) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({
    title: '',
    img_url: '',
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
          `http://localhost:8000/ielts/writing-task-1-sample/${id}&${keyword}`,
          {
            mode: 'cors',
          }
        )
        .then(res => {
          if (res.data.error) {
            setError({ error: res.data.error });
          } else {
            setParams({
              title: res.data.results[0].title,
              img_url: res.data.results[0].img_url,
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
  }, []); //eslint-disable-line

  if (error) {
    return (
      <div>
        <h1 className='font-myfonts text-5xl text-center text-customblack my-28'>
          {error}
        </h1>
      </div>
    );
  }

  if (loading === true) {
    return (
      <div>
        <div className='my-64'>
          <h1 className='font-myfonts flex flex-row text-3xl mx-auto my-4 text-customblack justify-center'>
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
        <IeltsSampleWritingstyle
          title={params.title}
          question='Question:'
          question_heading={params.question_heading}
          img_url={params.img_url}
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

export default IeltsSampleWritingContent;
