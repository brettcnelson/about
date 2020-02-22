import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './Portfolio.jsx';
import Project from './Project.jsx';
import Info from './Info.jsx';
import Footer from './Footer.jsx';
import './Main.scss';

export default () => {
  document.body.classList.remove('full-background','main-background');
  document.body.style = '';
  document.body.classList.add('main-background');
  return (
    <div>
      <main className="main">
        <Switch>
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/portfolio/:id" component={Project} />
          <Route path="/info" component={Info} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
