import React from 'react'
import './App.css';
import {Router, Route, Switch} from 'react-router-dom'
import FormSignup from './Components/Signup/FormSignup'
import history from './history'
// import Form from './Components/Form';
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
      
    <Router history={history}>
    <Navbar />
      <Switch>
      <Route path="/signup" component={FormSignup} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
