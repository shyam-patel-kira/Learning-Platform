import React from 'react'
import './App.css';
import {Router, Route, Switch} from 'react-router-dom'
// import FormSignup from './Components/Signup/FormSignup'
import history from './history'
import Form from './Components/Form';
import Form1 from './Components/Form1';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home';

function App() {
  return (
    <div>
      
    <Router history={history}>
    <Navbar /> 
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/signup" component={Form} />
      <Route path="/login" component={Form1} /> 
      </Switch>
    </Router>
    </div>
  );
}

export default App;
