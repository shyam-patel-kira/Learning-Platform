import React from 'react';

function Gremainherocards(props) {
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

function Gremainhero() {
  return (
    <div className='font-myfonts bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
      <h1 className='pt-8 text-4xl text-center'>GRE</h1>
      <div className='px-8 my-10 text-gray-50'>
        <ul className='grid grid-cols-2 gap-4'>
          <Gremainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>About GRE</h1>
              <br />
              <ul className='list-disc list-inside font-myfonts'>
                <li>
                  Obtaining a graduate degree will open up a myriad of
                  opportunities.
                </li>
                <br />
                <li>
                  In fact, recent data show how education pays in higher
                  earnings and lower employment rates.
                </li>
                <br />
                <li>
                  Whether you’re considering graduate school, or just looking at
                  your choices, you are taking a big step toward your future.
                </li>
                <br />
                <li>GRE General Test will help you fulfill your dreams.</li>
                <br />
                <li>
                  It is the only admission test for graduate and professional
                  school that lets you skip questions, go back and change
                  answers.
                </li>
              </ul>
            </div>
          </Gremainherocards>

          <Gremainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>
                Who Takes GRE?
              </h1>
              <br />
              <ul className='list-inside list-disc font-myfonts'>
                <li>Primarily, IELTS is divided into two sections:</li>
                <br />
                <li>
                  Prospective graduate applicants from all over the world who
                  are interested in pursuing a master’s degree take GRE General
                  Test.
                </li>
                <br />
                <li>
                  Applicants come from varying educational and cultural
                  backgrounds and the GRE General Test provides schools with a
                  common measure for comparing candidates' qualifications.
                </li>
                <br />
                <li>
                  GRE scores are used by admissions or fellowship panels to
                  supplement your undergraduate records, recommendation letters
                  and other qualifications for graduate-level study.
                </li>
              </ul>
            </div>
          </Gremainherocards>
          <Gremainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>3 Modules</h1>
              <br />
              <ul className='list-inside list-disc  font-myfonts'>
                <li>
                  <strong>Verbal Reasoning:</strong> The ability to interpret
                  and draw conclusions from discourse, reason from incomplete
                  data, comprehend various levels of context, such as literal,
                  figurative, and author’s purpose, summarise text, discern
                  major from minor points, understand the meaning of terms,
                  sentences, and entire texts, and understand the relationship
                  between words and concept.
                </li>
                <br />
                <li>
                  <strong>Quantitative Reasoning:</strong> The ability to
                  comprehend, interpret, and evaluate quantitative data, solve
                  problems using mathematical model, and apply basic arithmetic,
                  algebra, geometry and data analysis.
                </li>
                <br />
                <li>
                  <strong>Analytical Writing:</strong> Examines arguments and
                  supporting facts as well as critical thinking and analytical
                  writing skills such as the ability to articulate and support
                  complex ideas with relevant reasons and examples, and examine
                  claims and accompanying evidence.
                </li>
              </ul>
            </div>
          </Gremainherocards>
          <Gremainherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl font-myfonts'>
                When and Where Do People Take It?
              </h1>
              <br />
              <ul className='list-inside list-disc font-myfonts'>
                <li>
                  The GRE General Test is available on computer at more than
                  1,000 test centers in more than 160 countries.
                </li>
                <br />

                <li>
                  In most regions of the world, the test is available on a
                  continuous basis throughout the year.
                </li>
                <br />
                <li>
                  In Mainland China; Hong Kong, China; Taiwan, China; and Korea,
                  the test is available up to three times per month.
                </li>
                <br />
                <li>
                  In areas of the world where the General Test is not available
                  on computer at physical test centers, the GRE General Test at
                  home option may be offered.
                </li>
                <br />
                <li>
                  The at home test is identical in content, format and on-screen
                  experience to the GRE General Test taken at a test center. It
                  is taken on your own computer at home and is monitored by a
                  human proctor.
                </li>
              </ul>
            </div>
          </Gremainherocards>
        </ul>
      </div>
    </div>
  );
}

export default Gremainhero;
