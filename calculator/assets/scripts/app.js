const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(usrInput.value);
}

function createAndOutput( operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult + enterednumber;
    createAndOutput('+', initialResult, enterednumber)
}

function subtract() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult - enterednumber;
    createAndOutput('-', initialResult, enterednumber)
}

function multiply() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult * enterednumber;
    createAndOutput('*', initialResult, enterednumber)
}

function divide() {
    const enterednumber = getUserNumberInput();
    const initialResult = currentResult
    currentResult = currentResult / enterednumber;
    createAndOutput('/', initialResult, enterednumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

