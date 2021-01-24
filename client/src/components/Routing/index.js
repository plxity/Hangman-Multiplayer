import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CreateGame from '../CreateGame/index';
import PlayGame from '../PlayGame/index';
const router = (props) => {
  return (
    <section className="container">
      <Route exact path="/creategame" component={CreateGame} />
      <Route exact path="/playgame" component={PlayGame} />
    </section>
  );
};
export default router;
