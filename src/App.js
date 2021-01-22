import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "../src/components/display/";
import { numberButtons, operatorButtons } from "../src/buttonData/buttonData";
import Button from "./components/button";

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [display, setDisplay] = useState("");
  const [enterSecondNumber, setEnterSecondNumber] = useState(false);

  function captureSum(data) {
    if (data === "ce") {
      clear();
    } else if (data === "=") {
      setSecondNumber(display);
      sumNumbers(firstNumber, secondNumber, operator);
    } else if (Number.isInteger(data)) {
      if (display.length < 14) {
        if (enterSecondNumber === false) {
          setDisplay(display + data);
        } else if (enterSecondNumber === true) {
          setDisplay(display + data);
        }
      }
    } else {
      setFirstNumber(display);
      setOperator(data);
      setEnterSecondNumber(true);
      setDisplay("");
    }
  }

  useEffect(() => {
    sumNumbers(firstNumber, secondNumber, operator);
  }, [secondNumber]);

  function sumNumbers(firstNum, secondNum, operatorType) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let total = null;
    if (firstNumber !== null && secondNumber !== null && operator !== null) {
      if (operatorType === "+") {
        total = firstNum + secondNum;
      }

      if (operatorType === "-") {
        total = firstNum - secondNum;
      }

      if (operatorType === "*") {
        total = firstNum * secondNum;
      }
      console.log(total);
      if (operatorType === "/") {
        total = firstNum / secondNum;
      }

      if (total.length > 14) {
        total = Number.parseFloat(total).toExponential(2);
        setDisplay(total);
      }

      if (total % 1 === 0) {
        setDisplay(total);
      } else setDisplay(total.toFixed(2));
    }
  }

  function clear() {
    setFirstNumber(null);
    setSecondNumber(null);
    setOperator(null);
    setDisplay("");
  }

  return (
    <main>
      <section className="calculator-container">
        <section className="display">
          <Display output={display} />
        </section>
        <section className="components-container">
          <section className="left-container">
            <Button
              buttonType={"number-button"}
              buttonData={numberButtons}
              handleClick={captureSum}
            />
          </section>
          <section className="right-container">
            <Button
              buttonType={"operator-button"}
              buttonData={operatorButtons}
              handleClick={captureSum}
            />
          </section>
        </section>
      </section>
    </main>
  );
}

export default App;
