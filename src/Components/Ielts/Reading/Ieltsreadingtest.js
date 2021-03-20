import axios from 'axios'
import React from 'react'

class Ieltsreadingtest extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    //(x[x.length - 1])
    componentDidMount() {
        var x = window.location.href.split('/')
        axios.get('')
            .then()
    }

    render(){
        return (
            <div>
                <p>Hii</p>
            </div>
        )
    }
    
}

export default Ieltsreadingtest
