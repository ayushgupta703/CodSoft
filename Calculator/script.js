let displayValue = '0';
let operator = '';
let firstNumber = 0;

function updateDisplay() {
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number.toString();
  } else {
    displayValue += number.toString();
  }
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  firstNumber = parseFloat(displayValue);
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  const secondNumber = parseFloat(displayValue);
  let result = 0;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
  }
  displayValue = result.toString();
  updateDisplay();
}