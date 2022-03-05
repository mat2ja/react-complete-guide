import React, { useRef, useState } from 'react';
import Input from '../../UI/Input.js';

import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const input = {
    id: `meals_${id}`,
    type: 'number',
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };

  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value.trim();
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input input={input} ref={amountInputRef} />
      <button>Add +</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
