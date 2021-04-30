import React, { useState, useEffect } from 'react';
import IeltsSampleTestContentstyle from './IeltsSampleTestContentstyle';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';

const cookies = new Cookies();

function IeltsSampleTestContent(props) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState({
    title: '',
    img_url: '',
    question_heading: '',
  });

  let x = window.location.href.split('/');
  let id = x[x.length - 1];
  let keyword = x[x.length - 2];
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

  useEffect(() => {
    async function fetchTest() {
      await axios
        .get(
          `http://localhost:8000/ielts/writing-task-1-test/${id}&${keyword}`,
          {
            headers: { Authorization: AuthStr },
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
            });
            setLoading(false);
          }
        })
        .catch(e => console.log(e.message));
    }
    fetchTest();
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
  } else {
    return (
      <div>
        <IeltsSampleTestContentstyle
          title={params.title}
          question='Question:'
          question_heading={params.question_heading}
          img_url={params.img_url}
          answer='Answers'
        />
      </div>
    );
  }
}

export default IeltsSampleTestContent;
