import React, { useState } from 'react';
import api from '../../utils/api';
export default function SuubmitScore(props) {
  const [name, setName] = useState('');
  const submitScore = async (e) => {
    e.preventDefault();
    console.log('Submitted');
    const formData = {
      name: name,
      score: props.location.state.score,
      id: props.location.state.id,
    };
    const res = await api
      .post('/user/storescore', formData)
      .then((res) => res)
      .catch((err) => console.log(err));
    alert('Score Submitted!')
    props.history.push('/');
  };

  return (
    <>
      <div className="submit-score-container">
        <h1 className="x-mid">Game Finished!</h1>
        <h1>Enter your name to submit score</h1>
        <input
          type="text"
          className="input-field mt-15"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          required={true}
        />
        <button onClick={(e) => submitScore(e)} className="mt-10 create-game">
          Submit Score
        </button>
        <p className="mt-15" style={{fontSize:'20px'}}>
          Hi, Your score is : {props.location.state.score}
        </p>
      </div>
    </>
  );
}
