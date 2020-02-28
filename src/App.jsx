import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx';
import './App.scss';
import Home from './Home.jsx';
import Main from './Main.jsx';

export default () => (
  <div className="App">
    <Router basename="/about">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  </div>
);
