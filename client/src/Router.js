import React from 'react';
import { Header } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
