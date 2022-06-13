import React from 'react';
import '../styles/Counter.css';

export function Counter({ clicks }) {
  return <div className='counter'>{clicks}</div>;
}
