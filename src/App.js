import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <footer className="footer">foot</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
