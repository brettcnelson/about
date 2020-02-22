import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav.jsx';
import './App.scss';
import Home from './Home.jsx';
import Main from './Main.jsx';

export default () => {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
