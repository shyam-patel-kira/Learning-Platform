import React from 'react'
import Ieltsmainherocards from './Ieltsmainherocards'
import './Ieltsmainhero.css'

function Ieltsmainhero() {
    return (
        <div className="ielts-main-hero-container">
            What is IELTS?
            <div className="ielts-main-hero-wrapper">
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
        </div>

        
    )
}

export default Ieltsmainhero
