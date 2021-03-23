import React from 'react'
import './App.css';
import {Router, Route, Switch} from 'react-router-dom'
// import FormSignup from './Components/Signup/FormSignup'
import history from './history'
import Form from './Components/Form';
import Form1 from './Components/Form1';
import Home from './Pages/Home';
import Ieltsmain from './Pages/Ieltsmain';
import Ieltsreading from './Pages/Ieltsreading';
import Ieltslistening from './Pages/Ieltslistening';
import Ieltsreadingtest from './Components/Ielts/Reading/Ieltsreadingtest';

function App() {
  return (
    <div>
      
    <Router history={history}>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/ieltsmain" component={Ieltsmain} />
      <Route path="/ielts-reading" component={Ieltsreading} />
      <Route path="/ielts-listening" component={Ieltslistening} />
      <Route path="/ielts-reading-test" component={Ieltsreadingtest} />
      <Route path="/signup" component={Form} />
      <Route path="/login" component={Form1} /> 
      </Switch>
    </Router>
    </div>
  );
}

export default App;
