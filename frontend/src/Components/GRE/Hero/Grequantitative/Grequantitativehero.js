import React from 'react';

function Grequantitativeherocards(props) {
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

function Grequantitativehero() {
  const handleTest = event => {
    let x = event.target.id;
    window.location = `/gre-quant-test/${x}`;
  };
  return (
    <div className='bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite font-myfonts'>
      <h1 className='pt-8 text-4xl text-center'>QUANTITATIVE REASONING</h1>
      <div className='px-8 my-10 text-customwhite'>
        <ul className='grid grid-cols-2 gap-4'>
          <Grequantitativeherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl'>
                Measure of Quantitative Reasoning
              </h1>
              <br />
              <ul className='list-disc list-inside'>
                <li>
                  <strong>Number of Questions:</strong> 20 per section
                </li>
                <li>
                  <strong>Alloted Time:</strong> 30 minutes per section
                </li>
                <br />
                <li>
                  Some of the Quantitative Reasoning questions are posed in
                  real-life settings, while others are posed in purely
                  mathematical settings.
                </li>
                <br />
                <li>
                  Many of the questions are “word problems,” which must be
                  translated and modeled mathematically.
                </li>
                <br />
                <p className='text-2xl'>
                  The skills, concepts, and abilities are assessed in the four
                  content areas below:
                </p>{' '}
                <br />
                <li>
                  <strong>Arithmetic</strong> topics include properties and
                  types of integers, such as divisibility, factorization, prime
                  numbers, remainders, and odd and even integers; arithmetic
                  operations, exponents, and roots; and concepts such as
                  estimation, percent, ratio, rate, absolute value, the number
                  line, decimal representation, and sequences of numbers.
                </li>{' '}
                <br />
                <li>
                  <strong>Algebra</strong> topics include operations with
                  exponents; factoring and simplifying algebraic expressions;
                  relations, functions, equations, and inequalities; solving
                  linear and quadratic equations and inequalities; solving
                  simultaneous equations and inequalities; setting up equations
                  to solve word problems; and coordinate geometry, including
                  graphs of functions, equations, and inequalities, intercepts,
                  and slopes of lines.
                </li>{' '}
                <br />
                <li>
                  <strong>Geometry</strong> topics include parallel and
                  perpendicular lines, circles, triangles—including isosceles,
                  equilateral, and 30°-60°-90° triangles—quadrilaterals, other
                  polygons, congruent and similar figures, three-dimensional
                  figures, area, perimeter, volume, the Pythagorean theorem,
                  andangle measurement in degrees.
                </li>
              </ul>
            </div>
          </Grequantitativeherocards>

          <Grequantitativeherocards>
            <div>
              <h1 className='pt-6 mb-2 text-4xl'>
                Quantitative Reasoning measure assesses your:
              </h1>
              <br />
              <ul className='list-inside list-disc'>
                <li>basic mathematical skills</li>
                <li>understanding of elementary mathematical concepts</li>
                <li>
                  ability to reason quantitatively and to model and solve
                  problems with quantitative methods
                </li>
                <br />
                <br />
                <p className='text-2xl'>
                  Quantitative Reasoning section directions:
                </p>{' '}
                <br />
                <li>All numbers used are real numbers.</li>
                <li>
                  All figures are assumed to lie in a plane unless otherwise
                  indicated.
                </li>
                <li>
                  Geometric figures, such as lines, circles, triangles, and
                  quadrilaterals, are not necessarily drawn to scale. That is,
                  you should not assume that quantities such as lengths and
                  angle measures are as they appear in a figure.
                </li>
                <li>
                  Coordinate systems, such as xy-planes and number lines, are
                  drawn to scale; therefore, you can read, estimate, or compare
                  quantities in such figures by sight or by measurement.
                </li>
                <li>
                  Graphical data presentations, such as bar graphs, circle
                  graphs, and line graphs, are drawn to scale; therefore, you
                  can read, estimate, or compare data values by sight or by
                  measurement.
                </li>
              </ul>
            </div>
          </Grequantitativeherocards>
        </ul>

        <div className='px-8 justify-items-center'>
          <h1 className='pt-8 text-4xl text-center'>
            Quantitative Reasoning Question Types:
          </h1>
          <br />
          <div className='px-12 mx-40 text-xl justify-items-center'>
            <li>Quantitative Comparison questions</li>
            <li>Multiple-choice questions—Select One Answer Choice</li>
            <li>Multiple-choice questions—Select One or More Answer Choices</li>
            <li>Numeric Entry questions</li>
          </div>
        </div>
        <br />
        <br />
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-serif list-disc md:list-disc leading-relaxed tracking-normal text antialiased sm:subpixel-antialiased md:antialiased my-4'>
            Give Test
          </h1>

          <div className='flex flex-row justify-evenly w-5/6'>
            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={handleTest}
              id='1'
            >
              Test 1
            </button>

            <button
              className='bg-customnewblue hover:bg-customhoverblue text-customwhite hover:text-customdarkblue transition-all ease-in duration-300 font-bold py-2 px-4 rounded'
              variant='Default'
              onClick={handleTest}
              id='2'
            >
              Test 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grequantitativehero;
