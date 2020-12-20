import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Home, NavBar, Post, Project, SinglePost } from './components';
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
