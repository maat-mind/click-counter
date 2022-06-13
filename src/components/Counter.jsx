import React from 'react';
import '../styles/Counter.css';

export function Counter({ clickCounter }) {
  return <div className='counter'>{clickCounter}</div>;
}
