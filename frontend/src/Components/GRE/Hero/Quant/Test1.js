import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import { Link } from 'react-router-dom';
import Error_401 from '../../../401-Error.jpg';

const cookies = new Cookies();

function Test1() {
  let x = window.location.href.split('/');
  let test_id = x[x.length - 1];
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
  const [submitLoading, setSubmitLoading] = useState(false);
  const [question, setQuestion] = useState({
    id: '',
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    img5: '',
    img6: '',
    img7: '',
    img8: '',
    img9: '',
    img10: '',
    img11: '',
    img12: '',
    img13: '',
    img14: '',
    img15: '',
    img16: '',
    img17: '',
    img18: '',
    img19: '',
    img20: '',
  });

  useEffect(() => {
    async function fetchTest() {
      await axios
        .get(`http://localhost:8000/gre/quant/practice/${test_id}`, {
          headers: { Authorization: AuthStr },
        })
        .then(res => {
          if (res.data.error) {
            setError( res.data.error );
          } else {
            console.log(res.data);
            setQuestion({
              id: res.data.results[0].test_id,
              img1: res.data.results[0].question_1,
              img2: res.data.results[0].question_2,
              img3: res.data.results[0].question_3,
              img4: res.data.results[0].question_4,
              img5: res.data.results[0].question_5,
              img6: res.data.results[0].question_6,
              img7: res.data.results[0].question_7,
              img8: res.data.results[0].question_8,
              img9: res.data.results[0].question_9,
              img10: res.data.results[0].question_10,
              img11: res.data.results[0].question_11,
              img12: res.data.results[0].question_12,
              img13: res.data.results[0].question_13,
              img14: res.data.results[0].question_14,
              img15: res.data.results[0].question_15,
              img16: res.data.results[0].question_16,
              img17: res.data.results[0].question_17,
              img18: res.data.results[0].question_18,
              img19: res.data.results[0].question_19,
              img20: res.data.results[0].question_20,
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
    e.preventDefault();
    setSubmitLoading(true);
    let x = window.location.href.split('/');
    let test_id = x[x.length - 1];

    let answer = { ...ans };
    console.log(answer);
    for (let i = 1; i <= 20; i++) {
      if (answer[i] === undefined) {
        answer[`ans_${i.toString()}`] = '';
      } else {
        answer[`ans_${i.toString()}`] = ans[i];
      }
    }
    for (let i = 1; i <= 20; i++) {
      delete answer[i];
    }
    let answers = { answers: answer };
    console.log(answers);

    //API Call for storing user answers
    await axios
      .post(
        `http://localhost:8000/gre/quant/test/user-answers/${test_id}`,
        answers,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        if (res.data.error) {
          setError({ error: res.data.error });
        } else {
          console.log(res);
        }
      })
      .catch(e => {
        console.log(e.message);
      });

    //API Call for comparing answers in result collection
    await axios
      .get(`http://localhost:8000/gre/quant-answer-result/test/${test_id}`, {
        headers: { Authorization: AuthStr },
      })
      .then(res => {
        if (res.data.error) {
          setError({ error: res.data.error });
        } else {
          console.log(res.data);
          setSubmitLoading(false);
        }
      })
      .catch(e => {
        console.log(e.message);
      });
    window.location = `/gre-quant-test1-result/${test_id}`;
  };

  let text = [];
  for (let i = 1; i <= 20; i++) {
    text.push(
      <label className='mx-4 mt-4 text-right text-xl text-black'>
        {i + '  '}
        <input
          type='text'
          id={i.toString()}
          key={i.toString()}
          onChange={e => {
            let a = ans;
            a[i] = e.target.value;
            setAns(a);
          }}
        />
      </label>
    );
  }

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
          <h1 className='flex flex-row text-3xl mx-auto my-4 text-customblack font-myfonts justify-center'>
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
      <div className='leading-relaxed font-myfonts grid grid-col-2'>
        <h1 className='text-4xl text-center my-4 ml-96'>Test-{question.id}</h1>
        <div className='boder-black border-2 w-11/12 overflow-y-scroll overscroll-auto h-1/2 col-start-1 col-end-5 ml-4'>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q1.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img1} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q2.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img2} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q3.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img3} alt='' />
            </div>
          </div>

          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q4.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img4} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q5.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img5} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q6.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img6} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q7.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img7} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q8.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img8} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q9.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img9} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q10.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img10} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q11.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img11} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q12.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img12} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q13.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img13} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q14.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img14} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q15.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img15} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q16.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img16} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q17.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img17} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q18.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img18} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q19.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img19} alt='' />
            </div>
          </div>
          <div className='flex'>
            <label className='mx-2 my-4 text-right text-2xl text-black'>
              Q20.
            </label>
            <div className='border-black border-2 w-full my-2 mx-0 mr-2'>
              <img src={question.img20} alt='' />
            </div>
          </div>
        </div>
        <div className='flex-col items-center border-black border-2 w-1/2 h-1/3 my-32 ml-60 col-end-6'>
          {text}
          <button
            className='w-32 text-center rounded-md h-10 box-border font-bold text-customwhite bg-customblack border-2 border-customblack my-4 ml-20 '
            type='submit'
            onClick={e => {
              handleSubmit(e);
              for (let i = 1; i <= 7; i++) {
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
      </div>
    );
  }
}

export default Test1;
