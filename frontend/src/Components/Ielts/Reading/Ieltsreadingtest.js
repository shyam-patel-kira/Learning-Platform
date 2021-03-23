import axios from 'axios'
import React from 'react'

class Ieltsreadingtest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           passages : []
        }
    }

    //(x[x.length - 1])
    componentDidMount() {
        let x = window.location.href.split('/')
        console.log(x[x.length - 1]);
        axios.get(`http://localhost:8000/ielts/reading/test/${x[x.length - 1]}`)
            .then(
                res => {
                    console.log(res.data);
                    this.setState ({
                        passages: res.data.results[0]
                    })
                    }
                )

    }

    render() {
        let y = [];
        for (const i of Object.keys(this.state.passages)) {
          if (i.includes('passage')) {
            y.push(
            <h2 style={{color:'red'}}> {i}</h2>
            );
            Object.values(this.state.passages[i]).map((z) => y.push(<p>{z}</p>));
          }
        }
        return (
            <div>{y}</div>
        )
      }
    
    
}

export default Ieltsreadingtest