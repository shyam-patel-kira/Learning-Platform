import React from 'react';
import IeltsSampleTestTask2style from './IeltsSampleTestTask2style';

function IeltsSampleTestTask2() {
  let x = window.location.href.split('/');
  let id = x[x.length - 1];
  let keyword = x[x.length - 2];

  //Opinion Based Essay
  if (keyword === 'opinion') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestTask2style
            id={id}
            title='Opinion Based Essay'
            question='Question:'
            question_heading='Today, the high sales of popular goods reflect the power of advertising and not the real need of the society in which they are sold. To what extent do you agree or disagree?'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestTask2style
            id={id}
            title='Opinion Based Essay'
            question='Question:'
            question_heading='Many people assume that the goal of every country should be to produce more materials and goods. To what extent do you agree or disagree that constantly increasing production is an appropriate goal?'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestTask2style
            id={id}
            title='Opinion Based Essay'
            question='Question:'
            question_heading='Modern technology has made it easier for individuals to download copyrighted music and books from the Internet for no charge. To what extent is this a positive or a negative development?'
          />
        </div>
      );
    }
  }

  //Advantage-Disadvantage essay
  else if (keyword === 'adv-disadv') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Advantage-Disadvantage Essay'
            question='Question:'
            question_heading="It is becoming increasingly popular to have a year off between finishing school and going to a university. What are the advantages and disadvantages of this?"
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Advantage-Disadvantage Essay'
            question='Question:'
            question_heading='Some people think that it would be better for large companies and industry to move to regional areas outside large urban centers. Do you think advantages outweigh the disadvantages?'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Pie-Chart'
            question='Question:'
            question_heading="Space exploration costs tax payers an exorbitant amount of money each year. What are the advantages and disadvantages of spending money on space exploration? "
          />
        </div>
      );
    }
  }

  //Solution essay
  else if (keyword === 'solution') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Solution Based Essay'
            question='Question:'
            question_heading='Every country has poor people and every country has different ways of dealing with the poor. What are some of the reasons for poverty? What can be done to help the poor?'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Solution Based Essay'
            question='Question:'
            question_heading="In many developing countries there is a problem with declining quality of air and water from both industry and construction. What measures could be taken to prevent this?"
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Solution Based Essay'
            question='Question:'
            question_heading='Overpopulation in many major urban centers around the world is a major problem. What are the causes of this? How can this problem be solved?'
          />
        </div>
      );
    }
  }
  //Discussion essay
  else if (keyword === 'discussion') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Discussion Essay'
            question='Question:'
            question_heading='Successful sports professionals can earn a great deal more money than people in other important professions. Some people think this is fully justified while others think it is unfair. Discuss both views and give your opinion.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Discussion Essay'
            question='Question:'
            question_heading='Some people believe that visitors to other countries should follow local customs and behaviour. Others disagree and think that the host country should welcome cultural differences. Discuss both views and give your opinion.'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Discussion Essay'
            question='Question:'
            question_heading='Some people prefer to spend their lives doing the same things and avoiding change. Others, however, think that change is always a good thing. Discuss both views and give your opinion'
          />
        </div>
      );
    }
  }

  //Direct Essays
  else if (keyword === 'direct') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Direct Essay'
            question='Question:'
            question_heading='Traditional food is undergoing great changes and is being replaced by new diet. What do you think are the reasons and what do you think about this phenomenon?'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Direct Essay'
            question='Question:'
            question_heading='Discuss the reasons why people define happiness differently and how to obtain happiness?'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestTask2style
            title='Direct Essay'
            question='Question:'
            question_heading='Most people agree that money cannot be happiness. Why is happiness difficult to define? How can people achieve happiness?'
          />
        </div>
      );
    }
  }
}

export default IeltsSampleTestTask2;
