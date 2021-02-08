import React from 'react';

const Header = ({ question, answer, index, hint, remainingChances }) => {
  return (
    <>
      <div className="header-container">
        <h1 className="question-heading">
          {index + 1 + '. '}
          {question}{' '}
        </h1>
        <small className="mt-15">
          Hint: {hint != null ? hint : 'Not provided'}
        </small>
        <p className="mt-10">Find the answer - Enter a letter</p>
        <p className="mt-15 attempts">Attempts left: {6 - remainingChances}</p>
      </div>
    </>
  );
};

export default Header;
