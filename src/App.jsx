import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx';
import './App.scss';
import Home from './Home.jsx';
import Portfolio from './Portfolio.jsx';
import Project from './Project.jsx';
import Info from './Info.jsx';

export default () => {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:id" component={Project} />
          <Route path="/info" component={Info} />
        </Switch>
      </HashRouter>
    </div>
  );
}
