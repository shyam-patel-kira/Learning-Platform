import axios from 'axios'
import React from 'react'
import './Ieltsreadingtest.css';
// import { Wrapper, Grid, Content } from "./styles";
import { Img } from 'react-image';



class Ieltsreadingtest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           passages : [],
           questions : [],
           testid:'',
           answers:{}
        }
    }

    handleChange = (e)  => {
        let answers = this.state.answers;
        answers[e.target.id] = e.target.value;
        this.setState({
          answers
        });
      }

      handleSubmit = (e) => {
          e.preventDefault()
          console.log(this.state.answers)
      }

    componentDidMount() {
        
        console.log("componentdidMount")
        let x = window.location.href.split('/')
        let mytest = x[x.length - 1]
        
        
        axios.get(`http://localhost:8000/ielts/reading/test/${x[x.length - 1]}`)
            .then(
                res => {
                    console.log(res.data);
                    this.setState ({
                        passages: res.data.results[0],
                        questions: res.data.results[0].questions
                    })
                }
                )
                this.setState({
                    testid: mytest
                })
    }

    render() {
        console.log("render")
        let y = [], x = [];
        for (const i of Object.keys(this.state.passages)) {
          if (i.includes('Passage')) {
            y.push(
                <div className='passage-content'>
            <h2> {i}</h2>
            </div>
            );
            Object.values(this.state.passages[i]).map((z) => y.push(<p>{z}</p>));
          }
        }

        let text = [];
        for (let i = 1; i <= 40; i++) {
          text.push(
            <label
            style={{color:'#fff'}}
            >
              {i}
              <input 
              style={{ display:'block', margin:'10px', width:'120px', marginRight:'20px', border:'3px solid'}}
              type="text" 
              id={i.toString()} 
              key={i.toString()}
              onChange={(e) => {
              this.handleChange(e)
              }} />
            </label>
          );
        }
        text.push(
            
            <button className='btn-style'
              type="submit"
              onClick={(e) => {
                this.handleSubmit(e);
                for (let i = 1; i <= 40; i++) {
                  (document.getElementById(i.toString())).value = '';
                }
              }}
            >
              Submit
            </button>
        )

        return (
            <div className='main-container'>
                <div className='passage-container'>
                    <h1>Test-{this.state.testid}</h1>
                    <div className='passage-content-1'>
                    {y}
                    </div>
                </div>
                <div className='image-container'>
                    <Img src={this.state.questions.imgurl_1} />
                    <Img src={this.state.questions.imgurl_2} />
                    <Img src={this.state.questions.imgurl_3} />
                    <Img src={this.state.questions.imgurl_4} />
                    <Img src={this.state.questions.imgurl_5} />
                    <Img src={this.state.questions.imgurl_6} />
                    </div>
                <div className='textbox-container'>
                    {text}
                </div>
                
            </div>
        )
      }
    
    
}

export default Ieltsreadingtest