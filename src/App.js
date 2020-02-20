import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
import ResumeRoute from './ResumeRoute';

export default () => {
  return (
    <div id="main">
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={ResumeRoute} />
            <Route path="/print" render={() => <Resume print={true} />} />
          </Switch>
        </HashRouter>
      </div>
      <footer>
      </footer>
    </div>
  );
}
