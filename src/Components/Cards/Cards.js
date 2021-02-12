import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            {/* <h1>Hello</h1> */}
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems
                            src='images/usa.png'
                            text='Achieve your goals to go to USA with IELTS and GRE'
                            label='USA'
                            path='/'
                         />
                         <CardItems
                            src='images/canada.png'
                            text='Achieve your dreams to go to Canada with IELTS'
                            label='CANADA'
                            path='/'
                         />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                            src='images/australia.png'
                            text='Achieve your dreams to go to Australia with IELTS'
                            label='Australia'
                            path='/'
                         />
                         <CardItems
                            src='images/newz.png'
                            text='Journey to New Zealand begins with IELTS'
                            label='CANADA'
                            path='/'
                         />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
