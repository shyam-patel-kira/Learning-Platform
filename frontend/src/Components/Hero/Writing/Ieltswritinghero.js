import React from 'react'
import Ieltswritingherocards from './Ieltswritingherocards'
import Button from 'react-bootstrap/Button';
import './Ieltswritinghero.css'


function Ieltswritinghero() {
    return (
        <div className="ielts-listening-hero-container">
            <h1 style={{ marginTop:'3%' }}>Writing</h1>
            <div className="ielts-listening-hero-wrapper">
                <ul className='cards__items'>
                    <Ieltswritingherocards />
                </ul>

            </div>
            <Button variant="Default" href='#' style={{    color:"#fff", 
                                                                display:"grid",
                                                                background:"#00ff84", 
                                                                margin: "0.5%", 
                                                                boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", 
                                                                padding:"10px 15px"}}>
                    Test 1
            </Button>
            <Button variant="Default" href='#' style={{    color:"#fff", 
                                                                display:"grid",
                                                                background:"#00ff84", 
                                                                margin: "0.5%", 
                                                                boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", 
                                                                padding:"10px 15px"}}>
                    Test 2
            </Button>
        </div>
    )
}

export default Ieltswritinghero
