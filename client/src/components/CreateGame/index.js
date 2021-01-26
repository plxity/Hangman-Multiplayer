import React, { Fragment, useState } from 'react';

export default function CreateGame() {
  const [questionBox, setQuestionBox] = useState([
    { questionValue: null, answerValue: null, hintValue: null },
  ]);
  const onSubmit = () => {
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
  const handleRemove =(i)=>{
    const values = [...questionBox];
    values.splice(i,1);
    setQuestionBox(values);
  }
  return (
    <div className="create-game-container">
      <div className="create-game-container-inner">
        <div className="heading-container">
          <h1 className="create-game-heading x-mid">Create Game</h1>
        </div>
        <div className="questions-container">
          <div className="create-game-form">
            <form onSubmit={onSubmit} className="game-form">
              <input
                className="input-name input-field mt-15"
                aria-label="name"
                type="text"
                placeholder="Name"
              />
              <input
                className="input-email input-field mt-15"
                aria-label="email"
                type="email"
                placeholder="Email"
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
                        <div className="delete-button mt-15" onClick={()=>handleRemove(idx)}>&#10005;</div>
                      </div>
                      <div className="mt-15"></div>
                    </Fragment>
                  );
                })}

                <div className="add-more mt-15 mb-40" onClick={addMoreQuestion}>
                  +
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
