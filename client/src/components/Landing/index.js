import React from 'react';
import { Link } from 'react-router-dom';
export default function Landing() {
  const redirectToCreateGame = () => {};
  return (
    <section className="landing">
      <div className="landing-inner">
        <h1 className="x-large">Hangman</h1>
        <h2 className="mt-10">
          A fun game to see how much your friends know you! 👯
        </h2>
        <Link to="/creategame">
          <button className="create-game mt-30" onClick={redirectToCreateGame}>
            Create a game
          </button>
        </Link>
      </div>
    </section>
  );
}
