const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndOutput(operator, resultBeforeCalc, calcNumber) { //from vendor file
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  oprationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    oprand: oprationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enterednumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enterednumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult = currentResult - enterednumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult = currentResult * enterednumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult = currentResult / enterednumber;
    mathOperator = '/';
  }
  createAndOutput(mathOperator, initialResult, enterednumber);
  writeToLog(calculationType, initialResult, enterednumber, currentResult);
}

function add() {
    calculateResult('ADD')
}

function subtract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}

function divide() {
    calculateResult('DIVIDE')
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
