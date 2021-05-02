import React from 'react';

function Ieltsmainherocards(props) {
  return (
    <li
      className='cards__item font-myfonts text-lg list-disc md:list-disc
       leading-relaxed tracking-normal text antialiased 
       sm:subpixel-antialiased md:antialiased'
    >
      {props.children}
    </li>
  );
}

function Ieltsmainhero() {
  return (
    <div className='bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 font-myfonts text-customwhite'>
      <h1 className='pt-8 text-4xl font-myfonts text-center'>IELTS</h1>
      <div className='px-8 my-10 text-customwhite'>
        <ul className='grid grid-cols-2 gap-4'>
          <Ieltsmainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>
                What is Ielts?
              </h1>
              <ul className='list-disc list-inside font-myfonts'>
                <li>
                  IELTS is an International English Language Testing System
                  where a person is tested efficiently for their English skills.
                </li>
                <br />
                <li>
                  The exam is designed for the people whose primary language is
                  not English.
                </li>
                <br />
                <li>
                  The IELTS exam is given majorly by the students who want to
                  study abroad in overseas countries like Canada, U.S.A,
                  Australia, etc as well as people who want to immigrate and
                  settle in foreign countries where the first language spoken is
                  English.
                </li>
                <br />
                <li>
                  IELTS is jointly owned by British Council(Cambridge English)
                  and IDP(IELTS Australia).
                </li>
                <br />
                <li>
                  IELTS has more than 500 test centres and locations over 140
                  countries across the world.
                </li>
              </ul>
            </div>
          </Ieltsmainherocards>

          <Ieltsmainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>
                Exam Types of IELTS
              </h1>

              <ul className='list-inside list-disc font-myfonts'>
                <li>Primarily, IELTS is divided into two sections:</li>
                <br />
                <li>
                  <strong>IELTS General: </strong>The result certificate given
                  to the candidate after the exam is used by the people who want
                  to work in foreign countries like Canada, Australia, USA, New
                  Zealand, etc.
                </li>
                <br />
                <li>
                  <strong>IELTS Academic: </strong>The result certificate given
                  to the candidate after the exam is used solely by the people
                  who wish to study abroad for their Master’s degree,
                  Postgraduate diploma, Bachelor’s degree, etc in various
                  universities or colleges.
                </li>
                <br />
                <li>
                  A specific score of IELTS is required to become eligible for
                  applying in various institutions or universities and it varies
                  according to the different universities or the institution.
                </li>
              </ul>
            </div>
          </Ieltsmainherocards>
          <Ieltsmainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>4 Modules</h1>
              <ul className='list-inside list-disc font-myfonts'>
                <li>
                  <strong>Listening:</strong> In this module, 4 different audios
                  which are recorded are heard by the candidates. This exam
                  lasts for approximately 30 minutes.
                </li>
                <br />
                <li>
                  <strong>Reading:</strong> In this module, 3 different passages
                  are provided to the candidate and total 40 questions are given
                  in the examination. The exam lasts for 1 hour.
                </li>
                <br />
                <li>
                  <strong>Writing:</strong> In this module, two types of writing
                  tasks are given to the user. The candidates who are appearing
                  for IELTS Academic have to write a report on graph, bar chart,
                  table or map whereas the candidates who are appearing for
                  IELTS General have to write a letter. The Task-2 of Writing
                  part is the same for all the candidates and it consists of
                  writing an essay. The whole writing exam lasts for 1 hour and
                  it is advised to finish Task-1 in 20 minutes and Task-2 in 40
                  minutes.
                </li>
                <br />
                <li>
                  <strong>Speaking:</strong> In this examination, a candidate
                  has to give examination to the examiner in one room and
                  various questions are asked to candidates to assess the
                  speaking skills. The whole test lasts for 11 to 14 minutes and
                  is divided into three parts.
                </li>
                <br />
              </ul>
            </div>
          </Ieltsmainherocards>
          <Ieltsmainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>
                Modes of giving IELTS
              </h1>
              <ul className='list-inside list-disc font-myfonts'>
                <li>
                  IELTS can be given through two modes: Online and Offline.
                </li>
                <br />

                <strong>Offline Mode:</strong>
                <ul className='list-inside list-disc font-myfonts'>
                  <li>
                    Primarily, the IELTS candidate have to book the test through
                    British Council or IDP and pay the fees for the exam. The
                    candidate has to select the preferable exam location and
                    before approximately one week of exam the exact address of
                    the examination centre will be declared.
                  </li>
                  <br />
                  <li>
                    Listening, Reading and Writing exam are given by the
                    candidates in one sitting and overall the test lasts for 2
                    hours 45 minutes. The candidate has the right to choose any
                    available day of exam as IELTS offline exam happens 4 times
                    in a month.
                  </li>
                  <br />
                  <li>
                    The Speaking examination is selected by the candidate and it
                    can happen on the same day as of the Listening, Reading and
                    Writing or it can happen after or before one week of the
                    Listening, Reading and Writing.
                  </li>
                  <br />
                </ul>

                <strong>Online Mode:</strong>
                <ul className='list-inside list-disc font-myfonts'>
                  <li>
                    The procedure to select exam location is same as of the
                    Offline mode. But the only difference is that candidate has
                    to give Listening,Reading and Writing through Computer
                    whereas the Speaking exam is given in the same way as of
                    offline mode.
                  </li>
                  <br />
                  <li>
                    In online mode of examination, all days are available to
                    give exams and hence the candidate can select the
                    appropriate available date for the examination.
                  </li>
                </ul>
              </ul>
            </div>
          </Ieltsmainherocards>
        </ul>
      </div>
    </div>
  );
}

export default Ieltsmainhero;
