import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import RequestsIndex from './containers/RequestsIndex';
import AvailabilityIndex from './containers/AvailabilityIndex';
import Registration from './containers/Registration';
import Login from './containers/Login';

export default (
    <Route path="/" component={App} >
      <IndexRoute component={Login} />
      <Route path="register" component={Registration} />
      <Route path="login" component={Login} />
      <Route path="requests" component={RequestsIndex} />
      <Route path="availability" component={AvailabilityIndex} />
    </Route>
);

