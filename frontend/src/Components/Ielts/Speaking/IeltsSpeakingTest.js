import React from 'react';
import IeltsSpeakingQuestions from './IeltsSpeakingQuestions';
import IeltsSpeakingTestStyle from './IeltsSpeakingTestStyle';

function IeltsSpeakingTest() {
  let x = window.location.href.split('/');
  let mytest = x[x.length - 1];

  if (mytest === '1') {
    return (
      <div>
        <IeltsSpeakingQuestions
          id={mytest}
          detail='Use the below audio to text converter while speaking and press the
          save button to save what you have spoken.'
          topic1='Part-1 Questions'
          q1='Do you like texting?'
          q2='Do you prefer sending or receiving message?'
          q3='Have you ever received a confusing text message?'
          q4='Are you interested in sports?'
          q5='Which sports do you like the most?'
          q6='What sports do people in your country like to play?'
          topic2='Part-2 Questions'
          q7='Describe a long car journey you went on. Speak for 1.5 to 2 minutes.'
          topic3='Part-3 Questions'
          q8='What will cars be like in the future?'
          q9="What's the difference between men's and women's preference on cars?"
          q10='Why do people like to have private cars?'
          q11='How to buy private cars in India?'
        />
        <IeltsSpeakingTestStyle />
      </div>
    );
  }

  if (mytest === '2') {
    return (
      <div>
        <IeltsSpeakingQuestions
          id={mytest}
          detail='Use the below audio to text converter while speaking and press the
          save button to save what you have spoken.'
          topic1='Part-1 Questions'
          q1='What kind of teacher do you like best?'
          q2='Who was your favourite teacher when you were young?'
          q3='Would you want to be a teacher in the future?'
          q4='How often do you look at yourself in the mirror everyday?'
          q5='Have you ever bought mirrors?'
          q6='Would you use mirrors to decorate rooms?'
          topic2='Part-2 Questions'
          q7='Describe a place you visited that has been affected by pollution. Speak for 1.5 to 2 minutes.'
          topic3='Part-3 Questions'
          q8='What kind of pollutions are there in your country?'
          q9='What can individuals do to protect our environment?'
          q10='Do you think individuals should be responsible for pollution?'
          q11='Why is there a need to involve government in environmental protection?'
        />
        <IeltsSpeakingTestStyle />
      </div>
    );
  }

  if (mytest === '3') {
    return (
      <div>
        <IeltsSpeakingQuestions
          id={mytest}
          detail='Use the below audio to text converter while speaking and press the
          save button to save what you have spoken.'
          topic1='Part-1 Questions'
          q1='Do you like robots?'
          q2='What kind of robots would you like to have?'
          q3='Will robots change society significantly?'
          q4='What is the importance of gifts?'
          q5='Is there any pressure on us to buy presents?'
          q6='How often do you buy other gifts?'
          topic2='Part-2 Questions'
          q7='Describe a line that you remeber from a poem or a song. Speak for 1.5 to 2 minutes.'
          topic3='Part-3 Questions'
          q8='Are you good at memorizing things?'
          q9='Do you think children like the rhythm of the songs or poems?'
          q10='What can people learn from songs or poems?'
          q11='Do you think it is easier for children to learn songs or poems than adults?'
        />
        <IeltsSpeakingTestStyle />
      </div>
    );
  }

  if (mytest === '4') {
    return (
      <div>
        <IeltsSpeakingQuestions
          id={mytest}
          detail='Use the below audio to text converter while speaking and press the
          save button to save what you have spoken.'
          topic1='Part-1 Questions'
          q1='Is it good for young people to grow up in the city?'
          q2='Have you ever been to the seaside?'
          q3='Do you live in the city or countryside?'
          q4='Why do you think it is important to learn a foreign language?'
          q5='What is the most difficult part of learning a foreign language for you?'
          q6='What is the best way to memorize new words?'
          topic2='Part-2 Questions'
          q7='Describe a family which you like and are happy to know.Speak for 1.5 to 2 minutes.'
          topic3='Part-3 Questions'
          q8='Who is usually the leader in the Indian family?'
          q9='How do grandparents take care of their children?'
          q10="What's the most important quality of a good parent?"
          q11='How can parents learn about parenting?'
        />
        <IeltsSpeakingTestStyle />
      </div>
    );
  }

  if (mytest === '5') {
    return (
      <div>
        <IeltsSpeakingQuestions
          id={mytest}
          detail='Use the below audio to text converter while speaking and press the
          save button to save what you have spoken.'
          topic1='Part-1 Questions'
          q1='How do you feel about birds?'
          q2='Are there many birds near your home?'
          q3='Do Indian people like raising pet birds?'
          q4='Do you often travel by boat?'
          q5='Would you like to go on a boat tour?'
          q6='Do many people in your country own their boat?'
          topic2='Part-2 Questions'
          q7='Describe a time you saw children behave badly in public. Speak for 1.5 to 2 minutes.'
          topic3='Part-3 Questions'
          q8='What bad behaviour do children usually have?'
          q9='How should parents stop their children from behaving badly at public?'
          q10='Are parents these days stricter than in the past?'
          q11='Whose influence on children is more? Parents or their friends ?'
        />
        <IeltsSpeakingTestStyle />
      </div>
    );
  }
}

export default IeltsSpeakingTest;
