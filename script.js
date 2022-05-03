// DOM
const resultDisplay = document.getElementById("result-display");
const resetButton = document.getElementById("reset-button");
const plusMinusButton = document.getElementById("plus-minus-button");
const factorialButton = document.getElementById("factorial-button");
const divideButton = document.getElementById("divide-button");
const sevenButton = document.getElementById("seven-button");
const eightButton = document.getElementById("eight-button");
const nineButton = document.getElementById("nine-button");
const multiplyButton = document.getElementById("multiply-button");
const fourButton = document.getElementById("four-button");
const fiveButton = document.getElementById("five-button");
const sixButton = document.getElementById("six-button");
const subtractButton = document.getElementById("subtract-button");
const oneButton = document.getElementById("one-button");
const twoButton = document.getElementById("two-button");
const threeButton = document.getElementById("three-button");
const plusButton = document.getElementById("plus-button");
const zeroButton = document.getElementById("zero-button");
const dotButton = document.getElementById("dot-button");
const resultButton = document.getElementById("result-button");

// Variables
let total;
let actualNumber = "";

let divideIsActive = false;
let multiplyIsActive = false;
let plusIsActive = false;
let subtractIsActive = false;
let factorial = false;

// Functions
function displayResult() {
  if (actualNumber !== "") {
    if (total) {
      if (divideIsActive) {
        total /= parseFloat(actualNumber);
        resultDisplay.textContent = total;
        actualNumber = "";
        divideIsActive = false;
      } else if (multiplyIsActive) {
        total *= parseFloat(actualNumber);
        resultDisplay.textContent = total;
        actualNumber = "";
        multiplyIsActive = false;
      } else if (plusIsActive) {
        total += parseFloat(actualNumber);
        resultDisplay.textContent = total;
        actualNumber = "";
        plusIsActive = false;
      } else if (subtractIsActive) {
        total -= parseFloat(actualNumber);
        resultDisplay.textContent = total;
        actualNumber = "";
        multiplyIsActive = false;
      }
    } else {
      total = parseFloat(actualNumber);
      actualNumber = "";
      resultDisplay.textContent = total;
    }
  }
}

function resetCalculator() {
  total = 0;
  resultDisplay.textContent = 0;
  actualNumber = "";
}

const divide = () => {
  displayResult();
  divideIsActive = true;
};

const multiply = () => {
  displayResult();
  multiplyIsActive = true;
};

const add = () => {
  displayResult();
  plusIsActive = true;
};

const subtract = () => {
  displayResult();
  subtractIsActive = true;
};

const insertDot = () => {
  actualNumber += ".";
};

const getFactorial = () => {
  displayResult();
  let result = 1;
  for (let i = total; i > 0; i--) {
    result *= i;
  }
  resultDisplay.textContent = result;
};

const addMinus = () => {
  actualNumber = "-" + actualNumber;
  resultDisplay.textContent = actualNumber;
};

// Event Listeners
oneButton.addEventListener("click", () => {
  actualNumber += 1;
  resultDisplay.textContent = actualNumber;
});
twoButton.addEventListener("click", () => {
  actualNumber += 2;
  resultDisplay.textContent = actualNumber;
});
threeButton.addEventListener("click", () => {
  actualNumber += 3;
  resultDisplay.textContent = actualNumber;
});
fourButton.addEventListener("click", () => {
  actualNumber += 4;
  resultDisplay.textContent = actualNumber;
});
fiveButton.addEventListener("click", () => {
  actualNumber += 5;
  resultDisplay.textContent = actualNumber;
});
sixButton.addEventListener("click", () => {
  actualNumber += 6;
  resultDisplay.textContent = actualNumber;
});
sevenButton.addEventListener("click", () => {
  actualNumber += 7;
  resultDisplay.textContent = actualNumber;
});
eightButton.addEventListener("click", () => {
  actualNumber += 8;
  resultDisplay.textContent = actualNumber;
});
nineButton.addEventListener("click", () => {
  actualNumber += 9;
  resultDisplay.textContent = actualNumber;
});
zeroButton.addEventListener("click", () => {
  actualNumber += 0;
  resultDisplay.textContent = actualNumber;
});

divideButton.addEventListener("click", divide);
multiplyButton.addEventListener("click", multiply);
plusButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
dotButton.addEventListener("click", insertDot);
factorialButton.addEventListener("click", getFactorial);
plusMinusButton.addEventListener("click", addMinus);

resultButton.addEventListener("click", displayResult);
resetButton.addEventListener("click", resetCalculator);