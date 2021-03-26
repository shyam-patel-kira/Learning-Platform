import React from 'react'
import Ieltsmainherocards from './Ieltsmainherocards'
import Ieltsmainherocards1 from './Ieltsmainherocards1'
import Ieltsmainherocards2 from './Ieltsmainherocards2'
import Ieltsmainherocards3 from './Ieltsmainherocards3'
import './Ieltsmainhero.css'

function Ieltsmainhero() {
    return (
        <div className="ielts-main-hero-container">
            <h1 style={{ marginTop:'5%' }}>IELTS</h1>
            <div className="ielts-main-hero-wrapper">
                <ul className='cards__items'>
                    <Ieltsmainherocards
                    />
                
                    <Ieltsmainherocards1
                        text='nhbhddbfhdbcchdbchjdbchj'
                    />
                </ul>

                <ul className='cards__items'>
                    <Ieltsmainherocards2
                        text='nhbhddbfhdbcchdbchjdbchj'
                    />

                    <Ieltsmainherocards3
                        text='nhbhddbfhdbcchdbchjdbchj'
                    />
                </ul> 

            </div>
        </div>

        
    )
}

export default Ieltsmainhero