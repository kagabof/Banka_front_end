import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Login from './Login';
import PageNotFound from '../components/PageNotFound';
import Signup from './signup';
import UserDashboard from './userDashboard';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/userdashboard" component={UserDashboard} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
