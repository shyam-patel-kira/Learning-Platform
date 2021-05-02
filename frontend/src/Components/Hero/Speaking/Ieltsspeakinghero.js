import React from 'react';
import Ieltslisteningherocards from '../Listening/Ieltslisteningherocards';
import SimpleReadingCard from '../Reading/Simplereadingcard';

class Ieltsspeakinghero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTest = event => {
    let x = event.target.id
    window.location = `/ielts-speaking-test/${x}`;
  };

  render() {
    return (
      <div className='bg-customblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
        <h1 className='pt-8 text-4xl text-center'>Speaking</h1>
        <div className='px-8 my-10 text-customwhite'>
          <ul className='flex'>
            <Ieltslisteningherocards>
              <div className='font-myfonts'>
                <ul className='list-disc list-inside my-8'>
                  <li>
                    Majority of the examiners find this part of the exam to be
                    the toughest as it involves face to face communication.
                    However, it is found easy for some candidates who can speak
                    English without any hesitation.
                  </li>
                  <br />
                  <li>
                    The IELTS Speaking exam lasts for 11 to 14 minutes or
                    maximum 15 minutes. It is divided into three parts.
                    <ol>
                      <br />
                      <strong>Part-1:</strong> In the first part of questions
                      basic questions related to the hobby of examiners are
                      asked along with general discussion on some topics.
                    </ol>
                    <br />
                    <ol>
                      <strong>Part-2:</strong> Here the candidate is given a
                      topic and has to speak constant for 2 minutes. The topic
                      is assigned by the invigilator and the candidate has 1
                      minute to prepare the topic and can write the bullet
                      points on the paper which he/she wants to speak.
                    </ol>
                    <br />
                    <ol>
                      <strong>Part-3:</strong> In this part more questions are
                      asked related to the part-2 topic which is asked.
                    </ol>
                  </li>
                </ul>
              </div>
            </Ieltslisteningherocards>

            <Ieltslisteningherocards>
              <div className='font-myfonts'>
                <ul className='list-disc list-inside my-8'>
                  <li>
                    The examiner controls the time and the length of your
                    answers.
                  </li>
                  <br />

                  <li>Marking criteria is based on the following factors:</li>
                  <li>
                    <strong>Fluency and cohesion: 25%</strong>
                  </li>
                  <li>
                    <strong>Vocabulary: 25%</strong>
                  </li>
                  <li>
                    <strong>Grammar: 25%</strong>
                  </li>
                  <li>
                    <strong>Pronunciation: 25%</strong>
                  </li>
                </ul>
              </div>
            </Ieltslisteningherocards>
          </ul>

          <ul className='my-2 justify-items-center grid grid-cols-2 gap-6'>
            <SimpleReadingCard
              title='Fluency:'
              content='Speak fluently without hesitation and with full confidence.Use different vocabulary for the same word.'
            />
            <SimpleReadingCard
              title='Avoid Grammatical errors:'
              content='Speak some sentences which include complex grammar.'
            />
            <SimpleReadingCard
              title='Don’t learn answers by heart:'
              content='Examiners are able to determine
            whether you speak freely or you memorized the answer before your
            interview. Learning full scripts is a bad idea. Instead, it is much
            better to learn separate words and collocations and adopt them in
            your speech.'
            />
            <SimpleReadingCard
              title='Extend your Speech:'
              content='Try to speak more than the examiner. Give
            reasons for your answer instead of giving an answer in a single
            word. You can completely fake out the reasons as the examiner
            doesn’t know the truth.'
            />
            <SimpleReadingCard
              title='Be Coherent:'
              content='Use proper linking words in order to connect
              the sentences.'
            />
            <SimpleReadingCard
              title='Pronounciation:'
              content='Each and every word should be pronounced clearly.'
            />
          </ul>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Give Test
          </h1>
          <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='1'
            >
              Test 1
            </button>

            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='2'
            >
              Test 2
            </button>

            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='3'
            >
              Test 3
            </button>
            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-customwhite font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='4'
            >
              Test 4
            </button>
            <button
              className='bg-customblack hover:bg-custombrown transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={this.handleTest}
              id='5'
            >
              Test 5
            </button>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Ieltsspeakinghero;
