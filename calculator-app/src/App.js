import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);

  const calculateResult = () => {
    let calculatedResult = result;
    if (operator === "+") {
      calculatedResult += operand;
    } else if (operator === "-") {
      calculatedResult -= operand;
    } else if (operator === "*") {
      calculatedResult *= operand;
    } else if (operator === "/") {
      calculatedResult /= operand;
    }
    setResult(calculatedResult);
    setOperator(null);
    setOperand(null);
  };

  const handleNumber = (number) => {
    if (operator === null) {
      setResult(result * 10 + number);
    } else {
      setOperand(operand === null ? number : operand * 10 + number);
    }
  };

  const handleOperator = (selectedOperator) => {
    if (operand !== null) {
      calculateResult();
    }
    setOperator(selectedOperator);
  };

  const reset = () => {
    setResult(0);
    setOperator(null);
    setOperand(null);
  };

  const handleNegative = () => {
    setResult(result * -1);
  };

  const handlePercent = () => {
    setResult(result / 100);
  };

  const handleComa = () => {
    if (!result.toString().includes(".")) {
      setResult(result + ".");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>

        <div className="result">{result}</div>

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
          <button onClick={() => handleOperator("/")} className="division">
            /
          </button>
        </div>

        <div className="row">
          <button onClick={() => handleNumber(7)} className="number">
            7
          </button>
          <button onClick={() => handleNumber(8)} className="number">
            8
          </button>
          <button onClick={() => handleNumber(9)} className="number">
            9
          </button>
          <button onClick={() => handleOperator("*")} className="multiplication">
            X
          </button>
        </div>

        <div className="row">
          <button onClick={() => handleNumber(4)} className="number">
            4
          </button>
          <button onClick={() => handleNumber(5)} className="number">
            5
          </button>
          <button onClick={() => handleNumber(6)} className="number">
            6
          </button>
          <button onClick={() => handleOperator("-")} className="minus">
            -
          </button>
        </div>

        <div className="row">
          <button onClick={() => handleNumber(1)} className="number">
            1
          </button>
          <button onClick={() => handleNumber(2)} className="number">
            2
          </button>
          <button onClick={() => handleNumber(3)} className="number">
            3
          </button>
          <button onClick={() => handleOperator("+")} className="sum">
            +
          </button>
        </div>

        <div className="row">
          <button onClick={() => handleNumber(0)} className="number0">
            0
          </button>
          <button onClick={handleComa} className="coma">.</button>
          <button onClick={calculateResult} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

