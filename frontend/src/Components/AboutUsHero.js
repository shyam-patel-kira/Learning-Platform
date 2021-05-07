import React from 'react';
import image from './who-are-we.png';
import image1 from './shyam.jpeg';
import image2 from './jay.JPG';
import image3 from './shantanu.jpg';

function AboutUsHero() {
  return (
    <div className='font-myfonts'>
      <div className='pt-30 px-5 pb-0 box-border mx-0.5'>
        <table className='w-full bg-transparent box-border mb-4'>
          <tbody>
            <tr>
              <td className='w-4/12 p-0 align-bottom box-border'>
                <img src={image} alt='' />
              </td>
              <td className='w-8/12 box-border p-0'>
                <div className='mt-10 text-5xl mb-7 leading-10 box-border'>
                  <b>Imagining Teaching</b> and<b> Learning</b>
                </div>
                <div className='mt-10 mb-7 text-4xl box-border'>
                  <strong>Why we exist?</strong>
                </div>
                <div className='text-lg box-border'>
                  The demand and utilization of learning platforms are growing
                  very fast everyday. Online Learning meets the thirst for
                  information and delivers the online content to the learner at
                  any place, at any time and at any age through a wide variety
                  of online solutions compared to conventional learning systems.
                </div>
                <div className='text-lg mt-6 mb-10 box-border'>
                  Our vision at LearnZilla is to reimagine and evolve the way
                  learning have been happening for decades. By combining
                  excellent teaching material, engaging content and superior
                  technology we are able to create a superior learning
                  experience for students and aid in their outcome improvement,
                  which is unlike any offline experience.
                </div>
                <div className='mx-0 box-border text-lg'>
                  Teaching and learning are set to transform at a rapid pace and
                  our mission at LearnZilla is to accelerate these
                  transformations.
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='bg-gray-200 text-center pl-48 pr-48 -mx-4'>
        <div className='mt-12 pt-4 mb-7 text-4xl box-border'>
          <strong>Who are we?</strong>
        </div>
        <div className='mb-5 box-border text-xl'>
          LearnZilla is a web application which lets you learn for the
          competitive exams with interactive videos and prepare for the exams
          through different exams. The proposed product is beneficiary for the
          students who want to pursue higher education in foreign countries.
          LearnZilla features 2 different competitive exam courses: GRE and
          IELTS. Both the courses have a vast understanding of the topics
          involved along with the exams.
        </div>
        <div className='mb-5 box-border text-xl'>
          Student can understand and learn the topic and then give exams of that
          topic in which they feel they are weak. The teaching materials are in
          their purest form. Student will also get the analysis of the test
          attempted.
        </div>

        <div className='mb-5 text-xl pb-4'>
          LearnZilla's founders
          <strong> Shyam Patel, Jay Shah and Shantanu Sheth</strong> started
          this small startup as a part of their Final year Project.
        </div>
      </div>

      <table className='w-full mt-16 max-w-full bg-transparent box-border mb-8'>
        <tbody className='box-border'>
          <tr className='box-border'>
            <td className='w-1/4 align-bottom p-0 box-border text-center'>
              <div className='text-2xl box-border'>Shyam Patel</div>
              <div className='text-sm text-gray-400 box-border mb-2'>
                Co-Founder, CEO
              </div>
              <img
                className='h-shyamh w-full max-w-xs align-middle ml-24 border-0 box-border'
                src={image1}
                alt=''
              ></img>
            </td>
            <td className='w-1/4 align-bottom p-0 box-border text-center'>
              <div className='text-2xl box-border'>Jay Shah</div>
              <div className='text-sm text-gray-400 box-border mb-2'>
                Co-Founder, CEO
              </div>
              <img
                className='w-full max-w-xs align-middle ml-24 border-0 box-border'
                src={image2}
                alt=''
              ></img>
            </td>
            <td className='w-1/4 align-bottom p-0 box-border text-center'>
              <div className='text-2xl box-border'>Shantanu Sheth</div>
              <div className='text-sm text-gray-400 box-border mb-2'>
                Co-Founder, CEO
              </div>
              <img
                className='w-full max-w-xs align-middle ml-24 border-0 box-border'
                src={image3}
                alt=''
              ></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutUsHero;
