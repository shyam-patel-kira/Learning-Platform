import React from 'react';

function Gretipsandtricksherocards(props) {
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

function Gretipsandtrickshero() {
  return (
    <div className='bg-customdarkblue my-6 mr-14 w-3/4 divide-y-2 text-customwhite font-myfonts'>
      <h1 className='pt-8 text-4xl text-center'>TIPS AND TRICKS</h1>
      <div className='px-8 my-10 text-customwhite'>
        <ul className='grid grid-cols-2 gap-4'>
          <Gretipsandtricksherocards>
            <div>
              <br />
              <ul className='list-disc list-inside'>
                <strong>GRE TIP #1: TACKLING MULTIPLE BLANKS</strong>
                <br />
                <br />
                <p>
                  GRE Text Completion questions can require you to fill in one,
                  two, or three blanks with the correct word—and there’s no
                  partial credit! However, multiple-blank questions aren’t
                  necessarily more difficult than one-blank questions. Remember
                  that with multiple-blank Text Completions, you do not need to
                  tackle the blanks in order; start with the blank that is
                  easiest.
                </p>
                <br />
                <strong>
                  GRE TIP #2: SENTENCE EQUIVALENCE – ELIMINATING ANSWER CHOICES
                </strong>
                <br />
                <br />
                <p>
                  Sentence Equivalence questions present you with one blank and
                  ask you to choose two words from a list of six to fill in that
                  blank. The words need to meet two criteria: (1) They must make
                  sense in the sentence. (2) They must give the sentence the
                  same meaning. This means that process of elimination is a
                  powerful tool.
                </p>
                <br />
                <strong>
                  GRE TIP #3: READING COMPREHENSION – MAPPING THE PASSAGE
                </strong>
                <br />
                <br />
                <p>
                  Prepare to answer these questions by taking notes about the
                  passage’s main idea, the structure of the passage, and any
                  opinions that appear and whose opinions they are. Taking these
                  notes—making a Passage Map—will engage you in active reading,
                  and the notes themselves will help you answer many test
                  questions.
                </p>
                <br />
                <strong>
                  GRE TIP #4: QUANTITATIVE COMPARISON – COMPARE, DON’T CALCULATE
                </strong>
                <br />
                <br />
                <p>
                  Don't waste time calculating the value. Instead, use your
                  knowledge to deduce that could it be either positive,
                  negative, same or it cannot be determined.
                </p>
              </ul>
            </div>
          </Gretipsandtricksherocards>

          <Gretipsandtricksherocards>
            <div>
              <br />
              <ul className='list-disc list-inside'>
                <strong>GRE TIP #5 PROBLEM SOLVING – PICKING NUMBERS</strong>
                <br />
                <br />
                <p>
                  Many questions will give you information in relatively
                  abstract form. You might be given variables instead of numbers
                  or proportions of an unknown total, or you might be asked to
                  apply number properties rules. A great way to bring any
                  question like this down to earth is to pick numbers and then
                  work with the numbers instead of abstract unknowns.
                </p>
                <br />
                <strong>GRE TIP #6: ALGEBRA – SOLVING FOR X</strong>
                <br />
                <br />
                <p>
                  {' '}
                  Here is a useful set of steps for solving most linear
                  equations or inequalities for a variable:
                </p>
                <li>
                  Eliminate any fractions by multiplying both sides by the least
                  common denominator.
                </li>
                <li>
                  Put all terms with the variable you’re solving for on one side
                  by adding or subtracting on both sides.
                </li>
                <li>Combine like terms.</li>
                <li>Divide to leave the desired variable by itself.</li>
                <br />
                <strong>GRE TIP #7: PROPORTIONS</strong>
                <br />
                <br />
                <li>Cross Multiply</li>
                <li>Estimate</li>
                <br />
                <strong>GRE TIP #8: GEOMETRY – RIGHT TRIANGLES</strong>
                <br />
                <br />
                <p>
                  One of the GRE’s favorite shapes is the triangle, and certain
                  triangles have special rules that are worth memorizing. If you
                  know two sides of a right triangle, you can find the third by
                  using the Pythagorean theorem. So, memorizing the triplets
                  will save the time
                </p>
              </ul>
            </div>
          </Gretipsandtricksherocards>
        </ul>
      </div>
    </div>
  );
}

export default Gretipsandtrickshero;
