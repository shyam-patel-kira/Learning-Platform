import React, { useState, useEffect } from 'react';
import section_1 from './Test-1/Section-1.mp3';
import section_2 from './Test-1/Section-2.mp3';
import section_3 from './Test-1/Section-3.mp3';
import section_4 from './Test-1/Section-4.mp3';

import section1_2 from './Test-2/Section-1.mp3';
import section2_2 from './Test-2/Section-2.mp3';
import section3_2 from './Test-2/Section-3.mp3';
import section4_2 from './Test-2/Section-4.mp3';

import section1_3 from './Test-3/Section-1.mp3'
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
import jwa from 'jwa';
import jwt from 'jsonwebtoken';

const cookies = new Cookies();

function Ieltslisteningtest(props) {
  let x = window.location.href.split('/');
  let test_id = x[x.length - 1];
  let USER_TOKEN = cookies.get('token');
  let AuthStr = 'JWT '.concat(USER_TOKEN);
  let ADMIN_TOKEN =
    'sdjkfh8923yhjdforksbfmisa@#*(&@*!^#&@bhjb2qiuhthisesdadminbhjdsfg839ujkdhfjk';
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

useEffect(() => {
 async function fetchData() {
   await axios
     .get(`http://localhost:8000/ielts/listening/test/${test_id}`,
       {
         headers: { Authorization: AuthStr },
       }
     )

     .then(res => {
       console.log(res.data);
       if (res.data.error) {
         setError({ error: res.data.error });
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

  if (error) {
    return (
      <div>
        <h1 className='text-5xl text-center text-red-500 my-28'>{error}</h1>
      </div>
    );
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let answer = { ...ans };
    let cnt = 0;
    let x = window.location.href.split('/');
    let test_id = x[x.length - 1];

    for (let i = 1; i <= 40; i++) {
      if (answer[i] === undefined) {
        answer[`ans_${i.toString()}`] = '';
      } else {
        answer[`ans_${i.toString()}`] = ans[i];
        cnt += 1;
      }
    }
    for (let i = 1; i <= 40; i++) {
      delete answer[i];
    }
    let answers = { answers: answer };
    console.log(answers);
    await axios
      .post(
        `http://localhost:8000/ielts/listening/test/user-answers/${test_id}`,
        answers,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        //console.log(res.data);
        if (res.data.error) {
          console.log(res.data.error);
          // error display
        } else {
          console.log(res);
        }
      })
      .catch(e => {
        console.log(e.message);
      });

    console.log('Call for obtaining answer key.');
    //API Call for obtaining answer key
    await axios
      .get(
        `http://localhost:8000/ielts/listening-answers/test/${test_id}`,
        {
          headers: { Authorization: secret },
        }
      )
      .then(res => {
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          console.log(res.data);
          }
        //console.log('Answer Key:', this.state.answerkey);
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
          console.log(res.data.error);
        } else {
          console.log(res.data);
        }
      })
      .catch(e => {
        console.log(e.message);
      });

  };

  let text1 = [];
  for (let i = 1; i <= 10; i++) {
    text1.push(
      <label className='mx-4 px-3 my-2 text-right text-black'>
        {i + '  '}
        <input
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
            console.log(ans);
          }}
        />
      </label>
    );
  }

  let text2 = [];
  for (let i = 11; i <= 20; i++) {
    text2.push(
      <label className='mx-4 px-3 my-2 text-right text-black'>
        {i + '  '}
        <input
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
            console.log(ans);
          }}
        />
      </label>
    );
  }

  let text3 = [];
  for (let i = 21; i <= 30; i++) {
    text3.push(
      <label className='mx-4 px-3 my-2 text-right text-black'>
        {i + '  '}
        <input
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
            console.log(ans);
          }}
        />
      </label>
    );
  }

  let text4 = [];
  for (let i = 31; i <= 40; i++) {
    text4.push(
      <label className='mx-4 px-3 my-2 text-right text-black'>
        {i + '  '}
        <input
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
            console.log(ans);
          }}
        />
      </label>
    );
  }

  if (test_id === '1') {
    return (
      <div className='leading-relaxed font-serif'>
        <h1 className='text-3xl text-center my-4'>Test - {question.id}</h1>
        <h1 className='text-2xl text-center my-4'>Section-1</h1>
        <audio controls className='mx-auto'>
          <source src={section_1} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_1} alt='' />
            <img src={question.img_2} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text1}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section_2} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_3} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text2}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section_3} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_4} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text3}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section_4} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_5} alt='' />
            <img src={question.img_6} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text4}</div>
        </div>
        <button
          className='w-1/5 text-center rounded-md h-10 box-border font-bold text-blue-navbar bg-green-customBorder border-2 border-black'
          type='submit'
          onClick={e => {
            handleSubmit(e);
            for (let i = 1; i <= 40; i++) {
              document.getElementById(i.toString()).value = '';
            }
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  if (test_id === '2') {
    return (
      <div className='leading-relaxed font-serif'>
        <h1 className='text-3xl text-center my-4'>Test - {question.id}</h1>
        <h1 className='text-2xl text-center my-4'>Section-1</h1>
        <audio controls className='mx-auto'>
          <source src={section1_2} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_1} alt='' />
            <img src={question.img_2} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text1}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section2_2} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_3} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text2}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section3_2} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_4} alt='' />
            <img src={question.img_5} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text3}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section4_2} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_6} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text4}</div>
        </div>
        <button
          className='w-32 text-center rounded-md h-10 box-border font-bold text-blue-navbar bg-customdarkblue border-2 border-black'
          type='submit'
          onClick={e => {
            handleSubmit(e);
            for (let i = 1; i <= 40; i++) {
              document.getElementById(i.toString()).value = '';
            }
          }}
        >
          Submit
        </button>
        <br />
      </div>
    );
  }
  if (test_id === '3') {
    return (
      <div className='leading-relaxed font-serif'>
        <h1 className='text-3xl text-center my-4'>Test - {question.id}</h1>
        <h1 className='text-2xl text-center my-4'>Section-1</h1>
        <audio controls className='mx-auto'>
          <source src={section1_3} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_1} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text1}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section2_3} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_2} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text2}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section3_3} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_3} alt='' />
            <img src={question.img_4} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text3}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section4_3} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_5} alt='' />
            <img src={question.img_6} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text4}</div>
        </div>
        <button
          className='w-32 text-center rounded-md h-10 box-border font-bold text-blue-navbar bg-customdarkblue border-2 border-black'
          type='submit'
          onClick={e => {
            handleSubmit(e);
            for (let i = 1; i <= 40; i++) {
              document.getElementById(i.toString()).value = '';
            }
          }}
        >
          Submit
        </button>
        <br />
      </div>
    );
  }
  if (test_id === '4') {
    return (
      <div className='leading-relaxed font-serif'>
        <h1 className='text-3xl text-center my-4'>Test - {question.id}</h1>
        <h1 className='text-2xl text-center my-4'>Section-1</h1>
        <audio controls className='mx-auto'>
          <source src={section1_4} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_1} alt='' />
            <img src={question.img_2} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text1}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section2_4} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_3} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text2}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section3_4} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_4} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text3}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section4_4} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_5} alt='' />
            <img src={question.img_6} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text4}</div>
        </div>
        <button
          className='w-32 text-center rounded-md h-10 box-border font-bold text-blue-navbar bg-customdarkblue border-2 border-black'
          type='submit'
          onClick={e => {
            handleSubmit(e);
            for (let i = 1; i <= 40; i++) {
              document.getElementById(i.toString()).value = '';
            }
          }}
        >
          Submit
        </button>
        <br />
      </div>
    );
  }
  if (test_id === '5') {
    return (
      <div className='leading-relaxed font-serif'>
        <h1 className='text-3xl text-center my-4'>Test - {question.id}</h1>
        <h1 className='text-2xl text-center my-4'>Section-1</h1>
        <audio controls className='mx-auto'>
          <source src={section1_5} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_1} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text1}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section2_5} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_2} alt='' />
            <img src={question.img_3} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text2}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section3_5} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_4} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text3}</div>
        </div>

        <audio controls className='mx-auto'>
          <source src={section4_5} type='audio/mpeg' />
        </audio>
        <div className='flex'>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>
            <img src={question.img_5} alt='' />
            <img src={question.img_6} alt='' />
          </div>
          <div className='border-black border-2 w-1/2 my-4 mx-6'>{text4}</div>
        </div>
        <button
          className='w-32 text-center rounded-md h-10 box-border font-bold text-blue-navbar bg-customdarkblue border-2 border-black'
          type='submit'
          onClick={e => {
            handleSubmit(e);
            for (let i = 1; i <= 40; i++) {
              document.getElementById(i.toString()).value = '';
            }
          }}
        >
          Submit
        </button>
        <br />
      </div>
    );
  }
}

export default Ieltslisteningtest;
