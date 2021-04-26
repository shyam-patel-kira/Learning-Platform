import axios from 'axios';
import React from 'react';
import './Ieltsreadingtest.css';
import Cookies from 'universal-cookie';
import jwa from 'jwa';
import jwt from 'jsonwebtoken';
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
      bands: null,
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
    e.preventDefault();

    let answer = this.state.answers;
    let cnt = 0;
    for (let i = 1; i <= 40; i++) {
      if (answer[i] === undefined) {
        answer[`ans_${i.toString()}`] = '';
      } else {
        answer[`ans_${i.toString()}`] = this.state.answers[i];
        cnt += 1;
      }
    }

    for (let i = 1; i <= 40; i++) {
      delete answer[i];
    }
    this.setState({
      answer,
    });
    console.log('Answer:', answer);
    //API Call for storing user answers
    let answers = { answers: answer };
    console.log(answers);
    await axios
      .post(
        `http://localhost:8000/ielts/reading/test/user-answers/${this.state.testid}`,
        answers,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        //console.log(res.data);
        if (res.data.error) {
          console.log(res.data.error);
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

    console.log('Call for obtaining answer key.');
    //API Call for obtaining answer key
    await axios
      .get(
        `http://localhost:8000/ielts/reading-answers/test/${this.state.testid}`,
        {
          headers: { Authorization: secret },
        }
      )
      .then(res => {
        //console.log(res.data);
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          this.setState({ answerkey: { ...res.data.results[0].answers } });
        }
        console.log('Answer Key:', this.state.answerkey);
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
        console.log(res.data);
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          this.setState({
            bands: res.data.results.bands,
          });
        }
      })
      .catch(e => {
        console.log(e.message);
      });

    //API Call for displaying result
    /*await axios
      .get(
        `http://localhost:8000/ielts/reading-result-display/test/${this.state.testid}`,
        {
          headers: { Authorization: AuthStr },
        }
      )
      .then(res => {
        if (res.data.error) {
          console.log('Result display error: ', res.data.error);
        } else {
          this.setState({
            bands: res.data.results[0].bands,
          });
        }
      })
      .catch(e => {
        console.log(e.message);
      });*/
    //console.log("Bands are: ",this.state.bands);
    let x = this.state.testid;
    window.location = `/ielts-reading-result/${x}`;
  };

  componentDidMount() {
    console.log('componentdidMount');
    let x = window.location.href.split('/');
    let mytest = x[x.length - 1];
    let USER_TOKEN = cookies.get('token');
    let AuthStr = 'JWT '.concat(USER_TOKEN);
    console.log(typeof x[x.length - 1]);
    axios
      .get(`http://localhost:8000/ielts/reading/test/${x[x.length - 1]}`, {
        headers: { Authorization: AuthStr },
      })
      .then(res => {
        console.log(res.data);

        if (res.data.error) {
          console.log(res.data.error);
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
            <h2 className='text-3xl my-2'>{i}</h2>
          </div>
        );
        Object.values(this.state.passages[i]).map(z =>
          y.push(
            <div>
              <p className='font-serif text-customblack'>{z}</p>
              <br />
            </div>
          )
        );
      }
    }

    let text = [];
    for (let i = 1; i <= 40; i++) {
      text.push(
        <label className='mx-2 px-3 text-right text-black'>
          {i + '  '}
          <input
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
        <div className='flex'>
          <div className='flex-1 w-full border-black border-2 mx-2 mt-2 mb-4 bg-green-cardColor'>
            <h1 className='text-5xl my-2 text-center'>
              Test-{this.state.testid}
            </h1>
            <div className='mx-5 text-lg'>{y}</div>
          </div>

          <div className='w-2/5'>
            <div className='border-black border-2 mx-2 my-2'>
              <img src={this.state.questions.imgurl_1} alt='' />
              <img src={this.state.questions.imgurl_2} alt='' />
              <img src={this.state.questions.imgurl_3} alt='' />
              <img src={this.state.questions.imgurl_4} alt='' />
              <img src={this.state.questions.imgurl_5} alt='' />
              <img src={this.state.questions.imgurl_6} alt='' />
            </div>
            <div className='border-black border-2 mx-2 my-2'>
              <h1 className='my-4 mx-2 text-4xl font-serif'>
                Write your answers here!!
              </h1>
              <form>
                <div className='grid gap-x-10 gap-y-2 grid-cols-2'>{text}</div>
                <div className='flex justify-center items-center my-4'>
                  <button
                    className='w-1/5 text-center rounded-md h-10 box-border font-bold text-blue-navbar bg-green-customBorder border-2 border-black'
                    type='submit'
                    onClick={e => {
                      this.handleSubmit(e);
                      for (let i = 1; i <= 40; i++) {
                        document.getElementById(i.toString()).value = '';
                      }
                    }}
                  >
                    Submit
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