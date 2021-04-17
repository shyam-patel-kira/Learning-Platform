import React from 'react';
import IeltsSampleTestContentstyle from './IeltsSampleTestContentstyle';

import Line_graph_test_1 from './Images/Line-graph/Line_graph_test_1.JPG';
import Line_graph_test_2 from './Images/Line-graph/Line_graph_test_2.JPG';
import Line_graph_test_3 from './Images/Line-graph/Line_graph_test_3.JPG';

import Pie_chart_test_1 from './Images//Pie-chart/Pie_chart_test_1.JPG';
import Pie_chart_test_2 from './Images//Pie-chart/Pie_chart_test_2.JPG';
import Pie_chart_test_3 from './Images//Pie-chart/Pie_chart_test_3.JPG';

import Bar_graph_test_1 from './Images/Bar-graph/Bar_graph_test_1.JPG';
import Bar_graph_test_2 from './Images/Bar-graph/Bar_graph_test_2.JPG';
import Bar_graph_test_3 from './Images/Bar-graph/Bar_graph_test_3.JPG';

import map_test_1 from './Images/Map/map_test_1.JPG';
import map_test_2 from './Images/Map/map_test_2.JPG';
import map_test_3 from './Images/Map/map_test_3.JPG';

import table_test_1 from './Images/Table/table_test_1.JPG';
import table_test_2 from './Images/Table/table_test_2.JPG';
import table_test_3 from './Images/Table/table_test_3.JPG';

import Process_test_1 from './Images/Diagram/Process_test_1.JPG';
import Process_test_2 from './Images/Diagram/Process_test_2.JPG';
import Process_test_3 from './Images/Diagram/Process_test_3.JPG';

function IeltsSampleTestContent() {
  let x = window.location.href.split('/');
  let id = x[x.length - 1];
  let keyword = x[x.length - 2];

  if (keyword === 'line-graph') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            id={id}
            title='Line-Graph'
            question='Question:'
            question_heading='You should spend about 20 minutes on this task.The graph shows average annual expenditures on cell phone and residential phone services between 2001 and 2010. Summarize the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            img={Line_graph_test_1}
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            id={id}
            title='Line-Graph'
            question='Question:'
            question_heading='The graph below shows the number of books read by men and women at Burnaby Public Library from 2011 to 2014. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'
            img={Line_graph_test_2}
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            id={id}
            title='Line-Graph'
            question='Question:'
            question_heading='The graph below shows relative price changes for fresh fruits and vegetables, sugars and sweets, and carbonated drinks between 1978 and 2009. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'
            img={Line_graph_test_3}
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
          <IeltsSampleTestContentstyle
            title='Pie-Chart'
            question='Question:'
            question_heading="You should spend about 20 minutes on this task. The pie graphs below show the result of a survey of children's activities. The first graph shows the cultural and leisure activities that boys participate in, whereas the second graph shows the activities in which the girls participate. Write a report describing the information shown in the two pie graphs. Write at least 150 words"
            img={Pie_chart_test_1}
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Pie-Chart'
            question='Question:'
            question_heading='The pie charts below give information about the composition of household rubbish in the United Kingdom in two different years. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'
            img={Pie_chart_test_2}
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Pie-Chart'
            question='Question:'
            question_heading="You should spend about 20 minutes on this task. The pie graphs below show the result of a survey of children's activities. The first graph shows the cultural and leisure activities that boys participate in, whereas the second graph shows the activities in which the girls participate. Write a report describing the information shown in the two pie graphs. Write at least 150 words"
            img={Pie_chart_test_3}
          />
        </div>
      );
    }
  }

  //Bar-Graph
  else if (keyword === 'bar-graph') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Bar-Graph'
            question='Question:'
            question_heading='You should spend about 20 minutes on this task. The bar chart shows the number of visitors to three London Museums between 2007 and 2012. Summarize the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            img={Bar_graph_test_1}
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Bar-Graph'
            question='Question:'
            question_heading='Bar graph below shows the amount of carbon emissions in different countries during three different years. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'
            img={Bar_graph_test_2}
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Bar-Graph'
            question='Question:'
            question_heading='You should spend about 20 minutes on this task. The chart below shows gives information about Southland’s main exports in 2000,*20.., and future projections for 2025. Summarise the information by selecting and reporting the main features, and making comparisons where relevant. Write atleast 150 words.'
            img={Bar_graph_test_3}
          />
        </div>
      );
    }
  }
  //Table
  else if (keyword === 'table') {
    if (id === '1') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Table'
            question='Question:'
            question_heading='You should spend about 20 minutes on this task. The table below shows consumer spending on different items in 5 different countries.Summarize the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            img={table_test_1}
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Table'
            question='Question:'
            question_heading='The table below gives information about the percentage of land covered by forest in various countries in 1990 and 2005 with estimated figures for 2015. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'
            img={table_test_2}
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Table'
            question='Question:'
            question_heading='The table below gives information about past and projected population figures in various countries for different years. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'
            img={table_test_3}
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
          <IeltsSampleTestContentstyle
            title='Maps'
            question='Question:'
            question_heading='You should spend about 20 minutes on this task. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            img={map_test_1}
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Maps'
            question='Question:'
            question_heading='You should spend about 20 minutes on this task. Plan A below shows a health centre in 2005. Plan B shows the same place in the present day. Summarise the information by selecting and reporting the main features, and making comparisons where relevant.  Write atleast 150 words'
            img={map_test_2}
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Maps'
            question='Question:'
            question_heading='The two maps below show an island, before and after the construction of some tourist facilities. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words'
            img={map_test_3}
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
          <IeltsSampleTestContentstyle
            title='Diagram'
            question='Question:'
            question_heading='You should spend about 20 minutes on this task. The diagram shows the process of making coffee. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
            img={Process_test_1}
          />
        </div>
      );
    }
    if (id === '2') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Diagram'
            question='Question:'
            question_heading='The diagram below shows the life cycle of the salmon. Summarise the information by selecting and reporting the main features and make comparisons where relevant.'
            img={Process_test_2}
          />
        </div>
      );
    }
    if (id === '3') {
      return (
        <div>
          <IeltsSampleTestContentstyle
            title='Diagram'
            question='Question:'
            question_heading='The diagram below shows how potato chips are made. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.'
            img={Process_test_3}
          />
        </div>
      );
    }
  }
}

export default IeltsSampleTestContent;
