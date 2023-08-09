import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

import { useSelector, useDispatch } from "react-redux";
import {
  updateExpression,
  calculateResult,
  clearExpression,
  deleteExpression,
} from "../redux/action";
import { CalculatorState } from "../redux/reducer";

const styles = {
  container: "",
  input: "",
  buttonBox: "flex",
};

const Calculator: React.FC = () => {
  const expression = useSelector((state: CalculatorState) => state.expression);

  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearExpression());
  };

  const handleButtonClick = (value: string) => {
    dispatch(updateExpression(expression + value));
  };
  const handleDeleteANumber = () => {
    dispatch(deleteExpression());
  };

  const handleCalculate = () => {
    dispatch(calculateResult());
  };
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <Input text={expression} />
      </div>
      <div className={styles.buttonBox}>
        <Button symbol="(" handleClick={handleButtonClick} color="#f2a33c" />
        <Button symbol=")" handleClick={handleButtonClick} color="#f2a33c" />
        <Button symbol="%" handleClick={handleButtonClick} color="#f2a33c" />
        <Button symbol="AC" handleClick={handleDeleteANumber} color="#f2a33c" />
      </div>
      <div className={styles.buttonBox}>
        <Button symbol="7" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="8" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="9" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="/" handleClick={handleButtonClick} color="#f2a33c" />
      </div>
      <div className={styles.buttonBox}>
        <Button symbol="4" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="5" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="6" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="*" handleClick={handleButtonClick} color="#f2a33c" />
      </div>
      <div className={styles.buttonBox}>
        <Button symbol="1" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="2" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="3" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="+" handleClick={handleButtonClick} color="#f2a33c" />
      </div>
      <div className={styles.buttonBox}>
        <Button symbol="0" handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="." handleClick={handleButtonClick} color="#5a5a5a" />
        <Button symbol="=" handleClick={handleCalculate} color="#5a5a5a" />
        <Button symbol="-" handleClick={handleButtonClick} color="#f2a33c" />
      </div>

      <div className={styles.buttonBox}>
        <Button symbol="Clear" handleClick={handleClear} color="red" />
      </div>
    </div>
  );
};
export default Calculator;

// #endregion
