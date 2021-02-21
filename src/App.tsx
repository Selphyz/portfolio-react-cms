import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { About, Home, NavBar, Post, Project, SinglePost } from './components';
import bg from './img/fondocustom.jpg';
const App = () => {
  return (
    <BrowserRouter>
      <img src={bg} alt='background' className='absolute object-cover w-full h-full' />
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
