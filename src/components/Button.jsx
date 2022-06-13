import React from 'react';
import '../styles/Button.css';

export function Button({ text, isClickButton, clickHandler }) {
  return (
    <button
      className={isClickButton ? 'click-button' : 'restart-button'}
      onClick={clickHandler}>
      {text}
    </button>
  );
}
