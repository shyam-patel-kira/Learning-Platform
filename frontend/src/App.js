import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Form from './Components/Form';
import Form1 from './Components/Form1';
import Home from './Pages/Home';
import AboutUs from './Components/AboutUs';

import Ieltsmain from './Pages/Ieltsmain';
import Ieltsreading from './Pages/Ieltsreading';
import Ieltslistening from './Pages/Ieltslistening';
import Ieltswriting from './Pages/Ieltswriting';
import Ieltsspeaking from './Pages/Ieltsspeaking';
import Ieltsreadingtest from './Components/Ielts/Reading/Ieltsreadingtest';
import Ieltslisteningtest from './Components/Ielts/Listening/Ieltslisteningtest';
import IeltsSampleWritingContent from './Components/Ielts/Writing/Task-1/IeltsSampleWritingContent';
import IeltsSampleTestContent from './Components/Ielts/Writing/Task-1/IeltsSampleTestContent'


const Page404 = () => <h1>Four:oh:four</h1>;

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
          <Route path='/about' component={AboutUs} />
          <Route
            path='/ielts-sample-writing'
            component={IeltsSampleWritingContent}
          />
          <Route
            path='/ielts-writing-task-1-practice'
            component={IeltsSampleTestContent}
          />
          <Route path='/signup' component={Form} />
          <Route path='/login' component={Form1} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}
