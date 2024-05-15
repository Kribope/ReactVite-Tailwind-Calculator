import React, { useState } from 'react';
import './App.css';

function App() {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operation, setOperation] = useState(null);

  const clear = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation(null);
  };

  const deleteLast = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };

  const appendNumber = (number) => {
    setCurrentOperand(currentOperand + number);
  };

  const chooseOperation = (op) => {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
      compute();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  };

  const compute = () => {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    setCurrentOperand(computation.toString());
    setOperation(null);
    setPreviousOperand('');
  };

  const handleButtonClick = (value) => {
    if (value === '=') {
      compute();
    } else if (value === 'AC') {
      clear();
    } else if (value === 'DEL') {
      deleteLast();
    } else if (isNaN(value)) {
      chooseOperation(value);
    } else {
      appendNumber(value);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2 calculator-grid">
  <div className="col-span-4 bg-gray-200 p-4 rounded-lg output">
    <div className="text-right text-3xl mb-2 previous-operand">
      <div className="text-lg current-operand">{previousOperand} {operation}</div>
      <div>{currentOperand}</div>
    </div>
  </div>
  <button onClick={() => handleButtonClick('AC')} className="col-span-2 bg-gray-300 py-4 rounded-lg span-two">AC</button>
  <button onClick={() => handleButtonClick('DEL')} className="bg-gray-300 py-4 rounded-lg">DEL</button>
  <button onClick={() => handleButtonClick('÷')} className="bg-gray-300 py-4 rounded-lg">÷</button>
  <button onClick={() => handleButtonClick('7')} className="bg-gray-300 py-4 rounded-lg">7</button>
  <button onClick={() => handleButtonClick('8')} className="bg-gray-300 py-4 rounded-lg">8</button>
  <button onClick={() => handleButtonClick('9')} className="bg-gray-300 py-4 rounded-lg">9</button>
  <button onClick={() => handleButtonClick('*')} className="bg-gray-300 py-4 rounded-lg">*</button>
  <button onClick={() => handleButtonClick('4')} className="bg-gray-300 py-4 rounded-lg">4</button>
  <button onClick={() => handleButtonClick('5')} className="bg-gray-300 py-4 rounded-lg">5</button>
  <button onClick={() => handleButtonClick('6')} className="bg-gray-300 py-4 rounded-lg">6</button>
  <button onClick={() => handleButtonClick('+')} className="bg-gray-300 py-4 rounded-lg">+</button>
  <button onClick={() => handleButtonClick('1')} className="bg-gray-300 py-4 rounded-lg">1</button>
  <button onClick={() => handleButtonClick('2')} className="bg-gray-300 py-4 rounded-lg">2</button>
  <button onClick={() => handleButtonClick('3')} className="bg-gray-300 py-4 rounded-lg">3</button>
  <button onClick={() => handleButtonClick('-')} className="bg-gray-300 py-4 rounded-lg">-</button>
  <button onClick={() => handleButtonClick('.')} className="bg-gray-300 py-4 rounded-lg">.</button>
  <button onClick={() => handleButtonClick('0')} className="bg-gray-300 py-4 rounded-lg">0</button>
  <button onClick={() => handleButtonClick('=')} className="col-span-2 bg-gray-300 py-4 rounded-lg span-two">=</button>
</div>
  );
}

export default App;
