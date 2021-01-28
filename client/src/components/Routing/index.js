import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CreateGame from '../CreateGame/index';
import PlayGame from '../PlayGame/index';
import GameId from '../GameId/index';
const router = (props) => {
  return (
    <section className="container">
      <Route exact path="/creategame" component={CreateGame} />
      <Route exact path="/playgame/:id" component={PlayGame} />
      <Route exact path="/newgameid" component={GameId}/>
      <Route exact path="/checkscore/:id" component={GameId}/>
    </section>
  );
};
export default router;
