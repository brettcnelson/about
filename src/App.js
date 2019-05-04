import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Landing from './Landing';
import Projects from './Projects';
import Contact from './Contact';

export default () => {
  return (
    <div id="main">
      <div className="App">
        <HashRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/portfolio" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </HashRouter>
      </div>
      <div id="footer">
        <div><a href='http://github.com/brettcnelson' target='_blank' rel="noopener noreferrer"><img src='images/GitHub-Mark-120px-plus.png' alt=""/></a></div>
        <div><a href='https://brave.com/bre447' target='_blank' rel="noopener noreferrer"><img src='images/brave_lion_alt.png' alt=""/></a></div>
      </div>
    </div>
  );
}
