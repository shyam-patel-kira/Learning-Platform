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
            <h2>{i}</h2>
          </div>
        );
        Object.values(this.state.passages[i]).map(z => y.push(<p>{z}</p>));
      }
    }

    let text = [];
    for (let i = 1; i <= 40; i++) {
      text.push(
        <label style={{ color: '#fff' }}>
          {i}
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
    text.push(
      <button
        className='btn-style'
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
    );

    return (
      <div className='main-container'>
        <div className='passage-container'>
          <h1 className='text-5xl'>Test-{this.state.testid}</h1>
          <div className='passage-content-1 mx-5 text-2xl'>{y}</div>
        </div>
        <div className='image-container'>
          <Img
            className='border-black border-2'
            src={this.state.questions.imgurl_1}
          />
          <Img src={this.state.questions.imgurl_2} />
          <Img src={this.state.questions.imgurl_3} />
          <Img src={this.state.questions.imgurl_4} />
          <Img src={this.state.questions.imgurl_5} />
          <Img src={this.state.questions.imgurl_6} />
        </div>
        <div className='textbox-container'>{text}</div>
      </div>
    );
  }
}

export default Ieltsreadingtest;
