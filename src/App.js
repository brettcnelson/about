import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Landing from './Landing';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/portfolio" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
