import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import About from './About/About';
import Home from './Home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Router>
  )
}

export default App;
