import React, { useState, useEffect } from 'react';
import IeltsSampleWritingstyle from './IeltsSampleWritingstyle';
import axios from 'axios';

function IeltsSampleWritingContent(props) {
  const [error, setError] = useState('');
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
          console.log(res.data);
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

export default IeltsSampleWritingContent;
