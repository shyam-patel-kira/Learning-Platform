import React from 'react'
import Ieltslisteningherocards from './Ieltslisteningherocards'
import Ieltslisteningherocards1 from './Ieltslisteningherocards1'
import Ieltslisteningherocards2 from './Ieltslisteningherocards2' //eslint-disable-line
import Button from 'react-bootstrap/Button';
import './Ieltslisteninghero.css'
import Simplelisteningcard from './Simplelisteningcard';
import Simplelisteningcard1 from './Simplelisteningcard1';
import Simplelisteningcard2 from './Simplelisteningcard2';
import Simplelisteningcard3 from './Simplelisteningcard3';
import Simplelisteningcard4 from './Simplelisteningcard4';


function Ieltslisteninghero() {
    return (
        <div className="ielts-listening-hero-container">
            <h1 style={{ marginTop:'3%' }}>Listening</h1>
            <div className="ielts-listening-hero-wrapper">
                <ul className='cards__items'>
                    <Ieltslisteningherocards />

                    <Ieltslisteningherocards1 />
                </ul>

                <ul className='cards__items'>
                    <Simplelisteningcard />
                    <Simplelisteningcard1 />
                    <Simplelisteningcard2 />
                    {/* <Ieltslisteningherocards2 /> */}

                    {/* <Ieltslisteningherocards3
                        text='nhbhddbfhdbcchdbchjdbchj'
                    /> */}
                </ul>

                <ul className='cards__items'>
                    <Simplelisteningcard3 />
                    <Simplelisteningcard4 />
                    {/* <Ieltslisteningherocards2 /> */}

                    {/* <Ieltslisteningherocards3
                        text='nhbhddbfhdbcchdbchjdbchj'
                    /> */}
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

export default Ieltslisteninghero