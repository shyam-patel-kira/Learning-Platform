import React from 'react'
import Ieltsmainherocards from '../Ieltsmain/Ieltsmainherocards';
import Button from 'react-bootstrap/Button';
import './Ieltsreadinghero.css'



class Ieltsreadinghero extends React.Component{
    constructor(){
        super()
        this.state = {
            
        }
    }

    handleTest = (event) => {
        var x = event.target.id
        window.location = `/ielts-reading-test/${x}`

        /*switch (x) {
            case '1':
                console.log('Button-1');
                break;
            case '2':
                console.log('Button-2');
                break;
            case '3':
                console.log('Button-3');
                break;
            case '4':
                console.log('Button-4');
                break;
            case '5':
                console.log('Button-5');
                break;
            default:
                return false;
        }*/
        
    }

    render() {
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
                <Button variant="Default" onClick={e => this.handleTest(e)} id="1"
                style={{    
                    color:"#fff", 
                    display:"grid",
                    background:"#00ff84", 
                    margin: "0.5%", 
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", 
                    padding:"10px 15px"
                }}
                >
                    Test 1
                </Button>
                <Button variant="Default" onClick={e => this.handleTest(e)} id="2"
                style={{    
                    color:"#fff", 
                    display:"grid",
                    background:"#00ff84", 
                    margin: "0.5%", 
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", 
                    padding:"10px 15px"
                }}
                >
                    Test 2
                </Button>
                <Button variant="Default" onClick={e => this.handleTest(e)} id="3"
                style={{    
                    color:"#fff", 
                    display:"grid",
                    background:"#00ff84", 
                    margin: "0.5%", 
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", 
                    padding:"10px 15px"
                    }}
                >
                    Test 3
                </Button>
                <Button variant="Default" onClick={e => this.handleTest(e)} id="4"
                style={{    
                    color:"#fff", 
                    display:"grid",
                    background:"#00ff84", 
                    margin: "0.5%", 
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", 
                    padding:"10px 15px"
                    }}
                >
                    Test 4
                </Button>
                <Button variant="Default" onClick={e => this.handleTest(e)} id="5"
                style={{    
                    color:"#fff", 
                    display:"grid",
                    background:"#00ff84", 
                    margin: "0.5%", 
                    boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)", 
                    padding:"10px 15px"
                    }}
                >
                    Test 5
                </Button>
            </div>
        )
    }
}


export default Ieltsreadinghero
