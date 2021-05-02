import axios from 'axios';
import React from 'react';
import './Ieltsreadingtest.css';
import Cookies from 'universal-cookie';
import Loader from 'react-loader-spinner';

const cookies = new Cookies();

class Ieltsreadingtest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passages: [],
      questions: [],
      testid: '',
      answers: {},
      error: '',
      answerkey: [],
      loading: true,
      submitLoading: false,
    };
  }

  handleChange = e => {
    let answers = this.state.answers;
    answers[e.target.id] = e.target.value;
    this.setState({
      answers,
    });
  };

  handleSubmit = async e => {
    this.setState({
      submitLoading: true,
    });
    let USER_TOKEN = cookies.get('token');
    let AuthStr = 'JWT '.concat(USER_TOKEN);
    e.preventDefault();

    let answer = this.state.answers;

    for (let i = 1; i <= 40; i++) {
      if (answer[i] === undefined) {
        answer[`ans_${i.toString()}`] = '';
      } else {
        answer[`ans_${i.toString()}`] = this.state.answers[i];
      }
    }

    for (let i = 1; i <= 40; i++) {
      delete answer[i];
    }
    this.setState({
      answer,
    });

    //API Call for storing user answers
    let answers = { answers: answer };

    await axios
      .post(
        `http://localhost:8000/ielts/reading/test/user-answers/${this.state.testid}`,
        answers,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        if (res.data.error) {
          this.setState({
            error: res.data.error,
          });
        } else {
          console.log(res);
        }
      })
      .catch(e => {
        console.log(e.message);
      });

    //API Call for comparing answers in result collection
    await axios
      .get(
        `http://localhost:8000/ielts/reading-answer-result/test/${this.state.testid}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        if (res.data.error) {
          this.setState({
            error: res.data.error,
          });
        } else {
          console.log(res.data);
        }
      })
      .catch(e => {
        console.log(e.message);
        this.setState({
          submitLoading: false,
        });
      });

    let x = this.state.testid;
    window.location = `/ielts-reading-result/${x}`;
  };

  componentDidMount() {
    let x = window.location.href.split('/');
    let mytest = x[x.length - 1];
    let USER_TOKEN = cookies.get('token');
    let AuthStr = 'JWT '.concat(USER_TOKEN);
    axios
      .get(`http://localhost:8000/ielts/reading/test/${x[x.length - 1]}`, {
        headers: { Authorization: AuthStr },
      })
      .then(res => {
        console.log(res.data);
        if (res.data.error) {
          this.setState({
            error: res.data.error,
          });
        } else {
          this.setState({
            passages: res.data.results[0],
            questions: res.data.results[0].questions,
            loading: false,
          });
        }
      })
      .catch(e => {
        console.log(e.message);
      });
    this.setState({
      testid: mytest,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1 className='text-5xl text-center text-red-500 my-28'>
            {this.state.error}
          </h1>
        </div>
      );
    }

    let y = [];
    for (const i of Object.keys(this.state.passages)) {
      if (i.includes('Passage')) {
        y.push(
          <div key={i} className='passage-content'>
            <h2 className='text-3xl my-2 text-customwhite'>{i}</h2>
          </div>
        );
        Object.values(this.state.passages[i]).map(z =>
          y.push(
            <div>
              <p className='font-serif text-customwhite'>{z}</p>
              <br />
            </div>
          )
        );
      }
    }

    let text = [];
    for (let i = 1; i <= 40; i++) {
      text.push(
        <label className='mx-2 px-3 text-right text-customwhite'>
          {i + '  '}
          <input
            className='text-customblack'
            type='text'
            id={i.toString()}
            key={i.toString()}
            onChange={e => {
              this.handleChange(e);
            }}
          />
        </label>
      );
    }

    if (this.state.loading === true) {
      return (
        <div>
          <div className='my-64'>
            <h1 className='font-myfonts flex flex-row text-3xl mx-auto my-4 text-customblack font-serif justify-center'>
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
        <div className='flex bg-trialback'>
          <div className='flex-1 w-full border-customblack border-2 mx-2 mt-2 mb-4 bg-trialback2'>
            <h1 className='font-myfonts text-5xl text-customwhite my-2 text-center'>
              Test-{this.state.testid}
            </h1>
            <div className='font-myfonts mx-5 text-lg text-customwhite'>
              {y}
            </div>
          </div>

          <div className='w-2/5'>
            <div className='border-customblack border-2 mx-2 my-2'>
              <img src={this.state.questions.imgurl_1} alt='' />
              <img src={this.state.questions.imgurl_2} alt='' />
              <img src={this.state.questions.imgurl_3} alt='' />
              <img src={this.state.questions.imgurl_4} alt='' />
              <img src={this.state.questions.imgurl_5} alt='' />
              <img src={this.state.questions.imgurl_6} alt='' />
            </div>
            <div className='border-customwhite border-2 mx-2 my-2'>
              <h1 className='font-myfonts my-4 mx-2 text-4xl font-serif text-customwhite'>
                Write your answers here!!
              </h1>
              <form>
                <div className='grid gap-x-10 gap-y-2 grid-cols-2'>{text}</div>
                <div className='flex justify-center items-center my-4'>
                  <button
                    className='w-1/3 text-center rounded-md h-10 box-border font-bold text-customwhite bg-trialback2 border-1 border-customwhite'
                    type='submit'
                    onClick={e => {
                      this.handleSubmit(e);
                      for (let i = 1; i <= 40; i++) {
                        document.getElementById(i.toString()).value = '';
                      }
                    }}
                    disabled={this.state.submitLoading}
                  >
                    {this.state.submitLoading && (
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
                        <div className='ml-4'> Submitting...</div>
                      </div>
                    )}
                    {!this.state.submitLoading && <span>Submit</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Ieltsreadingtest;
