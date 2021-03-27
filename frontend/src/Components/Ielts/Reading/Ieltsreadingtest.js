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
           questions : []
        }
    }

    //(x[x.length - 1])
    componentDidMount() {
        console.log("componentdidMount")
        let x = window.location.href.split('/')
        console.log(x[x.length - 1]);
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

    }

    render() {
        console.log("render")
        let y = [], x = [];
        for (const i of Object.keys(this.state.passages)) {
          if (i.includes('Passage')) {
            y.push(
                <div className='passage-content'>
            <h2> Hii{i}</h2>
            </div>
            );
            Object.values(this.state.passages[i]).map((z) => y.push(<p>{z}</p>));
          }
        }

        console.log(this.state.questions);

        return (
            <div className='main-container'>
                <div className='passage-container'>
                    <h1>Test1</h1>
                    <div className='passage-content-1'>
                    {y}
                    {/* <img src={x} alt="404 Image not found"/> */}
                    </div>
                    <Img
                        src={this.state.questions.imgurl_1}
                    />
                    
                    
                    <button className='submit-test'
                        type='submit'
                        // onClick={this.feedBackSubmit}
                    >
                    Submit
                    </button>
                </div>
            </div>
        )
      }
    
    
}

export default Ieltsreadingtest