import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  const [sumNumber, setSumNumber] = useState(0);
  const [sumActivation, setSumActivation] = useState(false);

  const [minusNumber, setMinusNumber] = useState(0);
  const [minusActivation, setMinusActivation] = useState(false);

  const [multiplicationNumber, setMultiplicationNumber] = useState(1);
  const [multiplicationActivation, setMultiplicationActivation] = useState(false);

  const [divisionNumber, setDivisionNumber] = useState(1);
  const [divisionActivation, setDivisionActivation] = useState(false);

  const latestResult = (result + sumNumber - minusNumber) * (multiplicationNumber / divisionNumber)

  const handleSum = () => {
    setSumActivation(true);
    setMinusActivation(false);
    setMultiplicationActivation(false);
    setDivisionActivation(false);
  };

  const handleMinus = () => {
    setSumActivation(false);
    setMinusActivation(true);
    setMultiplicationActivation(false);
    setDivisionActivation(false);
  };

  const handleMultiplication = () => {
    setSumActivation(false);
    setMinusActivation(false);
    setMultiplicationActivation(true);
    setDivisionActivation(false);
  };

  const handleDivision = () => {
    setSumActivation(false);
    setMinusActivation(false);
    setMultiplicationActivation(false);
    setDivisionActivation(true);
  };

  const add1 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(1);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 1);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(1);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 1);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(1);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 1);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(1);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 1);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(1);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 1);
    }
  };

  const add2 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(2);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 2);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(2);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 2);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(2);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 2);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(2);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 2);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(2);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 2);
    }
  };

  const add3 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(3);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 3);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(3);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 3);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(3);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 3);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(3);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 3);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(3);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 3);
    }
  };

  const add4 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(4);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 4);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(4);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 4);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(4);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 4);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(4);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 4);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(4);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 4);
    }
  };

  const add5 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(5);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 5);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(5);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 5);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(5);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 5);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(5);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 5);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(5);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 5);
    }
  };

  const add6 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(6);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 6);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(6);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 6);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(6);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 6);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(6);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 6);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(6);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 6);
    }
  };

  const add7 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(7);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 7);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(7);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 7);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(7);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 7);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(7);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 7);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(7);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 7);
    }
  };

  const add8 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(8);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 8);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(8);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 8);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(8);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 8);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(8);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 8);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(8);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 8);
    }
  };

  const add9 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(9);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10 + 9);
    } else if (sumNumber === 0 && sumActivation === true) {
      setSumNumber(9);
    } else if (sumNumber !== 0 && sumActivation === true) {
      setSumNumber(sumNumber + 9);
    } else if (minusNumber === 0 && minusActivation === true) {
      setMinusNumber(9);
    } else if (minusNumber !== 0 && minusActivation === true) {
      setMinusNumber(minusNumber + 9);
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(9);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 9);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(9);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 9);
    }
  };

  const add0 = () => {
    if (
      result === 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(0);
    } else if (
      result !== 0 &&
      sumActivation === false &&
      minusActivation === false &&
      multiplicationActivation === false &&
      divisionActivation === false
    ) {
      setResult(result * 10);
    
    } else if (
      multiplicationNumber === 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(0);
    } else if (
      multiplicationNumber !== 1 &&
      multiplicationActivation === true
    ) {
      setMultiplicationNumber(multiplicationNumber * 0);
    } else if (divisionNumber === 1 && divisionActivation === true) {
      setDivisionNumber(0);
    } else if (divisionNumber !== 1 && divisionActivation === true) {
      setDivisionNumber(divisionNumber * 0);
    }
  };

    const reset = () => {
      setResult(0);
      setSumNumber(0);
      setMinusNumber(0);
      setMultiplicationNumber(1);
      setDivisionNumber(1);
      setSumActivation(false);
      setMinusActivation(false);
      setMultiplicationActivation(false);
      setDivisionActivation(false);
    };

    const handleNegative = () => {
      setResult(latestResult * -1);
    };

    const handlePercent = () => {
      setResult(latestResult / 100);
    };

    return (
      <div className="App">
        <div className="calculator">
          <h1>Calculator</h1>

          <div className="result">
            {latestResult}
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
  };
export default App;
