import './App.css';
import logo from './img/freecodecamp-logo.png';
import { Counter } from './components/Counter';
import { Button } from './components/Button';
import { useState } from 'react';

function App() {
  const [clickCounter, setClickCounter] = useState(0);

  const clickHandler = () => {
    setClickCounter(clickCounter + 1);
  };

  const restartCounter = () => {
    setClickCounter(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo proyecto' />
      </div>
      <div className='main-container'>
        <Counter clickCounter={clickCounter} />
        <Button text='Click' isClickButton={true} clickHandler={clickHandler} />
        <Button
          text='Restart'
          isClickButton={false}
          clickHandler={restartCounter}
        />
      </div>
    </div>
  );
}

export default App;
