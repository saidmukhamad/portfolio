console.log("heehheheehh");

const test = document.documentElement;

const CalculatorOperations = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "AC",
  ":",
  "*",
  "+",
  "-",
];

class Calculator {
  total;
  values;
  operator;
  operation = false;

  constructor() {
    this.total = 0;
    this.values = new Array();
  }

  plus(value) {
    this.total += value;
  }

  minus(value) {
    this.total -= value;
  }

  divide(value) {
    this.total /= value;
  }

  multiple(value) {
    this.total *= value;
  }

  reset() {
    this.total = 0;
  }

  bind(value) {
    this.total = parseInt(this.total.toString() + `${value}`);
  }

  resetOperation() {
    this.operation = false;
  }
}

let calc = new Calculator();

console.log(test);

let numbers = document.getElementById("1");

let output = document.getElementById("output");

const handleInput = (e) => {
  console.log(e.target.id);
  switch (e.target.id) {
    case "AC":
      calc.reset();
      console.log("??????");
      calc.operation = false;
      break;
    case ":":
      calc.operator = ":";
      calc.operation = true;
      break;
    case "*":
      calc.operator = "*";
      calc.operation = true;
      break;
    case "+":
      calc.operator = "+";
      calc.operation = true;
      break;
    case "-":
      calc.operator = "-";
      calc.operation = true;
      break;

    default:
      if (calc.operation == true) {
        switch (calc.operator) {
          case "+":
            calc.plus(e.target.value);
            calc.resetOperation();

            break;
          case "-":
            calc.minus(e.target.value);
            calc.resetOperation();

            break;
          case "*":
            calc.multiple(e.target.value);
            calc.resetOperation();

            break;
          case "/":
            calc.divide(e.target.value);
            calc.resetOperation();

            break;
        }
      } else {
        calc.bind(e.target.value);
      }
  }

  output.innerText = calc.total;
};

for (let value of CalculatorOperations) {
  let operation = document.getElementById(value.toString());
  console.log(operation);
  operation.addEventListener("click", handleInput);
}
