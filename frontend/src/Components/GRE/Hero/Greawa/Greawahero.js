import React from 'react';
import { Link } from 'react-router-dom';

function Greawahero() {
  return (
    <div className='font-myfonts bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite'>
      <h1 className='pt-8 text-4xl text-center'>Analytical Writing</h1>
      <div className='px-8 my-10 text-customwhite'>
        <div className='px-1 justify-items-start'>
          <h1 className='text-4xl ml-2 mt-4'>Qverview</h1>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <li>
              The Analytical Writing measure tests your critical thinking and
              analytical writing skills.
            </li>
            <li>
              It assesses your ability to articulate and support complex ideas,
              construct and evaluate arguments, and sustain a focused and
              coherent discussion.
            </li>
            <li>It does not assess specific content knowledge.</li>
            <li>
              The Analytical Writing measure consists of two separately timed
              analytical writing tasks:
            </li>
            <ul className='ml-16 mt-2'>Analyze an Issue</ul>
            <ul className='ml-16'>Analyze an Argument</ul>

            <p className='mt-4'>
              The two tasks are complementary in that one requires you to
              construct your own argument by taking a position and providing
              evidence supporting your views on an issue, and the other requires
              you to evaluate someone else's argument by assessing its claims
              and evaluating the evidence it provides.
            </p>
          </div>
        </div>

        <div className='px-1 justify-items-start'>
          <h1 className='text-4xl ml-96 mt-10'>Analyze an Issue</h1>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <p>
              The "Analyze an Issue" task assesses your ability to think
              critically about a topic of general interest and to clearly
              express your thoughts about it in writing. Each Issue topic makes
              a claim that can be discussed from various perspectives and
              applied to many different situations or conditions.
            </p>
            <br />
            <p>
              It is important that you address the central issue according to
              the specific instructions.
            </p>
          </div>
        </div>

        <div className='px-1 justify-items-start'>
          <h1 className='text-4xl ml-96 mt-10'>Analyze an Argument</h1>
          <br />
          <div className='px-12 text-xl justify-items-start'>
            <p>
              The "Analyze an Argument" task assesses your ability to
              understand, analyze and evaluate arguments according to specific
              instructions and to convey your evaluation clearly in your
              writing. Each topic consists of a brief passage in which the
              author makes a case for some course of action or interpretation of
              events by presenting claims backed by reasons and evidence.
            </p>
            <br />
            <p>
              Your task is to discuss the logical soundness of the author's case
              by critically examining the line of reasoning and the use of
              evidence. This task requires you to read the argument and
              instructions carefully. You might want to read the argument more
              than once and make brief notes about points you want to develop
              more fully in your response. In reading the argument, you should
              pay special attention to:
              <li className='mt-2 ml-4'>
                what is offered as evidence, support or proof
              </li>
              <li className='ml-4'>
                what is explicitly stated, claimed or concluded
              </li>
              <li className='ml-4'>
                what is assumed or supposed, perhaps without justification or
                proof
              </li>
              <li className='ml-4'>
                what is not stated, but necessarily follows from or underlies
                what is stated
              </li>
            </p>
            <br />

            <p>
              An important part of performing well on the Argument task is
              remembering what you are not being asked to do:
              <li className='mt-2 ml-4'>
                You are not being asked to discuss whether the statements in the
                argument are true or accurate.
              </li>
              <li className='ml-4'>
                You are not being asked to agree or disagree with the position
                stated.
              </li>
              <li className='ml-4'>
                You are not being asked to express your own views on the subject
                being discussed (as you were in the Issue task).
              </li>
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Greawahero;
