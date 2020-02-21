import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx';
import './App.scss';
import Projects from './Projects.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';

export default () => {
  return (
    <div id="main">
      <div className="App">
        <HashRouter>
          <Nav />
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/portfolio/:id" component={Project} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </HashRouter>
      </div>
      <footer></footer>
    </div>
  );
}
