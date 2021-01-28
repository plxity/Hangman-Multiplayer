import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
let index = 0;
export default function PlayGame(props) {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState('');
  const [hangman, setHangman] = useState('');
  const [wrongLetter, setWrongLetter] = useState([]);
  const [rightLetter, setRightLetter] = useState([]);

  const fetchGameData = async (id) => {
    const gameData = await api
      .get(`/user/getuser/${props.match.params.id}`)
      .then((res) => res)
      .catch((err) => console.log(err));
    console.log(gameData.data.questions);
    setQuestions(gameData.data.questions);
  };
  const removeAllSvgMark = () => {
    document.querySelectorAll('.figure-part').forEach((svg) => {
      svg.style.display = 'none';
    });
  };
  useEffect(() => {
    fetchGameData(props.match.params.id);
  }, []);
  return (
    <div className="game-container">
      <h1 className="question-heading mt-30 center ">
        {questions.length > 0 &&
          `${index + 1}. ` + questions[index].questionValue}
      </h1>
      <h5 className="center mt-10">
        {questions.length > 0 &&
          questions[index].hintValue.length > 0 &&
          'HINT: ' + questions[index].hintValue}
      </h5>
      <svg height="250" width="200" className="figure-container">
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" x2="140" y1="20" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" x2="100" y1="230" y2="230" />

        <circle cx="140" cy="70" r="20" className="figure-part" />

        <line x1="140" y1="90" x2="140" y2="150" className="figure-part" />

        <line x1="140" y1="120" x2="120" y2="100" className="figure-part" />
        <line x1="140" y1="120" x2="160" y2="100" className="figure-part" />

        <line x1="140" y1="150" x2="120" y2="180" className="figure-part" />
        <line x1="140" y1="150" x2="160" y2="180" className="figure-part" />
      </svg>
      <div className="wrong-letters-container">
        <div id="wrong-letters"></div>
      </div>
      <div className="word" id="word"></div>

      {/* {
      questions[index].questionValue
    } */}
      <div className="popup-container" id="popup-container">
        <div className="popup">
          <h2 id="final-message">You have won</h2>
          <button id="play-button">Play Again</button>
        </div>
      </div>
    </div>
  );
}
