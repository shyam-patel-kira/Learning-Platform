import axios from 'axios'
import React from 'react'

class Ieltsreadingtest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
//            results : {}
        }
    }

    //(x[x.length - 1])
    componentDidMount() {
        var x = window.location.href.split('/')
        console.log(x[x.length - 1]);
        axios.get(`http://localhost:8000/ielts/reading/test/${x[x.length - 1]}`)
            .then(
                res => {
                    console.log(res.data);
                    this.setState ({
                        results: res.data
                    })
                    }
                )

    }

    render(){
        return (
            <div>
                <p>Hii</p>
                <p>
                    {this.state.results}
                </p>
            </div>
        )
    }
    
}

export default Ieltsreadingtest
