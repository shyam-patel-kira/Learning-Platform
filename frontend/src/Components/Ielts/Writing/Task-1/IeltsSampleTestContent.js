import React from 'react';
import IeltsSampleTestContentstyle from './IeltsSampleTestContentstyle';
import Line_graph_test_1 from './Line_graph_test_1.JPG'
import Pie_chart_test_1 from './Pie_chart_test_1.JPG'
import Bar_graph_test_1 from './Bar_graph_test_1.JPG';
import map_test_1 from './map_test_1.JPG'
import table_test_1 from './table_test_1.JPG'
import Process_test_1 from './Process_test_1.JPG'

function IeltsSampleTestContent() {
  let x = window.location.href.split('/');
  let keyword = x[x.length - 1];

  if (keyword === 'line-graph') {
    return (
      <div>
        <IeltsSampleTestContentstyle
          title='Line-Graph'
          question='Question:'
          question_heading='You should spend about 20 minutes on this task.The graph shows average annual expenditures on cell phone and residential phone services between 2001 and 2010. Summarize the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.'
          img={Line_graph_test_1}
        />
      </div>
    );
  } else if (keyword === 'pie-chart') {
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
  } else if (keyword === 'bar-graph') {
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
  } else if (keyword === 'table') {
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
  } else if (keyword === 'maps') {
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
  } else if (keyword === 'diagram') {
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
}

export default IeltsSampleTestContent;
