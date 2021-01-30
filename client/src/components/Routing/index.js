import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import CreateGame from '../CreateGame/index';
import PlayGame from '../PlayGame/index';
import GameId from '../GameId/index';
import SubmitScore from '../SubmitScore/index';
import ShowScore from '../ShowScore/index';
// import NotFound from '../NotFound/index';
const router = (props) => {
  return (
    <section className="container">
      <Route path="/creategame" component={CreateGame} />
      <Route path="/playgame/:id" component={PlayGame} />
      <Route path="/newgameid" component={GameId} />
      <Route path="/checkscore/:id" component={GameId} />
      <Route path="/submitscore" component={SubmitScore} />
      <Route path='/showscore/:id' component={ShowScore}/>
      {/* <Route path='*'  component={NotFound} /> */}
    </section>
  );
};
export default router;
