import React from 'react';
//import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Form from './Components/Form';
import Form1 from './Components/Form1';
import Home from './Pages/Home';
import AboutUs from './Components/AboutUs';
import ErrorPage from './Error404.JPG';
import Youtube from './Youtube';

import Ieltsmain from './Pages/Ieltsmain';
import Ieltsreading from './Pages/Ieltsreading';
import Ieltslistening from './Pages/Ieltslistening';
import Ieltswriting from './Pages/Ieltswriting';
import Ieltsspeaking from './Pages/Ieltsspeaking';
import Ieltsreadingtest from './Components/Ielts/Reading/Ieltsreadingtest';
import Ieltslisteningtest from './Components/Ielts/Listening/Ieltslisteningtest';
import IeltsSampleWritingContent from './Components/Ielts/Writing/Task-1/IeltsSampleWritingContent';
import IeltsSampleTestContent from './Components/Ielts/Writing/Task-1/IeltsSampleTestContent';
import IeltsSampleWritingTask2 from './Components/Ielts/Writing/Task-2/IeltsSampleWritingTask2';
import IeltsTask1Topics from './Components/Ielts/Writing/Task-1/IeltsTask1Topics';
import IeltsTask2Topics from './Components/Ielts/Writing/Task-2/IeltsTask2Topics';
import IeltsSampleTestTask2 from './Components/Ielts/Writing/Task-2/IeltsSampleTestTask2';
import IeltsSpeakingTest from './Components/Ielts/Speaking/IeltsSpeakingTest';
import ReadingResult from './Components/Ielts/ReadingResult';
import ListeningResult from './Components/Ielts/ListeningResult';
import TodoApp from './Components/Todos/TodoApp';

import Gremain from './Pages/Gremain';
import Greverbal from './Pages/Greverbal';
import Grequantitative from './Pages/Grequantitative';
import Gretipsandtricks from './Pages/Gretipsandtricks';
import Rcmain from './Pages/Rcmain';
import Rctest from './Components/GRE/Hero/Rc/Rctest';
import RcResult from './Components/GRE/Hero/Rc/RcResult';

const Page404 = () => {
  return (
    <div>
      <img
        src={ErrorPage}
        className='w-1/2 flex flex-row justify-around mx-auto'
        alt='Not Found'
      />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Home} />

          <Route path='/ieltsmain' component={Ieltsmain} />
          <Route path='/ielts-listening' component={Ieltslistening} />
          <Route path='/ielts-reading' component={Ieltsreading} />
          <Route path='/ielts-writing' component={Ieltswriting} />
          <Route path='/ielts-speaking' component={Ieltsspeaking} />
          <Route path='/ielts-reading-test' component={Ieltsreadingtest} />
          <Route path='/ielts-listening-test' component={Ieltslisteningtest} />
          <Route path='/ielts-speaking-test' component={IeltsSpeakingTest} />
          <Route path='/about' component={AboutUs} />
          <Route path='/ielts-reading-result' component={ReadingResult} />
          <Route path='/ielts-listening-result' component={ListeningResult} />
          <Route path='/mini-youtube' component={Youtube} />
          <Route path='/todo' component={TodoApp} />
          <Route
            path='/ielts-sample-writing-task-1'
            component={IeltsSampleWritingContent}
          />
          <Route
            path='/ielts-writing-task-1-practice'
            component={IeltsSampleTestContent}
          />

          <Route
            path='/ielts-sample-writing-task2'
            component={IeltsSampleWritingTask2}
          />
          <Route
            path='/ielts-writing-task-2-practice'
            component={IeltsSampleTestTask2}
          />

          <Route path='/ielts-writing-task-1' component={IeltsTask1Topics} />
          <Route path='/ielts-writing-task-2' component={IeltsTask2Topics} />

          <Route path='/gremain' component={Gremain} />
          <Route path='/gre-verbal' component={Greverbal} />
          <Route path='/gre-quantitative' component={Grequantitative} />
          <Route path='/gre-tipsandtricks' component={Gretipsandtricks} />
          <Route path='/verbal-rc' component={Rcmain} />
          <Route path='/gre-rc-test' component={Rctest} />
          <Route path='/gre-verbal-result' component={RcResult} />
          <Route path='/signup' component={Form} />
          <Route path='/login' component={Form1} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}
