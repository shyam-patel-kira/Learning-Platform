import axios from 'axios';
import React from 'react';
import './Ieltsreadingtest.css';
import { Img } from 'react-image';

class Ieltsreadingtest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passages: [],
      questions: [],
      testid: '',
      answers: {},
    };
  }

  handleChange = e => {
    let answers = this.state.answers;
    answers[e.target.id] = e.target.value;
    this.setState({
      answers,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.answers);
  };

  componentDidMount() {
    console.log('componentdidMount');
    let x = window.location.href.split('/');
    let mytest = x[x.length - 1];

    axios
      .get(`http://localhost:8000/ielts/reading/test/${x[x.length - 1]}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          passages: res.data.results[0],
          questions: res.data.results[0].questions,
        });
      })
      .catch(e => console.error(e.message));
    this.setState({
      testid: mytest,
    });
  }

  render() {
    console.log('render');
    let y = [];
    for (const i of Object.keys(this.state.passages)) {
      if (i.includes('Passage')) {
        y.push(
          <div className='passage-content'>
            <h2 className='text-3xl my-2'>{i}</h2>
          </div>
        );
        Object.values(this.state.passages[i]).map(z =>
          y.push(
            <div>
              <p className='font-serif text-white'>{z}</p>
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
            <Img src={this.state.questions.imgurl_1} />
            <Img src={this.state.questions.imgurl_2} />
            <Img src={this.state.questions.imgurl_3} />
            <Img src={this.state.questions.imgurl_4} />
            <Img src={this.state.questions.imgurl_5} />
            <Img src={this.state.questions.imgurl_6} />
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

export default Ieltsreadingtest;
