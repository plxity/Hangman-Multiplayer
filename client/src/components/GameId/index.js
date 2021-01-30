import React, { useState } from 'react';
import clipboard from '../../icons/clipboard.svg';

export default function GameId({ location }) {
  const copyToClipboard = (gameId) => {
    let content =
      'hangman-multiplayer.vercel.app/playgame/' + location.state.gameId;
    const el = document.createElement('textarea');
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Link Copied!');
  };
  return (
    <div className="game-id-container">
      <h1 className="game-created-heading">Game created succesfully!</h1>
      <div className="clipboard-container mt-15">
        <div className="game-link">
          <a
            href={
              `https://hangman-multiplayer.plxity.vercel.app/playgame/` +
              location.state.gameId
            }
            target="_blank"
          >
            hangman-multiplayer.vercel.app/playgame/{location.state.gameId}
          </a>
        </div>
        <div
          className="clipboard-icon "
          onClick={() => copyToClipboard(location.state.gameId)}
        >
          <img src={clipboard} height="100%" width="40" />
        </div>
      </div>
      <small className="mt-15"> Share link with friends!</small>
      <div className="clipboard-container mt-15">
        <div className="game-link">
          <a
            href={
              `https://hangman-multiplayer.plxity.vercel.app/showscore/` +
              location.state.gameId
            }
            target="_blank"
          >
            hangman-multiplayer.vercel.app/showscore/{location.state.gameId}
          </a>
        </div>
        <div
          className="clipboard-icon "
          onClick={() => copyToClipboard(location.state.gameId)}
        >
          <img src={clipboard} height="100%" width="40" />
        </div>
      </div>
      <small className="mt-15"> View friends response here! Save the link</small>
    </div>
  );
}
