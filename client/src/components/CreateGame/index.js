import React from 'react';

export default function CreateGame() {
  const onSubmit = () =>{
    console.log("Hello");
  }
  return (
    <div className="create-game-container">
      <div className="create-game-container-inner">
        <div className="heading-container">
          <h1 className="create-game-heading x-mid">Create Game</h1>
        </div>
        <div className="create-game-form">
          <form onSubmit={onSubmit}>
            <input className="input-name input-field" aria-label="name" type="text"/>
            <input className="input-email input-field"aria-label="email" type="email"/>
          </form>
        </div>
      </div>
    </div>
  );
}
