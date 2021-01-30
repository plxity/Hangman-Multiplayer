import React, { useState, useEffect } from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Popup from './Popup';
import Notification from './Notification';
import { showNotification as show, checkWin } from '../../helpers/helpers';
import api from '../../utils/api';

const words = ['application', 'programming', 'interface', 'wizard'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App(props) {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [curQuestion, setCurQuestion] = useState('');
  const [curAnswer, setCurAnswer] = useState('');
  const [hangmanUsed, setHangmanUsed] = useState(0);
  const [score, setScore] = useState(0);
  const [curHint, setCurHint] = useState('');

  const fetchQuestions = async () => {
    let data = false
    const gameData = await api
      .get(`/user/getuser/${props.match.params.id}`)
      .then((res) => {
        data = true;
        return res;
      })
      .catch((err) => {
        alert('Invalid Link');
        props.history.push('/');
        return;
      });
    if (data) {
      setQuestions([...gameData.data.questions]);
    }
  };
  const increaseIndex = () => {
    console.log('increase', index);
    setIndex((index) => index + 1);
  };
  const setCurrentQuestion = () => {
    setCurQuestion(questions[index].questionValue);
  };
  const setCurrentHint = () => {
    setCurHint(questions[index].hintValue);
  };
  const setCurrentAnswer = () => {
    setCurAnswer(questions[index].answerValue);
  };
  const incrementHangman = () => {
    setHangmanUsed((hangmanUsed) => hangmanUsed + 1);
  };
  //Checking Questions Array
  useEffect(() => {
    console.log(index);
    if (index == questions.length && questions.length > 0) {
      props.history.push({
        pathname: '/submitscore',
        state: { score: score, id: props.match.params.id },
      });
    } else if (questions.length > 0) {
      console.log('hello');
      setCurrentQuestion();
      setCurrentAnswer();
      setCurrentHint();
      setCorrectLetters([]);
      setWrongLetters([]);
    }
  }, [questions, index]);

  useEffect(() => {
    fetchQuestions();
  }, [props.match.params.id]);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (curAnswer.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable, curAnswer, curQuestion]);

  useEffect(() => {
    console.log('hello0000', correctLetters, curAnswer, wrongLetters);
    if (
      checkWin(correctLetters, wrongLetters, curAnswer) === 'lose' &&
      wrongLetters.length > 0
    ) {
      console.log('hello,wrong');
      setIndex((index) => index + 1);
    }
    if (
      checkWin(correctLetters, wrongLetters, curAnswer) === 'win' &&
      correctLetters.length > 0
    ) {
      setScore((score) => score + 1);
      setIndex((index) => index + 1);
    }
  }, [correctLetters, wrongLetters]);

  return (
    <>
      <Header
        question={curQuestion}
        answer={curAnswer}
        index={index}
        hint={curHint}
      />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} incrementHangman={setHangmanUsed} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={curAnswer} correctLetters={correctLetters} />
      </div>
      {showNotification && <Notification showNotification={showNotification} />}
    </>
  );
}

export default App;
