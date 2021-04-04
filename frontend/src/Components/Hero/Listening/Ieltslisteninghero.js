import React from 'react';
import './Ieltslisteninghero.css';

function Ieltslisteninghero() {
  return (
    <div className='ielts-listening-hero-container'>
      <h1 className='pt-6 mt-2 text-4xl'>Listening</h1>
      <div className='ielts-listening-hero-wrapper'>
        <ul className='cards__items'>
          <li
            className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
          >
            <div className=''>
              <ul>
                <li>The listening test lasts for 40 minutes.</li>

                <li>
                  The audio will be heard by the candidates for only 30 minutes
                  and the last 10 minutes of the exam will be given to the
                  candidates for transferring the answers from question paper to
                  answer sheet.
                </li>

                <li>
                  There are 4 parts in the listening test and a total of 40
                  questions where each part consists of 10 questions.
                </li>

                <li>
                  <strong>Part-1:</strong> It consists of the conversation
                  between two people particularly on a social context topic.
                </li>

                <li>
                  <strong>Part-2:</strong> A speech is given by only one person
                  in this part and again the topic might be related to the
                  social context.
                </li>

                <li>
                  <strong>Part-3:</strong> Here the conversation might happen
                  between three to four people in an educational context.
                </li>

                <li>
                  <strong>Part-4:</strong> Here the talk is given by one person
                  on an academic subject.
                </li>
              </ul>
            </div>
          </li>
          <li
            className='cards__item font-serif text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
          >
            <div className=''>
              <ul>
                <li>
                  <p>
                    For the computer delivered IELTS, put your answers directly
                    into the computer as one is not given an extra 10 minutes of
                    time to transfer the answer. At the end of the computer
                    delivered exam one is given two minutes of extra time to
                    review all the answers.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    All the candidates are given some time to read the questions
                    at each and every part before the recording starts.
                  </p>
                </li>
                <br />
                <li>
                  <p>
                    For each set of questions there is a word count limit which
                    candidates should take into the consideration.
                  </p>
                </li>
                <br />
                <li>
                  If the candidate writes the incorrect spelling of the word
                  then it will be marked incorrect.
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul className='my-2 justify-items-center grid grid-cols-2 gap-6'>
          <li className='border-2 p-2 w-5/6 border-black bg-green-cardColor font-serif text-lg text-white transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110'>
            <strong className='text-xl'>
              Improve general listening skills:
            </strong>
            In order to improve the listening skills one should listen to the
            radio talks, Ted-Talks of native English speakers, documental
            programs, etc. Only giving practice tests will not elevate the
            performance of the examiner instead the examiner will get friendly
            only to the type of questions asked.
          </li>

          <li className='border-2 p-2 w-5/6 border-black bg-green-cardColor font-serif text-lg text-white transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110'>
            <strong className='text-xl'>Focus:</strong> The candidate should not
            lose concentration at any cost as the audio is only played once. In
            some cases it might happen that if a candidate loses one answer then
            there is a chance that he/she might lose another answer due to
            pressure. Hence, it is extremely vital to remain focused during the
            whole examination.
          </li>

          <li className='border-2 p-2 w-5/6 border-black bg-green-cardColor font-serif text-lg text-white transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110'>
            <strong className='text-xl'>Don’t leave any answers:</strong> As
            there is no negative marking in the examination candidates should
            always attempt all the answers even if they have doubt in some
            answers.
          </li>

          <li className='border-2 p-2 w-5/6 border-black bg-green-cardColor font-serif text-lg text-white transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110'>
            <strong className='text-xl'>Check for mistakes:</strong> After the
            completion of each section one is given the time of 30 seconds to
            check all the answers.
          </li>

          <li className='border-2 p-2 w-5/6 border-black bg-green-cardColor font-serif text-lg text-white transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110'>
            <strong className='text-xl'>Don’t write answers promptly:</strong>
            Many candidates fall into this trap easily as they write the answers
            quickly by just listening to the audio related to the answers. The
            candidates should listen properly to the contractions which are used
            in the audio and after listening to it only they should write the
            correct answer.
          </li>

          <li className='bg-green-cardColor font-serif text-lg text-white transition duration-500 ease-in-out hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110'>
            <strong className='text-xl'>Don’t write answers promptly:</strong>
            Lorem
          </li>
        </ul>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
          Give Test
        </h1>
        <div className='flex flex-row justify-evenly w-5/6'>
          <button
            className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
            variant='Default'
            id='1'
          >
            Test 1
          </button>

          <button
            className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
            variant='Default'
            id='2'
          >
            Test 2
          </button>

          <button
            className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
            variant='Default'
            id='3'
          >
            Test 3
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
            variant='Default'
            id='4'
          >
            Test 4
          </button>
          <button
            className='bg-green-500 hover:bg-green-700 transition-all ease-in duration-300 text-white font-bold py-2 px-4 rounded'
            variant='Default'
            id='5'
          >
            Test 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ieltslisteninghero;
