import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import './App.scss';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projects' component={Projects}/>
    </Router>
  );
}

export default App;
