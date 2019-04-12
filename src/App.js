import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
