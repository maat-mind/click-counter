import './App.css';
import logo from './img/freecodecamp-logo.png';
import { Counter } from './components/Counter';
import { Button } from './components/Button';

function App() {
  const clickHandler = () => {
    console.log('Click');
  };

  const restartCounter = () => {
    console.log('Restart');
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img className='logo' src={logo} alt='logo proyecto' />
      </div>
      <div className='main-container'>
        <Counter clicks='5' />
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
