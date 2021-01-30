import React from 'react'

// rafce
const Header = ({question, answer, index,hint}) => {
  return (
    <>
    <div className="header-container">
    <h1 className="question-heading">{index +1 + '. ' }{question} </h1>
      <small className="mt-15">Hint: {hint}</small>
      <p>Find the answer - Enter a letter</p>
    </div>

    </>
  )
}

export default Header
