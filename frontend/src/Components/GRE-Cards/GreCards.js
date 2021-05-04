import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.png';
import img3 from './img3.jpg';

function GreCards() {
  return (
    <div className='my-10 font-myfonts'>
      <h1 className='text-customdarkblue text-6xl text-center underline'>
        About GRE
      </h1>
      <div className='p-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10'>
        <div className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={img1} alt='' />
          <div className='px-6 py-4 bg-customwhite'>
            <div className='font-bold text-xl mb-2'>
              How to book GRE exam?
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
          <img className='w-full' src={img3} alt='' />
          <div className='px-6 py-4 bg-customwhite'>
            <div className='font-bold text-xl mb-2'>
              Documents required during Exam
            </div>
            <p className='text-gray-700 text-base'>
              When you are going to appear in the examination you will require
              one passport photo copy which you will need to submit at the
              examination centre. You will also need to carry your own pencils,
              erasers and other necessary things which will be explained to you
              in the email before 2-3 days of examination. You don't need to
              carry your own headphones as it will be provided by them.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 bg-customwhite'>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #passport
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #photocopy
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #headphones
            </span>
          </div>
        </div>

        <div className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={img2} alt='' />
          <div className='px-6 py-4 bg-customwhite'>
            <div className='font-bold text-xl mb-2 '>Rules of the Exam</div>
            <p className='text-gray-700 text-base'>
              You will need to reach the examination center 1:30 hour before the
              actual exam starts. During that time you will need to verify your
              documents and thereby you will be allotted a specific seat number.
              Once you go at your seat for the examination you won't be allowed
              to go washroom untill the exam get's over. You don't need to carry
              the mobile phones.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2 bg-customwhite'>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #nomobile
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

export default GreCards;
