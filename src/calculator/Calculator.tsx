import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "./style.css";

// import "./index.js";

type Props = {};

function Calculator_({}: Props) {
  useEffect(() => {
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
  }, []);

  return (
    <div>
      <h1>calculator</h1>
      <div className="calculator">
        <div className="calculator-output-container">
          <div id="output" className="calculator-output-box">
            0
          </div>
        </div>
        <div className="calculator-input">
          <ul className="calculator-numbers">
            <li id="7" value="7">
              7
            </li>
            <li id="8" value="8">
              8
            </li>
            <li id="9" value="9">
              9
            </li>
            <li id="4" value="4">
              4
            </li>
            <li id="5" value="5">
              5
            </li>
            <li id="6" value="6">
              6
            </li>
            <li id="1" value="1">
              1
            </li>
            <li id="2" value="2">
              2
            </li>
            <li id="3" value="3">
              3
            </li>
            <li id="0" value="0">
              0
            </li>
            <li>.</li>
            <li>=</li>
          </ul>
          <ul className="calculator-operations">
            <li id="AC">AC</li>
            <li id=":">:</li>
            <li id="*">*</li>
            <li id="+">+</li>
            <li id="-">-</li>
          </ul>
        </div>
      </div>
      <Helmet>{/* <script src="./index.js"></script> */}</Helmet>
    </div>
  );
}

export default Calculator_;
