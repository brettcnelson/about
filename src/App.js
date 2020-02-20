import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

export default () => {
  return (
    <div id="main">
      <div className="App">
        <HashRouter>
          <header>
            <Nav />
          </header>
          <Switch>
            <Route exact path="/" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </HashRouter>
      </div>
      <footer>
      </footer>
    </div>
  );
}
