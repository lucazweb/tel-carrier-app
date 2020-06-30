import React from 'react';
import { Grid } from 'react-flexbox-grid';
import { Header } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Grid>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Grid>
    </BrowserRouter>
  );
};

export default Router;
