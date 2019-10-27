import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import Pets from './Pets/Pets';
import Pet from './Pet/Pet';
import About from './About/About';

const PetStore = () => (
  <>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pets/:petId" component={Pet} />
      <Route path="/pets" component={Pets} />
      <Route path="/about" component={About} />
      <Route component={Home} />
    </Switch>
  </>
);

export default PetStore;
