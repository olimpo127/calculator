import "./App.css";
import React, { useState } from "react";

function App(){
    const [input, setInput] = useState(0);
const [total, setTotal] = useState(0);

const [numSelected, setNumSelected] = useState(false);
const [totalSelected, setTotalSelected] = useState(true);


const handleSum = () => {
    setTotalSelected(true);
    setNumSelected(false);
    total += input;
    setInput(0);
}

const add1 = () => {
    setNumSelected(true);
    setTotalSelected(false);
    if (
      input === 0
    ) {
      setInput(1);
    } else if (
      input !== 0 
    ) {
      setInput(input * 10 + 1);
    } 
};

const add2 = () => {
    setNumSelected(true);
    setTotalSelected(false);
    if (
      input === 0
    ) {
      setInput(2);
    } else if (
      input !== 0 
    ) {
      setInput(input * 10 + 2);
    } 
};

const add3 = () => {
    setNumSelected(true);
    setTotalSelected(false);
    if (
      input === 0
    ) {
      setInput(3);
    } else if (
      input !== 0 
    ) {
      setInput(input * 10 + 3);
    } 
};


return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>

        <div className="result">
        {totalSelected ? (
        <p>{total}</p>
      ) : numSelected ? (
        <p>{input}</p>
      ) : null}
        </div>

        <div className="row">
          <button onClick={reset} className="resetButton">
            AC
          </button>
          <button onClick={handleNegative} className="changeSymbol">
            +/-
          </button>
          <button onClick={handlePercent} className="percentage">
            %
          </button>
          <button onClick={handleDivision} className="division">
            /
          </button>
        </div>

        <div className="row">
          <button onClick={add7} className="number">
            7
          </button>
          <button onClick={add8} className="number">
            8
          </button>
          <button onClick={add9} className="number">
            9
          </button>
          <button onClick={handleMultiplication} className="multiplication">
            X
          </button>
        </div>

        <div className="row">
          <button onClick={add4} className="number">
            4
          </button>
          <button onClick={add5} className="number">
            5
          </button>
          <button onClick={add6} className="number">
            6
          </button>
          <button onClick={handleMinus} className="minus">
            -
          </button>
        </div>

        <div className="row">
          <button onClick={add1} className="number">
            1
          </button>
          <button onClick={add2} className="number">
            2
          </button>
          <button onClick={add3} className="number">
            3
          </button>
          <button onClick={handleSum} className="sum">
            +
          </button>
        </div>

        <div className="row">
          <button onClick={add0} className="number0">
            0
          </button>
          <button className="coma">,</button>
          <button className="equal">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
