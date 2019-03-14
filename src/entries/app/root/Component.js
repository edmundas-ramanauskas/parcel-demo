import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
// import Dashboard from '../../../modules/dashboard';
import Dashboard from '@modules/dashboard';
import NotFound from '@modules/not-found';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Root;
