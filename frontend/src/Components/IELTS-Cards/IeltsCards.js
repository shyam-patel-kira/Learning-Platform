import React from 'react';
import Error_401 from '../401-Error.jpg';

function IeltsCards() {
  return (
    <div className='my-10 font-myfonts'>
      <h1 className='text-customdarkblue text-6xl text-center'>About IELTS</h1>
      <div className='p-40 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
        <div className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={Error_401} alt='Mountain' />
          <div className='px-6 py-4 bg-customwhite'>
            <div className='font-bold text-xl mb-2'>
              How to book IELTS exam?
            </div>
            <p className='text-gray-700 text-base'>
              IELTS exam can be booked online on British Council Website as well
              as on IDP Website. The level of difficulty is same in both the
              exams conducted by British Council and IDP.
            </p>
            <br />
            <p>For more details please surf through below link: </p>
            <ul className='list-inside list-disc'>
              <li>
                <a
                  className='text-blue-600'
                  href='https://www.britishcouncil.in/exam/ielts/book-test'
                >
                  Book Exam through British Council
                </a>
              </li>
              <li>
                <a
                  className='text-blue-600'
                  href='https://www.ieltsidpindia.com/registration/registration'
                >
                  Book Exam through IDP
                </a>
              </li>
            </ul>
          </div>
          <div className='px-6 pt-4 pb-2 bg-customwhite'>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #ielts
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #britishcouncil
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #idp
            </span>
          </div>
        </div>

        <div className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={Error_401} alt='River' />
          <div className='px-6 py-4 bg-customwhite'>
            <div className='font-bold text-xl mb-2'>
              Documents required during Exam
            </div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 bg-customwhite'>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #passport
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #xeroxcopy
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #nomobile
            </span>
          </div>
        </div>

        <div className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={Error_401} alt='Forest' />
          <div className='px-6 py-4 bg-customwhite'>
            <div className='font-bold text-xl mb-2 '>IELTS Online Exam</div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 bg-customwhite'>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #online
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #duration
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #lrw
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IeltsCards;
