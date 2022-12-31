const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function createAndOutput( operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(oprationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        oprand: oprationIdentifier, 
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult + enterednumber;
    createAndOutput('+', initialResult, enterednumber)
    writeToLog('ADD', initialResult, enterednumber, currentResult)
}

function subtract() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult - enterednumber;
    createAndOutput('-', initialResult, enterednumber)
    writeToLog('SUBTRACT', initialResult, enterednumber, currentResult)
}

function multiply() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult * enterednumber;
    createAndOutput('*', initialResult, enterednumber)
    writeToLog('MULTIPLY', initialResult, enterednumber, currentResult)
}

function divide() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult / enterednumber;
    createAndOutput('/', initialResult, enterednumber)
    writeToLog('DIVIDE', initialResult, enterednumber, currentResult)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

