import React from 'react'

function Ieltslisteningherocards(props) {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__info'>
                    {/* <h3>What is Ielts?</h3> */}
                        <li>
                            The listening test lasts for 40 minutes.
                        </li>

                        <li>
                            The audio will be heard by the candidates for only 30 minutes and the last 10 minutes of the exam will be given to the candidates for transferring the answers from question paper to answer sheet.
                        </li>

                        <li>
                            There are 4 parts in the listening test and a total of 40 questions where each part consists of 10 questions.
                        </li>
                       
                        <ol>
                            <b>Part-1:</b> It consists of the conversation between two people particularly on a social context topic.
                        </ol>

                        <ol>
                            <b>Part-2:</b> A speech is given by only one person in this part and again the topic might be related to the social context.
                        </ol>

                        <ol>
                            <b>Part-3:</b> Here the conversation might happen between three to four people in an educational context.
                        </ol>

                        <ol>
                            <b>Part-4:</b> Here the talk is given by one person on an academic subject.
                        </ol>

                </div>
            </li>

        </>

    )
}

export default Ieltslisteningherocards
