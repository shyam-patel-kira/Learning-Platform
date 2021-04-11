import React from 'react';
import IeltsSampleWritingTask2style from './IeltsSampleWritingTask2style';

function IeltsSampleWritingTask2(props) {
  let x = window.location.href.split('/');
  let id = x[x.length - 1];
  let keyword = x[x.length - 2];

  if (keyword === 'opinion') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Opinion Based Essays'
            question='Question'
            answer='Answer'
            question_heading_1="You should spend about 40 minutes on this task. Some people believe that violence on television and in computer games has a damaging effect on the society. Others deny that these factors have any significant influence on people's behaviour. What is your opinion? Write at least 250 words."
            para1="These days, the amount of violence in media is growing. While some people argue that this trend will undoubtedly lead humans to dangerous future, others claim that it has no damaging effect on the society. I believe that in most cases media violence doesn't affect people's behavior."
            para2="Firstly, I think that people act from their motives, regardless what they see on the television. That is to say, if someone intends to do harm to somebody, that is not because of watching TV or playing computer games, but due to that person's character and education. Although it is generally considered that violent media accustoms viewers to cruelty, I doubt this opinion. In my view, reasonable and intelligent people treat others humanely irrespective of what they see or hear in fictional stories."
            para3='Moreover, video games and television may even reduce social violence by providing a safe outlet for aggressiveness. In other words, truculent people may fight in virtual reality instead of evincing their combative spirit in real world. This may not only help those people, but also reduce the level of social violence in long-term perspective.Finally, despite many claims and assumptions about negative effects of television and computer games I have never seen any proven connection between violent media and illegal activities in social life.'
            para4="Taking everything into consideration, I would say that violence in contemporary media has no substantial influence on people's behavior. Television and computers are not the main factors that shape personal character, and they can even be useful in reducing the level of violence."
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Opinion Based Essays'
            question='Question'
            answer='Answer'
            question_heading_1='Big salary is much more important than job satisfaction. Do you agree or disagree? Provide relevant examples if necessary.'
            para1="It is often argued that it is more advantageous to choose a job with high wage, even if it doesn't appeal to you at all. I completely disagree with this opinion and think that job satisfaction is much more important than salary."
            para2='First of all, I believe that job satisfaction gives people a sense of fulfillment that no money can guarantee. Even if someone is earning a high salary, but feels tensed and compromises with his conscience, this person won’t enjoy his life. While pursuing one’s interests will always bring pleasure and feeling of satisfaction. For example, a lot of famous researchers made their career choices not because of appealing wages, but because they were passionate about science. That’s why it’s more important to choose the kind of work that makes you happy than to look only at a high salary.'
            para3='Secondly, doing what you like keeps you motivated and therefore leads to a career growth. In other words, there is a strong relation between job satisfaction and productivity. People who love their jobs can easily excel in their fields of work and achieve better results than those, who put salary on the first place. For instance, Henry Miller decided to leave his everyday job despite a good wage and ventured to become a writer. And after enduring years of ups and downs he became one of the most famous and well-paid authors of the twentieth century. Thus, advantages of jobs that keep you satisfied outweigh the drawback of a low salary in a long-term perspective.'
            para4='To conclude, I strongly believe that job satisfaction is more beneficial than high salary because it makes people happy and motivated.'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Opinion Based Essays'
            question='Question'
            answer='Answer'
            question_heading_1="You should spend about 40 minutes on this task. Some people believe that violence on television and in computer games has a damaging effect on the society. Others deny that these factors have any significant influence on people's behaviour. What is your opinion? Write at least 250 words."
            para1="These days, the amount of violence in media is growing. While some people argue that this trend will undoubtedly lead humans to dangerous future, others claim that it has no damaging effect on the society. I believe that in most cases media violence doesn't affect people's behavior."
            para2="Firstly, I think that people act from their motives, regardless what they see on the television. That is to say, if someone intends to do harm to somebody, that is not because of watching TV or playing computer games, but due to that person's character and education. Although it is generally considered that violent media accustoms viewers to cruelty, I doubt this opinion. In my view, reasonable and intelligent people treat others humanely irrespective of what they see or hear in fictional stories."
            para3='Moreover, video games and television may even reduce social violence by providing a safe outlet for aggressiveness. In other words, truculent people may fight in virtual reality instead of evincing their combative spirit in real world. This may not only help those people, but also reduce the level of social violence in long-term perspective.Finally, despite many claims and assumptions about negative effects of television and computer games I have never seen any proven connection between violent media and illegal activities in social life.'
            para4="Taking everything into consideration, I would say that violence in contemporary media has no substantial influence on people's behavior. Television and computers are not the main factors that shape personal character, and they can even be useful in reducing the level of violence."
          />
        </div>
      );
    }
  } else if (keyword === 'adv-disadv') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Advantage Disadvantage Essays'
            question='Question'
            answer='Answer'
            question_heading_1='Some people advocate death penalty for those who committed violent crimes. Others say that capital punishment is unacceptable in contemporary society. Describe advantages and disadvantages of death penalty and give your opinion.'
            para1='Many people believe that death penalty is necessary to keep security system efficient in the society. While there are some negative aspects of capital punishment, I agree with the view that without it we will become more vulnerable to violence.'
            para2='Death penalty can be considered unsuitable punishment for several reasons. The strongest argument is that we have no rights to kill other humans. Right to live is the basic right of any human being, and no one can infringe this right, irrespective of the person’s deeds. Moreover, innocent people can face wrongful execution. Such unfair sentences take away lives of innocent people and make other citizens lose faith in law and justice. And besides, sometimes criminals repent of their acts. In this case they should be given a second chance to improve themselves.'
            para3='However, I believe that capital punishment is necessary in the society. Firstly, it is an effective deterrent of major crimes. The best method to prevent a person from committing crime is to show the consequences of his or her actions. For example, the government of Pakistan has controlled the rate of terrorism by enforcing death penalties for the members of terrorist organisations. Secondly, the governments spend large sums of national budget on maintenance of prisoners. Instead, this money can be used for the development of the society and welfare of the people.'
            para4='To sum up, although capital punishment has some disadvantages, I think that it proves to be the best way of controlling criminals, lessening governmental expenses and preventing other people from doing crimes.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Advantage Disadvantage Essays'
            question='Question'
            answer='Answer'
            question_heading_1='In some countries, young people are encouraged to work or travel for a year between finishing high school and starting university studies. Discuss the advantages and disadvantages for young people who decide to do this.'
            para1='Before embarking on college many young people are advised that a year working or travelling may be a good option. This essay will suggest that experience gained and money saved are the biggest advantages of this, but delaying careers and reducing motivation to study are the primary disadvantages.'
            para2='The main advantages of a gap year are learning more about the world and earning money. For students who have just finished secondary school, working or travelling for a year will allow them to learn what life is like outside of the education system. Also, third level education is very expensive and a lot of students decide to work for 12 months and save up money before they begin their studies. The Times recently reported that the average student at a UK university requires over $12,000 per annum just to survive and many drop out because they cannot afford to stay.'
            para3='Despite these advantages, students lose a year that could have been used to advance their future careers and they often get used to working or travelling and don’t want to return to a life of study. As job markets are very competitive, an extra year of experience can make a massive difference when applying for jobs, and those who took a gap year are at a disadvantage. Moreover, some decide to bypass university altogether and go straight into a job that is beneath their capabilities or may not offer the same prospects their future career might have done. For instance, a recent survey by the British Government found that 26% of students who take a gap-year never enter tertiary education.'
            para4='In conclusion, taking a break from studies can be advantageous if it allows people to accumulate savings or learn more about the world. However, they should also be careful that it does not delay the start of their careers and lead to disillusionment with education.'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Advantage Disadvantage Essays'
            question='Question'
            answer='Answer'
            question_heading_1='Some people advocate death penalty for those who committed violent crimes. Others say that capital punishment is unacceptable in contemporary society. Describe advantages and disadvantages of death penalty and give your opinion.'
            para1='Many people believe that death penalty is necessary to keep security system efficient in the society. While there are some negative aspects of capital punishment, I agree with the view that without it we will become more vulnerable to violence.'
            para2='Death penalty can be considered unsuitable punishment for several reasons. The strongest argument is that we have no rights to kill other humans. Right to live is the basic right of any human being, and no one can infringe this right, irrespective of the person’s deeds. Moreover, innocent people can face wrongful execution. Such unfair sentences take away lives of innocent people and make other citizens lose faith in law and justice. And besides, sometimes criminals repent of their acts. In this case they should be given a second chance to improve themselves.'
            para3='However, I believe that capital punishment is necessary in the society. Firstly, it is an effective deterrent of major crimes. The best method to prevent a person from committing crime is to show the consequences of his or her actions. For example, the government of Pakistan has controlled the rate of terrorism by enforcing death penalties for the members of terrorist organisations. Secondly, the governments spend large sums of national budget on maintenance of prisoners. Instead, this money can be used for the development of the society and welfare of the people.'
            para4='To sum up, although capital punishment has some disadvantages, I think that it proves to be the best way of controlling criminals, lessening governmental expenses and preventing other people from doing crimes.'
          />
        </div>
      );
    }
  }

  //Solution
  else if (keyword === 'solution') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Solution Essays'
            question='Question'
            answer='Answer'
            question_heading_1="Influence of human beings on the world's ecosystem is leading to the extinction of species and loss of bio-diversity. What are the primary causes of loss of bio-diversity? What solutions can you suggest?"
            para1='Despite knowing about biodiversity’s importance for a long time, human activity has been causing massive extinctions of different species. This essay will examine the main causes of loss of biodiversity and possible solutions of this problem.'
            para2='The two main causes of species extinction are change of their habitats and overexploitation of natural resources. When humans artificially transform the environment, they destroy vegetation and animals’ natural habitat. For instance, to build new roads people are cutting down the trees and cementing the soil, altering the environment. Because of that, a lot of species are dying out. Also, when the activities connected with capturing and harvesting a natural resource are too intense in a particular area, the resource becomes exhausted. For example, too frequent fishing doesn’t leave enough time for fish to reproduce and makes them disappear. In other words, human activities often deplete local flora and fauna and cause loss of bio-diversity.'
            para3='Some possible solutions to this problem are protecting natural areas and promoting awareness among people. By protecting areas where human activity is limited and avoiding overexploitation of its resources, we can save the untouched environment and prevent species from dying out. Moreover, the next step in fighting bio-diversity loss is informing the general population about the dangers of this problem. This way, people will be more conscious of the environment and won’t overuse or destroy its resources.'
            para4="To conclude, people’s activities that change the environment have negative impact on the world's ecosystem. However, we can significantly lessen the extinction of species by protecting natural areas and enlightening people as to this problem."
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Solution Essays'
            question='Question'
            answer='Answer'
            question_heading_1='Despite a large number of gyms, a sedentary lifestyle is gaining popularity in the contemporary world. What problems are associated with this? What solutions can you suggest?'
            para1='These days a sedentary lifestyle is becoming more and more popular despite a big number of sport facilities. This essay will discuss the main problems associated with this epidemic and propose some possible solutions to avoid them.'
            para2='The main problems caused by inactive lifestyle are obesity and various spine disorders. A growing number of body research shows that long periods of physical inactivity raise a risk of becoming overweight. This is because people burn fewer calories and easily gain weight. What’s more, a lot of studies show that so-called ‘sitting disease’ often results in posture and backbone problems. Due to constant sitting, person loses muscle tissue and curves spine, developing numerous spinal diseases. For example, it has been proven that about 80% of people experience backache at least once a week.'
            para3='In my opinion, the best solution to these problems is promoting active lifestyle. Firstly, millions of people stay less active because they use cars instead of walking. Therefore, an effective way to make people more active is to advertise walking and cycling as safe and attractive alternatives to motorized transport. Moreover, inactive lifestyle is gaining popularity because nowadays a lot of people prefer passive rest to workouts in the gym. And the best way to avoid the hazards of unhealthy living is to obtain a regular dose of physical activity. Thus, promoting gyms and regular exercising would increase the level of activity.'
            para4='In conclusion, leading a sedentary lifestyle causes a lot of health problems, including obesity and spinal diseases. The most effective solution is to increase the level of fitness among the society by advertising physical activity.'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Solution Essays'
            question='Question'
            answer='Answer'
            question_heading_1="Influence of human beings on the world's ecosystem is leading to the extinction of species and loss of bio-diversity. What are the primary causes of loss of bio-diversity? What solutions can you suggest?"
            para1='Despite knowing about biodiversity’s importance for a long time, human activity has been causing massive extinctions of different species. This essay will examine the main causes of loss of biodiversity and possible solutions of this problem.'
            para2='The two main causes of species extinction are change of their habitats and overexploitation of natural resources. When humans artificially transform the environment, they destroy vegetation and animals’ natural habitat. For instance, to build new roads people are cutting down the trees and cementing the soil, altering the environment. Because of that, a lot of species are dying out. Also, when the activities connected with capturing and harvesting a natural resource are too intense in a particular area, the resource becomes exhausted. For example, too frequent fishing doesn’t leave enough time for fish to reproduce and makes them disappear. In other words, human activities often deplete local flora and fauna and cause loss of bio-diversity.'
            para3='Some possible solutions to this problem are protecting natural areas and promoting awareness among people. By protecting areas where human activity is limited and avoiding overexploitation of its resources, we can save the untouched environment and prevent species from dying out. Moreover, the next step in fighting bio-diversity loss is informing the general population about the dangers of this problem. This way, people will be more conscious of the environment and won’t overuse or destroy its resources.'
            para4="To conclude, people’s activities that change the environment have negative impact on the world's ecosystem. However, we can significantly lessen the extinction of species by protecting natural areas and enlightening people as to this problem."
          />
        </div>
      );
    }
  }

  //Direct
  else if (keyword === 'direct') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Direct Essays'
            question='Question'
            answer='Answer'
            question_heading_1='Women and men are commonly seen as having different strengths and weaknesses. Is it right to exclude males or females from certain professions because of their gender?'
            para1='Males and females are often viewed as having differing skill sets. It is agreed that it is correct to exclude people from certain jobs on the basis of their gender, but only in very limited circumstances. This essay will first discuss how physical attributes prevent women from excelling in particular roles; secondly discuss how society at large rejects men from undertaking certain careers, followed by a reasoned conclusion.'
            para2='For many years the general consensus in the armed forces is that women should not be allowed to participate in combat missions. This is because most women lack the brute strength required for this particular occupation and it is therefore right to prevent them from joining the ranks. For example, the American Army recently allowed some women to fight on the front line and the Department of Defence deemed the experiment a failure, due to lack of fighting effectiveness. Despite this, many women have fought in many wars, famously on the Eastern Front for Russia and the Viet Cong in Vietnam, so maybe it is men’s’ attitudes that prevent them performing rather than their stature.'
            para3='Society has yet to accept men in many traditionally female positions, such as nanny or beautician. Businesses feel that it is fine to not hire men for these posts because most of their customers would not be willing to have a man perform that service. I personally know of one example when a friend failed at the interview stage when applying to become kindergarten teacher because he was the wrong sex.'
            para4='To summarise, in limited circumstances it is just to prohibit people from certain occupations, but only if they cannot physically perform or if the general consensus is that it is a single sex post.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Direct Essays'
            question='Question'
            answer='Answer'
            question_heading_1='A number of different medical traditions are now widely known and used: Western medicine (using drugs and surgery), herbal medicine, acupuncture (using needles at certain points of the body), homoeopathy (using minute doses of poisons), and so on. How important is the patient’s mental attitude towards his/her treatment in determining the effectiveness of the treatment?'
            para1='Today, plenty of medical methods are used by professionals to cure humans. These methods have different impacts via different mechanisms to control the development of each disease. I believe that bonding between patient and doctor is extremely important because it can raise the level of confidence between them, and the patient will receive a more accurate therapy.'
            para2='Apparently, despite using modern medication introduced by developed countries, alternative medicine, hypnotism or other traditional methods have not been forgotten yet. In this way, in China, traditional medicine has been used by many professionals teaching medicine in university, and different methods are applied to cure debilitated humans, like putting needles on different parts of feet to relieve musculoskeletal pains. In addition, doctor-patient communication is a very important factor and positive reinforcement is a leading strategy that many health professionals usually use to enhance the level of reliability of each medical treatment. Clearly, having a better self-confidence, a medical doctor can show his or her abilities to cure diseases and become prosperous in finding the causes of their patients’ problems.'
            para3='Another factor why a patient should be familiar with the process of his treatment is that he will become more punctual in using of drugs. Definitely, to reach the maximum of influence of each medication, including modern or alternative medicine, people must use prescribed drugs accurately. A perfect healthcare employee must value his or her patients’ opinions and give the detail of procedure as long as ethical issues of therapy are not being missed. For example, a one being diagnosed with a progressed cancer must be informed how much some alternative medicines might be important than chemotherapy, and their oncoming side effects must precisely be explained to the patient. As a result, this patient will be able to select these therapies instead of usage of chemical therapies.'
            para4='In conclusion, reliability is an essential factor for receiving a better healthcare service. From my point of view, knowing about the details of treatment and having mutual relationship between doctor and patient, are the two important reasons that increase the speed of improvement of diseases.'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Direct Essays'
            question='Question'
            answer='Answer'
            question_heading_1='Women and men are commonly seen as having different strengths and weaknesses. Is it right to exclude males or females from certain professions because of their gender?'
            para1='Males and females are often viewed as having differing skill sets. It is agreed that it is correct to exclude people from certain jobs on the basis of their gender, but only in very limited circumstances. This essay will first discuss how physical attributes prevent women from excelling in particular roles; secondly discuss how society at large rejects men from undertaking certain careers, followed by a reasoned conclusion.'
            para2='For many years the general consensus in the armed forces is that women should not be allowed to participate in combat missions. This is because most women lack the brute strength required for this particular occupation and it is therefore right to prevent them from joining the ranks. For example, the American Army recently allowed some women to fight on the front line and the Department of Defence deemed the experiment a failure, due to lack of fighting effectiveness. Despite this, many women have fought in many wars, famously on the Eastern Front for Russia and the Viet Cong in Vietnam, so maybe it is men’s’ attitudes that prevent them performing rather than their stature.'
            para3='Society has yet to accept men in many traditionally female positions, such as nanny or beautician. Businesses feel that it is fine to not hire men for these posts because most of their customers would not be willing to have a man perform that service. I personally know of one example when a friend failed at the interview stage when applying to become kindergarten teacher because he was the wrong sex.'
            para4='To summarise, in limited circumstances it is just to prohibit people from certain occupations, but only if they cannot physically perform or if the general consensus is that it is a single sex post.'
          />
        </div>
      );
    }
  }

  //Discussion Essay
  else if (keyword === 'discussion') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Discussion Essays'
            question='Question'
            answer='Answer'
            question_heading_1='In today’s competitive world, many families find it necessary for both parents go out to work. While some say the children in these families benefit from the additional income, others feel they lack support because of their parents’ absence. Discuss both these views and give your own opinion. Give reason for your answer and include any relevant examples from your own knowledge or experience.'
            para1='In the past, it was a customary for fathers to be the only breadwinner of the family. Fathers would go out to work and earn money to fulfill the families’ daily needs and mothers would stay home to take care of the children. However, nowadays, it is not rare to find both parents going out to work. Whilst the additional income might bring benefits to everyone especially the children, there are a number of drawbacks that cannot be overlooked. This essay will confer whether or not it is necessary for both parents to go out to earn money for a living.'
            para2='In some families, both parents are required to work not because of their own will, but because circumstances demand them to. As the cost of living is skyrocketing in today’s competitive world, some families might not earn enough to cover their living cost if only one parent goes out to work. That being the case, there is nothing anyone can do to help. However, the benefit of the extra income for the children still remains unchanged. With more income, parents will be able to afford more new toys, a better school, and even vacation abroad.'
            para3='On the other hand, children might feel abandoned due to their parents never being there for them. It is also proven that children’s, whose parents are never at home, are more prone to behavioral problems. For instance, my friend, Elaine, whose parents is always working overnight and is never there for her when she needs them, has to battle with her insecurity of being unwanted every day, she in turn tries to seek the attention of her teachers by behaving badly in the class. From my example, you can see how parents’ absence can affect children in the long run.'
            para4='As far as I am concerned, there is no need for both parents to be working unless it is really necessary. While additional income is benefiting for the children, the presence of a mother will be best for the children’s well-being in the long run.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Discussion Essays'
            question='Question'
            answer='Answer'
            question_heading_1='Development in technology has brought various environmental problems. Some believe that people need to live simpler lives to solve environmental problems. Others, however, believe technology is the way to solve these problems. Discuss both views and give your own opinion.'
            para1='The improvements in technology currently bring about harmful effects on the environment. While some people believe having simpler lives is the only solution, I would argue that technological advances can help to tackle these environmental problems.'
            para2='On the one hand, it is believed that individuals need to live simple lives and rely less on technology. The first suggestion is that people should walk or cycle rather than drive cars. This is because the current number of cars being manufactured and used is increasing, which causes high levels of exhaust fumes and makes air pollution a serious issue. Additionally, people should try to reduce their consumption of electricity so that the exploitation of natural resources such as fossil fuels or nuclear power can be minimized. An example of this idea is the annual event called Earth Hour, where everyone is asked to turn their lights off for sixty minutes.'
            para3='On the other hand, I believe the developments of technology can greatly contribute to environmental protection. Firstly, because of those improvements, people can come up with ways to recycle materials such as paper or glass, which reduces the problem of waste disposal. Secondly, technology can also help to create electricity using renewable resources. For example, many countries in the world have built plants that utilise solar energy to generate power. As a result, it is not necessary to rely on non-renewable resources, and people can create electricity without significantly damaging the environment.'
            para4='In conclusion, while some people think that they should live simpler lives to prevent environmental issues, I would argue that these problems can be dealt with by technological improvements.'
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleWritingTask2style
            title='Discussion Essays'
            question='Question'
            answer='Answer'
            question_heading_1='In today’s competitive world, many families find it necessary for both parents go out to work. While some say the children in these families benefit from the additional income, others feel they lack support because of their parents’ absence. Discuss both these views and give your own opinion. Give reason for your answer and include any relevant examples from your own knowledge or experience.'
            para1='In the past, it was a customary for fathers to be the only breadwinner of the family. Fathers would go out to work and earn money to fulfill the families’ daily needs and mothers would stay home to take care of the children. However, nowadays, it is not rare to find both parents going out to work. Whilst the additional income might bring benefits to everyone especially the children, there are a number of drawbacks that cannot be overlooked. This essay will confer whether or not it is necessary for both parents to go out to earn money for a living.'
            para2='In some families, both parents are required to work not because of their own will, but because circumstances demand them to. As the cost of living is skyrocketing in today’s competitive world, some families might not earn enough to cover their living cost if only one parent goes out to work. That being the case, there is nothing anyone can do to help. However, the benefit of the extra income for the children still remains unchanged. With more income, parents will be able to afford more new toys, a better school, and even vacation abroad.'
            para3='On the other hand, children might feel abandoned due to their parents never being there for them. It is also proven that children’s, whose parents are never at home, are more prone to behavioral problems. For instance, my friend, Elaine, whose parents is always working overnight and is never there for her when she needs them, has to battle with her insecurity of being unwanted every day, she in turn tries to seek the attention of her teachers by behaving badly in the class. From my example, you can see how parents’ absence can affect children in the long run.'
            para4='As far as I am concerned, there is no need for both parents to be working unless it is really necessary. While additional income is benefiting for the children, the presence of a mother will be best for the children’s well-being in the long run.'
          />
        </div>
      );
    }
  }
}

export default IeltsSampleWritingTask2;
