import './App.css';
import React, { useState } from 'react';

function App() {

  const [result, setResult] = useState(0)
  

  const add1 = () => {
    if (result === 0) {
      setResult(1);
    } else {
      setResult(result * 10 + 1);
    }
  };

  const add2 = () => {
    if (result === 0) {
      setResult(2);
    } else {
      setResult(result * 10 + 2);
    }
  };

  const add3 = () => {
    if (result === 0) {
      setResult(3);
    } else {
      setResult(result * 10 + 3);
    }
  };

  const add4 = () => {
    if (result === 0) {
      setResult(4);
    } else {
      setResult(result * 10 + 4);
    }
  };

  const add5 = () => {
    if (result === 0) {
      setResult(5);
    } else {
      setResult(result * 10 + 5);
    }
  };

  const add6 = () => {
    if (result === 0) {
      setResult(6);
    } else {
      setResult(result * 10 + 6);
    }
  };

  const add7 = () => {
    if (result === 0) {
      setResult(7);
    } else {
      setResult(result * 10 + 7);
    }
  };

  const add8 = () => {
    if (result === 0) {
      setResult(8);
    } else {
      setResult(result * 10 + 8);
    }
  };

  const add9 = () => {
    if (result === 0) {
      setResult(9);
    } else {
      setResult(result * 10 + 9);
    }
  };

  const add0 = () => {
    if (result === 0) {
      setResult(0);
    } else {
      setResult(result * 10);
    }
  };

  const reset = () => {
    setResult(0);
  }

  const handleNegative = () => {
    setResult (result * -1);
  }

  const handlePercent = () => {
    setResult(result / 100);
  }

  return (
    <div className="App">
      <div className='calculator'>
      <h1>Calculator</h1>
        <div className='result'>
          {result}
        </div>

        <div className='row'>
          <button onClick={reset} className='reset'>AC</button>
          <button onClick={handleNegative} className='changeSymbol'>+/-</button>
          <button onClick={handlePercent} className='percentage'>%</button>
          <button className='division'>/</button>
        </div>

        <div className='row'>
          <button onClick={add7} className='number'>7</button>
          <button onClick={add8} className='number'>8</button>
          <button onClick={add9} className='number'>9</button>
          <button className='multiplication'>X</button>
        </div>

        <div className='row'>
          <button onClick={add4} className='number'>4</button>
          <button onClick={add5} className='number'>5</button>
          <button onClick={add6} className='number'>6</button>
          <button className='minus'>-</button>
        </div>

        <div className='row'>
          <button onClick={add1} className='number'>1</button>
          <button onClick={add2} className='number'>2</button>
          <button onClick={add3} className='number'>3</button>
          <button className='sum'>+</button>
        </div>

        <div className='row'>
          <button onClick={add0} className='number0'>0</button>
          <button className='coma'>,</button>
          <button className='equal'>=</button>
        </div>
      </div>
        
    </div>
  );
}

export default App;
