import React from 'react'
import Ieltsmainherocards from './Ieltsmainherocards';
import Button from 'react-bootstrap/Button';
import './Ieltsreadinghero.css'


function Ieltsreadinghero() {
    return (
        <div className="ielts-reading-hero-container">
            Tips and Tricks
            <div className="ielts-reading-hero-wrapper">
                <ul className='cards__items'>
                    <Ieltsmainherocards
                        text='nhbhddbfhdbcchdbchjdbchj'
                    />

                    <Ieltsmainherocards
                        text='nhbhddbfhdbcchdbchjdbchj'
                    />
                </ul>

                <ul className='cards__items'>
                    <Ieltsmainherocards
                        text='nhbhddbfhdbcchdbchjdbchj'
                    />

                    <Ieltsmainherocards
                        text='nhbhddbfhdbcchdbchjdbchj'
                    />
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

export default Ieltsreadinghero
