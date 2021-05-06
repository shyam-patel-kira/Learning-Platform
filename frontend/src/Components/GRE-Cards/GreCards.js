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
            <div className='font-bold text-xl mb-2'>How to book GRE exam?</div>
            <p className='text-gray-700 text-base'>
              GRE exam can be booked online on ETS GRE website. First you have
              to create an account on ETS and book fo the GRE General Test. You
              can also cancel and reschedule your appointment.
            </p>
            <br />
            <p>For more details please surf through below link: </p>
            <ul className='list-inside list-disc'>
              <li>
                <a
                  className='text-blue-600'
                  href='https://ereg.ets.org/ereg/public/signin?bmctx=B880D2D189D031F58DE255EC162DBCCE83D65D48BDEC09F734722D40B8CFA0BECA8ADB067F660AF491DBD31D4D17FB6A&contextType=external&username=string&lockpage=https%3A%2F%2Fereg.ets.org%2Fereg%2Fpublic%2Faccountlock&expiredpwdpage=https%3A%2F%2Feias.ets.org%2FxlWebApp%2Fexpiredpwd.jsp%3Fappid%3DEREG&contextValue=%2Foam&password=secure_string&challenge_url=https%3A%2F%2Fereg.ets.org%2Fereg%2Fpublic%2Fsignin&ssoCookie=SameSite%3DNone&creds=username+password&request_id=4020087151969373724&authn_try_count=0&locale=en_US&resource_url=https%253A%252F%252Fereg.ets.org%252Fereg%252Fhome%253F_p%253DGRI'
                >
                  Book Exam through ETS Test Taker Portal
                </a>
              </li>
            </ul>
          </div>
          <div className='px-6 pt-4 pb-2 bg-customwhite'>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #gre
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #ets
            </span>
            <span className='inline-block bg-customdarkblue rounded-full px-3 py-1 text-sm font-semibold text-customwhite mr-2 mb-2'>
              #etsgre
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
              one passport photo copy and one recognizable photograph which you
              will need to submit at the examination centre. Be sure, expired
              documents are not acceptable. Include your signature.
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
              #signature
            </span>
          </div>
        </div>

        <div className='rounded overflow-hidden shadow-lg'>
          <img className='w-full' src={img2} alt='' />
          <div className='px-6 py-4 bg-customwhite'>
            <div className='font-bold text-xl mb-2 '>Rules of the Exam</div>
            <p className='text-gray-700 text-base'>
              Do not use any unauthorized materials, including mobile devices,
              prewritten notes or textbooks. Personal recording devices of any
              kind are strictly prohibited. Do not communicate with anyone other
              than the proctor. You must report on time from the breaks.
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
              #prohibition
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreCards;
