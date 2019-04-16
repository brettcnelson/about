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
        <a href='http://github.com/brettcnelson' target='_blank'><img src='github.png' /></a>
        <a href='http://linkedin.com/in/brettcnelson' target='_blank' style={{float:'right'}}><img src='linkedin.png' /></a>
      </div>
    </div>
  );
}
