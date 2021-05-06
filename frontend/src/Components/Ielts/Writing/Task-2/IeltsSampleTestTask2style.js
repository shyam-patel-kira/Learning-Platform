import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const IeltsSampleTestTask2style = props => {
  const [ans, setAns] = useState('');
  const [error, setError] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  let x = window.location.href.split('/');
  let keyword = x[x.length - 2];

  const handleWritingTest = async event => {
    event.preventDefault();
    setSubmitLoading(true);
    let x = window.location.href.split('/');
    let test_type = x[x.length - 2];
    let test_id = x[x.length - 1];
    let USER_TOKEN = cookies.get('token');
    let AuthStr = 'JWT '.concat(USER_TOKEN);
    let confans = { answer: ans };
    await axios
      .post(
        `http://localhost:8000/ielts/writing-task-2-user-answer/${test_type}/${test_id}`,
        confans,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        if (res.data.error) {
          setError(res.data.error);
          console.log(res.data.error);
        } else {
          console.log(res);
          setSubmitLoading(false);
          alert('You have successfully submitted your test.');
        }
      })
      .catch(e => {
        console.log(e.message);
      });
  };

  if (error) {
    return (
      <div>
        <h1 className='font-myfonts text-5xl text-center text-customwhite my-28'>
          {error}
        </h1>
      </div>
    );
  }

  return (
    <div className='font-myfonts bg-customwhite '>
      <br />
      <br />
      <div className='bg-customdarkblue mx-auto w-3/4 divide-y-2 text-customwhite'>
        <h1 className='pt-8 text-4xl text-center font-myfonts'>
          {props.title}
        </h1>
        <div className='px-8 my-10 text-customwhite'>
          <div className='my-10 text-xl leading-relaxed font-myfonts'>
            <strong className='underline'>{props.question}</strong>
            <br />
            {props.question_heading}
          </div>
          <br />
        </div>
        <div>
          <h1 className='text-center text-3xl my-6 font-myfonts'>
            Write your answer below and then press submit!!
          </h1>
          <textarea
            id={props.id}
            type='text'
            name={props.title}
            required
            value={ans}
            onChange={e => {
              let a = ans;
              a = e.target.value;
              setAns(a);
            }}
            className='rounded-lg h-96 text-customblack w-4/5 mx-28 font-myfonts'
          />
        </div>
        <br />
        <br />

        <div>
          <div className='flex flex-row justify-around align-middle w-5/6 px-2 py-4 mx-auto'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              id='1'
            >
              <Link
                to={`/ielts-writing-task-2/${keyword}`}
                className='hover:no-underline hover:text-customwhite'
              >
                Go Back
              </Link>
            </button>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              name='test'
              onClick={handleWritingTest}
              disabled={submitLoading}
            >
              {submitLoading && (
                <div className='flex flex-row'>
                  <svg
                    xmlns='https://www.w3.org/2000/svg'
                    className='animate-spin h-6 w-6 ml-2'
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
                  <div>Submitting...</div>
                </div>
              )}
              {!submitLoading && <span>Submit</span>}
            </button>
          </div>
        </div>
        <br />
      </div>
      <br />
    </div>
  );
};

export default IeltsSampleTestTask2style;
