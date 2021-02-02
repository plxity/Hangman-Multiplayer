import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div className="not-found">
      <div> Page Not Found!</div>
      <div>
        <Link to="/">Hangman</Link>
      </div>
    </div>
  );
}
