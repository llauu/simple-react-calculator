import './App.css';
import Button from './components/buttons';
import Display from './components/display';
import Clear from './components/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    if (input) { // input !== ''
      setInput(evaluate(input));
    }
  };

  return (
    <div className='App'>
      <h1 className='main-title'>my calculator</h1>
      <div className='calculator-container'>
        <Display input={input} />
        <div className='row'>
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>x</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={calculateResult}>=</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className='clear-row'>
          <div className='title-row'>
            <h1 className='react-title title-1'>with react</h1>
            <h1 className='react-title title-2'>js</h1>
          </div>
          <Clear clickHandler={clearInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
