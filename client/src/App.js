import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Dish from './components/Dish'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/dishes/:id" component={Dish} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default App;
