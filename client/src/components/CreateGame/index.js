import React, { Fragment, useState } from 'react';

export default function CreateGame() {
  const [questionBox, setQuestionBox] = useState([
    { questionValue: null, answerValue: null, hintValue: null },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData ={name,email,questionBox};
    console.log(formData);
    console.log('Hello');
  };

  const handleChange = (i, e, toBeChanged) => {
    console.log(toBeChanged, i);
    const values = [...questionBox];
    values[i][toBeChanged] = e.target.value;
    setQuestionBox(values);
    console.log(values);
  };

  const addMoreQuestion = () => {
    const values = [...questionBox];
    values.push({ questionValue: null, answerValue: null, hintValue: null });
    setQuestionBox(values);
  };
  const handleRemove = (i) => {
    const values = [...questionBox];
    values.splice(i, 1);
    setQuestionBox(values);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="create-game-container">
      <div className="create-game-container-inner">
        <div className="heading-container">
          <h1 className="create-game-heading x-mid">Create Game</h1>
        </div>
        <div className="questions-container">
          <div className="create-game-form">
            <form onSubmit={(e)=>onSubmit(e)} className="game-form">
              <input
                className="input-name input-field mt-15"
                aria-label="name"
                type="text"
                value={name}
                placeholder="Name"
                onChange={handleNameChange}
              />
              <input
                className="input-email input-field mt-15"
                aria-label="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <h2 className="questions-heading">Questions</h2>
              <div className="questions-box-container">
                {questionBox.map((questionbox, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div className="question-box">
                        <input
                          className="input-question input-field"
                          aria-label="Question"
                          placeholder="Question"
                          value={questionbox.questionValue || ''}
                          onChange={(e) =>
                            handleChange(idx, e, 'questionValue')
                          }
                        />
                        <input
                          className="input-answer input-field mt-5"
                          aria-label="Answer"
                          placeholder="Answer"
                          value={questionbox.answerValue || ''}
                          onChange={(e) => handleChange(idx, e, 'answerValue')}
                        />
                        <input
                          className="input-hint input-field mt-5"
                          aria-label="Hint"
                          placeholder="Hint - optional"
                          value={questionbox.hintValue || ''}
                          onChange={(e) => handleChange(idx, e, 'hintValue')}
                        />
                        <div
                          className="delete-button mt-15"
                          onClick={() => handleRemove(idx)}
                        >
                          &#10005;
                        </div>
                      </div>
                      <div className="mt-15"></div>
                    </Fragment>
                  );
                })}

                <div className="add-more mt-15 mb-40" onClick={addMoreQuestion}>
                  +
                </div>
              </div>
              <input type="submit" value="Create a game" className="create-game mt-30"/>
              {/* <button className="create-game mt-30"> Create a game</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}