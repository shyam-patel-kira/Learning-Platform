import React from 'react';
import IeltsSampleWritingstyle from './IeltsSampleWritingstyle';
import Line_graph_q1 from './Images/Line-graph/Line_graph_q1.JPG';
import Line_graph_q2 from './Images/Line-graph/Line_graph_q2.JPG';
import Pie_Chart_q1 from './Images/Pie-chart/Pie_Chart_q1.JPG';
import Pie_Chart_q2 from './Images/Pie-chart/Pie_Chart_q2.JPG';
import map_q1 from './Images/Map/map_q1.JPG';
import map_q2 from './Images/Map/map_q2.JPG';
import Table_q1 from './Images/Table/Table_q1.JPG';
import Table_q2 from './Images/Table/Table_q2.JPG';
import process_q1 from './Images/Diagram/process_q1.JPG';
import process_q2 from './Images/Diagram/process_q2.JPG';
import Bar_graph_q1 from './Images/Bar-graph/Bar_graph_q1.JPG';
import Bar_graph_q2 from './Images/Bar-graph/Bar_graph_q2.JPG';

function IeltsSampleWritingContent(props) {
  let x = window.location.href.split('/');
  let id = x[x.length - 1];
  let keyword = x[x.length - 2];

  if (keyword === 'line-graph') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Line Graph'
            question='Question:'
            question_heading_1='The line graph gives information about the number of Iranian, Greek and Turkish students who enrolled at Sheffield University between 2005 and 2009. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={Line_graph_q1}
            answer='Answers'
            para1='The line graph illustrates the total number of students who belonged to three different countries that is Iran,Greece as well as Turkey and had matriculated at Sheffield University over 4 years from 2005 to 2009.'
            para2='Overall, it can be apparently seen from the graph that the number of students who registered from Greece decreased over the period given, while students enrolling from other two nations, it surged. At the start of the period, maximum students enrolled from Greece,whereas in 2007, university got the highest registration from Turkish students.In the final year, more number of students from Iran joined the university.'
            para3='With regards to the enrolment of Iranian students, approximately 40 students joined in the beginning year which gradually ascended to matriculation of more than 80 students in 2008 before elevating dramatically to 160 enrolments in 2009.Likewise, 20 students were enrolled from Turkey in the first year after which the graph remained steady over the given period and just more than 120 students joined in 2009.'
            para4='On the contrary, around 180 students matriculated from Greece which marginally declined to enrollment of just less than 160 students in the subsequent year.However, graph outstandingly plummeted, as almost 70 students registered in 2007 before modestly falling down to just more than 40 students in 2009.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Line Graph'
            question='Question:'
            question_heading_1='The chart below shows the changes that took place in three different areas of crime in Panama City from 2010 to 2019. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={Line_graph_q2}
            answer='Answers'
            para1='The chart illustrates the altering of crime rates in categories like burglary,car theft and robbery that happened in the city of Panama over 9 years from 2010 to 2019.'
            para2='Overall, it can be apparently seen from the graph that burglary decreased over the period given,while the graph of stealing cars remained fluctuating, followed by robbery, which was relatively stable from 2010 to 2019.'
            para3='With regards to the number of incidents due to robbery, it began with accounting nearly 700 incidents and then peaked at almost 900 incidents in 2012 before slightly falling down to 500 in 2015.However, incidents again rose at a consistent rate and approximately 700 incidents took place in 2017 which subsequently remained stable in 2019.Incidents regarding the stealing of cars were reported same (around 2800) during the first three consecutive years.Although, major downfall was witnessed regarding the same, as only 2000 incidents took place in 2013 before gradually elevating to account nearly similar number of incidents that took place in starting year, in 2019.'
            para4='On the contrary, the crime that took place through burglary reached at the topmost by registering more than 3500 incidents in 2011 which were below 3500 in the initial year.Despite of this, incidents plummeted at a substantial rate and only 1000 of them took place in 2015.However, in the subsequent year it again incremented to 1500 incidents before becoming modestly stable to report approximately 1400 incidents in last year.'
          />
        </div>
      );
    }
  }

  //Pie-Chart
  else if (keyword === 'pie-chart') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Pie-Chart'
            question='Question:'
            question_heading_1=' The charts below show local government expenditure in 2010 and 2015.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={Pie_Chart_q1}
            answer='Answers'
            para1='The two pie charts illustrate the expenses made by local government percentage wise in nine various sectors in the years 2010 and 2015.'
            para2='Overall, in both years, the most significant areas on which money were spent were education,healthcare and pensions, which together accounted for over half of the government expenditure, while transport,culture and leisure and other sectors made up the smallest part of the chart.'
            para3='The expenditure on welfare comprised of 8% in the first year and this showed a slight increase of 5% in 2015.Likewise, expenses in the area of interest on borrowing was 5% in 2010, which subsequently doubled to 10% in 2015.However, the expenses on pensions and other sectors remained constant in both years at 19% and 1% respectively.'
            para4='On the contrary, expenses were reduced by 3% in the education sector in 2015, whereas it marginally declined by a mere 1% in healthcare domain and became 20% in 2015.Similarly, in 2010 expenses on transport and culture & leisure was 3% and 2% respectively, which further decreased by 2% and 1%.With regards to the defence sector, the amount of money spent were 17% in 2010 and it modestly dipped to 14% in the final year.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Pie-Chart'
            question='Question:'
            question_heading_1='The pie charts below show the spending of a school in the UK from 1981 to 2001.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={Pie_Chart_q2}
            answer='Answers'
            para1='The two pie charts illustrate the differences between expenses spent in a school in the UK in three different years 1981,1991 and 2001.'
            para2='Overall, it is clearly apparent that school spent the highest amount of money on the salary of teachers in all the years given, while on the contrary, least amount of money had been spent on the insurance for 3 years.'
            para3='The salary of other staff was more than a quarter in the initial year, which modestly declined to 22% in 1991 before gradually decreasing further more by 7% in 2001.In contrast, expenses made on the insurance was only 2% in the starting year, which marginally rose by 1% in 1991 followed by another 5% increment in 2001.'
            para4='On the other hand, the expenditure spent on salary of teachers was 40% in 1981 which rose to half of the total after ten years before getting dwindled by 5% in 2001.Similarly, expenses made on ressources like books was 15% in the first year before getting increased to one fifth in 1991, followed by sudden dip to 9% in 2001.Moreover, the amount of money spent on furniture and other equipments was 15% in 1981, which subsequently fell down by 10% in 1991, and ultimately it outstandingly elevated to 23% in 2001.'
          />
        </div>
      );
    }
  }

  //Bar-graph
  else if (keyword === 'bar-graph') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Bar Graph'
            question='Question:'
            question_heading_1='The chart below shows the places visited by different people living in Canada.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={Bar_graph_q1}
            answer='Answers'
            para1='The chart gives information about the kinds of leisure activity engaged in by three distinct groups: native Canadians, recently arrived immigrants from English-speaking countries and new migrants for whom English is not the first language in their country.'
            para2='Overall, it is perhaps unsurprising that Canadians prefer the cinema to the theatre, but the popularity of the library with new migrants may reflect the financial circumstances of these new citizens.'
            para3='The cinema is by far the most popular free-time activity listed in the chart for those with English as their first language — 70% of non-migrants and 65% of English-speaking migrants. Half the migrants from non-English-speaking countries also go to see a film but interestingly, 5% more of this group prefer the library to the cinema. Roughly 40% of the other two groups say they visit the library.'
            para4='Zoos are visited most by half of the English-speaking migrants compared to just over 40% of those born in Canada and approximately 35% of the migrants born where English is not widely spoken. The theatre is least popular for all concerned, with only 10% of non-English-speaking migrants attending, while double the number of native Canadians go to see a play. A quarter of those born in English-speaking countries are theatre-goers.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Bar Graph'
            question='Question:'
            question_heading_1='The graph below shows the percentage of part-time workers in each country of the United Kingdom in 1980 and 2010. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={Bar_graph_q2}
            answer='Answers'
            para1='The bar chart shows the percentage of people who have part-time jobs in the countries that make up the United Kingdom, both in 1980 and in 2010.'
            para2='Overall, there has generally been a small increase in part-time workers from 1980 to 2010, except in Northern Ireland. The graph also shows that England and Wales have far more part-time workers than Northern Ireland and Scotland.'
            para3='In 1980, 25% of people in England worked part time. The only country with a greater percentage of part-time workers was Wales, with around 33% working part time. Both countries saw an increase in the percentage of people working part time in 2010. In England, the percentage rose to over 30% and in Wales percentage rose to just over 35%.'
            para4='Scotland had the smallest percentage of part-time workers in 1980, with just over ten per cent. However, this rose to almost 20% in 2010 which is a large increase. Lastly, Northern Ireland was the only country which had a decreasing percentage of part-time workers. In 1980, it had around 15% of people in part-time work. This decreased by a couple of per cent in 2010.'
          />
        </div>
      );
    }
  } else if (keyword === 'table') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Table'
            question='Question:'
            question_heading_1='The table below shows the proportion of income spent on 4 common items in the UK in 1998.Write at least 150 words.'
            img_1={Table_q1}
            answer='Answers'
            para1='The table represents the information about the percentage proportion of money spent by various categories of people on 4 mutual items in the UK in the year 1998.'
            para2='Overall, it is clearly apparent that most of the income was spent on music, while the lowest amount of money was spent on videos.The highest percentage of money was spent by women on food, whereas the majority of money were paid for electronic equipment by children.'
            para3='Women’s expenditure on food was by far the highest at 39%, followed by adults and men constituting a quarter and 14% respectively.However, the proportion of food purchased by children,boys and girls was in the range between 9% to 11%.With regards to electronic equipment, children spent their expenditure around 25%.'
            para4='On the other hand, the proportion of income used for buying music by children,boys and girls was the highest at approximately 40% each as compared to adults,men and women who had similar figures of 5%.Likewise, the spending on videos by adults,men and women was insignificant, ranging between 0.5% to 2%, however nearly one fifth of income was spent on it by boys, followed by 17% expenditure of girls.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Table'
            question='Question:'
            question_heading_1='The table below gives information about the employment sectors in which people from 3 age groups worked.Write at least 150 words.'
            img_1={Table_q2}
            answer='Answers'
            para1='The table represents the data about people having different age groups and belonging to various sectors of the employment.'
            para2='Overall,the manufacturing sector comprised the majority of the people, while least number of people were employed for the accountancy sector.Moreover, majority of the youngest people were engaged in the retail sector and the people of the eldest group primarily worked in the manufacturing company.'
            para3='With regards to the youngest group, almost a quarter of them were working in the retail sector, followed by 21 people in other sectors.Likewise, similar number of people(12) were present in both manufacturing and health companies, whereas on the other hand, the number of people working in different firms was below 10.The people who were having age between 25 to 40 primarily worked in other sectors(18).15 people were accounted for working in both manufacturing and health firms, followed by 12 people in education and local government sectors.The number of people working in agriculture, catering and retail were approximately half as those working in health department.Accountancy constituted of only 2 people, while double number of people were employed in law.'
            para4='The eldest group had the majority of people working(23) and local government(18). Nearly half of the people were working in the education and health department when compared to manufacturing company.The proportion of people working in catering and law was similar(4) along with 9 people working in both agriculture and other sectors.Moreover, people employed in accountancy were 50% lower than those for retail sector.'
          />
        </div>
      );
    }
  }

  //Maps
  else if (keyword === 'maps') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Maps'
            question='Question:'
            question_heading_1='The map below is of the town of Canterbury. A new school (S) is planned for the area. The map shows two possible sites for the school.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={map_q1}
            answer='Answers'
            para1='The map represents two proposed locations for the construction of the new school for the town of Canterbury.'
            para2='Overall, it is clearly apparent that one school site(S1) can be built at the border of a residential area, while a second site can be built in the town centre.'
            para3='The first potential location(S1) of the school is outside the housing area of the town, and is lying towards the north-east region of the town centre.Moreover, this location would be ideal for the students who will join from Sturry, whose population is 7000, whereas on the other hand, students coming from Chartham,which is present in the south-west of town centre and having population of 4500, will have to travel more distance.'
            para4='In contrast, the suggested location, S2, is in the south of the university, which is present in both the areas of housing and countryside.Clearly,there are more benefits of this location as it is equidistant from both Chartham as well as Sturry.There are two main roads just outside the no traffic zone, one connects Sturry with S2, while the other connects to Charthom. Furthermore, it would be easy for the students who are living around the town centre or in the housing area to reach the school. '
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Maps'
            question='Question:'
            question_heading_1='The maps below show the changes that have taken place at Queen Mary Hospital since its construction in 1960.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={map_q2}
            answer='Answers'
            para1='The maps illustrate how Queen Mary hospital has developed since 1960 when it was built originally.'
            para2='Overall, the hospital saw a significant growth although some facilities for shopping and land for farming did not develop as much as cancer centres.'
            para3='In 1960, the hospital and the shopping centre were the only two buildings located along the main road.There was a large parking area for cars which was situated right behind the hospital and to the right of some farmland.Twenty years later in 1980, the shopping centre was demolished and replaced by a centre regarding cancer, as well as a block of pharmacy was joined with the hospital.Likewise, the farmland was also replaced by the school for nursing, but the car park remained unchanged.'
            para4='In 2000, the cancer centre expanded, as a result of which the land previously allocated to nursing school was added to it.However, the area for the car parking along with the nursing school dwindled from the original size.'
          />
        </div>
      );
    }
  }
  //Diagram
  else if (keyword === 'diagram') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Diagram'
            question='Question:'
            question_heading_1='The diagram below shows the recycling process of aluminium cans.Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={process_q1}
            answer='Answers'
            para1='The diagram provides information about how aluminium is being recycled by performing different steps.'
            para2='Overall, the whole process comprises 7 distinctive stages, beginning with the cans being thrown and eventually ending with the production of new cans.'
            para3='The recycling of aluminium initially begins when the used cans are being thrown in the dustbin which is specially used for collecting aluminium cans.In the next step, the garbage is poured into the truck with the help of garbage collectors.After that, the garbage is cleaned,sorted,shredded and compressed before it can be heated at a relevant temperature which is suitable for the process of melting.'
            para4='Subsequently, the aluminium metal is rolled flatly between the thickness of 2.5mm and 6mm.Following this, now it is being ready for recycling into a new package of containers.Ultimately, cans can now be sold among the public and then they can be reused.In the UK, 74% of all aluminium cans that are sold are recycled.'
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleWritingstyle
            title='Diagram'
            question='Question:'
            question_heading_1='The diagrams below give information about the manufacture of frozen fish pies. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.Write at least 150 words.'
            img_1={process_q2}
            answer='Answers'
            para1='The diagrams illustrate how the fish pies which are frozen are produced by performing different steps.'
            para2='Overall, the whole process comprises several distinctive steps, beginning with the advanced delivery of potatoes and ending with storing or dispatching the pies.It is also noticeable that primary ingredients of fish pie are peas,sauce,fish and sliced potatoes.'
            para3='The production of fish pie begins initially when the potatoes are delivered priorly before one month.Moreover, in the succeeding stage, potatoes are cleaned,peeled and being cut down in smaller slices.After that, potatoes are boiled inside a container and then chilled before being stored until needed.'
            para4='On the other hand, within twelve hours of being delivered to the factory, the fresh fish is prepared by addition of some lemon juice and salt.Nextly, it is being heated into steam oven for some time before the removal of skins and bones by some labourers.Following this, it is inspected by a person and subsequently pies are assembled in microwaveable container.Peas and sauce, which have also been prepared are added to the fish and pie is covered with the layer of potato slices which were stored priorly.Ultimately, the pies are wrapped and frozen before they are ready to dispatched or stored in some factory.'
          />
        </div>
      );
    }
  }
}

export default IeltsSampleWritingContent;
