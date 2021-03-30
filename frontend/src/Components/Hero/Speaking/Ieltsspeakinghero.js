import React from 'react'
import Ieltsspeakingherocards from './Ieltsspeakingherocards'
import Ieltsspeakingherocards1 from './Ieltsspeakingherocards1'
import Simplespeakingcard from './Simplespeakingcard'
import Simplespeakingcard1 from './Simplespeakingcard1'
import Simplespeakingcard2 from './Simplespeakingcard2'
import Simplespeakingcard3 from './Simplespeakingcard3'
import Simplespeakingcard4 from './Simplespeakingcard4'
import Button from 'react-bootstrap/Button';
import './Ieltsspeakinghero.css'



function Ieltsspeakinghero() {
    return (
        <div className="ielts-listening-hero-container">
            <h1 style={{ marginTop:'3%' }}>Speaking</h1>
            <div className="ielts-listening-hero-wrapper">
                <ul className='cards__items'>
                    <Ieltsspeakingherocards />

                    <Ieltsspeakingherocards1 />
                </ul>

                <ul className='cards__items'>
                    <Simplespeakingcard />
                    <Simplespeakingcard1 />
                    <Simplespeakingcard2 />
                    {/* <Ieltslisteningherocards2 /> */}

                    {/* <Ieltslisteningherocards3
                        text='nhbhddbfhdbcchdbchjdbchj'
                    /> */}
                </ul>

                <ul className='cards__items'>
                    <Simplespeakingcard3 />
                    <Simplespeakingcard4 />
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

export default Ieltsspeakinghero
