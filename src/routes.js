import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import RequestsIndex from './containers/RequestsIndex';
import NewRequest from './containers/NewRequest';
import AvailabilityIndex from './containers/AvailabilityIndex';
import Registration from './containers/Registration';
import Login from './containers/Login';
import Profile from './containers/Profile';
import NewProfile from './components/ProfileForm';

export default (
    <Route path="/" component={App} >
      <IndexRoute component={Login} />
      <Route path="register" component={Registration} />
      <Route path="login" component={Login} />
      <Route path="profile" component={Profile} />
      <Route path="profile/new" component={NewProfile} />
      <Route path="requests" component={RequestsIndex} />
      <Route path="requests/new" component={NewRequest} />
      <Route path="availability" component={AvailabilityIndex} />
    </Route>
);

